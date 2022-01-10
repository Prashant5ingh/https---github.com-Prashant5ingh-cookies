<?php
include_once("Database_connection.php");


    $email= $_GET['Email'];
		// generate OTP
		$otp = rand(100000,999999);
		// Send OTP
		require_once("OTP_sendEmail.php");
	$mail_status = sendOTP($email,$otp);		
	if($mail_status == 1) {
			$result = mysqli_query($con,"INSERT INTO otp_expiry(otp,email,is_expired,create_at) VALUES ('" . $otp . "','" . $email . "', 0, '" . date("Y-m-d H:i:s"). "')");
			$current_id = mysqli_insert_id($con);
			if(!empty($current_id)) {
				$success=1;
				
				echo json_encode($current_id);
			}
		}
		 else {
		$error_message = "Email not exists!";
		echo($error_message);
	}



?>