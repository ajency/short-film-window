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
            array( array( $this, 'get_all_videos'), WP_JSON_Server::READABLE)
            
        );
        
    	return $routes;
	}

	public function get_video($id)
	{

		$response = Film\Video::get($post->ID);

		

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

	public function get_all_videos()
	{

		

		$args = array(
					'orderby'          => 'post_date',
					'order'            => 'DESC',
					'post_type' 	   => 'post',
					'post_status'      => 'publish',


		);
		$response = Film\Video::get_all_videos($args);
		

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