<?php 
function im_json_api_default_filters_article( $server ) 
{
    	
	global $article_api;

	$article_api = new Article_API( $server);

    add_filter( 'json_endpoints', array( $article_api, 'register_routes' ) );

}

add_action( 'wp_json_server_before_serve', 'im_json_api_default_filters_article', 12, 1 );


class Article_API 
{
	public function register_routes( $routes ) 
	{

        $routes['/articles/(?P<id>\d+)'] = array(
            array( array( $this, 'get_article'), WP_JSON_Server::READABLE)
            
        );		

		$routes['/articles'] = array(
            array( array( $this, 'get_many_articles'), WP_JSON_Server::READABLE)
            
        );

        $routes['/views'] = array(
            array( array( $this, 'store_post_views'), WP_JSON_Server::CREATABLE)
            
        );
		
		$routes['/articlefilters'] = array(
            array( array( $this, 'get_articles_filter'), WP_JSON_Server::READABLE)
            
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
	
	
    public function get_articles_filter()
	{

        $title = isset($_REQUEST['title']) && $_REQUEST['title'] !="" ? 
                        $_REQUEST['title'] : "" ;

        $args = array(
                    'orderby'           => 'post_date',
                    'order'             => 'DESC',
                    // 'posts_per_page'    => 5,
                    'posts_per_page'    => 6,
                    'offset'            => 0,
                    'title'             =>  $title

        );


        $response = get_articles_filter($args);
        

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