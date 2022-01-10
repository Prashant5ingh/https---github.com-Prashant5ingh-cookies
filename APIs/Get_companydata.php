<?php
require 'Database_connection.php';

$sql = "SELECT * FROM temporycompanylogin";
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

