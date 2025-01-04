import React from 'react';
import { BarChart3 } from 'lucide-react';

interface PerformanceChartsProps {
  timeframe: 'daily' | 'weekly' | 'monthly';
  dateRange: { start: string; end: string };
}

export function PerformanceCharts({ timeframe, dateRange }: PerformanceChartsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Performance</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-gray-400 mx-auto" />
            <p className="mt-2 text-sm text-gray-500">Performance chart placeholder</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Analysis</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-gray-400 mx-auto" />
            <p className="mt-2 text-sm text-gray-500">Cost analysis chart placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}