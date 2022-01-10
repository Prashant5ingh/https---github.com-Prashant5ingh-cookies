<?php
include_once("Database_connection.php");
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $meterName = trim($request->meterName);
        $meterid = trim($request->meterid);
        $company = trim($request->company);
        $location = trim($request->location);
        $sql = "INSERT INTO meterregistration (meterName, meterid,company,location)
        SELECT '$meterName', '$meterid', '$company', '$location'
        WHERE NOT EXISTS 
            (SELECT meterid 
             FROM meterregistration 
             WHERE meterid = '$meterid')";
             mysqli_query($con,$sql);
         if (mysqli_affected_rows($con)) {
                $authdata = [
                    'meterName' => $meterName,
                    'meterid' => $meterid,
                    'company' => $company,
                    'location' => $location,
                    'id' => mysqli_insert_id($con)
                    ];
                echo json_encode($authdata);
            } 
            else {
                
                echo json_encode($authdata);
            }
        }

       
?>