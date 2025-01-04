import React from 'react';
import { Search } from 'lucide-react';
import { DeliveryStatus } from '../../types';

interface SearchFilterProps {
  searchQuery: string;
  statusFilter: DeliveryStatus | '';
  onSearchChange: (value: string) => void;
  onStatusChange: (value: DeliveryStatus | '') => void;
}

export function SearchFilter({
  searchQuery,
  statusFilter,
  onSearchChange,
  onStatusChange,
}: SearchFilterProps) {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          placeholder="Search by Delivery ID or Driver"
        />
      </div>
      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value as DeliveryStatus | '')}
        className="block w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
      >
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-transit">In Transit</option>
        <option value="delivered">Delivered</option>
      </select>
    </div>
  );
}