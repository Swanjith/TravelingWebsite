import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your Next Adventure Awaits
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Discover amazing destinations and plan your perfect trip with our easy-to-use travel platform.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/destinations"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Explore Destinations
          </Link>
          <Link
            to="/plan"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Plan Your Trip <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>


    </div>
  );
}