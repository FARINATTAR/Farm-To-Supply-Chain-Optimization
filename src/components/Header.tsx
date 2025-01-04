import React from 'react';
import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Truck className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">FarmConnect</span>
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              Home
            </Link>
            <Link to="/farms" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Farms
            </Link>
            <Link to="/consumers" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Consumers
            </Link>
            <Link to="/transport" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Transport
            </Link>
            <Link to="/tracking" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Tracking
            </Link>
            <Link to="/reports" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Reports
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}