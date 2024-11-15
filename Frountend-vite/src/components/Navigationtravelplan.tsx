import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hotel, Train, Car, Bus, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const navItems = [
  { icon: Plane, label: 'Flights' },
  { icon: Hotel, label: 'Hotels' },
  { icon: Train, label: 'Trains' },
  { icon: Car, label: 'Cabs' },
  { icon: Bus, label: 'Buses' },
  { icon: FileText, label: 'Manage Booking' },
];

export function Navigation() {
  return (
    <NavigationMenu className="mt-4">
      <NavigationMenuList className="flex gap-6">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button variant="ghost" className="flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            </motion.div>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}