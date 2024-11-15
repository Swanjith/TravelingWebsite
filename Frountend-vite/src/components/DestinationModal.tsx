import React from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon, MapPinIcon, CalendarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';
import { Destination } from '../types/destination';

interface DestinationModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DestinationModal({ destination, isOpen, onClose }: DestinationModalProps) {
  if (!destination) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-3xl rounded-xl bg-white">
            <div className="relative">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full bg-white/80 p-2 hover:bg-white"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Dialog.Title className="text-2xl font-bold text-gray-900">
                    {destination.name}
                  </Dialog.Title>
                  <div className="flex items-center mt-1">
                    <MapPinIcon className="h-5 w-5 text-gray-400" />
                    <span className="ml-1 text-gray-500">{destination.country}</span>
                  </div>
                </div>
                <div className="flex items-center bg-indigo-50 px-3 py-1 rounded-full">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 font-medium">{destination.rating}</span>
                </div>
              </div>

              <p className="mt-4 text-gray-600">{destination.description}</p>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Must-Visit Attractions</h3>
                  <ul className="mt-2 space-y-2">
                    {destination.attractions.map((attraction) => (
                      <li key={attraction} className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 mr-2"></span>
                        {attraction}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 text-gray-400" />
                      <h3 className="ml-2 font-semibold text-gray-900">Best Time to Visit</h3>
                    </div>
                    <p className="mt-1 text-gray-600">{destination.bestTimeToVisit}</p>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
                      <h3 className="ml-2 font-semibold text-gray-900">Average Daily Costs</h3>
                    </div>
                    <dl className="mt-1 space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <dt>Budget:</dt>
                        <dd>{destination.averageCost.budget}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>Mid-Range:</dt>
                        <dd>{destination.averageCost.medium}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>Luxury:</dt>
                        <dd>{destination.averageCost.luxury}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}