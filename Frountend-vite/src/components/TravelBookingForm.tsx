import { useState } from 'react';
import { RouteSection } from './RouteSection';
import { TripType, Route } from '@/types/booking';

export const TravelBookingForm = () => {
  const [tripType, setTripType] = useState<TripType>('one-way');
  const [routes, setRoutes] = useState(1);

  const handleTripTypeChange = (type: TripType) => {
    setTripType(type);
    setRoutes(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData: Route[] = Array.from(document.querySelectorAll('.route-section')).map(section => {
      const from = (section.querySelector(`select[id^="from-"]`) as HTMLSelectElement).value;
      const to = (section.querySelector(`select[id^="to-"]`) as HTMLSelectElement).value;
      const departure = (section.querySelector(`input[id^="departure-"]`) as any)._flatpickr.selectedDates[0];
      const returnInput = section.querySelector(`input[id^="return-"]`) as any;
      const returnDate = returnInput?._flatpickr?.selectedDates[0];

      return {
        from,
        to,
        departure: departure?.toISOString().split('T')[0],
        ...(returnDate && { return: returnDate.toISOString().split('T')[0] })
      };
    });

    console.log({ tripType, routes: formData });
  };

  return (
    <div className="booking-form">
      <div className="form-header">
        <h1>Book Your Journey</h1>
        <p>Search flights and explore the world</p>
      </div>

      <div className="trip-types">
        {(['one-way', 'round', 'multi'] as const).map(type => (
          <button
            key={type}
            className={`trip-type-btn ${tripType === type ? 'active' : ''}`}
            onClick={() => handleTripTypeChange(type)}
          >
            {type === 'one-way' ? 'One-Way Trip' :
              type === 'round' ? 'Round Trip' : 'Multi-City'}
          </button>
        ))}
      </div>

      <div id="routes-container">
        {tripType === 'multi' ? (
          <>
            <div className="multi-city-routes">
              {Array.from({ length: routes }, (_, i) => (
                <RouteSection
                  key={i}
                  index={i}
                  tripType={tripType}
                  isRemovable={i > 0}
                  onRemove={() => setRoutes(prev => prev - 1)}
                />
              ))}
            </div>
            {routes < 5 && (
              <button className="add-route-btn" onClick={() => setRoutes(prev => prev + 1)}>
                <span>Add Another City</span>
              </button>
            )}
          </>
        ) : (
          <RouteSection index={0} tripType={tripType} />
        )}
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Search Flights
      </button>
    </div>
  );
};