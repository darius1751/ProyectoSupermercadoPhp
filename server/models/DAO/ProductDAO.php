<?php
    require_once('../../connection/Connection.php');
    class ProductDAO{
        private $con;
        public function __construct(){
            $this->con = new Connection();
        }
        public function getAll(){
            try{
                $pdo = $this->con->connect();
                $statement = $pdo->prepare('SELECT p.id, p.code,p.photo,p.name FROM product AS p');
                $statement->execute();
                $categories = $statement->fetchAll(PDO::FETCH_ASSOC);
                $index = 0;
                foreach($categories as $category){
                    $statementCategory = $pdo->prepare('SELECT p.id,p.name AS productItemName,p.photo,p.cant,p.price_unit,m.name FROM product_item AS p 
                    INNER JOIN mark AS m ON m.id = p.mark_id
                    WHERE product_id = ?');
                    $statementCategory->execute([$category['id']]);
                    $categories[$index]['products_items']= $statementCategory->fetchAll(PDO::FETCH_ASSOC);
                    $index++;
                }
                return $categories;
            }catch(PDOException $ex){
                return ['id'=>-1];
            }
        }   
    }
?>