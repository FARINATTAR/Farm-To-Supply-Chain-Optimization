import React from 'react';
import { MapPin } from 'lucide-react';

export function DeliveryMap() {
  return (
    <div className="relative h-96 bg-gray-100 rounded-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto" />
          <p className="mt-2 text-sm text-gray-500">Interactive map placeholder</p>
          <p className="text-xs text-gray-400">Integration with mapping service required</p>
        </div>
      </div>
    </div>
  );
}