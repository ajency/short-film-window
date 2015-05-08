<?php


function like_author_scripts() 
{
	wp_enqueue_script( 'jm_like_author', get_template_directory_uri().'/assets/js/my-author-like.js', array('jquery'), '1.0', 1 );
	wp_localize_script( 'jm_like_author', 'ajax_var', array(
		'url' => admin_url( 'admin-ajax.php' ),
		'nonce' => wp_create_nonce( 'ajax-nonce' )
		)
	);
}
add_action( 'init', 'like_author_scripts' );



/**
 * (2) Save like data
 */
 
add_action( 'wp_ajax_nopriv_jm-author-like', 'jm_author_like' );
add_action( 'wp_ajax_jm-author-like', 'jm_author_like' );

function jm_author_like() 
{
	$nonce = $_POST['nonce'];
    if ( ! wp_verify_nonce( $nonce, 'ajax-nonce' ) )
        die ( 'Nope!' );
	
	if ( isset( $_POST['jm_author_like'] ) ) 
	{
	
		$author_id = $_POST['author_id']; // author_id 
		$author_like_count_new = get_user_meta( $author_id, "_author_like_count_new", true ); // author like count
		
		if ( function_exists ( 'wp_cache_post_change' ) ) { // invalidate WP Super Cache if exists
			$GLOBALS["super_cache_enabled"]=1;
			wp_cache_post_change( $author_id );
		}
		
		if ( is_user_logged_in() ) 
		{ // user is logged in
			$user_id_new = get_current_user_id(); // current user
			$meta_AUTHORS = get_user_option( "_liked_authors", $user_id_new  ); // post ids from user meta
			$meta_USERS_new = get_user_meta( $author_id, "_user_liked_new" ); // user ids from post meta
			$liked_AUTHORS = NULL; // setup array variable
			$liked_USERS_new = NULL; // setup array variable
			
			if ( count( $meta_AUTHORS ) != 0 )
			{ // meta exists, set up values
				$liked_AUTHORS = $meta_AUTHORS;
			}
			
			if ( !is_array( $liked_AUTHORS ) ) // make array just in case
				$liked_AUTHORS = array();
				
			if ( count( $meta_USERS_new ) != 0 ) { // meta exists, set up values
				$liked_USERS_new = $meta_USERS_new[0];
			}		

			if ( !is_array( $liked_USERS_new ) ) // make array just in case
				$liked_USERS_new = array();
				
			$liked_AUTHORS['author-'.$author_id] = $author_id; // Add author id to user meta array
			$liked_USERS_new['user-'.$user_id_new] = $user_id_new; // add user id to post meta array
			$user_likes_new = count( $liked_AUTHORS ); // count user likes
	
			if ( !AlreadyLiked_new( $author_id ) ) { // like the post
				update_user_meta( $author_id, "_user_liked_new", $liked_USERS_new ); // Add user ID to post meta
				update_user_meta( $author_id, "_author_like_count_new", ++$author_like_count_new ); // +1 count post meta
				update_user_option( $user_id_new, "_liked_authors", $liked_AUTHORS ); // Add post ID to user meta
				update_user_option( $user_id_new, "_user_like_count_new_new", $user_likes_new ); // +1 count user meta
				echo $author_like_count_new; // update count on front end

			} 
			else 
			{ // unlike the author
				$pid_key_new = array_search( $author_id, $liked_AUTHORS ); // find the key
				$uid_key_new = array_search( $user_id_new, $liked_USERS_new ); // find the key
				unset( $liked_AUTHORS[$pid_key_new] ); // remove from array
				unset( $liked_USERS_new[$uid_key_new] ); // remove from array
				$user_likes_new = count( $liked_AUTHORS ); // recount user likes
				update_user_meta( $author_id, "_user_liked_new", $liked_USERS_new ); // Remove user ID from post meta
				update_user_meta($author_id, "_author_like_count_new", --$author_like_count_new ); // -1 count post meta
				update_user_option( $user_id_new, "_liked_authors", $liked_AUTHORS ); // Remove post ID from user meta			
				update_user_option( $user_id_new, "_user_like_count_new_new", $user_likes_new ); // -1 count user meta
				echo "already".$author_like_count_new; // update count on front end
				
			}
			
		} 
		else 
		{ // user is not logged in (anonymous)
			
			$ip_new = $_SERVER['REMOTE_ADDR']; // user IP address
			$meta_IPS_new = get_user_meta( $author_id, "_user_IP_new" ); // stored IP addresses
			$liked_IPS_new = NULL; // set up array variable
			
			if ( count( $meta_IPS_new ) != 0 ) 
			{ // meta exists, set up values
				$liked_IPS_new = $meta_IPS_new[0];
			}
	
			if ( !is_array( $liked_IPS_new ) ) // make array just in case
				$liked_IPS_new = array();
				
			if ( !in_array( $ip_new, $liked_IPS_new ) ) // if IP not in array
				$liked_IPS_new['ip-'.$ip_new] = $ip_new; // add IP to array
			
			if ( !AlreadyLiked_new( $author_id ) ) 
			{ // like the post
				update_user_meta( $author_id, "_user_IP_new", $liked_IPS_new ); // Add user IP to post meta
				update_user_meta( $author_id, "_author_like_count_new", ++$author_like_count_new ); // +1 count post meta
				echo $author_like_count_new; // update count on front end
				
			} 
			else 
			{ // unlike the post
				$ip_new_key = array_search( $ip_new, $liked_IPS_new ); // find the key
				unset( $liked_IPS_new[$ip_new_key] ); // remove from array
				update_user_meta( $author_id, "_user_IP_new", $liked_IPS_new ); // Remove user IP from post meta
				update_user_meta( $author_id, "_author_like_count_new", --$author_like_count_new ); // -1 count post meta
				echo "already".$author_like_count_new; // update count on front end
				
			}
		}
	}
	
	exit;
}

