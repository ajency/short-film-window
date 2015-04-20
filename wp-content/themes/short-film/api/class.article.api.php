<?php 
function im_json_api_default_filters_article( $server ) 
{
    
	// global $video_api;
	// $video_api = new Video_API( $server);
    // add_filter( 'json_endpoints', array( $video_api, 'register_routes' ) );
	
	global $article_api;

	$article_api = new Article_API( $server);

    add_filter( 'json_endpoints', array( $article_api, 'register_routes' ) );

}

add_action( 'wp_json_server_before_serve', 'im_json_api_default_filters_article', 12, 1 );


class Article_API 
{
	public function register_routes( $routes ) 
	{
        // $routes['/videos/(?P<id>\d+)'] = array(
            // array( array( $this, 'get_video'), WP_JSON_Server::READABLE)
            
        // );
	
	
        $routes['/articles/(?P<id>\d+)'] = array(
            array( array( $this, 'get_article'), WP_JSON_Server::READABLE)
            
        );		
		
		// $routes['/article/(?P<id>\d+)'] = array(
            // array( array( $this, 'get_article'), WP_JSON_Server::READABLE)
            
        // );
		
		
        // $routes['/videos'] = array(
            // array( array( $this, 'get_many'), WP_JSON_Server::READABLE)
            
        // );
		
		$routes['/articles'] = array(
            array( array( $this, 'get_many_articles'), WP_JSON_Server::READABLE)
            
        );
		
	/*

        $routes['/filters'] = array(
            array( array( $this, 'get_posts_filter'), WP_JSON_Server::READABLE)
            
        );
	
	*/
	
        $routes['/views'] = array(
            array( array( $this, 'store_post_views'), WP_JSON_Server::CREATABLE)
            
        );
	

    	return $routes;
	}

	
	public function get_article($id)
	{

	
		$response = Article_post\Article::get_article($id);

		

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

	
	public function get_many_articles()
	{

		// $genre = isset($_REQUEST['genre']) && $_REQUEST['genre'] !="" ? 
						// $_REQUEST['genre'] : "";
		// $language = isset($_REQUEST['language']) && $_REQUEST['language'] !="" ? 
						// $_REQUEST['language'] : "";

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
					//'genre'		    	=> $genre,
					//'language'			=> $language,
					'posts_per_page'   	=> $posts_per_page,
					'offset'           	=> $offset,
                    'exclude'           => $exclude


		);

		$response = Article_post\Article::get_many_articles($args);
		

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

	/*
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
*/
 
/*  
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
	
	*/

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

	/*
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

 */   

}  //end class