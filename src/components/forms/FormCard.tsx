import React from 'react';

interface FormCardProps {
  title: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

export function FormCard({ title, children, onSubmit }: FormCardProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <form onSubmit={onSubmit}>
          {children}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}