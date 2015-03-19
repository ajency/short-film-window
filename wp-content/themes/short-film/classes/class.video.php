<?php
namespace Film;

class Video
{

	public function get($post_id){

		global $post;

		
		//wordpress fn to get single post
		$post  = get_post($post_id); 
		

		if(!is_null($post))
		{
			
			//prev post
			$prev_post = retrieve_previous_post();
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
			$image_details = wp_get_attachment_image_src( $post_thumbnail_id, 'medium');
			$image = is_array( $image_details ) && count( $image_details ) > 1 ? $image_details[ 0 ] : get_template_directory_uri() .
        	'/assets/img/placeholder.jpg';

			//assign the required details
			$response = array(
				'id'			=> $post->ID ,
				'slug'			=> $post->post_name,
				'title'			=> $post->post_title,
				'type'			=> get_post_meta( $post->ID , 'type',true ),
				'tagline'		=> get_post_meta( $post->ID , 'tagline',true ),
				'videourl'  	=> get_post_meta( $post->ID , 'videourl',true ),
				'content'		=> get_the_content('Read more'),
				'excerpt'		=> get_the_excerpt(),
				'director'		=> $name,
				'next_post'		=> $next_post,
				'prev_post'		=> $prev_post,
				'comments'		=> count(get_comments(array('post_id' => $post->ID))),
				'categories'	=> wp_get_post_categories($post->ID,array( 'fields' => 'names' )),
				'duration'		=> get_post_meta( $post->ID , 'duration',true ) != false?
									get_post_meta( $post->ID , 'duration',true ) : 0,
				'region'		=> get_custom_taxonomy_terms($post->ID),
				'tags'			=> wp_get_post_tags( $post->ID, array( 'fields' => 'names' )),
				'featured_image'			=> $image,
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

	public function get_many($args)
	{
		global $post;

		$meta_key = $args['language']!="" ? 'language' : '';

		$params = array(
					'orderby'          		=> 'post_date',
					'order'            		=> 'DESC',
					'post_type' 	   		=> 'post',
					'post_status'      		=> 'publish',
					'category'		  	 	=> $args['genre'],
					'meta_key'				=> $meta_key,
					'meta_value'			=> $args['language'],
					'posts_per_page'   		=> $args['posts_per_page'],
					'offset'           		=> $args['offset'],
					'exclude'				=> $args['exclude']

	
				);

		
		#get all posts
		$posts_array = get_posts($params); 

		$post_response = array();
		foreach ($posts_array as $key => $post) {

			$post_detail = self::get($post->ID);

			// $post_thumbnail_id = get_post_thumbnail_id($post->ID); 
			// $image_details = wp_get_attachment_image_src( $post_thumbnail_id, 'medium');
			// $image = is_array( $image_details ) && count( $image_details ) > 1 ? $image_details[ 0 ] : get_template_directory_uri() .
   //      	'/img/placeholder.jpg';

			$post_response[] = array(
					'slug'				=> $post_detail['slug'],
					'featured_image'	=> $post_detail['featured_image'],
					'title'				=> $post_detail['title'],
					'duration'			=> $post_detail['duration'],
					'region'			=> $post_detail['region'],
					'director'			=> $post_detail['director'],
					'categories'		=> $post_detail['categories'],
					'excerpt'			=> $post_detail['excerpt'],
					'post_like_count'	=> $post_detail['post_like_count'],
					'no_of_views'		=> $post_detail['no_of_views']
				
				
				
				
				);
			
		}

		return $post_response;

	}


}




