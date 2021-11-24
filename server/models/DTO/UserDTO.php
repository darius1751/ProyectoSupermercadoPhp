<?php
    class UserDTO{
        private $con;
        __construct(){
            $con = null;
        }
        public function registerUser($data){
            try{
                $pdo = $this->connection->connect();
                $query = $pdo->prepare('INSERT INTO users(user_name,password_name) VALUES(?,?)');
                $result = $query->execute($data['identification'],$data['identification']);
                $pdo->prepare('INSERT INTO person(identification,name,direction,phone,birthday,cash,user_id) VALUES(?,?,?,?,?,?,?,?)');
                return $result->fetchAll(PDO::FETCH_ASSOC);
            }catch(PDOException $ex){

            }
        }
    }
?>