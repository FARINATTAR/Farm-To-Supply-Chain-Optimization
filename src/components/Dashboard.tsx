import React from 'react';
import { StatCard } from './StatCard';
import { Truck, Users, Warehouse, TrendingUp } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Logistics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Farms"
          value={42}
          icon={<Warehouse className="h-6 w-6 text-green-600" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Active Consumers"
          value={156}
          icon={<Users className="h-6 w-6 text-green-600" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Deliveries Today"
          value={24}
          icon={<Truck className="h-6 w-6 text-green-600" />}
        />
        <StatCard
          title="Cost Savings"
          value="$2,845"
          icon={<TrendingUp className="h-6 w-6 text-green-600" />}
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {/* Placeholder for orders list */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Order #{1000 + i}</p>
                  <p className="text-sm text-gray-600">Farm: Green Acres</p>
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                  In Transit
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Route Optimization</h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
            {/* Placeholder for map */}
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Interactive Map</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}