import React from 'react';
import { TrendingUp, Clock, AlertTriangle, DollarSign } from 'lucide-react';

interface MetricsGridProps {
  timeframe: 'daily' | 'weekly' | 'monthly';
  dateRange: { start: string; end: string };
}

export function MetricsGrid({ timeframe, dateRange }: MetricsGridProps) {
  const metrics = [
    {
      title: 'Total Deliveries',
      value: '156',
      trend: '+12%',
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    },
    {
      title: 'On-Time Rate',
      value: '94.2%',
      trend: '+2.1%',
      icon: <Clock className="h-6 w-6 text-green-600" />,
    },
    {
      title: 'Delayed Orders',
      value: '8',
      trend: '-3%',
      icon: <AlertTriangle className="h-6 w-6 text-yellow-600" />,
    },
    {
      title: 'Total Cost',
      value: '$12,450',
      trend: '-8%',
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div key={metric.title} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{metric.title}</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">{metric.value}</p>
              <p className="mt-2 text-sm text-green-600">{metric.trend}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">{metric.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}