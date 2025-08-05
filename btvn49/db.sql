CREATE TABLE school (
                        id SERIAL PRIMARY KEY,
                        name TEXT NOT NULL,
                        address TEXT,
                        founding_year INT,
                        principal_name TEXT,
                        phone TEXT,
                        email TEXT,
                        website TEXT,
                        status TEXT
);
CREATE TABLE class (
                       id SERIAL PRIMARY KEY,
                       school_id INT REFERENCES school(id),
                       name TEXT,
                       grade_level TEXT,
                       homeroom_teacher TEXT,
                       capacity INT,
                       room_number TEXT,
                       academic_year TEXT,
                       is_active BOOLEAN
);
CREATE TABLE student (
                         id SERIAL PRIMARY KEY,
                         first_name TEXT,
                         last_name TEXT,
                         date_of_birth DATE,
                         gender TEXT,
                         address TEXT,
                         phone TEXT,
                         email TEXT,
                         enrollment_date DATE,
                         parent_name TEXT,
                         parent_contact TEXT
);
CREATE TABLE class_student (
                               id SERIAL PRIMARY KEY,
                               class_id INT REFERENCES class(id),
                               student_id INT REFERENCES student(id),
                               enrollment_date DATE,
                               status TEXT,
                               grade FLOAT
);
ALTER TABLE school ADD COLUMN description TEXT;
ALTER TABLE student ADD COLUMN special_needs BOOLEAN;
ALTER TABLE class_student ADD COLUMN attendance_rate DECIMAL(5,2);
INSERT INTO school (name, address, founding_year, principal_name, phone, email, website, status)
VALUES
    ('Trường ABC', 'Địa chỉ ABC', 1995, 'Nguyễn Văn A', '0123456789', 'abc@example.com', 'www.abc.com', TRUE),
    ('Trường XYZ', 'Địa chỉ XYZ', 2000, 'Trần Thị B', '0987654321', 'xyz@example.com', 'www.xyz.com', TRUE),
    ('Trường DEF', 'Địa chỉ DEF', 1990, 'Lê Minh C', '0112233445', 'def@example.com', 'www.def.com', TRUE),
    ('Trường GHI', 'Địa chỉ GHI', 1985, 'Phan Hoàng D', '0223344556', 'ghi@example.com', 'www.ghi.com', TRUE),
    ('Trường JKL', 'Địa chỉ JKL', 2010, 'Ngô Minh E', '0334455667', 'jkl@example.com', 'www.jkl.com', TRUE);
INSERT INTO class (school_id, name, grade_level, homeroom_teacher, capacity, room_number, academic_year, is_active)
VALUES
    (1, 'Lớp 10A', 10, 'Nguyễn Thị X', 30, 101, '2025-2026', TRUE),
    (1, 'Lớp 10B', 10, 'Lê Minh Y', 30, 102, '2025-2026', TRUE),
    (2, 'Lớp 11A', 11, 'Trần Văn Z', 35, 201, '2025-2026', TRUE),
    (2, 'Lớp 11B', 11, 'Phạm Thu H', 35, 202, '2025-2026', FALSE),
    (3, 'Lớp 12A', 12, 'Hoàng Đức Q', 40, 301, '2025-2026', TRUE),
    (3, 'Lớp 12B', 12, 'Đỗ Thị T', 40, 302, '2025-2026', TRUE),
    (4, 'Lớp 9A', 9, 'Lý Hồng N', 25, 401, '2025-2026', TRUE),
    (4, 'Lớp 9B', 9, 'Ngô Gia K', 25, 402, '2025-2026', FALSE),
    (5, 'Lớp 8A', 8, 'Bùi Minh M', 20, 501, '2025-2026', TRUE),
    (5, 'Lớp 8B', 8, 'Cao Văn P', 20, 502, '2025-2026', TRUE);

