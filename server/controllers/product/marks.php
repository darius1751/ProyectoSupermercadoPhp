<?php
require_once('../../cors.php');
require_once('../../Errors.php');
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        $TOKEN = isset($_SERVER['HTTP_TOKEN'])?$_SERVER['HTTP_TOKEN'] : null;//Si puedo enviar lo por los headers, el le antepone el HTTP_
        if(isset($TOKEN)){
            if($TOKEN === '12345'){
                require_once('../../models/DAO/ProductDAO.php');
                $productDAO = new ProductDAO();
                $res = $productDAO->getAllMarks();
                http_response_code(200);
                echo json_encode($res);
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