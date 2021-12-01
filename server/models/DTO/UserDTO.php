<?php
    class UserDTO{
        private $con;
        __construct(){
            $con = null;
        }
        public function registerUser($data){
            try{
                $pdo = $this->connection->connect();
                $userInsert = $pdo->prepare('INSERT INTO users(user_name,password_name) VALUES(?,?)');
                $result = $userInsert->execute($data['identification'],$data['identification']);
                $personInsert = $pdo->prepare('INSERT INTO person(identification,name,direction,phone,birthday,cash,user_id) VALUES(?,?,?,?,?,?,?,?)');
                $personInsert->execute($data);
                $pdo = null;
            }catch(PDOException $ex){
                echo json_encode($ex->getMessage());
            }
        }
    }
?>