<?php
    require_once('../../cors.php');
    require_once('../../Errors.php');
    if($_SERVER['REQUEST_METHOD'] === 'PUT'){
        $_PUT = json_decode(file_get_contents('php://input'));
        $TOKEN = isset($_SERVER['HTTP_TOKEN'])?$_SERVER['HTTP_TOKEN']:null;
        if(isset($TOKEN)){
            if($TOKEN === '12345'){
                $id = isset($_PUT['id'])?$_PUT['id']:null;
                $cant = isset($_PUT['cant'])?$_PUT['cant']:null;
                if(isset($id) && isset($cant)){ 
                    if($cant >= 0){
                        require_once('../../models/DTO/ProductDTO.php');
                        $productDTO = new ProductDTO();
                        $res = $productDTO->updateCant($id,$cant);
                        http_response_code(200);
                        echo json_encode($res);
                    }else
                        http_response_code(400);
                        echo json_encode(status(400,'Bad Request','Debes enviar una cant valida'));
                }
            }else{
                http_response_code(401);
                echo json_encode(status(401,'Unauthorized','TOKEN incorrecto'));
            }

        }else{
            http_response_code(511);
            echo json_encode(status(511,'Network Authentication Required','Valida que hayas colocado el TOKEN requerida'));
        }
    }
?>