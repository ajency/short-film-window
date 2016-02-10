<?php

require 'vendor/autoload.php';

$app_id = 'DMhdPZNQAUzklzpPb9Lhp8qHZFjcVU9klP0jxLsO';
$rest_key = '23SdM1zR6lpVfA28dbcOlAJQD8nFgNxLHDwMeTmk';
$master_key = 'LALmaz73J44ndeC2n7vuuySMVLGHUSTEQADmJPKN';

use Parse\ParseObject;
use Parse\ParseQuery;
use Parse\ParseACL;
use Parse\ParsePush;
use Parse\ParseUser;
use Parse\ParseInstallation;
use Parse\ParseException;
use Parse\ParseAnalytics;
use Parse\ParseFile;
use Parse\ParseCloud;
use Parse\ParseClient;

ParseClient::initialize( $app_id, $rest_key, $master_key );

class pushNotifications
{
  public function sendNotifications($data){
    
    $notifications = new ParseCloud();
    $result = $notifications->run("sendNotification",$data);
   /* echo "<pre>";
    print_r($result);
    echo "</pre>";*/
  }

  public function updateNotificationStatus(){
    $notifications = new ParseCloud();
    $data = array("installation_id" =>"");
    $data = array("notification_id" => "XQnHqsa6pA","installation_id" =>"VW9rN3ugHJ");

    $result = $notifications->run("updateNotificationStatusAsRead",$data);
    echo "<pre>";
    print_r($result);
    echo "</pre>";
  }

  public function listAllNotificationsForUser(){
    $notifications = new ParseCloud();
    $data = array("installation_id" =>"VW9rN3ugHJ");
    $result = $notifications->run("listAllNotificationsForUser",$data);
    echo "<pre>";
    print_r($result);
    echo "</pre>";
  }


}

/*
  $data = array("alert" => "newdats","movieId" =>"444");
  $notify = new pushNotifications;
  $notify->sendNotifications($data);

*/

?>