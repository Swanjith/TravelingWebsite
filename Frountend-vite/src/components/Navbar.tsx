import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Plan Your Trip', href: '/plan' },
];

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
              Magellan Expedition
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="text-gray-500 p-2 rounded-md hover:bg-gray-200 focus:outline-none">
                  Menu
                </Button>
              </PopoverTrigger>
              <PopoverContent className="space-y-2 p-4 bg-white shadow-lg rounded-lg">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md p-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </PopoverContent>
            </Popover>
          </div>

          {/* Get Started Button */}
          <Button
            onClick={() => navigate('/signup')}
            className="hidden sm:block text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700  rounded-md transition duration-300"
          >
            Get Started
          </Button>
          <Button
            onClick={() => navigate('/login')}
            className="hidden sm:block text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
