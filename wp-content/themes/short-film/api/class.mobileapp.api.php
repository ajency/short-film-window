<?php 
function json_api_mobileapp( $server ) 
{
    	
	global $mobileapp_api;

	$mobileapp_api = new Mobileapp_API( $server);

    add_filter( 'json_endpoints', array( $mobileapp_api, 'register_routes' ) );

}

add_action( 'wp_json_server_before_serve', 'json_api_mobileapp', 12, 1 );


class Mobileapp_API 
{
	public function register_routes( $routes ) 
	{

        $routes['/get_defaults'] = array(
            array( array( $this, 'fetch_defaults_json'), WP_JSON_Server::READABLE)
        );			

        $routes['/get_video'] = array(
            array( array( $this, 'fetch_video_json'), WP_JSON_Server::READABLE)
        );//route for single vid
    	return $routes;
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
		$response = array('defaults'=>array('filters'=>array(),'sort_keys'=>array(), 'content'=>array()));
		
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