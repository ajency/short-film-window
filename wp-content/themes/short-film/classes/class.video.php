<?php

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
			$prev_post = $prev_post == 0 ? 0 : $prev_post->ID;

			//next post
			$next_post = retrieve_next_post();
			$next_post = $next_post == 0 ? 0 : $next_post->ID;



			//assign the required details
			$response = array(

				'title'			=> $post->post_title,
				'type'			=> get_field('type'),
				'videourl'  	=> get_field('videourl'),
				'excerpt'		=> get_the_excerpt(),
				'director'		=> $post->post_author,
				'next_post'		=> $next_post,
				'prev_post'		=> $prev_post,
				'comments'		=> get_comments(),
				'categories'	=> wp_get_post_categories($post->ID),
				'duration'		=> get_field('duration'),
				'region'		=> get_the_terms($post->ID, 'region'),
				'tags'			=> wp_get_post_tags( $post->ID, array( 'fields' => 'ids' ))

			);
			return $response;
		}
		else
		{
			return new WP_Error( 'post_not_found', __( 'Post not found.'));
		}

	}

	public function get_all_videos($args)
	{
		global $post;

		$defaults = array(
					'orderby'          => 'post_date',
					'order'            => 'DESC',
					'post_type' 	   => 'post',
					'post_status'      => 'publish',
	
				);

		$post_args = wp_parse_args($args, $defaults);

		#get all posts
		$posts_array = get_posts($post_args); 

		$post_response = array();
		foreach ($posts_array as $key => $post) {

			$post_detail = self::get($post->ID);
			$post_response[] = $post_detail;
			
		}

		return $post_response;

	}


}




