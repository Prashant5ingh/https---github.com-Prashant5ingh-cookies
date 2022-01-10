<?php
include_once("Database_connection.php");
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $id = trim($request->id);   
        $meterName = trim($request->meterName);
        $meterid = trim($request->meterid);
        $company = trim($request->company);
        $location = trim($request->location);
       
        
      
        //$sql = "INSERT INTO meterregistration (meterName, meterId, section) VALUES ('$meterName', '$meterId', '$section')";
         $sql = "UPDATE sensordata SET Device_name = '{$meterName}' WHERE Device_Id = '{$meterid}'";
         

            if($con->query($sql) === TRUE) {
                $authdata = [
                    'Device_name' => $meterName,
                    'id' => mysqli_insert_id($con)
                    ];
                echo json_encode($authdata);
            } else {
                
                http_response_code(404);
            }
        }

       
?>