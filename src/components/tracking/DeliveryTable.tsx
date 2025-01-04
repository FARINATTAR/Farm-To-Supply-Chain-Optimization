import React from 'react';
import { mockDeliveries } from '../../utils/mockData';
import { Delivery } from '../../types';

interface DeliveryTableProps {
  searchQuery: string;
  statusFilter: string;
}

export function DeliveryTable({ searchQuery, statusFilter }: DeliveryTableProps) {
  const filteredDeliveries = mockDeliveries.filter(delivery => {
    const matchesSearch = delivery.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         delivery.driverName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = !statusFilter || delivery.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Delivery ID', 'Driver Name', 'Current Location', 'Status', 'ETA'].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredDeliveries.map((delivery) => (
            <DeliveryRow key={delivery.id} delivery={delivery} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DeliveryRow({ delivery }: { delivery: Delivery }) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    'in-transit': 'bg-blue-100 text-blue-800',
    delivered: 'bg-green-100 text-green-800',
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {delivery.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {delivery.driverName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {delivery.currentLocation}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[delivery.status]}`}>
          {delivery.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {delivery.eta}
      </td>
    </tr>
  );
}