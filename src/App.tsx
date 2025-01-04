import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { FarmsPage } from './pages/FarmsPage';
import { ConsumersPage } from './pages/ConsumersPage';
import { TransportPage } from './pages/TransportPage';
import { TrackingPage } from './pages/TrackingPage';
import { ReportsPage } from './pages/ReportsPage';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/farms" element={<FarmsPage />} />
            <Route path="/consumers" element={<ConsumersPage />} />
            <Route path="/transport" element={<TransportPage />} />
            <Route path="/tracking" element={<TrackingPage />} />
            <Route path="/reports" element={<ReportsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}