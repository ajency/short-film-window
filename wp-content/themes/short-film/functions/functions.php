<?php

function retrieve_previous_post()
{
	$post_data = get_previous_post();

	
	$post  = 0 ;

	if(!empty($post_data) || !is_null($post_data)){

		$post = $post_data;

	}

	return $post;
}


function retrieve_next_post()
{
	$post_data = get_next_post();

	$post  = 0 ;

	if(!empty($post_data) || !is_null($post_data)){

		$post = $post_data;

	}

	return $post;
}


function get_user_details($user_id = 0){

	if($user_id == 0)
		$user_id = get_current_user_by_id();

	$response = get_userdata($user_id);

	$response->user_like_count = get_user_meta( $user_id, "wp__user_like_count", true );

	if($response)
		return $response;
	else
		return false;



}

function get_custom_taxonomy_terms($post_id){



	$results = get_the_terms($post_id, 'region');

	$response = array();
	
	if(!empty($results) > 0){
		foreach ($results as $key => $value) {

			$response[] = $value->name;
		
		}
	}
	

	return $response;

}

function get_focus_film($id){

	$args = array(
        'tag' 					=> 'infocus',
        'posts_per_page' 		=> 1,
        'orderby'          		=> 'post_date',
		'order'            		=> 'DESC',
		'post_type' 	   		=> 'post',
		'post_status'      		=> 'publish',
					
      );

	
	$query = new WP_Query( $args);

	$response = array();
	$actual_response = array();
	while ( $query->have_posts() ) {
		$query->the_post();
		$response = Film\Video::get($query->post->ID);
		$response['post_like_count'] = get_post_meta( $query->post->ID, "_post_like_count", true );
		$response['post_date']	= date('Y-m-d',strtotime($query->post->post_date));
		$actual_response[] = $response;
	}



	return $actual_response;


}

function get_posts_based_tags($tag){

	$args = array(
        'tag' 					=> $tag,
        'posts_per_page' 		=> 3,
        'orderby'          		=> 'post_date',
		'order'            		=> 'DESC',
		'post_type' 	   		=> 'post',
		'post_status'      		=> 'publish',
					
      );

	
	$query = new WP_Query( $args);

	$response = array();
	while ( $query->have_posts() ) {
		$query->the_post();
		$response[] = Film\Video::get($query->post->ID);
		
	}



	return $response;

}




function generate_grid_response($response){

	
	$grid = array();
	$multiple = array(6,12);
	$k = 0 ;
	
	for ($i= 0; $i < $multiple[$k]; $i++) { 
		
		if($response[$i] == ""){
			$grid[$k][$i] =  array(
				'slug'			=> "",
				'title'			=> "",
				'type'			=> "",
				'tagline'		=> "",
				'videourl'  	=> "",
				'excerpt'		=> "",
				'director'		=> "Not yet created",
				'next_post'		=> "",
				'prev_post'		=> "",
				'comments'		=> "",
				'categories'	=> array(0 => 'No categories'),
				'duration'		=> 0,
				'region'		=> array(0 => 'No regions'),
				'tags'			=> "",
				'image'			=> 'image',
				'user_like_count'	=> ""

			);

		}
		else
			$grid[$k][$i] = $response[$i];
		
		if($i == 5 && count($response) > $multiple[$k])
		{
			$k = $k + 1;
			$i =0 ;
		}
			
	}
	

	return $grid;


}

function get_posts_filter($args){

	global $wpdb;

	$response = array();
	    

	$postid = $wpdb->get_col("select ID from $wpdb->posts where post_title LIKE '".$args['title']."%' ");

    $args1 = array( 'meta_key' => 'first_name', 'meta_value' => $args['title'] );
	$user_query = new WP_User_Query($args1);

	$author = "";
	if ( ! empty( $user_query->results ) ) {

		foreach ( $user_query->results as $user ) {
			$author =  $user->id;
		}

	}
	
	if(count($postid) != 0 || $author != "")
	{
		$params = array(
        'post__in'			=> $postid,
        'posts_per_page'	=> $args['posts_per_page'],
        'order' 			=> $args['order'],
        'orderby'			=> $args['orderby'],
        'post_type' 		=> 'post',
        'author'			=> $author
    	);


	    
		$query = new WP_Query($params);
	    while ( $query->have_posts() ) {
			$query->the_post();
			$response[] = Film\Video::get($query->post->ID);
			
		}
	}

	

   return $response;

}