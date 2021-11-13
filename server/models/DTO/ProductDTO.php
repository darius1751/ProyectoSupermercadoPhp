<?php
require_once('../../connection/Connection.php');
    class ProductDTO{
        private $connection;
        public function __construct(){
            $this->connection = new Connection();
        }
        public function updateCant($id,$cant){
            $pdo = $this->connection->connect();
            $query = $pdo->prepare('UPDATE product SET cant = ? WHERE id = ?');
            $result = $query->execute($id,$cant);
            return $result->fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>