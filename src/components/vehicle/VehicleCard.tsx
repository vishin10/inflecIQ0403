import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Calendar, Gauge, Fuel } from 'lucide-react';

interface VehicleCardProps {
  vehicle: {
    id: string;
    title: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    images: string[];
    transmission: string;
    fuelType: string;
    status: string;
  };
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const { id, title, price, year, mileage, images, transmission, fuelType, status } = vehicle;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={images[0] || 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg'}
          alt={title}
          className="w-full h-full object-cover"
        />
        {status !== 'available' && (
          <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 uppercase text-sm">
            {status}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          ${price.toLocaleString()}
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{year}</span>
          </div>
          <div className="flex items-center">
            <Gauge className="h-4 w-4 mr-1" />
            <span>{mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center">
            <Car className="h-4 w-4 mr-1" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center">
            <Fuel className="h-4 w-4 mr-1" />
            <span>{fuelType}</span>
          </div>
        </div>
        <Link
          to={`/vehicles/${id}`}
          className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}