export interface Vehicle {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  description: string;
  images: string[];
  status: 'available' | 'sold' | 'reserved';
  features: string[];
  transmission: 'automatic' | 'manual';
  fuelType: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}