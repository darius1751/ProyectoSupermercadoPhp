<?php
    //echo 'POST informacion: ' . file_get_contents('php://input');//Obtener informacion
    require_once('../cors.php');
    require_once('../Errors.php');
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $_POST = json_decode(file_get_contents('php://input'),true);
        $TOKEN = isset($_SERVER['HTTP_TOKEN'])?$_SERVER['HTTP_TOKEN']:null;
        if(isset($TOKEN)){
            if($TOKEN === '12345'){
                if(isset($_POST['user']) && isset($_POST['password'])){
                    require_once('../models/DAO/UserDAO.php');
                    require_once('../models/Classes/UserModel.php');
                    $userDAO = new UserDAO();
                    $userData = new UserModel($_POST['user'],$_POST['password']);
                    $response = $userDAO->login($userData);
                    $res =count($response)>0? $response[0] : ['id'=>0];
                    $res['code'] = 200;
                    http_response_code(200);
                    echo json_encode($res);
                }else{
                    http_response_code(402);
                    echo json_encode(status(402,'Payment Required','No enviaste el user y el password'));
                }
                
            }else{
                http_response_code(401);
                echo json_encode(status(401,'Unauthorized','TOKEN incorrecto'));
            }
        }else{
            http_response_code(511);
            echo json_encode(status(511,'Network Authentication Required','Valida que hayas colocado el TOKEN requerido'));
        }
        
    }
?>