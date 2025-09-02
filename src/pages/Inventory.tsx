import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import VehicleCard from '../components/vehicle/VehicleCard';
import { Vehicle } from '../types';
import { Filter, SortAsc } from 'lucide-react';

export default function Inventory() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'price' | 'year'>('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);

  useEffect(() => {
    fetchVehicles();
  }, [sortBy, sortOrder, priceRange, selectedMakes]);

  async function fetchVehicles() {
    try {
      let query = supabase
        .from('vehicles')
        .select('*')
        .eq('status', 'available')
        .gte('price', priceRange[0])
        .lte('price', priceRange[1]);

      if (selectedMakes.length > 0) {
        query = query.in('make', selectedMakes);
      }

      const { data, error } = await query.order(sortBy, { ascending: sortOrder === 'asc' });

      if (error) throw error;
      setVehicles(data || []);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    } finally {
      setLoading(false);
    }
  }

  const makes = Array.from(new Set(vehicles.map(v => v.make)));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Available Vehicles</h1>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <select
              className="border rounded-md px-3 py-1"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'price' | 'year')}
            >
              <option value="price">Price</option>
              <option value="year">Year</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <SortAsc className={`h-5 w-5 ${sortOrder === 'desc' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-full border rounded-md px-3 py-1"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full border rounded-md px-3 py-1"
                  placeholder="Max"
                />
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Make</h3>
              <div className="space-y-2">
                {makes.map((make) => (
                  <label key={make} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedMakes.includes(make)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedMakes([...selectedMakes, make]);
                        } else {
                          setSelectedMakes(selectedMakes.filter(m => m !== make));
                        }
                      }}
                      className="rounded"
                    />
                    {make}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          {loading ? (
            <div className="text-center text-gray-600">Loading vehicles...</div>
          ) : vehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">No vehicles found matching your criteria.</div>
          )}
        </div>
      </div>
    </div>
  );
}