INSERT INTO student (first_name, last_name, date_of_birth, gender, address, phone, email, enrollment_date, parent_name, parent_contact)
VALUES
    ('Nguyễn Văn', 'A', '2005-01-01', 'Nam', 'Địa chỉ A', '0123456781', 'a1@example.com', '2021-09-01', 'Nguyễn Thị B', '0123456781'),
    ('Trần Thị', 'B', '2006-02-02', 'Nữ', 'Địa chỉ B', '0123456782', 'b2@example.com', '2022-09-01', 'Trần Minh C', '0123456782'),
    ('Lê Văn', 'C', '2007-03-03', 'Nam', 'Địa chỉ C', '0123456783', 'c3@example.com', '2023-09-01', 'Lê Thị D', '0123456783'),
    ('Phạm Thị', 'D', '2008-04-04', 'Nữ', 'Địa chỉ D', '0123456784', 'd4@example.com', '2023-09-01', 'Phạm Văn E', '0123456784'),
    ('Hoàng Minh', 'E', '2009-05-05', 'Nam', 'Địa chỉ E', '0123456785', 'e5@example.com', '2023-09-01', 'Hoàng Thị F', '0123456785'),
    ('Đỗ Thị', 'F', '2010-06-06', 'Nữ', 'Địa chỉ F', '0123456786', 'f6@example.com', '2024-09-01', 'Đỗ Văn G', '0123456786'),
    ('Lý Gia', 'G', '2004-07-07', 'Nam', 'Địa chỉ G', '0123456787', 'g7@example.com', '2020-09-01', 'Lý Thị H', '0123456787'),
    ('Ngô Thị', 'H', '2005-08-08', 'Nữ', 'Địa chỉ H', '0123456788', 'h8@example.com', '2021-09-01', 'Ngô Văn I', '0123456788'),
    ('Bùi Văn', 'I', '2006-09-09', 'Nam', 'Địa chỉ I', '0123456789', 'i9@example.com', '2022-09-01', 'Bùi Thị J', '0123456789'),
    ('Cao Thị', 'J', '2007-10-10', 'Nữ', 'Địa chỉ J', '0123456790', 'j10@example.com', '2022-09-01', 'Cao Văn K', '0123456790'),
    ('Nguyễn Văn', 'K', '2008-11-11', 'Nam', 'Địa chỉ K', '0123456791', 'k11@example.com', '2022-09-01', 'Nguyễn Thị L', '0123456791'),
    ('Trần Thị', 'L', '2009-12-12', 'Nữ', 'Địa chỉ L', '0123456792', 'l12@example.com', '2023-09-01', 'Trần Minh M', '0123456792'),
    ('Lê Văn', 'M', '2005-01-13', 'Nam', 'Địa chỉ M', '0123456793', 'm13@example.com', '2021-09-01', 'Lê Thị N', '0123456793'),
    ('Phạm Thị', 'N', '2006-02-14', 'Nữ', 'Địa chỉ N', '0123456794', 'n14@example.com', '2022-09-01', 'Phạm Văn O', '0123456794'),
    ('Hoàng Minh', 'O', '2007-03-15', 'Nam', 'Địa chỉ O', '0123456795', 'o15@example.com', '2022-09-01', 'Hoàng Thị P', '0123456795'),
    ('Đỗ Thị', 'P', '2008-04-16', 'Nữ', 'Địa chỉ P', '0123456796', 'p16@example.com', '2023-09-01', 'Đỗ Văn Q', '0123456796'),
    ('Lý Gia', 'Q', '2009-05-17', 'Nam', 'Địa chỉ Q', '0123456797', 'q17@example.com', '2023-09-01', 'Lý Thị R', '0123456797'),
    ('Ngô Thị', 'R', '2010-06-18', 'Nữ', 'Địa chỉ R', '0123456798', 'r18@example.com', '2024-09-01', 'Ngô Văn S', '0123456798'),
    ('Bùi Văn', 'S', '2004-07-19', 'Nam', 'Địa chỉ S', '0123456799', 's19@example.com', '2020-09-01', 'Bùi Thị T', '0123456799'),
    ('Cao Thị', 'T', '2005-08-20', 'Nữ', 'Địa chỉ T', '0123456800', 't20@example.com', '2021-09-01', 'Cao Văn U', '0123456800');

-- Học sinh 1
INSERT INTO class_student (class_id, student_id, enrollment_date, status, grade) VALUES
                                                                                     (1, 1, '2021-09-01', TRUE, 8.5),
                                                                                     (2, 1, '2021-09-01', TRUE, 7.5);

-- Học sinh 2
INSERT INTO class_student VALUES
                              (DEFAULT, 1, 2, '2021-09-01', TRUE, 7.9),
                              (DEFAULT, 3, 2, '2021-09-01', TRUE, 8.2);

-- Học sinh 3
INSERT INTO class_student VALUES
                              (DEFAULT, 2, 3, '2021-09-01', TRUE, 9.0),
                              (DEFAULT, 4, 3, '2021-09-01', TRUE, 8.7);

-- Học sinh 4
INSERT INTO class_student VALUES
                              (DEFAULT, 3, 4, '2021-09-01', TRUE, 7.0),
                              (DEFAULT, 5, 4, '2021-09-01', TRUE, 7.5);

