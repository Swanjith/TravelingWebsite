import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function SearchBar() {
  return (
    <div className="mt-4 flex gap-4">
      <Input
        placeholder="Search destinations, hotels & more"
        className="flex-grow"
      />
      <Button className="flex items-center gap-2">
        <Search className="h-4 w-4" />
        Search
      </Button>
    </div>
  );
}