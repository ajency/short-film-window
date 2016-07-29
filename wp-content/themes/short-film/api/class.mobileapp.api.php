<?php 


function json_api_mobileapp( $server ) 
{
    	
	global $mobileapp_api;

	$mobileapp_api = new Mobileapp_API( $server);

    add_filter( 'json_endpoints', array( $mobileapp_api, 'register_routes' ) );

}

add_action( 'wp_json_server_before_serve', 'json_api_mobileapp', 12, 1 );

function genre_videos($genre_id, $language_id, $sort_id){
    $taxonomy = isset($language_id) && $language_id !="" ? "language" : "";

    $args = array(
          'order'   => 'DESC',
          'genre'   => $genre_id,
          'taxonomy'=>$taxonomy,
          'language'=>$language_id,
          'posts_per_page'=>-1
    );

    if(isset($sort_id) && $sort_id !=""){
      $args['sort']=$sort_id;     
    }

    $videos= Film\Video::get_many($args);
    $movies= array();
    foreach ($videos as $key => $video) {
      $movie_id             =   $video['id'];
      $movies[$key]['movie_id']   = $movie_id;
      $video        =   Film\Video::get($movie_id);
      $movies[$key]['no_of_views']  = $video['no_of_views'];
      $movies[$key]['no_of_likes']  = $video['post_like_count'];
      $movies[$key]['title']      = $video['title'];
      $movies[$key]['type']     = $video['type'];
      $movies[$key]['tagline']    = $video['tagline'];
      $movies[$key]['videourl']   = $video['videourl'];
      $movies[$key]['embedurl']   = $video['embedurl'];
      $movies[$key]['director']   = $video['director'];
      $movies[$key]['image']      = $video['medium_image'];
      $movies[$key]['duration']   = $video['duration'];
      //$movies[$key]['region']     = $video['region'][0];
      //$movies[$key]['language']   = $video['language'][0];
      $movies[$key]['region']     = implode(', ', $video['region']);
      $movies[$key]['language']   = implode(', ', $video['language']);
      $movies[$key]['genres']     = $video['categories'];
      $movies[$key]['slug']     = $video['slug'];

      if($movies[$key]['type']  =='youtube'){
        $url = explode("=",$video['videourl']);
        $movies[$key]['videourl'] = $url[1];
      }else{
        $movies[$key]['embedurl'] = "http:".$movies[$key]['embedurl'];
      }   
    }
    return $movies;
}

class Mobileapp_API 
{
	public function register_routes( $routes ) 
	{

        $routes['/get_defaults'] = array(
            array( array( $this, 'fetch_defaults_json'), WP_JSON_Server::READABLE)
        );			

        $routes['/get_video'] = array(
            array( array( $this, 'fetch_video_json'), WP_JSON_Server::READABLE)
        );

        $routes['/get_genre_videos'] = array(
            array( array( $this, 'fetch_get_genre_videos_json'), WP_JSON_Server::READABLE)
        );//route for videos for genres 

        $routes['/get_playlist_videos'] = array(
            array( array( $this, 'fetch_get_playlist_videos_json'), WP_JSON_Server::READABLE)
        );//route for videos for genres                

        $routes['/search'] = array(
            array( array( $this, 'fetch_videos_by_string'), WP_JSON_Server::READABLE)    
        ); 

        //route for single vid
    	return $routes;
	}

    public function fetch_videos_by_string(){

        $str = isset($_REQUEST['str']) && $_REQUEST['str'] !="" ? 
                        $_REQUEST['str'] : "" ;

        $response = videos_by_string($str);

        if (is_wp_error($response)){
            $response = new WP_JSON_Response( $response );
            $response->set_status(404);
        }
        else
        {
            if ( ! ( $response instanceof WP_JSON_ResponseInterface ) ) {
            $response = new WP_JSON_Response( $response );
            }
            $response->set_status(200);

        }
        return $response;         
    }

    public function fetch_get_playlist_videos_json(){
        $playlist_id = isset($_REQUEST['playlist_id']) && $_REQUEST['playlist_id'] !="" ? 
                        $_REQUEST['playlist_id'] : "";   
        
        $movies = playlist_videos($playlist_id);   
        $playlists = five_awesome_playlists_init();
        $playlist  = array();
        foreach ($playlists as $key => $value) {
            if($playlist_id == $value['playlist_id']){
                $playlist   =  $value;
                break;
            }
        }
        $response = array('playlist'=>$playlist, 'movies'=>$movies);
        
        if (is_wp_error($response)){
            $response = new WP_JSON_Response( $response );
            $response->set_status(404);
        }
        else
        {
            if ( ! ( $response instanceof WP_JSON_ResponseInterface ) ) {
            $response = new WP_JSON_Response( $response );
            }
            $response->set_status(200);

        }
        return json_encode($response);                        
    }

