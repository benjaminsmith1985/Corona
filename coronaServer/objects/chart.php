<?php

class Chart{

    // database connection and table name
    private $conn;
    private $table_name = "chart";
    // object properties
    public $chartId;
    public $deaths;
    public $confirmed;
    public $date;
    public $recovered;

    // constructor
    public function __construct($db) {
        $this->conn = $db;
    } 

    
    function getStats() {

        // insert query
        $query = "SELECT * , DATE_FORMAT(date, '%M %d, %Y') as date FROM $this->table_name";

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
 

    function getSumChartData() {

        // insert query
        $query = "SELECT SUM(recovered) as recovered, SUM(deaths) as deaths, SUM(confirmed) as confirmed FROM $this->table_name";

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
