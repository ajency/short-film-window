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

        
    	return $routes;
	}

	public function get_video($id)
	{

		$response = Film\Video::get($id);

		

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

	public function get_many()
	{

		$genre = isset($_REQUEST['genre']) && $_REQUEST['genre'] !="" ? 
						$_REQUEST['genre'] : "";
		$language = isset($_REQUEST['language']) && $_REQUEST['language'] !="" ? 
						$_REQUEST['language'] : "";

		$posts_per_page = isset($_REQUEST['posts_per_page']) && $_REQUEST['posts_per_page'] 
		!= "" ? $_REQUEST['posts_per_page'] : "";
		$offset = isset($_REQUEST['offset']) && $_REQUEST['offset'] !="" ? 
						$_REQUEST['offset'] : 0;

		if($offset != 0)
			$offset = intval($offset) +  1;

		$args = array(
					'orderby'           => 'post_date',
					'order'             => 'DESC',
					'genre'		    	=> $genre,
					'language'			=> $language,
					'posts_per_page'   	=> $posts_per_page,
					'offset'           	=> $offset,


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


}