-- Học sinh 5
INSERT INTO class_student VALUES
                              (DEFAULT, 4, 5, '2021-09-01', TRUE, 6.5),
                              (DEFAULT, 6, 5, '2021-09-01', TRUE, 7.0);

-- Học sinh 6
INSERT INTO class_student VALUES
                              (DEFAULT, 5, 6, '2021-09-01', TRUE, 7.8),
                              (DEFAULT, 7, 6, '2021-09-01', TRUE, 8.2);

-- Học sinh 7
INSERT INTO class_student VALUES
                              (DEFAULT, 6, 7, '2021-09-01', TRUE, 6.9),
                              (DEFAULT, 8, 7, '2021-09-01', TRUE, 7.3);

-- Học sinh 8
INSERT INTO class_student VALUES
                              (DEFAULT, 7, 8, '2021-09-01', TRUE, 9.2),
                              (DEFAULT, 9, 8, '2021-09-01', TRUE, 8.8);

-- Học sinh 9
INSERT INTO class_student VALUES
                              (DEFAULT, 8, 9, '2021-09-01', TRUE, 7.7),
                              (DEFAULT, 10, 9, '2021-09-01', TRUE, 6.9);

-- Học sinh 10
INSERT INTO class_student VALUES
                              (DEFAULT, 9, 10, '2021-09-01', TRUE, 8.0),
                              (DEFAULT, 1, 10, '2021-09-01', TRUE, 7.5);

-- Học sinh 11
INSERT INTO class_student VALUES
                              (DEFAULT, 10, 11, '2021-09-01', TRUE, 7.8),
                              (DEFAULT, 2, 11, '2021-09-01', TRUE, 8.1);

-- Học sinh 12
INSERT INTO class_student VALUES
                              (DEFAULT, 3, 12, '2021-09-01', TRUE, 9.5),
                              (DEFAULT, 4, 12, '2021-09-01', TRUE, 9.0);

-- Học sinh 13
INSERT INTO class_student VALUES
                              (DEFAULT, 5, 13, '2021-09-01', TRUE, 6.8),
                              (DEFAULT, 6, 13, '2021-09-01', TRUE, 7.1);

-- Học sinh 14
INSERT INTO class_student VALUES
                              (DEFAULT, 7, 14, '2021-09-01', TRUE, 8.3),
                              (DEFAULT, 8, 14, '2021-09-01', TRUE, 8.0);

-- Học sinh 15
INSERT INTO class_student VALUES
                              (DEFAULT, 9, 15, '2021-09-01', TRUE, 9.1),
                              (DEFAULT, 10, 15, '2021-09-01', TRUE, 9.3);

-- Học sinh 16
INSERT INTO class_student VALUES
                              (DEFAULT, 1, 16, '2021-09-01', TRUE, 7.4),
                              (DEFAULT, 2, 16, '2021-09-01', TRUE, 7.6);

-- Học sinh 17
INSERT INTO class_student VALUES
                              (DEFAULT, 3, 17, '2021-09-01', TRUE, 8.2),
                              (DEFAULT, 4, 17, '2021-09-01', TRUE, 8.0);

-- Học sinh 18
INSERT INTO class_student VALUES
                              (DEFAULT, 5, 18, '2021-09-01', TRUE, 6.5),
                              (DEFAULT, 6, 18, '2021-09-01', TRUE, 6.8);

-- Học sinh 19
INSERT INTO class_student VALUES
                              (DEFAULT, 7, 19, '2021-09-01', TRUE, 7.9),
                              (DEFAULT, 8, 19, '2021-09-01', TRUE, 8.4);

-- Học sinh 20
INSERT INTO class_student VALUES
                              (DEFAULT, 9, 20, '2021-09-01', TRUE, 9.0),
                              (DEFAULT, 10, 20, '2021-09-01', TRUE, 9.2);

UPDATE school
SET principal_name = 'Nguyễn Văn Mới'
WHERE id = 3;
UPDATE class
SET is_active = FALSE
WHERE school_id = 2;

UPDATE class_student
SET grade = 9.5
WHERE student_id = 5 AND class_id = 4;

UPDATE student
SET phone = '0999999999',
    email = 'updated@example.com'
WHERE date_of_birth < '2010-01-01';

SELECT * FROM school ORDER BY founding_year ASC;

SELECT * FROM class WHERE school_id = 1 AND is_active = TRUE;
SELECT * FROM student WHERE date_of_birth BETWEEN '2005-01-01' AND '2010-12-31' ORDER BY date_of_birth ASC;
SELECT c.name AS class_name, s.name AS school_name
FROM class c
         INNER JOIN school s ON c.school_id = s.id;
