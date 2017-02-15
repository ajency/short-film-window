<?php

$test = true;
if($test){
    $api_access_key = 'AIzaSyCVSA3tkbBp7Sk_4HB3GYnfFL0u3XUbJfk';
    $notification_storage_db = 'https://shortfilmwindow-e5571.firebaseio.com/notifications.json';
} else {
    $api_access_key = 'AIzaSyCIzwFzGdQUCc_CXpo7WfW8rg_5kHyQjfU';
    $notification_storage_db = 'https://sfwindow-b3160.firebaseio.com/notifications.json';
}

//define( 'API_ACCESS_KEY', 'AAAAdFkKiRM:APA91bHakngVy9EGqjjyCHXI3m_oDPeTU2RJaFHvfTmKUsQjxGoxu71xxwCy1qppNlZ0fRzei8u22UF0sovmv0OC_gw3jE7MvjaFscSypg1wwuakSNLE8MRpMf7eFjeQNNWD8e5QpU62' );
define( 'API_ACCESS_KEY', $api_access_key);
define( 'NOTIFICATIONS_STORE_DB', $notification_storage_db);
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

            $token = '/topics/'.$topic;

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
            $json = json_encode($data, JSON_UNESCAPED_SLASHES);

            $headers = array();
            $headers[] = "Content-Type: application/json";
            $headers[] = "Authorization: key= ".API_ACCESS_KEY;

            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
            curl_setopt($ch, CURLOPT_HTTPHEADER,$headers);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
            curl_setopt($ch, CURLOPT_POST, 1);
            $res = curl_exec($ch);

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