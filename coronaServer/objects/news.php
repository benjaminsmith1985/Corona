<?php

class News{

    // database connection and table name
    private $conn;
    private $table_name = "news";
    // object properties
    public $newsId;
    public $date;
    public $text;

    // constructor
    public function __construct($db) {
        $this->conn = $db;
    } 
 

    function loadNews() {

        // insert query
        $query = "SELECT *, DATE_FORMAT(date, '%M %d, %Y') as date FROM $this->table_name ORDER BY date DESC";

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
