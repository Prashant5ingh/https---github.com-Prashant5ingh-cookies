<?php
    include_once("Database_connection.php");
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata)) {
       
        $request = json_decode($postdata);
        $CompanyName = trim($request->CompanyName);
        $Name = trim($request->Name);
        $Designation = trim($request->Designation);
        $Email = mysqli_real_escape_string($con, trim($request->Email));
        $MobileNo = mysqli_real_escape_string($con, trim($request->MobileNo));
        $Address = trim($request->Address);
        $ColdStorage = $request->ColdStorage;
        $Energy = $request->Energy;
        $Password = mysqli_real_escape_string($con, trim($request->Password));
        $ConfirmPassword = mysqli_real_escape_string($con, trim($request->ConfirmPassword));
        $OTP = trim($request->OTP);

        $result = mysqli_query($con,"SELECT * FROM otp_expiry WHERE otp='" . $OTP . "' AND is_expired!=1 AND email='". $Email ."' AND NOW() <= DATE_ADD(create_at, INTERVAL 24 HOUR)");
	$count  = mysqli_num_rows($result);
	
        if($Password==$ConfirmPassword){
            if(!empty($count)) {
                $result = mysqli_query($con,"UPDATE otp_expiry SET is_expired = 1 WHERE otp = '" . $OTP . "'");
                $success = 2;	
            } else {
                $success =1;
                
            }
            if($success==2){
            $sql = "INSERT INTO temporycompanylogin(CompanyName, Name, Designation, Email, MobileNo, Address, ColdStorage, Energy, Password) VALUES ('$CompanyName', '$Name', '$Designation', '$Email', '$MobileNo', '$Address', '$ColdStorage', '$Energy', '$Password')";

            if ($con->query($sql) === TRUE) {
                $authdata = [
                    'CompanyName' => $CompanyName,
                    'Email' => $Email,
                    'TempID' => mysqli_insert_id($con)
                    ];
                echo json_encode($authdata);
            } else {
                
                echo('yaha error hai');
            }
        }
        else{
            http_response_code(404);
        }
        }
        else{
            echo json_encode("password does not match");
        }
    
   
    }
        else{
            echo('waha error hai');
        }
?>