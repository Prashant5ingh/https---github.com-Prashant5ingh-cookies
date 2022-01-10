<?php
require 'Database_connection.php';
$m_id = $_GET['m_id'];
$sql = "SELECT * FROM sensordata WHERE Device_Id = '{$m_id}' ORDER BY id ASC";
$myArray = array();

if($result = mysqli_query($con,$sql))
{
    while($row = mysqli_fetch_assoc($result))
  {
    $myArray[] = $row;
  }

  echo json_encode($myArray);
}
/*for multiquery
if (mysqli_multi_query($con,$sql)){
  do{
     if ($result=mysqli_store_result($con)){
        while ($row=mysqli_fetch_row($result)){
          $myArray[] = $row;
        }
        echo json_encode($myArray);
     }
  }while (mysqli_next_result($con));
  
}*/
else
{
  http_response_code(404);
}
?>

