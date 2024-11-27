<?php
$servername = "localhost";
$username = "d6ls9i2roxlr";
$password = "dKX2@%oO030q";
$dbname = "i9371826_leth1";
$table = "visitors";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the user's IP address
$ip_address = $_SERVER['REMOTE_ADDR'];

// Use an IP Geolocation API to get the location
$api_url = "http://ip-api.com/json/{$ip_address}";
$response = file_get_contents($api_url);
$data = json_decode($response, true);
$location = $data['city'] . ", " . $data['country'];

// Insert the data into the database
$sql = "INSERT INTO $table (ip_address, location) VALUES ('$ip_address', '$location')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success", "ip_address" => $ip_address, "location" => $location]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}

$conn->close();

