<?php
    require_once('../../cors.php');
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $_POST = json_decode(file_get_contents('php://input'),true);
        
        echo json_encode($_POST);
    }
?>