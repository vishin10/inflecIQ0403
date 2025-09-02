/*
  # Add sample vehicles

  1. Changes
    - Insert sample vehicles into the vehicles table
*/

INSERT INTO vehicles (title, make, model, year, price, mileage, transmission, fuel_type, description, features, images)
VALUES
  (
    '2023 BMW M3 Competition', 
    'BMW', 
    'M3', 
    2023, 
    89999, 
    1500, 
    'automatic',
    'gasoline',
    'Stunning BMW M3 Competition in Alpine White. Features include carbon fiber trim, M Sport seats, and the latest iDrive system.',
    ARRAY['Leather Interior', 'Navigation System', 'Bluetooth', 'Backup Camera', 'Heated Seats'],
    ARRAY['https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg']
  ),
  (
    '2022 Mercedes-Benz S580', 
    'Mercedes-Benz', 
    'S-Class', 
    2022, 
    125000, 
    8500, 
    'automatic',
    'gasoline',
    'Luxurious S-Class featuring all the latest technology and comfort features Mercedes has to offer.',
    ARRAY['Premium Sound System', 'Panoramic Roof', 'Massage Seats', 'Night Vision', 'Head-up Display'],
    ARRAY['https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg']
  ),
  (
    '2023 Porsche 911 GT3', 
    'Porsche', 
    '911', 
    2023, 
    189999, 
    500, 
    'manual',
    'gasoline',
    'Brand new Porsche 911 GT3 in Guards Red. Track-ready performance with daily driver comfort.',
    ARRAY['Sport Chrono Package', 'Carbon Ceramic Brakes', 'Sport Exhaust', 'Bucket Seats', 'Track Package'],
    ARRAY['https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg']
  ),
  (
    '2022 Tesla Model S Plaid', 
    'Tesla', 
    'Model S', 
    2022, 
    129999, 
    2500, 
    'automatic',
    'electric',
    'Top-of-the-line Tesla Model S Plaid with ludicrous mode and full self-driving capability.',
    ARRAY['Autopilot', 'Premium Interior', 'Glass Roof', 'Premium Sound', '21" Wheels'],
    ARRAY['https://images.pexels.com/photos/7516447/pexels-photo-7516447.jpeg']
  );