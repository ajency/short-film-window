<?php

function pr($data){
	echo "<pre>";
	print_r($data);//print_r with pre tags
	echo "</pre>";
}



function kapil(){
 $final_runtime = get_playlist_total_runtime(71, 'playlist');
 pr($final_runtime);
}
//kapil();	

function one_random_weekly_premiere(){
	$data = get_pairs_category_post(16);
	$r    = array_rand($data,1);
	$video= $data[$r];
	$data = Film\Video::get($video['postid']);
	
		$result = array();
		$result['movie_id']				=	$video['postid'];
		$result['no_of_views']			=	$data['no_of_views'];
		$result['no_of_likes']			=	$data['post_like_count'];
		$result['title']				=	$data['title'];
		$result['type']					=	$data['type'];
		$result['tagline']				=	$data['tagline'];
		$result['videourl']				=	$data['videourl'];
		$result['embedurl']				=	$data['embedurl'];
		$result['director']				=	$data['director'];
		$result['image']				=	$data['medium_image'];
		$result['country']				=	"India - Asia";
		$result['duration']				=	$data['duration'];

	if($result['type']	=='youtube'){
		$url = explode("=",$data['videourl']);
		$result['videourl'] = $url[1];
	}else{
		$result['embedurl'] = "http:".$result['embedurl'];
	}
	return $result;
}

function single_video($id){
		
		$movie['found']			= false;
		if(!empty($id) && is_numeric($id)){
			$res 			= 	Film\Video::get($id);
			if(!is_wp_error($res)){
				$movie['found']			= true;
				$movie['movie_id']		=	$id;
				$movie['no_of_views']	=	$res['no_of_views'];
				$movie['no_of_likes']	=	$res['post_like_count'];
				$movie['title']			=	$res['title'];
				$movie['type']			=	$res['type'];
				$movie['tagline']		=	$res['tagline'];
				$movie['videourl']		=	$res['videourl'];
				$movie['embedurl']		=	$res['embedurl'];
				$movie['director']		=	$res['director'];
				$movie['image']			=	$res['medium_image'];
				$movie['duration']		=	$res['duration'];
				$movie['region']		=	$res['region'][0];
				$movie['language']		=	$res['language'][0];
				$movie['genres']		=	$res['categories'];
				$movie['content']		=	$res['content'];
				if($movie['type']	=='youtube'){
					$url = explode("=",$res['videourl']);
					$movie['videourl'] = $url[1];
				}else{
					$movie['embedurl'] = "http:".$movie['embedurl'];
				}					
			}

		}
		return $movie;
}

function new_additions(){
		$params = array(
				'numberposts' => 3,
				'order' => 'DESC',
				'post_type'   => 'post',
				'post_status' => 'publish'
	);

	$movies = array();
	$recent_movies = wp_get_recent_posts( $params );

	foreach ($recent_movies as $key => $recent_movie) {
		$movies[$key]['movie_id']		=	$recent_movie['ID'];
		$recent_movie 					= 	Film\Video::get($recent_movie['ID']);
		$movies[$key]['no_of_views']	=	$recent_movie['no_of_views'];
		$movies[$key]['no_of_likes']	=	$recent_movie['post_like_count'];
		$movies[$key]['title']			=	$recent_movie['title'];
		$movies[$key]['type']			=	$recent_movie['type'];
		$movies[$key]['tagline']		=	$recent_movie['tagline'];
		$movies[$key]['videourl']		=	$recent_movie['videourl'];
		$movies[$key]['embedurl']		=	$recent_movie['embedurl'];
		$movies[$key]['director']		=	$recent_movie['director'];
		$movies[$key]['image']			=	$recent_movie['medium_image'];
		$movies[$key]['country']		=	"India - Asia";
		$movies[$key]['duration']		=	$recent_movie['duration'];


		if($movies[$key]['type']	=='youtube'){
			$url = explode("=",$recent_movie['videourl']);
			$movies[$key]['videourl'] = $url[1];
		}else{
			$movies[$key]['embedurl'] = "http:".$movies[$key]['embedurl'];
		}			
	}

	return $movies;
}


