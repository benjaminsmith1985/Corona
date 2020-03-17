<?php

class Headline {

    // database connection and table name
    private $conn;
    private $table_name = "headline";
    // object properties
    public $headlineId;
    public $text;

    // constructor
    public function __construct($db) {
        $this->conn = $db;
    } 
 

    function getHeadline() {

        // insert query
        $query = "SELECT * FROM $this->table_name";

        // prepare the query
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            $num = $stmt->rowCount();
            if ($num > 0) {
                // get record details / values
                $row = $stmt->fetch(PDO::FETCH_ASSOC);    
                return $row;
            }
        }

        return false;
    }

}
