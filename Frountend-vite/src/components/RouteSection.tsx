import { useEffect } from 'react';
import flatpickr from 'flatpickr';
import { cities } from '@/data/cities';
import { TripType } from '@/types/booking';

interface RouteSectionProps {
  index: number;
  isRemovable?: boolean;
  tripType: TripType;
  onRemove?: () => void;
}

export const RouteSection = ({ index, isRemovable, tripType, onRemove }: RouteSectionProps) => {
  useEffect(() => {
    const departureInput = document.getElementById(`departure-${index}`);
    const returnInput = document.getElementById(`return-${index}`);

    if (departureInput) {
      const departurePicker = flatpickr(departureInput, {
        minDate: 'today',
        dateFormat: 'Y-m-d'
      });

      if (returnInput) {
        flatpickr(returnInput, {
          minDate: 'today',
          dateFormat: 'Y-m-d'
        });
      }

      return () => {
        departurePicker.destroy();
        if (returnInput) {
          (returnInput as any)._flatpickr?.destroy();
        }
      };
    }
  }, [index, tripType]);

  return (
    <div className="route-section">
      <div className="route-inputs">
        <div className="input-group">
          <label htmlFor={`from-${index}`}>From</label>
          <select id={`from-${index}`}>
            <option value="">Select City</option>
            {cities.map(city => (
              <option key={city.value} value={city.value}>{city.label}</option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor={`to-${index}`}>To</label>
          <select id={`to-${index}`}>
            <option value="">Select City</option>
            {cities.map(city => (
              <option key={city.value} value={city.value}>{city.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="date-inputs">
        <div className="input-group">
          <label htmlFor={`departure-${index}`}>Departure Date</label>
          <input type="text" id={`departure-${index}`} className="flatpickr-input" placeholder="Select date" />
        </div>
        {tripType === 'round' && (
          <div className="input-group">
            <label htmlFor={`return-${index}`}>Return Date</label>
            <input type="text" id={`return-${index}`} className="flatpickr-input" placeholder="Select date" />
          </div>
        )}
      </div>
      {isRemovable && (
        <button className="remove-route-btn" onClick={onRemove}>
          Remove Route
        </button>
      )}
    </div>
  );
};