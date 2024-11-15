import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD'];
const languages = ['English', 'Spanish', 'French', 'German', 'Japanese'];

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <motion.div
        className="text-2xl font-bold"
        whileHover={{ scale: 1.05 }}
      >
        TravelHub
      </motion.div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Currency
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {currencies.map((currency) => (
              <DropdownMenuItem key={currency}>
                {currency}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <Languages className="h-4 w-4" />
              Language
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {languages.map((language) => (
              <DropdownMenuItem key={language}>
                {language}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}