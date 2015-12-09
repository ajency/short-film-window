<?php

add_action( 'wp_enqueue_scripts', 'register_aal_script' );
function register_aal_script() {
  global $woocommerce;

    wp_enqueue_style( 'aal-style', AAL_URL.'assets/css/aal-style.css' );
       
    $data = array(
      'ajaxurl'=>admin_url('admin-ajax.php'),
       );
       wp_enqueue_script('aal_script', AAL_URL.'assets/js/aal-script.js', array('jquery'), '', true);
       wp_localize_script( 'aal_script', 'aal', $data );
}




function aal_author_likes($author_id){
echo '<div class="aal-box"><a class="aal-like" data-author="'.$author_id.'" style="color:#000;"> <i class="fa fa-thumbs-up"></i> LIKE </a><span class="author-like-count" data-author="'.$author_id.'">'.get_user_meta($author_id, '_author_likes', true).'</span></div>';
}



add_action( 'wp_ajax_aal_like', 'aal_get_author_likes' );
add_action( 'wp_ajax_nopriv_aal_like', 'aal_get_author_likes' );

function aal_get_author_likes()
{
$author_id = $_POST['author_id'];

$likes = get_user_meta($author_id, '_author_likes', true);
if($likes == ''){
$final_like = 1;
}else{
$final_like = $likes+1;
}

update_user_meta($author_id, '_author_likes', $final_like);
echo get_user_meta($author_id, '_author_likes', true);

wp_die();	
}