function noteworthy(){
		$params = array(
				'numberposts'=> 3,
				'order'		 => 'DESC',
                'orderby'    => 'meta_value_num',
                'meta_key'   => '_post_like_count',
				'post_type'	 => 'post',
				'post_status'=> 'publish'
	);

	$movies = array();
	$noteworthy_movies = get_posts( $params );
	foreach ($noteworthy_movies as $key => $noteworthy_movie) {
		$movie_id 						= 	$noteworthy_movie->ID;
		$movies[$key]['movie_id']		=	$movie_id;
		$noteworthy_movie 				= 	Film\Video::get($movie_id);
		$movies[$key]['no_of_views']	=	$noteworthy_movie['no_of_views'];
		$movies[$key]['no_of_likes']	=	$noteworthy_movie['post_like_count'];
		$movies[$key]['title']			=	$noteworthy_movie['title'];
		$movies[$key]['type']			=	$noteworthy_movie['type'];
		$movies[$key]['tagline']		=	$noteworthy_movie['tagline'];
		$movies[$key]['videourl']		=	$noteworthy_movie['videourl'];
		$movies[$key]['embedurl']		=	$noteworthy_movie['embedurl'];
		$movies[$key]['director']		=	$noteworthy_movie['director'];
		$movies[$key]['image']			=	$noteworthy_movie['medium_image'];
		$movies[$key]['country']		=	"India - Asia";
		$movies[$key]['duration']		=	$noteworthy_movie['duration'];

		if($movies[$key]['type']	=='youtube'){
			$url = explode("=",$noteworthy_movie['videourl']);
			$movies[$key]['videourl'] = $url[1];
		}else{
			$movies[$key]['embedurl'] = "http:".$movies[$key]['embedurl'];
		}		
	}

	return $movies;
}

function five_awesome_playlists_init(){

	if ( is_home() ) {
		return five_awesome_playlists();
	}
	else{
		return false;
	}
}

add_action('init', five_awesome_playlists_init);

function five_awesome_playlists(){
	$all_playlists =  get_terms('playlist', 'orderby=id', 'order=DESC');

	$newlist = array();

	foreach($all_playlists as $playlist)
	{
		$playlist_image = s8_get_taxonomy_image_src($playlist, 'thumbnail');

		$playlist_image_url = $playlist_image['src'];

		$list = (array) $playlist;

		$play_name = $list['name'];

		$play_id = get_term_by( 'name', $play_name, 'playlist');

		$play_link = get_term_link( $play_id );

		$link = '<a href="'.esc_url( $play_link ).'" title="Playlist Name">'.$play_name.'</a>';

		$total_runtime = get_playlist_total_runtime($list['term_id'], 'playlist');
		$newlist[] = array(
						'playlist_id' => $list['term_id'],
						'playlist_name' => $list['name'],
						'playlist_slug' => $list['slug'],
						'playlist_taxonomy' => $list['taxonomy'],
						'playlist_description' => $list['description'],
						'playlist_count' => $list['count'],

						'playlist_link' => $play_link,
						'playlist_image_url' => $playlist_image_url,
						'run_time'			=>$total_runtime

		);

	}


	return $newlist;
}


function genres_init(){
	if ( is_home() ) {
		return genres();
	}
	else{
		return false;
	}
}

add_action('init', 'genres_init');

function genres()
{
	$response_cats = array();

	$args_cat = array(
				'parent'      => 0

	);

	$categories = get_categories($args_cat);


	foreach ( $categories as $category )
	{

		////get image urls
		$cat_image = s8_get_taxonomy_image_src($category, 'default');

		$cat_image_url = $cat_image['src'];

		// //get links
		$cat_link = get_category_link( $category->term_id );


		// $cat_link = get_category_link( $category->term_id );
		$total_runtime = get_genre_total_runtime($category->cat_ID);
		$response_cats[]=array(

			'genre_id'     	 	 =>  $category->cat_ID,
			'genre_name'   		 =>  $category->cat_name,
			'genre_termid' 		 =>  $category->term_id,
			'genre_slug'   		 =>  $category->slug,
			'genre_count'	 		 =>  $category->category_count,
			'genre_taxonomy'	 	 =>  $category->taxonomy,
			'genre_description'	 =>  $category->category_description,
			'genre_link'	 		 =>  $cat_link,
			'genre_image_url'	 	 =>  $cat_image_url,
			'run_time'			=>$total_runtime


		);
	}

	if (is_wp_error($response_cats))
	{
	   return false;
	}
	else
	{
	   return $response_cats;
	}

}

 

function languages(){
	global $wpdb;
	$query = 'SELECT * FROM '.$wpdb->terms.' AS t INNER JOIN '.$wpdb->term_taxonomy.' AS tt ON t.term_id = tt.term_id WHERE tt.taxonomy =  "language" AND tt.count > 0 ORDER BY  t.term_id';

	$res = $wpdb->get_results($query);
	$languages = array();
	$languages[]=array('name'=>'All', 'id'=>null);
	foreach ($res as $language) {
		$languages[]=array('name'=>$language->name, 'id'=>$language->term_id);
	}
	return $languages;
}
?>