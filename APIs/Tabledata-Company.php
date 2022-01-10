<?php
require 'Database_connection.php';
$companyName = $_GET['companyName'];
// $sql = "SELECT * FROM sensordata WHERE Device_Id IN (SELECT meterid FROM meterregistration where company= '{$companyName}') ORDER BY reading_time DESC";
$sql = "SELECT * FROM sensordata WHERE Client = '{$companyName}' ORDER BY id ASC";
$myArray = array();

if($result = mysqli_query($con,$sql))
{
    while($row = mysqli_fetch_assoc($result))
  {
    $myArray[] = $row;
  }

  echo json_encode($myArray);
}
else
{
  http_response_code(404);
}
?>