    public function fetch_get_genre_videos_json(){
        $genre_id = isset($_REQUEST['genre_id']) && $_REQUEST['genre_id'] !="" ? 
                        $_REQUEST['genre_id'] : "";   
        
        $language_id = isset($_REQUEST['language_id']) && $_REQUEST['language_id'] !="null" && $_REQUEST['language_id'] !="" ? 
                        $_REQUEST['language_id'] : "";  

        $sort_id     = isset($_REQUEST['sort_key']) && $_REQUEST['sort_key'] !="" ? 
                        $_REQUEST['sort_key'] : ""; 


        $movies = genre_videos($genre_id, $language_id, ($sort_id+1));   
        $genres = genres();
        $genre  = array();
        foreach ($genres as $key => $value) {
            if($genre_id == $value['genre_id']){
                $genre   =  $value;
                break;
            }
        }
        $response = array('genre'=>$genre, 'movies'=>$movies);
        
        $languages          =   languages();
        $response['filters']=array('languages'=>$languages);

        $response['sort_keys'][0]['id']="0";
        $response['sort_keys'][1]['id']="1";
        $response['sort_keys'][2]['id']="2";

        $response['sort_keys'][0]['name']="freshness";
        $response['sort_keys'][1]['name']="popularity";
        $response['sort_keys'][2]['name']="length";
        
        if (is_wp_error($response)){
            $response = new WP_JSON_Response( $response );
            $response->set_status(404);
        }
        else
        {
            if ( ! ( $response instanceof WP_JSON_ResponseInterface ) ) {
            $response = new WP_JSON_Response( $response );
            }
            $response->set_status(200);

        }
        return $response;                        
    }
    
    public function fetch_video_json(){
        $id = isset($_REQUEST['id']) && $_REQUEST['id'] !="" ? 
                        $_REQUEST['id'] : "";     

        $response = single_video($id);   

        if (is_wp_error($response)){
            $response = new WP_JSON_Response( $response );
            $response->set_status(404);
        }
        else
        {
            if ( ! ( $response instanceof WP_JSON_ResponseInterface ) ) {
            $response = new WP_JSON_Response( $response );
            }
            $response->set_status(200);

        }
        return $response;
    }

	public function fetch_defaults_json()
	{	

        /*$object_type='default_data';
        $id=1;
        $cached_data=get_cached_data($object_type,$id);//data to fetch the stored proposal data

       // print_r($cached_data);
        if(!is_array($cached_data))
        $cached_data=array();

        if(count($cached_data)>0)
        return $response   =$cached_data[$id]; */

        $response=fetch_default_data();
        
		/*$response = array('defaults'=>array('filters'=>array(),'sort_keys'=>array(), 'content'=>array()));
		
        $weekly_premiere    =   one_random_weekly_premiere();
        $new_additions      =   new_additions();
        $noteworthy         =   noteworthy();
        $awesome_playlists  =   five_awesome_playlists_init(5);
        $genres             =   genres();
        $languages          =   languages();
        $playlists          =   five_awesome_playlists_init();
        $popular  = array(
                        'popular'=>array('weekly_premiere'=>$weekly_premiere, 'new_additions'=>$new_additions, 'noteworthy'=>$noteworthy, 'awesome_playlist'=>$awesome_playlists ),
                        'genre'  =>$genres,
                        'playlists'=>$playlists
                    );
            


        $response['defaults']['content']=$popular;
        $response['defaults']['filters']=array('languages'=>$languages);
        $response['defaults']['sort_keys']=array('freshness','popularity','length');

        $object_type='default_data';
        $object_id=1;
        save_cached_data($object_id,$object_type,$response);
*/
		if (is_wp_error($response)){
            $response = new WP_JSON_Response( $response );
            $response->set_status(404);
        }
        else
        {
            if ( ! ( $response instanceof WP_JSON_ResponseInterface ) ) {
            $response = new WP_JSON_Response( $response );
            }
            $response->set_status(200);

        }
        return $response;
	}

}  //end class



