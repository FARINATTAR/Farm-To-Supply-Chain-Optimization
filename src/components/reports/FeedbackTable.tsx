import React from 'react';
import { mockFeedback } from '../../utils/mockData';

interface FeedbackTableProps {
  timeframe: 'daily' | 'weekly' | 'monthly';
  dateRange: { start: string; end: string };
}

export function FeedbackTable({ timeframe, dateRange }: FeedbackTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Delivery Feedback</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Delivery ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Issues Reported
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockFeedback.map((feedback) => (
              <tr key={feedback.deliveryId}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {feedback.deliveryId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {feedback.issuesReported}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      feedback.resolutionStatus === 'resolved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {feedback.resolutionStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}