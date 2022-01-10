<?php
require 'Database_connection.php';

$CompanyName = $_GET['CompanyName'];
$sql = "SELECT * FROM temporycompanylogin WHERE CompanyName = '{$CompanyName}' ";
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

