<?php

class Video
{

	public function get($post_id){

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
				'excerpt'		=> $post->post_excerpt,
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


}




