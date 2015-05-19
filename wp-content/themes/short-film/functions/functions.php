<?php

function retrieve_previous_post()
{
	$post_data = get_previous_post();

	
	$post  = 0 ;

	if(!empty($post_data) || !is_null($post_data))
	{

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

// function get_custom_taxonomy_terms($post_id)
function get_custom_taxonomy_terms_region($post_id)
{
	$results = get_the_terms($post_id, 'region');

	$response = array();
	
	if(!empty($results) > 0)
	{
		foreach ($results as $key => $value) 
		{
			$response[] = $value->name;		
		}
	}
		
	return $response;
}


function get_custom_taxonomy_terms_language($post_id)
{
	$results = get_the_terms($post_id, 'language');

	$response = array();
	
	if(!empty($results) > 0)
	{
		foreach ($results as $key => $value) 
		{
			$response[] = $value->name;		
		}
	}
		
	return $response;
}


function get_custom_taxonomy_terms_playlist($post_id)
{
	$results = get_the_terms($post_id, 'playlist');

	$response = array();
	
	if(!empty($results) > 0)
	{
		foreach ($results as $key => $value) 
		{
			$response[] = $value->name;		
		}
	}
		
	return $response;
}

function get_focus_film($id)
{
/*
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
		$response['post_date']	= date('M d, Y',strtotime($query->post->post_date));
		$actual_response[] = $response;
	}

	return $actual_response;
*/

/////////////

	$response = array();
	//$actual_response = array();

	//if there is a related article stored in DB for the post then the in focus section shud display this particular article else it shud display most recent article 
	
	$related_article = get_post_meta( $id , 'related_article', true );
		
	if($related_article)
	{
		$response = Article_post\Article::get_article($related_article);

	}
	else
	{
		$args = array(
			'posts_per_page' 		=> 1,
			'orderby'          		=> 'post_date',
			'order'            		=> 'DESC',
			'post_type' 	   		=> 'article',
			'post_status'      		=> 'publish'						
		);

	
		$query = new WP_Query($args);
		
		while ( $query->have_posts() ) 
		{
			$query->the_post();
			$response = Article_post\Article::get_article($query->post->ID);

		}
		
	}
	

	//return $actual_response;
	return $response;


} //end get_focus_film()


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
	
	// echo "hi";
	// print_r($response);

	return $response;

}

function get_posts_based_cats($cat)
{

	$args = array(
        'category_name' 			=> $cat,
        'posts_per_page' 			=> 3,
        'orderby'          			=> 'post_date',
		'order'            			=> 'DESC',
		'post_type' 	   			=> 'post',
		'post_status'      			=> 'publish',
					
      );

	
	$query = new WP_Query( $args);

	$response = array();
	while ( $query->have_posts() ) {
		$query->the_post();
		$response[] = Film\Video::get($query->post->ID);
		
	}



	return $response;

}


function get_posts_based_regions($region_name)
{
			
		$args = array(
			//'category_name' => $cat,
			'posts_per_page' => 3,
			'orderby'        => 'post_date',
			'order'          => 'DESC',
			'post_type' 	 => 'post',
			'post_status'    => 'publish',
			
			'tax_query' 	 => array(
									array(
									  'taxonomy' => 'region',									 
									   'field' => 'name',								 
									  'terms' => $region_name 									 
									)
								)
				
      );

	
	$query = new WP_Query( $args);

	$response = array();
	while ( $query->have_posts() ) 
	{
		$query->the_post();
		$response[] = Film\Video::get($query->post->ID);
		
	}
		

	return $response;

}


function generate_grid_response($response){

	
	$grid = array();
	$multiple = array(6,6);
	$k = 0 ;
	
	$j = 0; 
	for ($i = 0; $i < $multiple[$k]; $i++) { 
		if($response[$j] == ""){
			$grid[$k][$i] =  array(
				'id'			=> "",
				'slug'			=> "",
				'title'			=> "",
				'type'			=> "",
				'tagline'		=> "",
				'videourl'  	=> "",
				'excerpt'		=> "",
				'director'		=> "",
				'next_post'		=> "",
				'prev_post'		=> "",
				'comments'		=> "",
				'categories'	=> array(0 => ''),
				'duration'		=> 0,
				'region'		=> array(0 => ''),
				'tags'			=> "",
				'featured_image'	=> get_template_directory_uri().'/assets/img/placeholder.jpg',
				'small_image'	=> get_template_directory_uri().'/assets/img/placeholder.jpg',
				'medium_image'	=> get_template_directory_uri().'/assets/img/placeholder.jpg',
				'large_image'	=> get_template_directory_uri().'/assets/img/placeholder.jpg',
				'user_like_count'	=> "",
				'post_like_count' => 0,
				'no_of_views'	=> 0


			);

		}
		else
			$grid[$k][$i] = $response[$j];
		
		if($i == 5 && count($response) > $multiple[$k])
		{
			$k = $k + 1;
			$i = -1 ;
		}
		$j++;	
	}
	
	return $grid;

}

/*
function get_posts_filter($args)
{
	global $wpdb;

	$response = array();
	    	
	$postid = $wpdb->get_col("select ID from $wpdb->posts where post_title LIKE '%".$args['title']."%' or post_content LIKE '%".$args['title']."%' or post_excerpt LIKE '%".$args['title']."%' ");
	
	// echo "postid for title";
	// print_r($postid);
	
    $args1 = array( 'meta_key' => 'first_name', 'meta_value' => $args['title'] );
	$user_query = new WP_User_Query($args1);
	
	$author = "";
	if ( ! empty( $user_query->results ) ) 
	{
		foreach ( $user_query->results as $user ) 
		{
			$author =  $user->id;
		}

	}
	
////////
		
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
		
					//////////////////////
	else
	{
		$args_tag=array('tag' => $args['title']);
		
		$tag_query = new WP_Query($args_tag);
		
		while ( $tag_query->have_posts() ) 
		{
			$tag_query->the_post();
			$response[] = Film\Video::get($tag_query->post->ID);
			
		}
		
	}
					////////////////////
					
	//print_r($response);	
	
   return $response;

}
*/



function get_posts_filter($args)
{
	global $wpdb;
		
	$searchtext = $args['title'];
	
	$response = array();
	 
		// 1. searchtext  = post title or post content
	
	$query_title = "SELECT ID
					FROM wp_posts
					WHERE (post_title LIKE '%".$searchtext."%' OR post_content LIKE '%".$searchtext."%' OR post_excerpt LIKE '%".$searchtext."%') AND post_status = 'publish' AND post_type = 'post'";
	
	$postidset = $wpdb->get_col($query_title);
		
		
	if(count($postidset) == 0)   //2. searchtext = authorname
	{	
		$query_author = "
				SELECT ID
				FROM wp_posts
				INNER JOIN wp_usermeta ON wp_posts.post_author = wp_usermeta.user_id
				WHERE (post_status = 'publish') AND (post_type = 'post') AND ((meta_key = 'first_name' AND meta_value LIKE '%".$searchtext."%') OR (meta_key = 'last_name' AND meta_value LIKE '%".$searchtext."%'))";

		 
		 $postidset = $wpdb->get_col($query_author);	
		 		 
	}
	
	if(count($postidset) == 0)  //3. searchtext = tag
	{
		
		$query_tag = "
				SELECT wp_posts.ID 
				FROM wp_posts, wp_terms, wp_term_taxonomy, wp_term_relationships
				WHERE (wp_posts.ID = wp_term_relationships.object_id) 
				AND (wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id) 
				AND (wp_term_taxonomy.term_id = wp_terms.term_id) 
				AND (wp_posts.post_status = 'publish') 
				AND (wp_posts.post_type = 'post') 
				AND (wp_terms.name LIKE '%".$searchtext."%')";
				
			 
		 $postidset = $wpdb->get_col($query_tag);
		
	}

	if(count($postidset) != 0)  //retrieve post info based on the post ids fetched above
	{
		$params = array(
        'post__in'			=> $postidset,
        'posts_per_page'	=> $args['posts_per_page'],
        'order' 			=> $args['order'],
        'orderby'			=> $args['orderby'],
        'post_type' 		=> 'post',
		'post_status' 		=> 'publish'
     
    	);

	    
		$query = new WP_Query($params);
	    while ( $query->have_posts() ) 
		{
			$query->the_post();
			$response[] = Film\Video::get($query->post->ID);
			
		}
	}
							
   return $response;

}

/*
function get_articles_filter($args)
{

	global $wpdb;

	$response = array();
	    

	//$postid = $wpdb->get_col("select ID from $wpdb->posts where post_title LIKE '".$args['title']."%' ");
	
	$postid = $wpdb->get_col("select ID from $wpdb->posts where post_title LIKE '%".$args['title']."%' or post_content LIKE '%".$args['title']."%' or post_excerpt LIKE '%".$args['title']."%' ");

    $args1 = array( 'meta_key' => 'first_name', 'meta_value' => $args['title'] );
	$user_query = new WP_User_Query($args1);
	
	$author = "";
	if ( ! empty( $user_query->results ) ) 
	{
		foreach ( $user_query->results as $user ) 
		{
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
        'post_type' 		=> 'article',
        'author'			=> $author
    	);

	    
		$query = new WP_Query($params);
	    while ( $query->have_posts() ) 
		{
			$query->the_post();
			$response[] = Article_post\Article::get_article($query->post->ID);
			
		}
	}
			
					//////////////////////
	else
	{
		$args_tag=array(
					
				'tag'		=> $args['title'],
				'post_type' => 'article'
		);
		
		$tag_query = new WP_Query($args_tag);
		
		while ( $tag_query->have_posts() ) 
		{
			$tag_query->the_post();
			
			$response[] = Article_post\Article::get_article($tag_query->post->ID);
			
		}
		
	}
					////////////////////
	//print_r($response);	
	
   return $response;

}
*/


function get_articles_filter($args)
{

	global $wpdb;
		
	$searchtext = $args['title'];
	
	$response = array();
	 
		// 1. searchtext  = post title or post content
	
	$query_title = "SELECT ID
					FROM wp_posts
					WHERE (post_title LIKE '%".$searchtext."%' OR post_content LIKE '%".$searchtext."%' OR post_excerpt LIKE '%".$searchtext."%') AND post_status = 'publish' AND post_type = 'article'";
	
	$postidset = $wpdb->get_col($query_title);
		
		
	if(count($postidset) == 0)   //2. searchtext = authorname
	{	
		$query_author = "
				SELECT ID
				FROM wp_posts
				INNER JOIN wp_usermeta ON wp_posts.post_author = wp_usermeta.user_id
				WHERE (post_status = 'publish') AND (post_type = 'article') AND ((meta_key = 'first_name' AND meta_value LIKE '%".$searchtext."%') OR (meta_key = 'last_name' AND meta_value LIKE '%".$searchtext."%'))";

		 
		 $postidset = $wpdb->get_col($query_author);	
		 		 
	}
	

	if(count($postidset) != 0)  //retrieve post info based on the post ids fetched above
	{
		$params = array(
        'post__in'			=> $postidset,
        'posts_per_page'	=> $args['posts_per_page'],
        'order' 			=> $args['order'],
        'orderby'			=> $args['orderby'],
        'post_type' 		=> 'article',
		'post_status' 		=> 'publish'
     
    	);
    
		$query = new WP_Query($params);
		
	    while ( $query->have_posts() ) 
		{
			$query->the_post();

			$response[] = Article_post\Article::get_article($query->post->ID);
			
		}
	}
							
   return $response;

}

function store_post_views($views,$post_id){

	$response = update_post_meta($post_id, "no_of_views", $views );

	$data = get_post_meta( $post_id, "no_of_views", true ) != false ?
									get_post_meta( $post_id, "no_of_views", true ) : 0;

	return $data;


}

function get_sorted_posts($args){

	$query = new WP_Query($args);
	$response = array();
    while ( $query->have_posts() ) {
		$query->the_post();
		$response[] = Film\Video::get($query->post->ID);
		
	}

	return $response;

}


// to get noteworthy videos

function get_noteworthy_videos()
{
		global $post;
		
		$post_response = array();

		//to get 3 most recent posts
		
		
		$params = array(
		'numberposts' => 3,
		'post_status' => 'publish'	
		);
		
		$recent_posts = wp_get_recent_posts( $params );

			
		foreach ($recent_posts as $recent_post)
		{			
			$post_detail = Film\Video::get($recent_post['ID']);

			$post_response[] = array(
					'slug'				=> $post_detail['slug'],
					'featured_image'	=> $post_detail['featured_image'],
					'small_image'		=> $post_detail['small_image'],
					'medium_image'		=> $post_detail['medium_image'],
					'large_image'		=> $post_detail['large_image'],
					'title'				=> $post_detail['title'],
					'duration'			=> $post_detail['duration'],
					'region'			=> $post_detail['region'],
					'director'			=> $post_detail['director'],
					'categories'		=> $post_detail['categories'],
					'excerpt'			=> $post_detail['excerpt'],
					'post_like_count'	=> $post_detail['post_like_count'],
					'no_of_views'		=> $post_detail['no_of_views'],
					//'post_date'			=> $post_detail['post_date']
					'post_date'			=> get_the_date()

				);
			
		}
		
		//to get popular videos
			
		$args = array(
			'posts_per_page'    => 3,
			'order'             => 'DESC',
			'orderby'           => 'meta_value_num',
			'meta_key'          => '_post_like_count',
			'post_type'         => 'post'
		);
		
		$query = new WP_Query($args);

		while ( $query->have_posts() )
		{
			$query->the_post();

			$post_info = Film\Video::get($query->post->ID);			
			
			$post_response[] = array(
				
				'slug'				=> $post_info['slug'],
				'featured_image'	=> $post_info['featured_image'],
				'small_image'		=> $post_info['small_image'],
				'medium_image'		=> $post_info['medium_image'],
				'large_image'		=> $post_info['large_image'],
				'title'				=> $post_info['title'],
				'duration'			=> $post_info['duration'],
				'region'			=> $post_info['region'],
				'director'			=> $post_info['director'],
				'categories'		=> $post_info['categories'],
				'excerpt'			=> $post_info['excerpt'],
				'post_like_count'	=> $post_info['post_like_count'],
				'no_of_views'		=> $post_info['no_of_views'],
				//'post_date'			=> $post_info['post_date']
				'post_date'			=> get_the_date()

			);

		}

		return $post_response;

} // end get_noteworthy_videos









