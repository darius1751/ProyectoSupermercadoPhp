<?php
require_once('../../connection/Connection.php');
    class ProductDTO{
        private $connection;
        public function __construct(){
            $this->connection = new Connection();
        }
        public function updateCant($id,$cant){
            try{
                $pdo = $this->connection->connect();
                $query = $pdo->prepare('UPDATE product_item SET cant = cant + ? WHERE id = ?');
                return $query->execute([$cant,$id]);    
                
            }catch(PDOException $ex){
                return ['err'=>$ex->getMessage()];
            }
            
            
        }
    }
?>