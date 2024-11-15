import { useState, useMemo } from 'react';
import { destinations } from '@/data/detinations';
import CategoryFilter from '@/components/CategoryFilter';
import DestinationCard from '@/components/DestinationCard';
import DestinationModal from '@/components/DestinationModal';
import type { Destination } from '@/types/destination';

export default function Destinations() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

    const allCategories = useMemo(() => {
        const categories = new Set<string>();
        destinations.forEach(destination => {
            destination.category.forEach(cat => categories.add(cat));
        });
        return Array.from(categories);
    }, []);

    const filteredDestinations = useMemo(() => {
        return destinations.filter(destination => {
            const matchesSearch =
                destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                destination.country.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategories =
                selectedCategories.length === 0 ||
                selectedCategories.some(cat => destination.category.includes(cat));

            return matchesSearch && matchesCategories;
        });
    }, [searchTerm, selectedCategories]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    return (
        <div>
            <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Explore Destinations
                </h2>
                <div className="mt-4 space-y-4">
                    <input
                        type="text"
                        placeholder="Search destinations..."
                        className="w-full max-w-md rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <CategoryFilter
                        categories={allCategories}
                        selectedCategories={selectedCategories}
                        onCategoryChange={handleCategoryChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredDestinations.map((destination) => (
                    <DestinationCard
                        key={destination.id}
                        destination={destination}
                        onClick={setSelectedDestination}
                    />
                ))}
            </div>

            <DestinationModal
                destination={selectedDestination}
                isOpen={!!selectedDestination}
                onClose={() => setSelectedDestination(null)}
            />
        </div>
    );
}