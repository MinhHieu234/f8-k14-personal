create database "hotel_management";

CREATE TABLE guests (
                        guest_id SERIAL PRIMARY KEY,
                        first_name VARCHAR(50),
                        last_name VARCHAR(50),
                        email VARCHAR(100),
                        phone VARCHAR(100),
                        address TEXT,
                        date_of_birth DATE,
                        nationality VARCHAR(50),
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE rooms (
                       room_id SERIAL PRIMARY KEY,
                       room_number VARCHAR(10),
                       room_type VARCHAR(50),
                       price_per_night DECIMAL(10, 2),
                       max_occupancy INT,
                       is_available BOOLEAN DEFAULT TRUE,
                       floor INT,
                       description TEXT
);
CREATE TABLE bookings (
                          booking_id SERIAL PRIMARY KEY,
                          guest_id INT,
                          room_id INT,
                          check_in_date DATE,
                          check_out_date DATE,
                          total_price DECIMAL(12, 2),
                          booking_status VARCHAR(20),
                          payment_status VARCHAR(20),
                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- 5
ALTER TABLE guests ADD COLUMN loyalty_points INTEGER;

-- 6
ALTER TABLE bookings ADD COLUMN special_requests TEXT;

-- 7
ALTER TABLE rooms ADD COLUMN amenities TEXT[];

-- 8
ALTER TABLE rooms ADD COLUMN last_updated TIMESTAMP;

-- 9
ALTER TABLE bookings ADD COLUMN discount_percentage DECIMAL(5,2);
-- them khach hang
INSERT INTO guests (first_name, last_name, email, phone, address, date_of_birth, nationality, created_at)
VALUES
    ('MinMin', 'Nguyen', 'minminnyen@email.com', '0123456789', '123 Tran Duy Hung, Ha Noi', '2002-03-15', 'VN', CURRENT_TIMESTAMP),
    ('Linh', 'Tran', 'linhtran@email.com', '0987654321', '456 Le Loi, Hue', '1999-11-21', 'VN', CURRENT_TIMESTAMP),
    ('Tuan', 'Pham', 'tuantp@email.com', '0909090909', '789 Ly Thuong Kiet, HCM', '1988-01-05', 'VN', CURRENT_TIMESTAMP),
    ('Anna', 'Smith', 'anna.smith@email.com', '0122333444', '123 Baker Street, London', '1992-06-30', 'UK', CURRENT_TIMESTAMP),
    ('John', 'Doe', 'johndoe@email.com', '0111222333', '10 Wall Street, NY', '1985-08-25', 'US', CURRENT_TIMESTAMP);

-- them phong rooms
INSERT INTO rooms (room_number, room_type, price_per_night, max_occupancy, is_available, floor, description)
VALUES
    ('101', 'standard', 89.99, 2, true, 1, 'Comfortable standard room with queen bed'),
    ('102', 'deluxe', 150.00, 2, true, 1, 'Deluxe room with king bed and balcony'),
    ('201', 'suite', 250.00, 4, true, 2, 'Spacious suite with living area'),
    ('202', 'standard', 95.50, 2, true, 2, 'Standard room with city view'),
    ('301', 'standard', 85.00, 2, true, 3, 'Cozy room for couples'),
    ('302', 'family', 180.00, 4, true, 3, 'Family room with two double beds'),
    ('401', 'standard', 92.00, 2, true, 4, 'Bright room with garden view'),
    ('402', 'suite', 275.00, 4, true, 4, 'Luxury suite with jacuzzi'),
    ('501', 'standard', 89.00, 2, true, 5, 'Basic room with all essentials'),
    ('502', 'deluxe', 160.00, 2, true, 5, 'Deluxe room with ocean view');

-- them phong o booking
INSERT INTO bookings (guest_id, room_id, check_in_date, check_out_date, total_price, booking_status, payment_status, created_at)
VALUES
    (1, 1, '2023-07-15', '2023-07-18', 269.97, 'completed', 'paid', '2023-06-20 10:30:00'),
    (2, 2, '2023-07-20', '2023-07-22', 300.00, 'confirmed', 'unpaid', '2023-07-01 09:00:00'),
    (3, 3, '2023-07-10', '2023-07-12', 500.00, 'checked_in', 'paid', '2023-06-30 11:00:00'),
    (4, 4, '2023-07-25', '2023-07-30', 477.50, 'pending', 'unpaid', '2023-07-10 12:15:00'),
    (5, 5, '2023-07-28', '2023-07-30', 170.00, 'cancelled', 'unpaid', '2023-07-15 08:45:00'),
    (1, 6, '2023-08-01', '2023-08-03', 360.00, 'confirmed', 'paid', '2023-07-28 14:00:00'),
    (2, 7, '2023-08-05', '2023-08-10', 460.00, 'confirmed', 'paid', '2023-07-29 10:30:00'),
    (3, 8, '2023-08-02', '2023-08-05', 825.00, 'checked_in', 'paid', '2023-07-30 09:50:00');
-- 13
SELECT * FROM guests;

-- 14
SELECT * FROM rooms WHERE price_per_night < 100;

-- 15
SELECT * FROM bookings WHERE booking_status IN ('confirmed', 'checked_in');

-- 16
SELECT * FROM bookings
                  INNER JOIN guests ON bookings.guest_id = guests.guest_id;

-- 17
SELECT * FROM bookings
                  INNER JOIN rooms ON bookings.room_id = rooms.room_id;

-- 18
SELECT * FROM bookings
                  INNER JOIN guests ON bookings.guest_id = guests.guest_id
                  INNER JOIN rooms ON bookings.room_id = rooms.room_id;

-- 19
SELECT * FROM guests
                  LEFT JOIN bookings ON guests.guest_id = bookings.guest_id;

-- 20
SELECT * FROM rooms
                  LEFT JOIN bookings ON rooms.room_id = bookings.room_id;

-- 21
SELECT * FROM bookings
                  RIGHT JOIN guests ON bookings.guest_id = guests.guest_id;

-- 22
SELECT * FROM bookings
                  RIGHT JOIN rooms ON bookings.room_id = rooms.room_id;

-- 23
SELECT * FROM guests
                  LEFT JOIN bookings ON guests.guest_id = bookings.guest_id
WHERE bookings.booking_id IS NULL;

-- 24
SELECT * FROM rooms
                  LEFT JOIN bookings ON rooms.room_id = bookings.room_id
WHERE bookings.booking_id IS NULL;

-- 25
SELECT * FROM bookings
                  INNER JOIN guests ON bookings.guest_id = guests.guest_id
WHERE EXTRACT(MONTH FROM check_in_date) = EXTRACT(MONTH FROM CURRENT_DATE)
  AND EXTRACT(YEAR FROM check_in_date) = EXTRACT(YEAR FROM CURRENT_DATE);

-- 26
SELECT * FROM bookings
                  INNER JOIN rooms ON bookings.room_id = rooms.room_id
WHERE check_in_date >= CURRENT_DATE - INTERVAL '7 days';

-- 27
SELECT guests.*, COUNT(bookings.booking_id) AS booking_count
FROM guests
         LEFT JOIN bookings ON guests.guest_id = bookings.guest_id
GROUP BY guests.guest_id
HAVING COUNT(bookings.booking_id) > 2;

-- 28
SELECT rooms.*, COUNT(bookings.booking_id) AS booking_count
FROM rooms
         RIGHT JOIN bookings ON rooms.room_id = bookings.room_id
WHERE rooms.price_per_night > 200
GROUP BY rooms.room_id;
