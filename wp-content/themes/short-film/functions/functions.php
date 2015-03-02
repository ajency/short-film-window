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