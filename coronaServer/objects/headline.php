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

    function update() {
        // insert query
        $query = "UPDATE " . $this->table_name . "
            SET
                text = :text
                WHERE headlineId = :headlineId";

        // prepare the query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->text = htmlspecialchars(strip_tags($this->text));
        $this->headlineId = htmlspecialchars(strip_tags($this->headlineId));

        // bind the values
        $stmt->bindParam(':text', $this->text);
        $stmt->bindParam(':headlineId', $this->headlineId);

        // execute the query, also check if query was successful
        if ($stmt->execute()) {
            return true;
        }

        return false;
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
