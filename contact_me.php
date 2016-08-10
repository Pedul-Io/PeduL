<?php
   if (isset($_POST["submit"])) {
         $name = $_POST['name'];
         $email = $_POST['email'];
         $phone = $_POST['phone'];
         $message = $_POST['message'];
         $from = 'PeduL Contact Form';
         $to = 'murtalaliyu10@yahoo.com';
         $email_subject = "Website Contact Form:  $name";

         $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";


         // Check if name has been entered
         if (!$_POST['name']) {
            $errName = 'Please enter your name';
         }

         // Check if email has been entered and is valid
         if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $errEmail = 'Please enter a valid email address';
         }

         //Check if phone has been entered
         if (!$_POST['phone']) {
            $errPhone = 'Please enter your phone number';
         }

         //Check if message has been entered
         if (!$_POST['message']) {
            $errMessage = 'Please enter your message';
         }


         // If there are no errors, send the email
         if (!$errName && !$errEmail && !$errPhone && !$errMessage ) {
            if (mail ($to, $email_subject, $email_body, $from)) {
               $result='<div class="alert alert-success">Thank You! I will be in touch</div>';
            } else {
               $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
            }
         }
   }     


?>