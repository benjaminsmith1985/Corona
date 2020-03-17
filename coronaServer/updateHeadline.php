<?php
// files needed to connect to database
include_once 'config/database.php';
include_once 'functions.php';
include_once 'objects/headline.php';
require 'vendor/autoload.php';

// required to decode jwt
include_once 'config/core.php';
include_once 'libs/php-jwt/src/BeforeValidException.php';
include_once 'libs/php-jwt/src/ExpiredException.php';
include_once 'libs/php-jwt/src/SignatureInvalidException.php';
include_once 'libs/php-jwt/src/JWT.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// instantiate user object
$headline = new Headline($db);

use \Firebase\JWT\JWT;

// get posted data
$data = json_decode(file_get_contents("php://input"));

// get jwt

$headers = apache_request_headers();

$jwt = getBearerToken();

if($_SERVER['REQUEST_METHOD'] != 'OPTIONS'){
    // if jwt is not empty
    if ($jwt) {

        // if decode succeed, show user details
        try {
            // decode jwt
            $decoded = JWT::decode($jwt, $key, array('HS256'));     
            $headline->headlineId = 1;
            $headline->text = 'testText'; 
            $headline->update();

            http_response_code(200);
              
        }

        // if decode fails, it means jwt is invalid
        catch (Exception $e) {

            // set response code
            //http_response_code(401);

            // tell the user access denied  & show error message
            echo json_encode(array(
                "message" => "Access denied.",
                "error" => $e->getMessage()
            ));
        }
    } 
    // show error message if jwt is empty
    else{
    
        // set response code
        http_response_code(401);
    
        // tell the user access denied
        echo json_encode(array("message" => "Access denied."));
    }

}

