-- Script do banco da Livraria
-- Rode este arquivo inteiro no MySQL Workbench (raio ⚡).
-- Ele apaga e recria tudo: pode rodar de novo sempre que quiser começar do zero.

DROP DATABASE IF EXISTS livraria;
CREATE DATABASE livraria;
USE livraria;

-- A tabela categorias vem primeiro: a tabela livros aponta para ela.
CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  descricao VARCHAR(200)
);

CREATE TABLE livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  autor VARCHAR(100) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  estoque INT NOT NULL,
  categoria_id INT,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

INSERT INTO categorias (nome, descricao) VALUES
('Ficção', 'Romances, fantasia e ficção científica'),
('Tecnologia', 'Programação, Engenharia de software e afins'),
('Infantil', 'Livros para crianças');

INSERT INTO livros (titulo, autor, preco, estoque, categoria_id) VALUES
('Clean Code', 'Robert C. Martin', 89.90, 12, 2),
('Eloquent JavaScript', 'Marijn Haverbeke', 45.00, 20, 2),
('O Hobbit', 'J.R.R. Tolkien', 39.90, 8, 1),
('O Senhor dos Anéis', 'J.R.R. Tolkien', 79.90, 5, 1),
('Revolução dos Estrupícios', 'I. Francisco', 59.90, 30, 1),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 29.90, 10, 3),
('O Pequeno Príncipe Preto', 'Rodrigo França', 39.90, 10, 3),
('Duna', 'Frank Herbert', 79.90, 15, 1),
('Entendendo Algoritmos', 'Aditya Bhargava', 65.00, 18, 2),
('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 49.90, 25, 1),
('Menino Maluquinho', 'Ziraldo', 34.90, 14, 3);

SELECT * FROM livros;
