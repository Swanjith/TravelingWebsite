export type TripType = 'one-way' | 'round' | 'multi';

export interface Route {
  from: string;
  to: string;
  departure: string;
  return?: string;
}

export interface City {
  value: string;
  label: string;
}