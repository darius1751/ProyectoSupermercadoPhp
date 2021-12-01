DROP DATABASE supermercado;
CREATE DATABASE supermercado;
USE supermercado;
CREATE TABLE users(id INT PRIMARY KEY AUTO_INCREMENT,user_name VARBINARY(50) NOT NULL UNIQUE,password_name VARBINARY(30) NOT NULL,type INT NOT NULL DEFAULT 1);
CREATE TABLE person(id INT PRIMARY KEY AUTO_INCREMENT,identification VARBINARY(18) NOT NULL UNIQUE,name VARBINARY(100) NOT NULL,direction VARBINARY(100) NOT NULL,phone VARBINARY(10) NOT NULL,birthday DATE NOT NULL,cash DECIMAL(12,2) NOT NULL DEFAULT 0,users_id INT NOT NULL REFERENCES users(id));
ALTER TABLE person ADD FOREIGN KEY(users_id) REFERENCES users(id);
CREATE TABLE product(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,photo VARCHAR(225) NULL DEFAULT NULL, name VARBINARY(100) UNIQUE NOT NULL, code VARBINARY(15) NOT NULL UNIQUE);
CREATE TABLE mark(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, name VARBINARY(100) NOT NULL);
CREATE TABLE product_item(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,name VARCHAR(100) NOT NULL,photo VARCHAR(225) NULL DEFAULT NULL,cant INT NOT NULL DEFAULT 0,price_unit DECIMAL(12,2) NOT NULL,mark_id INT NOT NULL,product_id INT NOT NULL);
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
/*Insertando Usuarios Inicialmente admins*/

INSERT INTO users(user_name,password_name,type) VALUES('darius1751',PASSWORD('12345'),2);
INSERT INTO person(`identification`,`name`,
`direction`,`phone`,`birthday`,`cash`,`users_id`)
VALUES('1193094503','Luis Fernando Mosquera Rivas','Carrera 35# 35-35'
,'3013155745','2001-05-19',1000000,1);

INSERT INTO users(user_name,password_name,type) VALUES('meliza',PASSWORD('12345'),2);
INSERT INTO person(`identification`,`name`,
`direction`,`phone`,`birthday`,`cash`,`users_id`)
VALUES('1231231234','Meliza Jaramillo','Calle 30# 25-35'
,'3013156555','2000-06-29',1000000,2);

INSERT INTO users(user_name,password_name,type) VALUES('juliana',PASSWORD('12345'),2);
INSERT INTO person(`identification`,`name`,
`direction`,`phone`,`birthday`,`cash`,`users_id`)
VALUES('123434562','Juliana Henao','Carrera 20# 35-30'
,'312454990','2001-04-26',1000000,3);

INSERT INTO users(user_name,password_name,type) VALUES('sara',PASSWORD('12345'),1);
INSERT INTO person(`identification`,`name`,
`direction`,`phone`,`birthday`,`cash`,`users_id`)
VALUES('123434566','Sara Ximena','Carrera 10# 35-30'
,'312464990','2001-03-20',1000000,4);
/*insertando Productos*/

