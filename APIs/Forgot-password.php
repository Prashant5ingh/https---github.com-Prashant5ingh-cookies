<?php
    ini_set("SMTP","ssl://smtp.gmail.com");
    ini_set("smtp_port","25");
    include_once("database.php");
    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $Email = trim($request->Email);

        $subject = "Change password";
        $link = "http://mayurdafare.ml/reset-password";
        $txt = "Link to reset password: ".$link."";
        $headers = "From: info.senselive@gmail.com";
        mail($Email,$subject,$txt,$headers);
        echo json_encode($rndno);
    }
?>
