<?php
    //echo 'GET informacion: '. file_get_contents('php://input');//Obtener informacion
    require_once('../cors.php');
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $_POST = json_decode(file_get_contents('php://input'),true);
        $_POST['message'] = 'Aceptado en Php';
        echo json_encode($_POST);
        
    }

?>