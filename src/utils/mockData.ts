import { Delivery, DeliveryFeedback } from '../types';

export const mockDeliveries: Delivery[] = [
  {
    id: 'DEL-001',
    driverName: 'John Smith',
    currentLocation: 'Downtown Market',
    status: 'in-transit',
    eta: '14:30',
  },
  {
    id: 'DEL-002',
    driverName: 'Sarah Johnson',
    currentLocation: 'Green Acres Farm',
    status: 'pending',
    eta: '15:45',
  },
  {
    id: 'DEL-003',
    driverName: 'Mike Wilson',
    currentLocation: 'Central Distribution',
    status: 'delivered',
    eta: '12:00',
  },
];

export const mockFeedback: DeliveryFeedback[] = [
  {
    deliveryId: 'DEL-001',
    issuesReported: 'Slight delay due to traffic',
    resolutionStatus: 'resolved',
  },
  {
    deliveryId: 'DEL-002',
    issuesReported: 'Package temperature above threshold',
    resolutionStatus: 'pending',
  },
  {
    deliveryId: 'DEL-003',
    issuesReported: 'None',
    resolutionStatus: 'resolved',
  },
];