<?php
// used to get mysql database connection
class Database {

    private $Connection;

    // Connect to the database.
    public function __construct() {
        try {
            $this->Connection = new PDO('mysql:host=localhost;dbname=coronacuracao', 'bc', 'L@Gu4rd!*123');
           // $this->Connection = new PDO('mysql:host=localhost;dbname=ics_ics', 'ics_ics', ' test123!');
           
            //$this->Connection = new PDO('mysql:host=localhost;dbname=precario_precario', 'precario_bc', 'L@Gu4rd!*123');
            // Set the PDO error mode to exception. //TODO: Remove line in production.
            $this->Connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Connection failed: ' . $e->getMessage();
        }
    }

    // Get database connection.
    public function getConnection() {
        if ($this->Connection instanceof PDO) {
            return $this->Connection;
        }
    }

    // Close database connection.
    public function closeConnection() {
        $this->Connection = null;
    }

}
