<?php
    class ProductModel{
        private $id;
        private $photo;
        private $name;
        private $code;
        public function __construct($id = 0,$code = 0,$name,$photo = null){
            $this->id = $id;
            $this->code = $code;
            $this->name=$name;
            $this->photo = $photo;
        }
        public function getId(){
            return $this->id;
        }
        public function getPhoto(){
            return $this->photo;
        }
        public function getName(){
            return $this->name;
        }
        public function getCode(){
            return $this->code;
        }
    }
?>