INSERT INTO product(name,photo,code) VALUES('Pan','https://s1.eestatic.com/2019/04/29/cocinillas/actualidad-gastronomica/actualidad_gastronomica_394722440_121637429_1024x576.jpg','1')
,('Arroz','https://previews.123rf.com/images/thainoipho/thainoipho1506/thainoipho150600645/41999002-alimentaci%C3%B3n-de-fondo-con-gran-variedad-de-arroz-mezcla-de-arroz-arroz-integral-arroz-negro-arroz-bl.jpg','2'),
('Aceite','https://mejorconsalud.as.com/wp-content/uploads/2015/10/cual-mejor-aceite-salud.jpg','3'),
('Azucar','https://www.elindependiente.com/wp-content/uploads/2016/12/azucar_buena-656x368.jpg','4');
INSERT INTO mark(name) VALUES('Bimbo'),('Natipan'),('Diana'),('Castellano'),('Gourmet'),('Oliosoya'),('Incauca');
INSERT INTO product_item(name,photo,cant,price_unit,mark_id,product_id)
VALUES('Pan Blanco','https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3478676-1000-1000/7705326074492.jpg?v=637158272527500000',50,2500,1,1)
,('Pan Familiar','https://bimbo-com-es-staging-assets.s3.amazonaws.com/s3fs-public/BIMBO_FAMILIAR.png',50,2400,1,1),
('Pan Integral','https://bimbo-com-es-staging-assets.s3.amazonaws.com/s3fs-public/1117290_BIMBO_NATURAL-INTEGRAL.png',70,2000,1,1),
('Pan Fit Integral','https://olimpica.vtexassets.com/arquivos/ids/608141/7705326082077.jpg?v=637626500946200000',70,2400,1,1),
('Pan Queso','http://natipan.com.co/wp-content/uploads/2018/07/pan-queso-1.jpg',50,2700,2,1),
('Pan Mediano','http://natipan.com.co/wp-content/uploads/2018/07/pan-mediano-1.jpg',50,2400,2,1),
('Torta Tajada Sabor Vainilla','http://natipan.com.co/wp-content/uploads/2018/07/torta-tajada-1.jpg',50,2600,2,1),
('Pan de Yuca','http://natipan.com.co/wp-content/uploads/2018/07/pan-de-yuca-1.jpg',50,1400,2,1),
('Blanco 1000g','https://olimpica.vtexassets.com/arquivos/ids/618501/7702511000021.jpg?v=637626526360730000',150,2700,3,2),
('Premium 4000g','https://exitocol.vtexassets.com/arquivos/ids/5564252/Arroz-Diana-Premium-4-kg-715215_a.jpg?v=637465784202030000',150,3000,3,2),
('Blanco 10kg','https://pim-img-psmt1.aeropost.com/n/8/1/4/5/814587b46eecc34064f022fec136a74cbacb5b5d_292923_01.jpg',150,1000,3,2),
('Blanco 5000g','https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3510543-1000-1000/7702511000045.jpg?v=637273105624530000',150,48000,3,2),
('Premium tradicional Catellano 2500g','https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3510537-1000-1000/7702206010908.jpg?v=637273105588300000',150,3400,4,2),
('Premium para Sushi 500g','https://arrozcastellano.com/wp-content/uploads/2020/04/emp_sushi.png',100,3900,4,2),
('Gourmet Biocardis 1000ml','https://www.privun.com/pub/media/catalog/product/cache/75eed2686e01eb22cb4050b2f40ddf97/h/t/httpsstorage.googleapis.comfotos-novaventaprivun2011723-aceite-gourmet-biocardis.jpg',100,16000,5,3),
('Gourmet Familia 1000ml','https://www.superlosmontes.com/site/4198-large_default/aceite-gourmet-familia-mega-1lt.jpg',100,14800,5,3),
('Gourmet Balance 1000ml','https://akilo.co/wp-content/uploads/2020/12/httpsstorage.googleapis.comfotos-novaventaprivun2011722-aceite-gourmet-balance.jpg',100,18900,5,3),
('Olivia Vidrio','https://supermercadoahorramas.com.co/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNVVuTEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--86cb63b72ca4cb26f33468c6f2b9ffb52dc7db2e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9UY21WemFYcGxYMkZ1WkY5d1lXUmJDR2tDV0FKcEFsZ0Nld1k2QzJWNGRHVnVaRG9LZDJocGRHVTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--6c851047e6ae64014cbd1d8d2af6e14020af2115/7702109014836.png?locale=es',110,22600,5,3),
('Oliosoya 500ml','https://www.eurosupermercados.com.co/media/catalog/product/cache/5db2c2cd17d64c361c13f6f6460f1cf1/7/7/7702116000181.jpg',100,5900,6,3),
('Oliosoya 1000ml','http://medesoft.co/img/p/3/4/34-large_default.jpg',120,29000,6,3),('Incauca Zero Calorias 40 Sobres','https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3397127-1000-1000/7702059602183.jpg?v=636881972004300000',120,9400,6,4),
('Incauca Blanco','https://villavoexpress.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBajBQIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--964794da2c6d07543e2e6e7604faeef12f6a1647/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/azucar-extrafina-incauca-500gr.jpg?locale=es',120,2500,6,4),
('Incauca Blanco Especial','https://mercaldas.vtexassets.com/arquivos/ids/199011/Azucar-INCAUCA-blanca-x500-g_16001.jpg?v=637354711234470000',100,1700,6,4)
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