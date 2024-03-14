CREATE DATABASE users;

USE users;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password BLOB NOT NULL
);

INSERT INTO users (username, email, password) VALUES ('admin', 'admin@gmail.com' AES_ENCRYPT('admin123', "admin"));