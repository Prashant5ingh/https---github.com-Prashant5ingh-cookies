<?php
require 'Database_connection.php';
$mid=$_GET['mid'];
$sql = "SELECT reading_time,Apparent_Power FROM sensordata WHERE Device_Id = '{$mid}' ORDER BY reading_time DESC LIMIT 3";
$myArray = array();
if($result = mysqli_query($con,$sql))
{
    while($row = mysqli_fetch_array($result))
  {
    $myArrayItem= array("reading_time" =>  $row['reading_time'] ,"Apparent_Power"=> $row['Apparent_Power']);
    array_push($myArray,$myArrayItem);
  } 
 header('Content-type: application/json');
  echo json_encode($myArray,JSON_NUMERIC_CHECK);
}
else
{
  http_response_code(404);
}
?>