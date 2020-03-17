<?php

class Marquee {

    // database connection and table name
    private $conn;
    private $table_name = "marquee";
    // object properties
    public $marqueeId;
    public $active;
    public $text;

    // constructor
    public function __construct($db) {
        $this->conn = $db;
    } 
 

    function loadMarquees() {

        // insert query
        $query = "SELECT * FROM $this->table_name WHERE active = '1'";

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