/**
 * (3) Test if user already liked post
 */

function AlreadyLiked_new( $author_id ) 
{ 
	// test if user liked before
	if ( is_user_logged_in() ) 
	{ ////
		// user is logged in
		$user_id_new = get_current_user_id(); // current user
		$meta_USERS_new = get_user_meta( $author_id, "_user_liked_new" ); // user ids from post meta
		$liked_USERS_new = ""; // set up array variable
		
		if ( count( $meta_USERS_new ) != 0 ) 
		{ // meta exists, set up values
			$liked_USERS_new = $meta_USERS_new[0];
		}
		
		if( !is_array( $liked_USERS_new ) ) // make array just in case
			$liked_USERS_new = array();
			
		if ( in_array( $user_id_new, $liked_USERS_new ) ) 
		{ // True if User ID in array
			return true;
		}
		return false;
		
	} 
	else 
	{ // user is anonymous, use IP address for voting
	
		$meta_IPS_new = get_user_meta( $author_id, "_user_IP_new" ); // get previously voted IP address
		$ip_new = $_SERVER["REMOTE_ADDR"]; // Retrieve current user IP
		$liked_IPS_new = ""; // set up array variable
		
		if ( count( $meta_IPS_new ) != 0 ) 
		{ // meta exists, set up values
			$liked_IPS_new = $meta_IPS_new[0];
		}
		
		if ( !is_array( $liked_IPS_new ) ) // make array just in case
			$liked_IPS_new = array();
		
		if ( in_array( $ip_new, $liked_IPS_new ) ) 
		{ // True is IP in array
			return true;
		}
		return false;
	}
	
}

/**
 * (4) Front end button
 */
function getAuthorLikeLink( $author_id )
{
	$like_count_new = get_user_meta( $author_id, "_author_like_count_new", true ); // get post likes
	$count_new = ( empty( $like_count_new ) || $like_count_new == "0" ) ? 'Like' : esc_attr( $like_count_new );
	if ( AlreadyLiked_new( $author_id ) ) {
		$class = esc_attr( ' liked' );
		$title = esc_attr( 'Unlike' );
		$heart = '<i id="icon-like" class="fa fa-thumbs-up"></i>';
	} else {
		$class = esc_attr( '' );
		$title = esc_attr( 'Like' );
		$heart = '<i id="icon-unlike" class="fa fa-thumbs-o-up"></i>';
	}
	
	$output = '<a href="#" class="author-like'.$class.'" data-author_id="'.$author_id.'" title="'.$title.'">'.$heart.'&nbsp;'.$count_new.'</a>';
	return $output;
}



function jm_like_shortcode_new() 
{
	return getAuthorLikeLink( get_the_ID() );
}
add_shortcode('jmliker_new', 'jm_like_shortcode_new');

