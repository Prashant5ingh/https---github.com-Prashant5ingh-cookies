<?php
require 'Database_connection.php';

$value = $_GET['value'];
$sql = "SELECT * FROM meterregistration WHERE company = '{$value}' ";
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

