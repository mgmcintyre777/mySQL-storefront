DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE departments (
  id INT AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE products (
  id INT AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  price DECIMAL(8,2) NOT NULL,
  qty INT NOT NULL,
  dept_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (dept_id) REFERENCES departments(id)
);

INSERT INTO departments (name)
VALUES 
  ('Clothing'),
  ('Tools'),
  ('Electronics');

INSERT INTO products (name, price, qty, dept_id)
VALUES
  ('Shoes', 60.25, 25, 1),
  ('Hat', 20.00, 10, 1),
  ('Shirt', 25.99, 20, 1),
  ('Jacket', 75.99, 25, 1),
  ('Pants', 22.50, 20, 1),
  ('Shovel', 35.00, 10, 2),
  ('Pick', 45.00, 10, 2),
  ('Axe', 55.75, 12, 2),
  ('Flashlight', 19.99, 15, 3),
  ('GPS', 89.99, 8, 3); 

SELECT 
p.name AS Product, 
p.price AS Price, 
p.qty AS Quantity, 
d.name AS Department
FROM products p LEFT JOIN departments d
ON p.dept_id = d.id
ORDER BY d.name, p.name;