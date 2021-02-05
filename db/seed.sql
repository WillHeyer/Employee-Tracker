CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE Department  (
  department_id INT NOT NULL,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE Role  (
  role_id INT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(10,2) NULL,
  department_id INT NULL,
  PRIMARY KEY (role_id)
);

CREATE Employee  (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  PRIMARY KEY (id)
);


-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("chocolate", 3.10, 120);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("strawberry", 3.25, 75);