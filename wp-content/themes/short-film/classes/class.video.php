<?php
namespace Film;

class Video
{

	public static function get($post_id)
	{

		//global $post;

		
		//wordpress fn to get single post
		$post  = get_post($post_id); 	
				
		
		if(!is_null($post))
		{
			
			//prev post
			$prev_post = retrieve_previous_post();
			
			//print_r($prev_post);
			
			$prev_post = $prev_post == 0 ? 0 : $prev_post->post_name;

			//next post
			$next_post = retrieve_next_post();
			$next_post = $next_post == 0 ? 0 : $next_post->post_name;

			//get author name
			$name = (!get_user_details($post->post_author)) ? "" :
						 get_user_meta(get_user_details($post->post_author)->ID,'first_name' , true).' '.
						 get_user_meta(get_user_details($post->post_author)->ID,'last_name' , true);
			

			if($name == " ")
				$name = get_user_details($post->post_author)->data->display_name;

			$post_user_like = (!get_user_details($post->post_author)) ? "" :get_user_details($post->post_author)->data->user_like_count;
			
			$post_thumbnail_id = get_post_thumbnail_id($post->ID); 
			
			$image_details = wp_get_attachment_image_src( $post_thumbnail_id, 'full');
			
			$image = is_array( $image_details ) && count( $image_details ) > 1 ? $image_details[ 0 ] : get_template_directory_uri() .
        	'/assets/img/placeholder.jpg';
			
			$small_image_details = wp_get_attachment_image_src( $post_thumbnail_id, 'thumbnail');
			
			$small_image = is_array( $small_image_details ) && count( $small_image_details ) > 1 ? $small_image_details[ 0 ] : get_template_directory_uri() .
        	'/assets/img/placeholder.jpg';
			
			$medium_image_details = wp_get_attachment_image_src( $post_thumbnail_id, 'medium');
			
			$medium_image = is_array( $medium_image_details ) && count( $medium_image_details ) > 1 ? $medium_image_details[ 0 ] : get_template_directory_uri() .
        	'/assets/img/placeholder.jpg';	

			$large_image_details = wp_get_attachment_image_src( $post_thumbnail_id, 'large');
			
			$large_image = is_array( $large_image_details ) && count( $large_image_details ) > 1 ? $large_image_details[ 0 ] : get_template_directory_uri() .
        	'/assets/img/placeholder.jpg';			

			
			$directorid = $post->post_author;
			
			$director_nicename = get_the_author_meta( 'user_nicename', $directorid );
			
			$videourl = get_post_meta( $post->ID , 'videourl',true );
			
			$embedurl = get_embed_url($post->ID,$videourl);
			
	
			
			//check if the post has an excerpt.if it has then use the post_excerpt else use the post_content & generate excerpt of length 20 by calling the function show_excerpt() defined in functions.php
			
			if($post->post_excerpt)			
			{	
				$excerpt= $post->post_excerpt;	
			}
			else
			{		
				$excerpt= show_excerpt(200,$post->post_content);
			}	
			
			$post_categories_array = wp_get_post_categories($post->ID,array( 'fields' => 'names' ));			
			$video_category_links = array();
			$video_category_links = get_video_category_links($post_categories_array);
			
			
			// $post_regions_array = get_custom_taxonomy_terms($post->ID); //function written to fetch all regions for a post
			$post_regions_array = get_custom_taxonomy_terms_region($post->ID); //function written to fetch all regions for a post
			$video_region_links = array();
			$video_region_links = get_video_region_links($post_regions_array);
			
			$post_languages_array = get_custom_taxonomy_terms_language($post->ID); //function written to fetch all languages for a post
			$video_language_links = array();
			$video_language_links = get_video_language_links($post_languages_array);
			
			$post_playlists_array = get_custom_taxonomy_terms_playlist($post->ID); //function written to fetch all playlists for a post
			$video_playlist_links = array();
			$video_playlist_links = get_video_playlist_links($post_playlists_array);			
			
			
			//assign the required details
			$response = array(
				'id'			=> $post->ID ,
				'slug'			=> $post->post_name,
				'title'			=> $post->post_title,
				'post_date'		=> get_the_date(),
				'type'			=> get_post_meta( $post->ID , 'type',true ),
				'tagline'		=> get_post_meta( $post->ID , 'tagline',true ),
				'videourl'  	=> get_post_meta( $post->ID , 'videourl',true ),
				'embedurl'		=> $embedurl,
				//'content'		=> get_the_content('Read more'),
				'content'		=> $post->post_content,
				//'excerpt'			=> get_the_excerpt(),
				'excerpt'		=> $excerpt,				
				'director'		=> $name,
				'directorid'	=> $directorid,
				'director_nicename'	=> $director_nicename,
				'next_post'		=> $next_post,
				'prev_post'		=> $prev_post,
				'comments'		=> count(get_comments(array('post_id' => $post->ID))),
				'categories'	=> $post_categories_array,
				'video_category_links' => $video_category_links,
				'duration'		=> get_post_meta( $post->ID , 'duration',true ) != false?
									get_post_meta( $post->ID , 'duration',true ) : 0,
				// 'region'		=> get_custom_taxonomy_terms($post->ID),
				'region'		=> $post_regions_array,
				'language'		=> $post_languages_array,
				'playlist'		=> $post_playlists_array,				
				'video_region_links' => $video_region_links,
				'video_language_links' => $video_language_links,
				'video_playlist_links' => $video_playlist_links,
				'tags'			=> wp_get_post_tags( $post->ID, array( 'fields' => 'names' )),
				'featured_image'			=> $image,
				// 'small_image'		=> get_the_post_thumbnail($post->ID, 'thumbnail'),
				'small_image'		=> $small_image,
				//'medium_image'		=> get_the_post_thumbnail($post->ID, 'medium'),
				'medium_image'		=> $medium_image,
				//'large_image'		=> get_the_post_thumbnail($post->ID, 'large'),
				'large_image'		=> $large_image,
				'user_like_count'	=> $post_user_like,
				'post_like_count' => get_post_meta( $post->ID, "_post_like_count", true ) != false ?
									get_post_meta( $post->ID, "_post_like_count", true ) : 0,
				'no_of_views'	=> get_post_meta( $post->ID, "no_of_views", true ) != false ?
									get_post_meta( $post->ID, "no_of_views", true ) : 0

			);

			
			return $response;
		}
		else
		{
			return new \WP_Error( 'post_not_found', __( 'Post not found.'));
		}

	}

	
	public static function get_many($args)
	{
		//global $post;

		//$meta_key = $args['language']!="" ? 'language' : '';  

		if($args['taxonomy'] == 'region')  // for taxonomy template - to query posts of a particular region (taxonomy)
		{
					
			$params = array(
						'orderby'          		=> 'post_date',
						'order'            		=> 'DESC',
						'post_type' 	   		=> 'post',
						'post_status'      		=> 'publish',
						'category'		  	 	=> $args['genre'],							
						////'region'		  	 	=> $args['region'],						
						//'meta_key'				=> $meta_key,
						//'meta_value'			=> $args['language'],
						'posts_per_page'   		=> $args['posts_per_page'],
						'offset'           		=> $args['offset'],
						'exclude'				=> $args['exclude'],
						
						'tax_query' => array(
											array(
											  'taxonomy' => $args['taxonomy'],
											  'field' => 'term_id',
											  'terms' => $args['region'] 
											 
											)
										)
		
					);
		}
		else if($args['taxonomy'] == 'language')  // for taxonomy template - to query posts of a particular language (taxonomy)
		{
			 if($args['sort'] == 1){


			 	$params = array(
						'orderby'          		=> 'post_date',
						'order'            		=> 'DESC',
						'post_type' 	   		=> 'post',
						'post_status'      		=> 'publish',
						'cat'		  	 	=> $args['genre'],							
						////'region'		  	 	=> $args['region'],						
						//'meta_key'				=> $meta_key,
						//'meta_value'			=> $args['language'],
						'posts_per_page'   		=> $args['posts_per_page'],
						'offset'           		=> $args['offset'],
						'exclude'				=> $args['exclude'],
						
						'tax_query' => array(
											array(
											  'taxonomy' => $args['taxonomy'],
											  'field' => 'term_id',
											  'terms' => $args['language'] 
											 
											)
										)
		
					);
            
            
        }
        else if($args['sort'] == 2)
        {	
        	$params = array(
						'orderby'           => 'meta_value_num',
                    	'meta_key'          => 'no_of_views',
						'order'            		=> 'DESC',
						'post_type' 	   		=> 'post',
						'post_status'      		=> 'publish',
						'cat'		  	 	=> $args['genre'],							
						////'region'		  	 	=> $args['region'],						
						//'meta_key'				=> $meta_key,
						//'meta_value'			=> $args['language'],
						'posts_per_page'   		=> $args['posts_per_page'],
						'offset'           		=> $args['offset'],
						'exclude'				=> $args['exclude'],
						
						'tax_query' => array(
											array(
											  'taxonomy' => $args['taxonomy'],
											  'field' => 'term_id',
											  'terms' => $args['language'] 
											 
											)
										)
		
					);
            
            
        }
        else
        {
			$params = array(
						'orderby'           => 'meta_value_num',
                    	'meta_key'          => 'duration',
						'order'            		=> 'DESC',
						'post_type' 	   		=> 'post',
						'post_status'      		=> 'publish',
						'cat'		  	 	  => $args['genre'],							
						////'region'		  	 	=> $args['region'],						
						//'meta_key'				=> $meta_key,
						//'meta_value'			=> $args['language'],
						'posts_per_page'   		=> $args['posts_per_page'],
						'offset'           		=> $args['offset'],
						'exclude'				=> $args['exclude'],
						
						'tax_query' => array(
											array(
											  'taxonomy' => $args['taxonomy'],
											  'field' => 'term_id',
											  'terms' => $args['language'] 
											 
											)
										)
		
					);        		
          
            
        }	
			
		}
		else if($args['taxonomy'] == 'playlist')  // for taxonomy template - to query posts of a particular playlist (taxonomy)
		{
					
			$params = array(
						'orderby'          		=> 'post_date',
						'order'            		=> 'DESC',
						'post_type' 	   		=> 'post',
						'post_status'      		=> 'publish',
						'category'		  	 	=> $args['genre'],							
						////'region'		  	 	=> $args['region'],						
						//'meta_key'				=> $meta_key,
						//'meta_value'			=> $args['language'],
						'posts_per_page'   		=> $args['posts_per_page'],
						'offset'           		=> $args['offset'],
						'exclude'				=> $args['exclude'],
						
						'tax_query' => array(
											array(
											  'taxonomy' => $args['taxonomy'],
											  'field' => 'term_id',
											  'terms' => $args['playlist'] 
											 
											)
										)
		
					);
		}
		else
		{
						
			if($args['sort'] == 1){


			 	$params = array(
						'orderby'          		=> 'post_date',
						'order'            		=> 'DESC',
						'post_type' 	   		=> 'post',
						'post_status'      		=> 'publish',
						'cat'		  	 	=> $args['genre'],							
						////'region'		  	 	=> $args['region'],						
						//'meta_key'				=> $meta_key,
						//'meta_value'			=> $args['language'],
						'posts_per_page'   		=> $args['posts_per_page'],
						'offset'           		=> $args['offset'],
						'exclude'				=> $args['exclude'],
						
						// 'tax_query' => array(
						// 					array(
						// 					  'taxonomy' => $args['taxonomy'],
						// 					  'field' => 'term_id',
						// 					  'terms' => $args['language'] 
											 
						// 					)
						// 				)
		
					);
            
            
        }
        else if($args['sort'] == 2)
        {	
        	$params = array(
						'orderby'           => 'meta_value_num',
                    	'meta_key'          => 'no_of_views',
						'order'            		=> 'DESC',
						'post_type' 	   		=> 'post',
						'post_status'      		=> 'publish',
						'cat'		  	 	=> $args['genre'],							
						////'region'		  	 	=> $args['region'],						
						//'meta_key'				=> $meta_key,
						//'meta_value'			=> $args['language'],
						'posts_per_page'   		=> $args['posts_per_page'],
						'offset'           		=> $args['offset'],
						'exclude'				=> $args['exclude'],
						
						// 'tax_query' => array(
						// 					array(
						// 					  'taxonomy' => $args['taxonomy'],
						// 					  'field' => 'term_id',
						// 					  'terms' => $args['language'] 
											 
						// 					)
						// 				)
		
					);
            
            
        }
        else
        {
			$params = array(
						'orderby'           => 'meta_value_num',
                    	'meta_key'          => 'duration',
						'order'            		=> 'DESC',
						'post_type' 	   		=> 'post',
						'post_status'      		=> 'publish',
						'cat'		  	 	  => $args['genre'],							
						////'region'		  	 	=> $args['region'],						
						//'meta_key'				=> $meta_key,
						//'meta_value'			=> $args['language'],
						'posts_per_page'   		=> $args['posts_per_page'],
						'offset'           		=> $args['offset'],
						'exclude'				=> $args['exclude'],
						
						// 'tax_query' => array(
						// 					array(
						// 					  'taxonomy' => $args['taxonomy'],
						// 					  'field' => 'term_id',
						// 					  'terms' => $args['language'] 
											 
						// 					)
						// 				)
		
					);        		
          
            
        }	
		}


		
		#get all posts
		// $posts_array = get_posts($params); 
		$post_response = array();
		$query = new \WP_Query($params);
		$response = array();
	    while ( $query->have_posts() ) {
			$query->the_post();
			$post_detail = self::get($query->post->ID);
			$post_response[] = array(
					'id'				=> $post_detail['id'],
					'slug'				=> $post_detail['slug'],
					'featured_image'	=> $post_detail['featured_image'],
					'small_image'		=> $post_detail['small_image'],					
					'medium_image'		=> $post_detail['medium_image'],					
					'large_image'		=> $post_detail['large_image'],					
					'title'				=> $post_detail['title'],
					'duration'			=> $post_detail['duration'],
					'region'			=> $post_detail['region'],
					'language'			=> $post_detail['language'],
					'playlist'			=> $post_detail['playlist'],
					'director'			=> $post_detail['director'],
					'directorid'  	    => $post_detail['directorid'],
					'director_nicename' => $post_detail['director_nicename'],
					'categories'		=> $post_detail['categories'],
					'video_category_links'	=> $post_detail['video_category_links'],
					'video_region_links'	=> $post_detail['video_region_links'],
					'excerpt'			=> $post_detail['excerpt'],
					'post_like_count'	=> $post_detail['post_like_count'],
					'no_of_views'		=> $post_detail['no_of_views']
							
				);
			
		}


		// $post_response = array();
		// foreach ($posts_array as $key => $post) {

		// 	$post_detail = self::get($post->ID);

		// 	// $post_thumbnail_id = get_post_thumbnail_id($post->ID); 
		// 	// $image_details = wp_get_attachment_image_src( $post_thumbnail_id, 'medium');
		// 	// $image = is_array( $image_details ) && count( $image_details ) > 1 ? $image_details[ 0 ] : get_template_directory_uri() .
  //  //      	'/img/placeholder.jpg';

		// 	$post_response[] = array(
		// 			'id'				=> $post_detail['id'],
		// 			'slug'				=> $post_detail['slug'],
		// 			'featured_image'	=> $post_detail['featured_image'],
		// 			'small_image'		=> $post_detail['small_image'],					
		// 			'medium_image'		=> $post_detail['medium_image'],					
		// 			'large_image'		=> $post_detail['large_image'],					
		// 			'title'				=> $post_detail['title'],
		// 			'duration'			=> $post_detail['duration'],
		// 			'region'			=> $post_detail['region'],
		// 			'language'			=> $post_detail['language'],
		// 			'playlist'			=> $post_detail['playlist'],
		// 			'director'			=> $post_detail['director'],
		// 			'directorid'  	    => $post_detail['directorid'],
		// 			'director_nicename' => $post_detail['director_nicename'],
		// 			'categories'		=> $post_detail['categories'],
		// 			'video_category_links'	=> $post_detail['video_category_links'],
		// 			'video_region_links'	=> $post_detail['video_region_links'],
		// 			'excerpt'			=> $post_detail['excerpt'],
		// 			'post_like_count'	=> $post_detail['post_like_count'],
		// 			'no_of_views'		=> $post_detail['no_of_views']
							
		// 		);
			
		// }

		// print_r($post_response);
		
		return $post_response;

	}	
	public static function get_video_duration($args)
	{
		$params = array(
						'orderby'           => 'meta_value_num',
                    	'meta_key'          => 'duration',
						'order'            		=> 'DESC',
						'post_type' 	   		=> 'post',
						'post_status'      		=> 'publish',
						'cat'		  	 	  => $args['genre'],	
						'posts_per_page'   		=> $args['posts_per_page'],
						'offset'           		=> $args['offset'],
						'exclude'				=> $args['exclude'],
		
					); 
		$post_response = 0;
		$query = new \WP_Query($params);
	//	$response = array();
	    while ( $query->have_posts() ) {
			$query->the_post();
			//$post_detail = self::get($query->post->ID);
			$post_detail=get_post_meta( $query->post->ID , 'duration',true ) != false?get_post_meta($query->post->ID , 'duration',true ) : 0;

			 $post_response=$post_response+$post_detail;		
				
			
		}				  
		return $post_response;
	}

	
}




