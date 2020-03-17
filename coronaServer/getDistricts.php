<?php

// required headers
// header("Access-Control-Allow-Origin: http://localhost/rest-api-authentication-example/");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// files needed to connect to database
include_once 'config/database.php';
include_once 'objects/map.php';


// get database connection
$database = new Database();
$db = $database->getConnection();

// instantiate user object
$map = new Map($db);

if($_SERVER['REQUEST_METHOD'] != 'OPTIONS'){

    if($map->loadDistricts()){
        echo json_encode(array(
            "data" => $map->loadDistricts()
        ));
    }
 
}

