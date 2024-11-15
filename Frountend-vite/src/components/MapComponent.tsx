// MapComponent.js
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

const apiKey = '3lyp0g8zoUgQ65oEpnkToDaftiOAZDCXQKbSfqNPberQmHntU1bxoUrp';

export default function MapComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Custom Leaflet icon
    const markerIcon = new L.Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    // Fetch location, weather, and photos based on search term
    const handleSearch = async () => {
        if (!searchTerm) return alert('Please enter a location');

        try {
            const geoResponse = await axios.get(`https://nominatim.openstreetmap.org/search?q=${searchTerm}&format=json&limit=1`);
            if (!geoResponse.data.length) return alert('Location not found!');

            const { lat, lon, display_name } = geoResponse.data[0];
            setLocation({ lat, lon, display_name });

            const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
            setWeather(weatherResponse.data.current_weather?.temperature || 'N/A');

            const photoResponse = await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm} historic places OR festivals&per_page=5`, {
                headers: { Authorization: apiKey },
            });
            setPhotos(photoResponse.data.photos.map(photo => photo.src.large));
            setCurrentImageIndex(0);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('An error occurred. Please try again.');
        }
    };

    // Image slideshow
    useEffect(() => {
        if (photos.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % photos.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [photos]);

    return (
        <div className="relative h-screen w-full">
            {/* Map container */}
            <MapContainer center={[20, 0]} zoom={2} className="h-full w-full">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {location && (
                    <Marker position={[location.lat, location.lon]} icon={markerIcon}>
                        <Popup>
                            <h2 className="font-bold">{location.display_name}</h2>
                            <p>Weather: {weather}°C</p>
                            <div className="w-full h-40 overflow-hidden relative">
                                {photos.length > 0 ? (
                                    <img
                                        src={photos[currentImageIndex]}
                                        alt="Historic or festival"
                                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                                    />
                                ) : (
                                    <p>No photos found.</p>
                                )}
                            </div>
                        </Popup>
                    </Marker>
                )}
            </MapContainer>

            {/* Search bar container */}
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-lg flex items-center z-10">
                <input
                    type="text"
                    placeholder="Enter a location (e.g., Paris)"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="ml-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
                >
                    Search
                </button>
            </div>
        </div>
    );
}














