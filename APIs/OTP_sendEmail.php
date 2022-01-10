<?php
use PHPMailer\PHPMailer\PHPMailer;
function sendOTP($email,$otp){

require_once 'OTP_Exception.php';
require_once 'OTP_PHPMailer.php';
require_once 'OTP_SMTP.php';
$mail= new PHPMailer(true);

	
		$mail->isSMTP();
		$message_body = "One Time Password for verification :<br/><br/>" . $otp;
		$mail->Host='smtp.gmail.com';
		$mail->SMTPAuth=true;
		$mail->Username='info.senselive@gmail.com';
		$mail->Password='world4.0';
		$mail->SMTPSecure=PHPMailer::ENCRYPTION_STARTTLS;
		$mail->Port='587';
		
		$mail->setFrom('info.senselive@gmail.com');
		$mail->addAddress($email);
		
		$mail->isHTML(true);
		$mail->Subject = "OTP Verification";
		$mail->MsgHTML($message_body);

		
		$result=$mail->send();
		return $result;
}
	
?>