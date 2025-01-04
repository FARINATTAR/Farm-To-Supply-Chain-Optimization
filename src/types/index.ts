export interface Farm {
  id: string;
  name: string;
  location: string;
  produceTypes: string[];
  quantities: Record<string, number>;
}

export interface Consumer {
  id: string;
  name: string;
  location: string;
  orders: Order[];
}

export interface Order {
  id: string;
  produceType: string;
  quantity: number;
  status: 'pending' | 'in-transit' | 'delivered';
}

export interface Vehicle {
  id: string;
  type: string;
  capacity: number;
  costPerKm: number;
}

export interface Route {
  id: string;
  vehicleId: string;
  stops: string[];
  estimatedTime: number;
  totalDistance: number;
  totalCost: number;
}

export type DeliveryStatus = 'pending' | 'in-transit' | 'delivered';

export interface Delivery {
  id: string;
  driverName: string;
  currentLocation: string;
  status: DeliveryStatus;
  eta: string;
}

export interface DeliveryFeedback {
  deliveryId: string;
  issuesReported: string;
  resolutionStatus: 'pending' | 'resolved';
}