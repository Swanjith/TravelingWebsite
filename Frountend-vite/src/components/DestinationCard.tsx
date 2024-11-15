import React from 'react';
import { Destination } from '../types/destination';
import { StarIcon } from '@heroicons/react/20/solid';

interface DestinationCardProps {
  destination: Destination;
  onClick: (destination: Destination) => void;
}

export default function DestinationCard({ destination, onClick }: DestinationCardProps) {
  return (
    <div
      className="overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg cursor-pointer"
      onClick={() => onClick(destination)}
    >
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-48 w-full object-cover"
        />
        <div className="absolute top-2 right-2 flex items-center bg-white/90 px-2 py-1 rounded-full">
          <StarIcon className="h-4 w-4 text-yellow-400" />
          <span className="ml-1 text-sm font-medium">{destination.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{destination.country}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {destination.category.map((cat) => (
            <span
              key={cat}
              className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700"
            >
              {cat}
            </span>
          ))}
        </div>
        <p className="mt-2 text-gray-600 line-clamp-2">{destination.description}</p>
      </div>
    </div>
  );
}