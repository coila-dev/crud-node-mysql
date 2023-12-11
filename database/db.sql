CREATE DATABASE crudnodemysql;

USE crudnodemysql;

CREATE TABLE `customer` (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

CREATE TABLE `datamigracion` (
  `Cui` varchar(255) NOT NULL,
  `DatosCompletos` longtext NOT NULL,
  PRIMARY KEY (`Cui`),
  UNIQUE KEY `uk_datamigracion` (`Cui`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SHOW TABLES;

describe customer;