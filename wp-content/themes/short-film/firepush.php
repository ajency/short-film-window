<?php

define( 'API_ACCESS_KEY', 'AAAA2fvg6Cc:APA91bGh237ztTXzpmDFw4kqXvCe5luRdk70eiGmyDjbDO1FDXiiOvh_TWoGapFhkG2MNqLt16DeqzdRgJ1ctrPNb40eiOhEOXQvcydIG6SwTpYiqBXC6Tv0VU1KCPgcBYfpo8q_Q150' );
define( 'NOTIFICATIONS_STORE_DB', "https://shortfilmwindow-e5571.firebaseio.com/notifications.json");
define( 'FCM_SEND_URL', "https://fcm.googleapis.com/fcm/send");
define( 'TOPIC_ANDROID', "android");
define( 'TOPIC_ANDROID_KEY', "data");
define( 'TOPIC_IOS', "ios");
define( 'TOPIC_IOS_KEY', "notification");

class firePush
{
    function sendNotifications($msg, $topic = NULL)
    {
        if($topic)
        {

            $ch = curl_init(FCM_SEND_URL);

            $token = "/topics/".$topic;

            if($topic == TOPIC_ANDROID)
            {
                $dataKey = TOPIC_ANDROID_KEY;
            } else if ($topic == TOPIC_IOS){
                $dataKey = TOPIC_IOS_KEY;
            } else {
                //TODO show failure or error on screen or log or email?
                return;
            }

            $data = array('to' => $token, $dataKey => $msg);
            $json = json_encode($data);

            print "<pre>";
            print $json;

            $headers = array();
            $headers[] = "Content-Type: application/json";
            $headers[] = "Authorization: key= ".API_ACCESS_KEY;

            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
            curl_setopt($ch, CURLOPT_HTTPHEADER,$headers);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
            curl_setopt($ch, CURLOPT_POST, 1);
            $res = curl_exec($ch);

            print "<pre>";
            print $res;
            if(curl_errno($ch))
            {
                //TODO show failure or error on screen or log or email?
/*                echo 'Curl error: ' . curl_error($ch);*/
                return;
            }
            curl_close($ch);
        }
    }

    function saveNotification($data)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, NOTIFICATIONS_STORE_DB);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        $jsonResponse = curl_exec($ch);
        curl_close($ch);
        if(curl_errno($ch))
        {
            //TODO show failure or error on screen or log or email?
/*            echo 'Curl error: ' . curl_error($ch);*/
            return;
        }
        return json_decode($jsonResponse);
    }
}