function playlist_videos($playlist_id){
    $args = array(
            'playlist'        => $playlist_id,
            'taxonomy'      => 'playlist',
            'mobile'        => true,
    );
    $videos= Film\Video::get_many($args);
    $movies= array();
    foreach ($videos as $key => $video) {
      $movie_id             =   $video['id'];
      $movies[$key]['movie_id']   = $movie_id;
      $video        =   Film\Video::get($movie_id);
      $movies[$key]['no_of_views']  = $video['no_of_views'];
      $movies[$key]['no_of_likes']  = $video['post_like_count'];
      $movies[$key]['title']      = $video['title'];
      $movies[$key]['type']     = $video['type'];
      $movies[$key]['tagline']    = $video['tagline'];
      $movies[$key]['videourl']   = $video['videourl'];
      $movies[$key]['embedurl']   = $video['embedurl'];
      $movies[$key]['director']   = $video['director'];
      $movies[$key]['image']      = $video['medium_image'];
      $movies[$key]['duration']   = $video['duration'];
      $movies[$key]['region']     = implode(', ', $video['region']);
      $movies[$key]['language']   = implode(', ', $video['language']);
      $movies[$key]['genres']     = $video['categories'];
      $movies[$key]['slug']     = $video['slug'];

      if($movies[$key]['type']  =='youtube'){
        $url = explode("=",$video['videourl']);
        $movies[$key]['videourl'] = $url[1];
      }else{
        $movies[$key]['embedurl'] = "http:".$movies[$key]['embedurl'];
      }   
    }
    return $movies;
}

function videos_by_string($str){
        $params = array(
                'order'      => 'DESC',
                'orderby'    => 'post_date',
                'post_type'  => 'post',
                'post_status'=> 'publish',
                'title'      =>  $str,
                "posts_per_page" => -1

    );

    $movies = array();
    $searched_movies = get_posts( $params );
    $n=0;
    foreach ($searched_movies as $key => $searched_movie) {
        $movie_id                       =   $searched_movie->ID;
        $searched_movie                 =   Film\Video::get($movie_id);
        /*if (stripos($searched_movie['title'],$str) < 1) {
        continue;
        }  */

        if( stripos($searched_movie['title'], $str) === false ){
            continue;
        }

        $movies[$n]['movie_id']     =   $movie_id;
        $movies[$n]['no_of_views']  =   $searched_movie['no_of_views'];
        $movies[$n]['no_of_likes']  =   $searched_movie['post_like_count'];
        $movies[$n]['title']        =   $searched_movie['title'];
        $movies[$n]['type']         =   $searched_movie['type'];
        $movies[$n]['tagline']      =   $searched_movie['tagline'];
        $movies[$n]['videourl']     =   $searched_movie['videourl'];
        $movies[$n]['embedurl']     =   $searched_movie['embedurl'];
        $movies[$n]['director']     =   $searched_movie['director'];
        $movies[$n]['image']        =   $searched_movie['medium_image'];
        $movies[$n]['duration']     =   $searched_movie['duration'];
        $movies[$n]['region']       =   implode(', ', $searched_movie['region']);
        $movies[$n]['language']     =   implode(', ', $searched_movie['language']);
        $movies[$n]['genres']       =   $searched_movie['categories'];
        $movies[$n]['slug']       =   $searched_movie['slug'];

        if($movies[$n]['type']  =='youtube'){
            $url = explode("=",$searched_movie['videourl']);
            $movies[$n]['videourl'] = $url[1];
        }else{
            $movies[$n]['embedurl'] = "http:".$movies[$n]['embedurl'];
        }       
        $n++;
    }

    return $movies;

}


function fetch_default_data(){

    $response = array('defaults'=>array('filters'=>array(),'sort_keys'=>array(), 'content'=>array()));
        
        $weekly_premiere    =   one_random_weekly_premiere();
        $new_additions      =   new_additions();
        $noteworthy         =   noteworthy();
        $awesome_playlists  =   five_awesome_playlists(5);
        $genres             =   genres();
        $languages          =   languages();
        $playlists          =   five_awesome_playlists();
        $mostpopular        =   mostpopular();
        $popular  = array(
                        'popular'=>array('weekly_premiere'=>$weekly_premiere, 'new_additions'=>$new_additions, 'noteworthy'=>$noteworthy, 'awesome_playlist'=>$awesome_playlists,'most_popular'=>$mostpopular),
                        'genre'  =>$genres,
                        'playlists'=>$playlists
                    );
            


        $response['defaults']['content']=$popular;
        $response['defaults']['filters']=array('languages'=>$languages);
        $response['defaults']['sort_keys']=array('freshness','popularity','length');

        $object_type='default_data';
        $object_id=1;
        save_cached_data($object_id,$object_type,$response);

        return $response;
}