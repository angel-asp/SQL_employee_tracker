INSERT INTO department (name )
VALUES  ('Engineering'),
        ('Sales'),
        ('Finance'),
        ('Legal');

INSERT INTO role (department, title, salary)
VALUES  (2, 'Sales Lead', 100000),
        (2, 'Salesperson', 80000),
        (1, 'Lead Engineer', 150000),
        (1, 'Software Engineering', 120000),
        (3, 'Account Manager', 160000),
        (3, 'Accoutant', 125000),
        (4, 'Legal Team Lead', 250000),
        (4, 'Lawyer', 190000);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ('Angel', 'Sanchez', 4),
        ('Vanessa', 'Padilla', 8),
        ('Adrian', 'Sanchez', 2),
        ('Byan', 'Chappote',1),
        ('Todd', 'Chaves', 3),
        ('Kaylee', 'Roberts', 6),
        ('Grace', 'Eaden', 5),
        ('Lucy', 'Lou', 7),
        ('Phill', 'Foden', 4);