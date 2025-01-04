import React from 'react';

interface DateRangeFilterProps {
  value: { start: string; end: string };
  onChange: (range: { start: string; end: string }) => void;
}

export function DateRangeFilter({ value, onChange }: DateRangeFilterProps) {
  return (
    <div className="flex items-center gap-4">
      <div>
        <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="date"
          id="start-date"
          value={value.start}
          onChange={(e) => onChange({ ...value, start: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
          End Date
        </label>
        <input
          type="date"
          id="end-date"
          value={value.end}
          onChange={(e) => onChange({ ...value, end: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
        />
      </div>
    </div>
  );
}