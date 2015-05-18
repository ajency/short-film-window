<?php
namespace Article_post;

class Article
{

	public static function get_article($post_id)
	{
		
		//global $post;

		
		//wordpress fn to get single post
		$post  = get_post($post_id); 
		
	
		
		
		if(!is_null($post))
		{
			
		/*
			//prev post
			$prev_post = retrieve_previous_post();
			$prev_post = $prev_post == 0 ? 0 : $prev_post->post_name;

			//next post
			$next_post = retrieve_next_post();
			$next_post = $next_post == 0 ? 0 : $next_post->post_name;
		*/
			
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

			
			$directorid = $post->post_author;
				
			
			$director_nicename = get_the_author_meta( 'user_nicename', $directorid );
			
		
			
			//check if the post has an excerpt.if it has then use the post_excerpt else use the post_content & generate excerpt of length 20 by calling the function show_excerpt() defined in functions.php
			
			if($post->post_excerpt)			
			{	
				$excerpt= $post->post_excerpt;	
			}
			else
			{		
				$excerpt= show_excerpt(200,$post->post_content);
			}	


			//assign the required details
			$response = array(
				'id'				=> $post->ID ,
				'slug'				=> $post->post_name,
				'title'				=> $post->post_title,
				'post_date'			=> get_the_date(),
				//'content'			=> get_the_content('Read more'),
				'content'			=> $post->post_content,
				'excerpt'			=> $excerpt,
				'director'			=> $name,
				'directorid'		=> $directorid,
				'director_nicename'	=> $director_nicename,
				//'next_post'		=> $next_post,
				//'prev_post'		=> $prev_post,
				'comments'			=> count(get_comments(array('post_id' => $post->ID))),
				'tags'				=> wp_get_post_tags( $post->ID, array( 'fields' => 'names' )),
				'featured_image'	=> $image,
				'small_image'		=> get_the_post_thumbnail($post->ID, 'thumbnail'),
				'medium_image'		=> get_the_post_thumbnail($post->ID, 'medium'),
				'large_image'		=> get_the_post_thumbnail($post->ID, 'large'),
				'user_like_count'	=> $post_user_like,
				'post_like_count'   => get_post_meta( $post->ID, "_post_like_count", true ) != false ?
									get_post_meta( $post->ID, "_post_like_count", true ) : 0,
				'no_of_views'		=> get_post_meta( $post->ID, "no_of_views", true ) != false ?
									get_post_meta( $post->ID, "no_of_views", true ) : 0

			);
			
			return $response;
		}
		else
		{
			return new \WP_Error( 'post_not_found', __( 'Post not found.'));
		}

	}  //end function get_article
	

	public static function get_many_articles($args)
	{
		global $post;

		//$meta_key = $args['language']!="" ? 'language' : '';

		$params = array(
					'orderby'          		=> 'post_date',
					'order'            		=> 'DESC',
					'post_type' 	   		=> 'article',
					'post_status'      		=> 'publish',
					'posts_per_page'   		=> $args['posts_per_page'],
					'offset'           		=> $args['offset']
					//'exclude'				=> $args['exclude']

	
				);

		
		#get all posts
		$posts_array = get_posts($params); 


		$post_response = array();
		foreach ($posts_array as $key => $post)
		{
				
			// $post_thumbnail_id = get_post_thumbnail_id($post->ID); 
			// $image_details = wp_get_attachment_image_src( $post_thumbnail_id, 'medium');
			// $image = is_array( $image_details ) && count( $image_details ) > 1 ? $image_details[ 0 ] : get_template_directory_uri() .
			//      	'/img/placeholder.jpg';


			$post_detail = self::get_article($post->ID);
							
   
			$post_response[] = array(
					'id'				=> $post->ID ,
					'slug'				=> $post_detail['slug'],
					'featured_image'	=> $post_detail['featured_image'],
					'small_image'		=> $post_detail['small_image'],					
					'medium_image'		=> $post_detail['medium_image'],					
					'large_image'		=> $post_detail['large_image'],					
					'title'				=> $post_detail['title'],
					'post_date'			=> $post_detail['post_date'],
					'director'			=> $post_detail['director'],
					'directorid'  	    => $post_detail['directorid'],
					'director_nicename' => $post_detail['director_nicename'],
					'excerpt'			=> $post_detail['excerpt'],
					'content'			=> $post_detail['content'],
					'post_like_count'	=> $post_detail['post_like_count'],
					'no_of_views'		=> $post_detail['no_of_views']

				);
			
		}

			
		return $post_response;

	}	//end function get_many_articles
	
	
	

}  //end class