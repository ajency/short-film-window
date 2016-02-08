<?php


FB.Event.subscribe('comment.create',
	function(response) 
	{
		onCommentCreate(response.commentID,response.href); //Handle URL on function to store on database
		alert(response.href); //it gives you url
	}
);

function onCommentCreate(commentID,href) 
{
	$.ajax({
		type: 'POST',
		url: 'handlecomment.php',
		data: {commentid:commentID,href:href},
		success: function(result)
		{
		alert(result);
		}
	});
}
//hadlecomment.php
'YOUR_APP_ID',
'secret' => 'YOUR_APP_SECRET',
);
$facebook = new Facebook($config);
$user_id = $facebook->getUser();
$accesstoken=$facebook->getAccessToken();
if($user_id) {
$facebook->setAccessToken($accesstoken);
$fql = 'SELECT text from comment where id = ' . $commentid;
$ret_obj = $facebook->api(array(
'method' => 'fql.query',
'query' => $fql,));
$comment= $ret_obj[0]['text'] ;
$insert_comment="insert into comments(pid,comment) values($pid,$comment)";
mysql_query($insert_comment);
}
?>
?>
//YOu need to set data-href of comment should be look like this...
//i am using more comments on my website so i looped through to add comment
while($result=mysql_fetch_assoc(mysql_query($query)))
{
$pic_id=$result['pic_id']; // i have saved unique pic id in my database for all images so i am
//retrieving that here
<div class="fb-comments" style=" position:relative;left:55px;top:10px;" data-href="&lt;?php echo 'http://www.lpuphotography.edul... . $pic_id; ?&gt;" data-width="470" data-num-posts="2"></div>
}
//if you are using single comment
<div class="fb-comments" style=" position:relative;left:55px;top:10px;" data-href="&lt;?php echo 'http://www.lpuphotography.edul... ?&gt;" data-width="470" data-num-posts="2"></div>
//101 is comment id , u can set what ever you want



?>