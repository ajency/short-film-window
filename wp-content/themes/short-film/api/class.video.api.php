<?php 
function im_json_api_default_filters( $server ) {
    
	global $video_api;

	$video_api = new Video_API( $server);

    add_filter( 'json_endpoints', array( $video_api, 'register_routes' ) );

}
add_action( 'wp_json_server_before_serve', 'im_json_api_default_filters', 12, 1 );


class Video_API 
{
	public function register_routes( $routes ) {
        $routes['/videos/(?P<id>\d+)'] = array(
            array( array( $this, 'get_video'), WP_JSON_Server::READABLE)
            
        );
        $routes['/videos'] = array(
            array( array( $this, 'get_many'), WP_JSON_Server::READABLE)
            
        );
        $routes['/page2/(?P<id>\d+)'] = array(
            array( array( $this, 'get_focus_film'), WP_JSON_Server::READABLE)
            
        );
        $routes['/page2/tagposts'] = array(
            array( array( $this, 'get_posts_based_tags'), WP_JSON_Server::READABLE)
            
        );
         $routes['/page2/catposts'] = array(
            array( array( $this, 'get_posts_based_cats'), WP_JSON_Server::READABLE)
            
        );
        $routes['/filters'] = array(
            array( array( $this, 'get_posts_filter'), WP_JSON_Server::READABLE)
            
        );
        $routes['/views'] = array(
            array( array( $this, 'store_post_views'), WP_JSON_Server::CREATABLE)
            
        );
        $routes['/sort'] = array(
            array( array( $this, 'get_sorted_posts'), WP_JSON_Server::READABLE)
            
        );
        
/*
       $routes['/staffpickspage/(?P<id>\d+)'] = array(
            array( array( $this, 'staffpicks'), WP_JSON_Server::READABLE)
            
        );
*/
        
    	return $routes;
	}

	public function get_video($id)
	{

		
		$response = Film\Video::get($id);
		
		
		
		// $embedurl = get_embed_url($response['id'],$response['videourl']);
		
		// $response['embedurl'] = $embedurl;
		

		if (is_wp_error($response))
		{
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

	public function get_many()
	{

		$genre = isset($_REQUEST['genre']) && $_REQUEST['genre'] !="" ? 
						$_REQUEST['genre'] : "";
						
		$taxonomy = isset($_REQUEST['taxonomy']) && $_REQUEST['taxonomy'] !="" ? 
						$_REQUEST['taxonomy'] : "";		

		$region = isset($_REQUEST['region']) && $_REQUEST['region'] !="" ? 
						$_REQUEST['region'] : "";							
						
		$language = isset($_REQUEST['language']) && $_REQUEST['language'] !="" ? 
						$_REQUEST['language'] : "";

		$posts_per_page = isset($_REQUEST['posts_per_page']) && $_REQUEST['posts_per_page'] 
		!= "" ? $_REQUEST['posts_per_page'] : "";
		$offset = isset($_REQUEST['offset']) && $_REQUEST['offset'] !="" ? 
						$_REQUEST['offset'] : 0;
        $exclude = isset($_REQUEST['exclude']) && $_REQUEST['exclude'] !="" ? 
                        $_REQUEST['exclude'] : 0;


		if($offset != 0)
			$offset = intval($offset) +  1;

		$args = array(
					'orderby'           => 'post_date',
					'order'             => 'DESC',
					'genre'		    	=> $genre,
					'taxonomy'		    => $taxonomy,
					'region'		    => $region,
					'language'			=> $language,
					'posts_per_page'   	=> $posts_per_page,
					'offset'           	=> $offset,
                    'exclude'           => $exclude


		);

		$response = Film\Video::get_many($args);
		

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

	public function get_focus_film($id){

		
		$response = get_focus_film($id);


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

	public function get_posts_based_tags(){

        $tag = $_REQUEST['tag'];

		$response = get_posts_based_tags($tag);


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

    public function get_posts_based_cats(){

        $cat = $_REQUEST['cat'];

        $response = get_posts_based_cats($cat);


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

    public function get_posts_filter(){


        $title = isset($_REQUEST['title']) && $_REQUEST['title'] !="" ? 
                        $_REQUEST['title'] : "" ;

        $args = array(
                    'orderby'           => 'post_date',
                    'order'             => 'DESC',
                    'posts_per_page'    => 5,
                    'offset'            => 0,
                    'title'             =>  $title


        );


        $response = get_posts_filter($args);
        

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

    public function store_post_views(){

        $views = $_REQUEST['views'];

        $post_id = $_REQUEST['post_id'];

        $response = store_post_views($views,$post_id);
        

        if (is_wp_error($response)){
            $response = new WP_JSON_Response( $response );
            $response->set_status(404);
        }
        else
        {
            if ( ! ( $response instanceof WP_JSON_ResponseInterface ) ) {
            $response = new WP_JSON_Response( $response );
            }
            $response->set_status(201);

        }

        return $response;


    }

    public function get_sorted_posts(){

        $sort = $_REQUEST['sort'];

        if($sort == 1){
            $args = array(
                    'orderby'           => 'post_date',
                    'order'             => 'DESC',
                    'posts_per_page'    => 12,
                    'offset'            => 0,
                    'post_type'         => 'post'


            );
        }
        else if($sort == 2)
        {
            $args = array(
                'posts_per_page'    => 12,
                'order'             => 'DESC',
                'orderby'           => 'meta_value_num',
                'meta_key'          => 'no_of_views',
                'post_type'         => 'post'
            );
        }
        else
        {
            $args = array(
                'posts_per_page'    => 12,
                'order'             => 'DESC',
                'orderby'           => 'meta_value_num',
                'meta_key'          => 'duration',
                'post_type'         => 'post'
            );
        }

        $response = get_sorted_posts($args);

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

    

}