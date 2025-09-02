/*
  # Car Dealership Schema

  1. New Tables
    - vehicles
      - id (uuid, primary key)
      - title (text)
      - make (text)
      - model (text)
      - year (integer)
      - price (numeric)
      - mileage (numeric)
      - description (text)
      - images (text[])
      - status (text)
      - features (text[])
      - transmission (text)
      - fuel_type (text)
      - created_at (timestamptz)
      - updated_at (timestamptz)

  2. Security
    - Enable RLS on vehicles table
    - Add policies for public read access
    - Add policies for admin write access
*/

CREATE TABLE vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  make text NOT NULL,
  model text NOT NULL,
  year integer NOT NULL,
  price numeric NOT NULL,
  mileage numeric NOT NULL,
  description text,
  images text[] DEFAULT '{}',
  status text DEFAULT 'available',
  features text[] DEFAULT '{}',
  transmission text NOT NULL,
  fuel_type text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON vehicles
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users (admin) full access
CREATE POLICY "Allow authenticated users full access"
  ON vehicles
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);