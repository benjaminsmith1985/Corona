<?php

// required headers
// header("Access-Control-Allow-Origin: http://localhost/rest-api-authentication-example/");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// files needed to connect to database
include_once 'config/database.php';
include_once 'objects/chart.php';


// get database connection
$database = new Database();
$db = $database->getConnection();

// instantiate user object
$chart = new Chart($db);

if($_SERVER['REQUEST_METHOD'] != 'OPTIONS'){

    if($chart->getSumChartData()){
        $array = [];

        $array[] = ['Date', 'Bevestigd', 'Sterfgevallen', 'Hersteld'];

        foreach($chart->getStats() as $stats){
            $array[] = [$stats['date'], 1 * $stats['confirmed'],1 * $stats['deaths'],1 * $stats['recovered']];
        }

        echo json_encode(array(
            "sum" => $chart->getSumChartData(),
            "stats" => $array
        ));
    }
 
}

