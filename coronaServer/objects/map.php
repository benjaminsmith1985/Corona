<?php

class Map {

    // database connection and table name
    private $conn;
    private $table_name = "district";
    // object properties
    public $name;
    public $type;
    public $shape;
    public $hasPoll;
    public $zoneId;
    public $amount;

    // constructor
    public function __construct($db) {
        $this->conn = $db;
    } 
 

    function loadDistricts() {

        // insert query
        $query = "SELECT * FROM $this->table_name";

        // prepare the query
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            $num = $stmt->rowCount();
            if ($num > 0) {
                // get record details / values
                $row = $stmt->fetchAll(PDO::FETCH_ASSOC);    
                return $row;
            }
        }

        return false;
    }

}
