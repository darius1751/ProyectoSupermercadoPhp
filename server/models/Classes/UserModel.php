<?php
    class UserModel{
        private $id;
        private $userName;
        private $passwordName;
        private $type;
        
        public function __construct($userName,$passwordName,$id =0,$type =0){
            $this->userName = $userName;
            $this->passwordName= $passwordName;
            $this->type= $type;
            $this->id = $id;
        }
        public function getUserName(){
            return $this->userName;
        }
        public function getPasswordName(){
            return $this->passwordName;
        }
    }
?>