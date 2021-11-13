DROP DATABASE supermercado;
CREATE DATABASE supermercado;
USE supermercado;
CREATE TABLE users(id INT PRIMARY KEY AUTO_INCREMENT,user_name VARBINARY(50) NOT NULL UNIQUE,password_name VARBINARY(30) NOT NULL,type INT NOT NULL DEFAULT 1);
CREATE TABLE person(id INT PRIMARY KEY AUTO_INCREMENT,identification VARBINARY(18) NOT NULL UNIQUE,name VARBINARY(100) NOT NULL,direction VARBINARY(100) NOT NULL,phone VARBINARY(10) NOT NULL,birthday DATE NOT NULL,cash DECIMAL(12,2) NOT NULL DEFAULT 0,users_id INT NOT NULL REFERENCES users(id));
ALTER TABLE person ADD FOREIGN KEY(users_id) REFERENCES users(id);
CREATE TABLE product(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,photo VARBINARY(225) NULL DEFAULT NULL, name VARBINARY(100) UNIQUE NOT NULL, code VARBINARY(15) NOT NULL UNIQUE);
CREATE TABLE mark(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, name VARBINARY(100) NOT NULL);
CREATE TABLE product_item(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,photo VARBINARY(225) NULL DEFAULT NULL,cant INT NOT NULL DEFAULT 0,price_unit DECIMAL(12,2) NOT NULL,mark_id INT NOT NULL,product_id INT NOT NULL);
ALTER TABLE product_item ADD FOREIGN KEY(mark_id) REFERENCES mark(id);
ALTER TABLE product_item ADD FOREIGN KEY(product_id) REFERENCES product(id);
CREATE TABLE fact(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,sale_date DATE NOT NULL DEFAULT CURRENT_DATE,price_to_pay DECIMAL(12,2) NOT NULL);
CREATE TABLE sales(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,product_item_id INT NOT NULL,cant INT NOT NULL DEFAULT 1 ,fact_id INT NOT NULL,price DECIMAL(12,2) NOT NULL, person_id INT NOT NULL);
ALTER TABLE sales ADD FOREIGN KEY(fact_id) REFERENCES fact(id);
ALTER TABLE sales ADD FOREIGN KEY(product_item_id) REFERENCES product_item(id);
ALTER TABLE sales ADD FOREIGN KEY(person_id) REFERENCES person(id);
CREATE TABLE history(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,fact_id INT NOT NULL,person_id INT NOT NULL);
ALTER TABLE history ADD FOREIGN KEY(fact_id) REFERENCES fact(id);
ALTER TABLE history ADD FOREIGN KEY(person_id) REFERENCES person(id);
/*

CONSULTA LOGUEO

SELECT p.id,us.type, p.name,p.birthday,p.cash FROM users AS us
INNER JOIN person AS p
ON us.id = p.users_id
WHERE us.user_name = ? AND us.password_name = PASSWORD(?)

TRANSACCION DE COMPRA

INSERT INTO fact(price_to_pay) VALUES(?)
SELECT id fact
ORDER BY id DESC 
LIMIT 1
$productosEscasos = [];
foreach($sales as $sale){
    INSERT INTO sales(product_item_id,cant,fact_id,price,person_id) values(?,?,?,?,?)
    SELECT cant FROM product 
    WHERE id = product_item_id
    if(cant <= 5){
        $productosEscasos[] = id;
    }
}
echo ['productosEscasos'=>$productosEscasos]
 
 Recargar dinero

 UPDATE person 
 SET cash = cash + ? 
 WHERE identification = ? 

*/
/*
    //Products
    INSERT INTO product(name,code) VALUES('Pan','1'),('Arroz','2'),('Aceite','3'),('Azucar','4')
    
    //Marcas de Pan
    INSERT INTO mark(name) VALUES('Bimbo'),('El Horno de Aldi'),('Dulcesol'),('Carrefour'),('La Cestera'),('Hacendado')
    
        //Panes
    INSERT INTO product_item(cant,price_unit,mark_id,product_id) VALUES(50,2500,1,1),(50,2400,2,1),(70,2000,3,1)
*/