SELECT s.name AS school_name, COUNT(c.id) AS class_count
FROM school s
         LEFT JOIN class c ON s.id = c.school_id
GROUP BY s.name;
SELECT
    s.id AS student_id,
    s.first_name,
    s.last_name,
    c.id AS class_id,
    c.name AS class_name
FROM student s
         INNER JOIN class_student cs ON s.id = cs.student_id
         INNER JOIN class c ON cs.class_id = c.id;


SELECT
    c.id AS class_id,
    c.name AS class_name,
    COUNT(cs.student_id) AS student_count
FROM class c
         INNER JOIN class_student cs ON c.id = cs.class_id
GROUP BY c.id, c.name
HAVING COUNT(cs.student_id) > 5
ORDER BY student_count DESC;

SELECT
    c.id AS class_id,
    c.name AS class_name,
    COUNT(cs.student_id) AS student_count
FROM class c
         INNER JOIN class_student cs ON c.id = cs.class_id
GROUP BY c.id, c.name
HAVING COUNT(cs.student_id) > 5
ORDER BY student_count DESC;

SELECT
    c.id AS class_id,
    c.name AS class_name,
    ROUND(AVG(cs.grade), 2) AS avg_grade
FROM class c
         INNER JOIN class_student cs ON c.id = cs.class_id
GROUP BY c.id, c.name
HAVING AVG(cs.grade) > 7.5
ORDER BY avg_grade DESC;



SELECT
    s.id AS school_id,
    s.name AS school_name,
    COUNT(c.id) AS class_count
FROM school s
         INNER JOIN class c ON s.id = c.school_id
GROUP BY s.id, s.name
HAVING COUNT(c.id) >= 3
ORDER BY class_count DESC;
SELECT
    s.id,
    s.name,
    JSON_AGG(
            JSON_BUILD_OBJECT('class_id', c.id, 'class_name', c.name)
    ) AS classes
FROM school s
         LEFT JOIN class c ON s.id = c.school_id
GROUP BY s.id, s.name;

SELECT
    c.id,
    c.name AS class_name,
    JSON_AGG(
            JSON_BUILD_OBJECT('student_id', s.id, 'full_name', s.first_name || ' ' || s.last_name)
    ) AS students
FROM class c
         LEFT JOIN class_student cs ON c.id = cs.class_id
         LEFT JOIN student s ON cs.student_id = s.id
GROUP BY c.id, c.name;

SELECT
    s.id,
    s.name AS school_name,
    JSON_AGG(
            JSON_BUILD_OBJECT(
                    'class_id', c.id,
                    'class_name', c.name,
                    'students', (
                        SELECT JSON_AGG(
                                       JSON_BUILD_OBJECT('student_id', st.id, 'full_name', st.first_name || ' ' || st.last_name)
                               )
                        FROM class_student cs2
                                 JOIN student st ON cs2.student_id = st.id
                        WHERE cs2.class_id = c.id
                    )
            )
    ) AS classes
FROM school s
         LEFT JOIN class c ON s.id = c.school_id
GROUP BY s.id, s.name;

SELECT
    s.id AS student_id,
    s.first_name || ' ' || s.last_name AS full_name,
    COUNT(cs.class_id) AS class_count
FROM student s
         INNER JOIN class_student cs ON s.id = cs.student_id
GROUP BY s.id, s.first_name, s.last_name
HAVING COUNT(cs.class_id) >= 3
ORDER BY class_count DESC;

WITH class_avg AS (
    SELECT
        c.id AS class_id,
        c.name AS class_name,
        c.school_id,
        ROUND(AVG(cs.grade), 2) AS avg_grade
    FROM class c
             INNER JOIN class_student cs ON c.id = cs.class_id
    GROUP BY c.id, c.name, c.school_id
)
SELECT DISTINCT ON (s.id)
    s.name AS school_name,
    ca.class_name,
    ca.avg_grade
FROM class_avg ca
    JOIN school s ON ca.school_id = s.id
ORDER BY s.id, ca.avg_grade DESC;
SELECT
    s.id AS student_id,
    s.first_name || ' ' || s.last_name AS full_name,
    COUNT(cs.class_id) AS class_count,
    ROUND(AVG(cs.grade), 2) AS avg_grade
FROM student s
         JOIN class_student cs ON s.id = cs.student_id
GROUP BY s.id, s.first_name, s.last_name
ORDER BY avg_grade DESC
    LIMIT 5;





