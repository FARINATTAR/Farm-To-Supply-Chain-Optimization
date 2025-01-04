import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { DeliveryStatus } from '../types';
import { DeliveryTable } from '../components/tracking/DeliveryTable';
import { DeliveryMap } from '../components/tracking/DeliveryMap';
import { SearchFilter } from '../components/tracking/SearchFilter';

export function TrackingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<DeliveryStatus | ''>('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Delivery Tracking</h1>
        <button 
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => console.log('Refresh tracking data')}
        >
          Refresh Status
        </button>
      </div>

      <SearchFilter 
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        onSearchChange={setSearchQuery}
        onStatusChange={setStatusFilter}
      />

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <DeliveryMap />
      </div>

      <div className="mt-8">
        <DeliveryTable 
          searchQuery={searchQuery}
          statusFilter={statusFilter}
        />
      </div>
    </div>
  );
}