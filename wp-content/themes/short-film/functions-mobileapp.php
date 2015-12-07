<?php

function pr($data){
	echo "<pre>";
	print_r($data);
	echo "</pre>";
}

function one_random_weekly_premiere(){
	$data = get_pairs_category_post(16);
	$r    = array_rand($data,1);
	$video= $data[$r];
	$data = Film\Video::get($video['postid']);
	
		$result = array();
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
	
	return $result;
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
	}

	return $movies;
}

function five_awesome_playlists(){
	global $wpdb;
	$qt = 'SELECT * FROM '.$wpdb->terms.' AS t INNER JOIN '.$wpdb->term_taxonomy.' AS tt ON t.term_id = tt.term_id WHERE tt.taxonomy =  "playlist" AND tt.count > 0 ORDER BY  t.term_id DESC LIMIT 0 , 5';

	$playlists = $wpdb->get_results($qt, ARRAY_A);
	$newlist = array();
	$image_size = 'thumbnail';
	foreach($playlists as $playlist)
	{
		$playlist_image = s8_get_taxonomy_image_src($playlist, $image_size);
		
		$playlist_image_url = $playlist_image['src'];

		$list = (array) $playlist;

		$play_name = $list['name'];

		$play_id = get_term_by( 'name', $play_name, 'playlist');

		$newlist[] = array(
						'playlist_id'			=> $list['term_id'],
						'playlist_name'			=> $list['name'],
						'playlist_slug'			=> $list['slug'],
						'playlist_taxonomy' 	=> $list['taxonomy'],
						'playlist_description'	=> $list['description'],
						'playlist_count'		=> $list['count']

		);

	}
	return $newlist;
}

function genres(){
	global $wpdb;
	$query = 'SELECT * FROM '.$wpdb->terms.' AS t INNER JOIN '.$wpdb->term_taxonomy.' AS tt ON t.term_id = tt.term_id WHERE tt.taxonomy =  "category" AND tt.count > 0 ORDER BY  t.term_id';

	$res = $wpdb->get_results($query);
	$genres = array();
	foreach ($res as $genre) {
		$genres[]=array('name'=>$genre->name, 'count'=>$genre->count,'id'=>$genre->term_id);
	}
	return $genres;
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