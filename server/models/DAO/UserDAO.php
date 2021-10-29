<?php
    require_once('.././connection/Connection.php');
    class UserDAO{
        private $con;
        function __construct(){
            $this->con = new Connection();
        }
        public function login($data){
            try{
                $pdo = $this->con->connect();
                $statement = $pdo->prepare('
                    SELECT p.id,us.type, p.name,p.birthday,p.cash FROM users AS us
                    INNER JOIN person AS p
                    ON us.id = p.users_id
                    WHERE us.user_name = ? AND us.password_name = \'*\'+PASSWORD(?)
                ');
                $statement->execute([$data->getUserName(),$data->getPasswordName()]);
                return $statement->fetchAll(PDO::FETCH_ASSOC);

            }catch(PDOException $ex){

            }
        }
        public function register($data){
            
        }
    }
    
    
?>