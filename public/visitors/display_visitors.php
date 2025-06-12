
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


// Fetch data from the database
$sql = "SELECT * FROM $table";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table style='width:100%; border-collapse: collapse;'>
            <tr>
                <th style='border: 1px solid black; padding: 8px;'>ID</th>
                <th style='border: 1px solid black; padding: 8px;'>IP Address</th>
                <th style='border: 1px solid black; padding: 8px;'>Location</th>
                <th style='border: 1px solid black; padding: 8px;'>Visit Time</th>
            </tr>";
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td style='border: 1px solid black; padding: 8px;'>".$row["id"]."</td>
                <td style='border: 1px solid black; padding: 8px;'>".$row["ip_address"]."</td>
                <td style='border: 1px solid black; padding: 8px;'>".$row["location"]."</td>
                <td style='border: 1px solid black; padding: 8px;'>".$row["visit_time"]."</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

$conn->close();
?>