export interface Route {
  from: string;
  to: string;
  departure: string;
  return?: string;
}

export interface BookingFormData {
  tripType: 'one-way' | 'round' | 'multi';
  routes: Route[];
}

export interface City {
  value: string;
  label: string;
}