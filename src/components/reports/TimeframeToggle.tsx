import React from 'react';

interface TimeframeToggleProps {
  selected: 'daily' | 'weekly' | 'monthly';
  onChange: (timeframe: 'daily' | 'weekly' | 'monthly') => void;
}

export function TimeframeToggle({ selected, onChange }: TimeframeToggleProps) {
  const timeframes = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
  ] as const;

  return (
    <div className="flex rounded-md shadow-sm" role="group">
      {timeframes.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          className={`
            px-4 py-2 text-sm font-medium
            ${value === selected
              ? 'bg-green-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
            }
            ${value === 'daily' ? 'rounded-l-md' : ''}
            ${value === 'monthly' ? 'rounded-r-md' : ''}
            border border-gray-200
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:z-10
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}