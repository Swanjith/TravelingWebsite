import { useState } from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigationtravelplan';
import { SearchBar } from '@/components/SearchBar';

interface TripDetails {
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budget: string;
}

export default function TripPlanner() {
  const [tripDetails, setTripDetails] = useState<TripDetails>({
    destination: '',
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: format(new Date(), 'yyyy-MM-dd'),
    travelers: 1,
    budget: 'medium',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle trip planning logic here
    console.log('Trip details:', tripDetails);
  };

  return (<>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="border-b"
    >
      <div className="container mx-auto px-4 py-4">
        <Header />
        <Navigation />
        <SearchBar />
      </div>
    </motion.nav>
    <div className="mx-auto max-w-2xl">

      <h2 className="text-3xl font-bold tracking-tight text-gray-900">Plan Your Trip</h2>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={tripDetails.destination}
            onChange={(e) => setTripDetails({ ...tripDetails, destination: e.target.value })}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={tripDetails.startDate}
              onChange={(e) => setTripDetails({ ...tripDetails, startDate: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={tripDetails.endDate}
              onChange={(e) => setTripDetails({ ...tripDetails, endDate: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="travelers" className="block text-sm font-medium text-gray-700">
            Number of Travelers
          </label>
          <input
            type="number"
            id="travelers"
            min="1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={tripDetails.travelers}
            onChange={(e) => setTripDetails({ ...tripDetails, travelers: parseInt(e.target.value) })}
            required
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
            Budget Range
          </label>
          <select
            id="budget"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={tripDetails.budget}
            onChange={(e) => setTripDetails({ ...tripDetails, budget: e.target.value })}
            required
          >
            <option value="budget">Budget</option>
            <option value="medium">Medium</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Plan My Trip
        </button>
      </form>
    </div>
  </>
  );
}