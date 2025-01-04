import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { MetricsGrid } from '../components/reports/MetricsGrid';
import { PerformanceCharts } from '../components/reports/PerformanceCharts';
import { FeedbackTable } from '../components/reports/FeedbackTable';
import { DateRangeFilter } from '../components/reports/DateRangeFilter';
import { TimeframeToggle } from '../components/reports/TimeframeToggle';

export function ReportsPage() {
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Performance Reports</h1>
        <button
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => console.log('Export reports')}
        >
          <Download className="h-5 w-5 mr-2" />
          Export Report
        </button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <TimeframeToggle selected={timeframe} onChange={setTimeframe} />
        <DateRangeFilter value={dateRange} onChange={setDateRange} />
      </div>

      <MetricsGrid timeframe={timeframe} dateRange={dateRange} />
      
      <div className="mt-8">
        <PerformanceCharts timeframe={timeframe} dateRange={dateRange} />
      </div>

      <div className="mt-8">
        <FeedbackTable timeframe={timeframe} dateRange={dateRange} />
      </div>
    </div>
  );
}