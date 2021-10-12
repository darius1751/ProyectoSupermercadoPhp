<?php
    //echo 'GET informacion: '. file_get_contents('php://input');//Obtener informacion
    //Configuraciones del cors
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    header('Content-type: Application/json');
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $_POST = json_decode(file_get_contents('php://input'),true);
        $_POST['message'] = 'Aceptado en Php';
        echo json_encode($_POST);
        
    }

?>