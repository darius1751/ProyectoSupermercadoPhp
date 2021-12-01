<?php
    require_once('../../cors.php');
    require_once('../../Errors.php');
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $_POST = json_decode(file_get_contents('php://input'),true);
        $TOKEN = isset($_SERVER['HTTP_TOKEN'])?$_SERVER['HTTP_TOKEN']:null;
        if(isset($TOKEN)){
            if($TOKEN === '12345'){
                require_once('../../models/DTO/UserDTO.php');
                $userDTO = new UserDTO();
                $userDTO->register($_POST);
            }
        }
        echo json_encode($_POST);
    }
?>