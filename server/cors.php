<?php
    //Configuraciones del cors
    header('Access-Control-Allow-Origin: *');
    //Aqui coloque TOKEN, para que permita que lo envie por medio de los headers
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, TOKEN");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    header('Content-type: Application/json');
?>