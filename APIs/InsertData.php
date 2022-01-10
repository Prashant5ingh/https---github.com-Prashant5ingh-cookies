<?php
$servername = "localhost";

// REPLACE with your Database name
$dbname = "internship_project";
// REPLACE with Database user
$username = "root";
// REPLACE with Database user password
$password = "";

// Keep this API Key value to be compatible with the ESP32 code provided in the project page. 
// If you change this value, the ESP32 sketch needs to match
$api_key_value = $_GET['m_id'];

$api_key= $sensor = $location = $value1 = $value2 = $value3 =$value4 = $value5 = $value6 = $value7 = $value8 =$value9 = $value10 =$value11 = $value12 = $value13 =$value14 = $value15 =$value16 =  $timestamp ="";

date_default_timezone_set('Asia/Kolkata');
$timestamp =  date( '  d-m-Y  h:i:s ', time ());

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $api_key = test_input($_POST["api_key"]);
    if($api_key == $api_key_value) {
        $api_key = test_input($_POST["sensor"]);
        $location = test_input($_POST["location"]);
        $value1 = test_input($_POST["value1"]);
        $value2 = test_input($_POST["value2"]);
        $value3 = test_input($_POST["value3"]);
         $value4 = test_input($_POST["value4"]);
        $value5 = test_input($_POST["value5"]);
        $value6 = test_input($_POST["value6"]);
        $value7 = test_input($_POST["value7"]);
        $value8 = test_input($_POST["value8"]);
         $value9 = test_input($_POST["value9"]);
        $value10 = test_input($_POST["value10"]);
        $value11 = test_input($_POST["value11"]);
        $value12 = test_input($_POST["value12"]);
        $value13 = test_input($_POST["value13"]);
         $value14 = test_input($_POST["value14"]);
        $value15 = test_input($_POST["value15"]);
        $value16 = test_input($_POST["value16"]);
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 
        
        $sql = "INSERT INTO sensordata (reading_time, Device_ID, Client, Voltage_AN, Voltage_BN, Voltage_CN,Voltage_Avg, Frequency, Current_A , Current_B, Current_C, Current_Avg, Active_Power, Reactive_Power, Apparent_Power, Power_Factor , KWH, kVARh,kVAh)
        VALUES ('" . $timestamp . "','" . $api_key . "', '" . $location . "', '" . $value1 . "', '" . $value2 . "', '" . $value3 . "', '" . $value4 . "', '" . $value5 . "', '" . $value6 . "', '" . $value7 . "', '" . $value8 . "', '" . $value9 . "', '" . $value10 . "', '" . $value11 . "', '" . $value12 . "', '" . $value13 . "', '" . $value14 . "', '" . $value15 . "', '" . $value16 . "')";
        
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    
        $conn->close();
    }
    else {
        echo "Wrong API Key provided.";
    }

}
else {
    echo "No data posted with HTTP POST.";
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}