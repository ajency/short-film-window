<?php
//code added by Surekha///

require_once (get_template_directory().'/classes/class.video.php');
require_once (get_template_directory().'/api/class.video.api.php');
require_once (get_template_directory().'/functions/functions.php');
require_once (get_template_directory().'/functions/post-like.php');

//code added by Nivedita///
require_once (get_template_directory().'/classes/class.article.php');
require_once (get_template_directory().'/api/class.article.api.php');




// Add Translation Option
load_theme_textdomain( 'wpbootstrap', TEMPLATEPATH.'/languages' );
$locale = get_locale();
$locale_file = TEMPLATEPATH . "/languages/$locale.php";
if ( is_readable( $locale_file ) ) require_once( $locale_file );

// Clean up the WordPress Head
if( !function_exists( "wp_bootstrap_head_cleanup" ) ) {
  function wp_bootstrap_head_cleanup() {
    // remove header links
    remove_action( 'wp_head', 'feed_links_extra', 3 );                    // Category Feeds
    remove_action( 'wp_head', 'feed_links', 2 );                          // Post and Comment Feeds
    remove_action( 'wp_head', 'rsd_link' );                               // EditURI link
    remove_action( 'wp_head', 'wlwmanifest_link' );                       // Windows Live Writer
    remove_action( 'wp_head', 'index_rel_link' );                         // index link
    remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );            // previous link
    remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );             // start link
    remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 ); // Links for Adjacent Posts
    remove_action( 'wp_head', 'wp_generator' );                           // WP version
  }
}
// Launch operation cleanup
add_action( 'init', 'wp_bootstrap_head_cleanup' );

// remove WP version from RSS
if( !function_exists( "wp_bootstrap_rss_version" ) ) {
  function wp_bootstrap_rss_version() { return ''; }
}
add_filter( 'the_generator', 'wp_bootstrap_rss_version' );

// Remove the […] in a Read More link
if( !function_exists( "wp_bootstrap_excerpt_more" ) ) {
  function wp_bootstrap_excerpt_more( $more ) {
    global $post;
    return '...  <a href="'. get_permalink($post->ID) . '" class="more-link" title="Read '.get_the_title($post->ID).'">Read more &raquo;</a>';
  }
}
add_filter('excerpt_more', 'wp_bootstrap_excerpt_more');

// Add WP 3+ Functions & Theme Support
if( !function_exists( "wp_bootstrap_theme_support" ) ) {
  function wp_bootstrap_theme_support() {
    add_theme_support( 'post-thumbnails' );      // wp thumbnails (sizes handled in functions.php)
    set_post_thumbnail_size( 125, 125, true );   // default thumb size
    add_theme_support( 'custom-background' );  // wp custom background
    add_theme_support( 'automatic-feed-links' ); // rss

    // Add post format support - if these are not needed, comment them out
    add_theme_support( 'post-formats',      // post formats
      array(
        'aside',   // title less blurb
        'gallery', // gallery of images
        'link',    // quick link to other site
        'image',   // an image
        'quote',   // a quick quote
        'status',  // a Facebook like status update
        'video',   // video
        'audio',   // audio
        'chat'     // chat transcript
      )
    );

    add_theme_support( 'menus' );            // wp menus

    register_nav_menus(                      // wp3+ menus
      array(
        'main_nav' => 'The Main Menu',   // main nav in header
        'footer_links' => 'Footer Links' // secondary nav in footer
      )
    );
  }
}
// launching this stuff after theme setup
add_action( 'after_setup_theme','wp_bootstrap_theme_support' );

function wp_bootstrap_main_nav() {
  // Display the WordPress menu if available
  wp_nav_menu(
    array(
      'menu' => 'main_nav', /* menu name */
      //'menu_class' => 'nav navbar-nav',
      'theme_location' => 'main_nav', /* where in the theme it's assigned */
      'container' => 'false', /* container class */
      'fallback_cb' => 'wp_bootstrap_main_nav_fallback' /* menu fallback */
      //'walker' => new Bootstrap_walker()
    )
  );
}

function wp_bootstrap_footer_links() {
  // Display the WordPress menu if available
  wp_nav_menu(
    array(
      'menu' => 'footer_links', /* menu name */
      'theme_location' => 'footer_links', /* where in the theme it's assigned */
      'container_class' => 'footer-links clearfix', /* container class */
      'fallback_cb' => 'wp_bootstrap_footer_links_fallback' /* menu fallback */
    )
  );
}

// this is the fallback for header menu
function wp_bootstrap_main_nav_fallback() {
  /* you can put a default here if you like */
}

// this is the fallback for footer menu
function wp_bootstrap_footer_links_fallback() {
  /* you can put a default here if you like */
}

// Shortcodes
require_once('library/shortcodes.php');

// Admin Functions (commented out by default)
// require_once('library/admin.php');         // custom admin functions

// Custom Backend Footer
add_filter('admin_footer_text', 'wp_bootstrap_custom_admin_footer');
function wp_bootstrap_custom_admin_footer() {
	echo '<span id="footer-thankyou">Developed by <a href="http://320press.com" target="_blank">320press</a></span>. Built using <a href="http://themble.com/bones" target="_blank">Bones</a>.';
}

// adding it to the admin area
add_filter('admin_footer_text', 'wp_bootstrap_custom_admin_footer');

// Set content width
if ( ! isset( $content_width ) ) $content_width = 580;

/************* THUMBNAIL SIZE OPTIONS *************/

// Thumbnail sizes
add_image_size( 'wpbs-featured', 780, 300, true );
add_image_size( 'wpbs-featured-home', 970, 311, true);
add_image_size( 'wpbs-featured-carousel', 970, 400, true);

/*
to add more sizes, simply copy a line from above
and change the dimensions & name. As long as you
upload a "featured image" as large as the biggest
set width or height, all the other sizes will be
auto-cropped.

To call a different size, simply change the text
inside the thumbnail function.

For example, to call the 300 x 300 sized image,
we would use the function:
<?php the_post_thumbnail( 'bones-thumb-300' ); ?>
for the 600 x 100 image:
<?php the_post_thumbnail( 'bones-thumb-600' ); ?>

You can change the names and dimensions to whatever
you like. Enjoy!
*/

/************* ACTIVE SIDEBARS ********************/

// Sidebars & Widgetizes Areas
function wp_bootstrap_register_sidebars() {
  register_sidebar(array(
  	'id' => 'sidebar1',
  	'name' => 'Main Sidebar',
  	'description' => 'Used on every page BUT the homepage page template.',
  	'before_widget' => '<div id="%1$s" class="widget %2$s">',
  	'after_widget' => '</div>',
  	'before_title' => '<h4 class="widgettitle">',
  	'after_title' => '</h4>',
  ));

  register_sidebar(array(
  	'id' => 'sidebar2',
  	'name' => 'Homepage Sidebar',
  	'description' => 'Used only on the homepage page template.',
  	'before_widget' => '<div id="%1$s" class="widget %2$s">',
  	'after_widget' => '</div>',
  	'before_title' => '<h4 class="widgettitle">',
  	'after_title' => '</h4>',
  ));

  register_sidebar(array(
    'id' => 'footer1',
    'name' => 'Footer 1',
    'before_widget' => '<div id="%1$s" class="widget col-sm-4 %2$s">',
    'after_widget' => '</div>',
    'before_title' => '<h4 class="widgettitle">',
    'after_title' => '</h4>',
  ));

  register_sidebar(array(
    'id' => 'footer2',
    'name' => 'Footer 2',
    'before_widget' => '<div id="%1$s" class="widget col-sm-4 %2$s">',
    'after_widget' => '</div>',
    'before_title' => '<h4 class="widgettitle">',
    'after_title' => '</h4>',
  ));

  register_sidebar(array(
    'id' => 'footer3',
    'name' => 'Footer 3',
    'before_widget' => '<div id="%1$s" class="widget col-sm-4 %2$s">',
    'after_widget' => '</div>',
    'before_title' => '<h4 class="widgettitle">',
    'after_title' => '</h4>',
  ));


  /*
  to add more sidebars or widgetized areas, just copy
  and edit the above sidebar code. In order to call
  your new sidebar just use the following code:

  Just change the name to whatever your new
  sidebar's id is, for example:

  To call the sidebar in your template, you can just copy
  the sidebar.php file and rename it to your sidebar's name.
  So using the above example, it would be:
  sidebar-sidebar2.php

  */
} // don't remove this bracket!
add_action( 'widgets_init', 'wp_bootstrap_register_sidebars' );

/************* COMMENT LAYOUT *********************/

// Comment Layout
function wp_bootstrap_comments($comment, $args, $depth) {
   $GLOBALS['comment'] = $comment; ?>
   <li class="post comments-section">
    <div class="user-profile-pic-wrapper">
      <div class="user-profile-pic-normal">
        <?php echo get_avatar( $comment ); ?>
      </div>
    </div>
    <div class="info-wrapper">
      <div class="username">
          <?php printf('<h5 class="m-b-0">%s</h5>', get_comment_author_link()) ?>
      </div>
      <div class="info">
        <?php edit_comment_link(__('Edit','wpbootstrap'),'<span class="edit-comment btn btn-sm btn-link"><i class="glyphicon-white glyphicon-pencil"></i>','</span>') ?>
          <?php if ($comment->comment_approved == '0') : ?>
            <div class="alert-message success">
              <p><?php _e('Your comment is awaiting moderation.','wpbootstrap') ?></p>
            </div>
          <?php endif; ?>
        <?php comment_text() ?>
      </div>
    </div>
    <div class="clearfix"></div>

	<!-- <li <?php comment_class(); ?>>
		<article id="comment-<?php comment_ID(); ?>" class="clearfix">
			<div class="comment-author vcard clearfix">
				<div class="avatar col-sm-3">
					<?php echo get_avatar( $comment, $size='75' ); ?>
				</div>
				<div class="col-sm-9 comment-text">
					<?php printf('<h4>%s</h4>', get_comment_author_link()) ?>
					<?php edit_comment_link(__('Edit','wpbootstrap'),'<span class="edit-comment btn btn-sm btn-info"><i class="glyphicon-white glyphicon-pencil"></i>','</span>') ?>

                    <?php if ($comment->comment_approved == '0') : ?>
       					<div class="alert-message success">
          				<p><?php _e('Your comment is awaiting moderation.','wpbootstrap') ?></p>
          				</div>
					<?php endif; ?>

                    <?php comment_text() ?>

                    <time datetime="<?php echo comment_time('Y-m-j'); ?>"><a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>"><?php comment_time('F jS, Y'); ?> </a></time>

					<?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
                </div>
			</div>
		</article> -->
    <!-- </li> is added by wordpress automatically -->
<?php
} // don't remove this bracket!

add_filter('get_avatar','change_avatar_css');

function change_avatar_css($class) {
$class = str_replace("class='avatar", "class='img-responsive", $class) ;
return $class;
}

// Display trackbacks/pings callback function
function list_pings($comment, $args, $depth) {
       $GLOBALS['comment'] = $comment;
?>
        <li id="comment-<?php comment_ID(); ?>"><i class="icon icon-share-alt"></i>&nbsp;<?php comment_author_link(); ?>
<?php

}

/************* SEARCH FORM LAYOUT *****************/

/****************** password protected post form *****/

add_filter( 'the_password_form', 'wp_bootstrap_custom_password_form' );

function wp_bootstrap_custom_password_form() {
	global $post;
	$label = 'pwbox-'.( empty( $post->ID ) ? rand() : $post->ID );
	$o = '<div class="clearfix"><form class="protected-post-form" action="' . get_option('siteurl') . '/wp-login.php?action=postpass" method="post">
	' . '<p>' . __( "This post is password protected. To view it please enter your password below:" ,'wpbootstrap') . '</p>' . '
	<label for="' . $label . '">' . __( "Password:" ,'wpbootstrap') . ' </label><div class="input-append"><input name="post_password" id="' . $label . '" type="password" size="20" /><input type="submit" name="Submit" class="btn btn-primary" value="' . esc_attr__( "Submit",'wpbootstrap' ) . '" /></div>
	</form></div>
	';
	return $o;
}

/*********** update standard wp tag cloud widget so it looks better ************/

add_filter( 'widget_tag_cloud_args', 'wp_bootstrap_my_widget_tag_cloud_args' );

function wp_bootstrap_my_widget_tag_cloud_args( $args ) {
	$args['number'] = 20; // show less tags
	$args['largest'] = 9.75; // make largest and smallest the same - i don't like the varying font-size look
	$args['smallest'] = 9.75;
	$args['unit'] = 'px';
	return $args;
}

// filter tag clould output so that it can be styled by CSS
function wp_bootstrap_add_tag_class( $taglinks ) {
    $tags = explode('</a>', $taglinks);
    $regex = "#(.*tag-link[-])(.*)(' title.*)#e";

    foreach( $tags as $tag ) {
    	$tagn[] = preg_replace($regex, "('$1$2 label tag-'.get_tag($2)->slug.'$3')", $tag );
    }

    $taglinks = implode('</a>', $tagn);

    return $taglinks;
}

add_action( 'wp_tag_cloud', 'wp_bootstrap_add_tag_class' );

add_filter( 'wp_tag_cloud','wp_bootstrap_wp_tag_cloud_filter', 10, 2) ;

function wp_bootstrap_wp_tag_cloud_filter( $return, $args )
{
  return '<div id="tag-cloud">' . $return . '</div>';
}

// Enable shortcodes in widgets
add_filter( 'widget_text', 'do_shortcode' );

// Disable jump in 'read more' link
function wp_bootstrap_remove_more_jump_link( $link ) {
	$offset = strpos($link, '#more-');
	if ( $offset ) {
		$end = strpos( $link, '"',$offset );
	}
	if ( $end ) {
		$link = substr_replace( $link, '', $offset, $end-$offset );
	}
	return $link;
}
add_filter( 'the_content_more_link', 'wp_bootstrap_remove_more_jump_link' );

// Remove height/width attributes on images so they can be responsive
add_filter( 'post_thumbnail_html', 'wp_bootstrap_remove_thumbnail_dimensions', 10 );
add_filter( 'image_send_to_editor', 'wp_bootstrap_remove_thumbnail_dimensions', 10 );

function wp_bootstrap_remove_thumbnail_dimensions( $html ) {
    $html = preg_replace( '/(width|height)=\"\d*\"\s/', "", $html );
    return $html;
}

// Add the Meta Box to the homepage template
function wp_bootstrap_add_homepage_meta_box() {
	global $post;

	// Only add homepage meta box if template being used is the homepage template
	// $post_id = isset($_GET['post']) ? $_GET['post'] : (isset($_POST['post_ID']) ? $_POST['post_ID'] : "");
	$post_id = $post->ID;
	$template_file = get_post_meta($post_id,'_wp_page_template',TRUE);

	if ( $template_file == 'page-homepage.php' ){
	    add_meta_box(
	        'homepage_meta_box', // $id
	        'Optional Homepage Tagline', // $title
	        'wp_bootstrap_show_homepage_meta_box', // $callback
	        'page', // $page
	        'normal', // $context
	        'high'); // $priority
    }
}

add_action( 'add_meta_boxes', 'wp_bootstrap_add_homepage_meta_box' );

// Field Array
$prefix = 'custom_';
$custom_meta_fields = array(
    array(
        'label'=> 'Homepage tagline area',
        'desc'  => 'Displayed underneath page title. Only used on homepage template. HTML can be used.',
        'id'    => $prefix.'tagline',
        'type'  => 'textarea'
    )
);

// The Homepage Meta Box Callback
function wp_bootstrap_show_homepage_meta_box() {
  global $custom_meta_fields, $post;

  // Use nonce for verification
  wp_nonce_field( basename( __FILE__ ), 'wpbs_nonce' );

  // Begin the field table and loop
  echo '<table class="form-table">';

  foreach ( $custom_meta_fields as $field ) {
      // get value of this field if it exists for this post
      $meta = get_post_meta($post->ID, $field['id'], true);
      // begin a table row with
      echo '<tr>
              <th><label for="'.$field['id'].'">'.$field['label'].'</label></th>
              <td>';
              switch($field['type']) {
                  // text
                  case 'text':
                      echo '<input type="text" name="'.$field['id'].'" id="'.$field['id'].'" value="'.$meta.'" size="60" />
                          <br /><span class="description">'.$field['desc'].'</span>';
                  break;

                  // textarea
                  case 'textarea':
                      echo '<textarea name="'.$field['id'].'" id="'.$field['id'].'" cols="80" rows="4">'.$meta.'</textarea>
                          <br /><span class="description">'.$field['desc'].'</span>';
                  break;
              } //end switch
      echo '</td></tr>';
  } // end foreach
  echo '</table>'; // end table
}

// Save the Data
function wp_bootstrap_save_homepage_meta( $post_id ) {

    global $custom_meta_fields;

    // verify nonce
    if ( !isset( $_POST['wpbs_nonce'] ) || !wp_verify_nonce($_POST['wpbs_nonce'], basename(__FILE__)) )
        return $post_id;

    // check autosave
    if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE )
        return $post_id;

    // check permissions
    if ( 'page' == $_POST['post_type'] ) {
        if ( !current_user_can( 'edit_page', $post_id ) )
            return $post_id;
        } elseif ( !current_user_can( 'edit_post', $post_id ) ) {
            return $post_id;
    }

    // loop through fields and save the data
    foreach ( $custom_meta_fields as $field ) {
        $old = get_post_meta( $post_id, $field['id'], true );
        $new = $_POST[$field['id']];

        if ($new && $new != $old) {
            update_post_meta( $post_id, $field['id'], $new );
        } elseif ( '' == $new && $old ) {
            delete_post_meta( $post_id, $field['id'], $old );
        }
    } // end foreach
}
add_action( 'save_post', 'wp_bootstrap_save_homepage_meta' );

// Add thumbnail class to thumbnail links
function wp_bootstrap_add_class_attachment_link( $html ) {
    $postid = get_the_ID();
    $html = str_replace( '<a','<a class="thumbnail"',$html );
    return $html;
}
add_filter( 'wp_get_attachment_link', 'wp_bootstrap_add_class_attachment_link', 10, 1 );

// Add lead class to first paragraph
function wp_bootstrap_first_paragraph( $content ){
    global $post;

    // if we're on the homepage, don't add the lead class to the first paragraph of text
    if( is_page_template( 'page-homepage.php' ) )
        return $content;
    else
        return preg_replace('/<p([^>]+)?>/', '<p$1 class="lead">', $content, 1);
}
// add_filter( 'the_content', 'wp_bootstrap_first_paragraph' );

// Menu output mods
class Bootstrap_walker extends Walker_Nav_Menu{

  function start_el(&$output, $object, $depth = 0, $args = Array(), $current_object_id = 0){

	 global $wp_query;
	 $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

	 $class_names = $value = '';

		// If the item has children, add the dropdown class for bootstrap
		if ( $args->has_children ) {
			$class_names = "dropdown ";
		}

		$classes = empty( $object->classes ) ? array() : (array) $object->classes;

		$class_names .= join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $object ) );
		$class_names = ' class="'. esc_attr( $class_names ) . '"';

   	$output .= $indent . '<li id="menu-item-'. $object->ID . '"' . $value . $class_names .'>';

   	$attributes  = ! empty( $object->attr_title ) ? ' title="'  . esc_attr( $object->attr_title ) .'"' : '';
   	$attributes .= ! empty( $object->target )     ? ' target="' . esc_attr( $object->target     ) .'"' : '';
   	$attributes .= ! empty( $object->xfn )        ? ' rel="'    . esc_attr( $object->xfn        ) .'"' : '';
   	$attributes .= ! empty( $object->url )        ? ' href="'   . esc_attr( $object->url        ) .'"' : '';

   	// if the item has children add these two attributes to the anchor tag
   	if ( $args->has_children ) {
		  $attributes .= ' class="dropdown-toggle" data-toggle="dropdown"';
    }

    $item_output = $args->before;
    $item_output .= '<a'. $attributes .'>';
    $item_output .= $args->link_before .apply_filters( 'the_title', $object->title, $object->ID );
    $item_output .= $args->link_after;

    // if the item has children add the caret just before closing the anchor tag
    if ( $args->has_children ) {
    	$item_output .= '<b class="caret"></b></a>';
    }
    else {
    	$item_output .= '</a>';
    }

    $item_output .= $args->after;

    $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $object, $depth, $args );
  } // end start_el function

  function start_lvl(&$output, $depth = 0, $args = Array()) {
    $indent = str_repeat("\t", $depth);
    $output .= "\n$indent<ul class=\"dropdown-menu\">\n";
  }

	function display_element( $element, &$children_elements, $max_depth, $depth=0, $args, &$output ){
    $id_field = $this->db_fields['id'];
    if ( is_object( $args[0] ) ) {
        $args[0]->has_children = ! empty( $children_elements[$element->$id_field] );
    }
    return parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
  }
}

add_editor_style('editor-style.css');

function wp_bootstrap_add_active_class($classes, $item) {
	if( $item->menu_item_parent == 0 && in_array('current-menu-item', $classes) ) {
    $classes[] = "active";
	}

  return $classes;
}

// Add Twitter Bootstrap's standard 'active' class name to the active nav link item
add_filter('nav_menu_css_class', 'wp_bootstrap_add_active_class', 10, 2 );

// enqueue styles
if( !function_exists("wp_bootstrap_theme_styles") ) {
    function wp_bootstrap_theme_styles() {
        // This is the compiled css file from LESS - this means you compile the LESS file locally and put it in the appropriate directory if you want to make any changes to the master bootstrap.css.
        // wp_register_style( 'wpbs', get_template_directory_uri() . '/library/dist/css/styles.f6413c85.min.css', array(), '1.0', 'all' );
        // wp_enqueue_style( 'wpbs' );

        // For child themes
        // wp_register_style( 'wpbs-style', get_stylesheet_directory_uri() . '/style.css', array(), '1.0', 'all' );
        // wp_enqueue_style( 'wpbs-style' );
    }
}
add_action( 'wp_enqueue_scripts', 'wp_bootstrap_theme_styles' );

// enqueue custom styles
function add_custom_scripts() {



    wp_register_style( 'theme_css', get_template_directory_uri(). '/assets/css/theme-child.css');
    wp_enqueue_style( 'theme_css' );

    wp_register_style( 'like_css', get_template_directory_uri(). '/assets/css/like-styles.css');
    wp_enqueue_style( 'like_css' );

    wp_register_script( 'jquery', get_template_directory_uri() . '/assets/js/jquery.min.js', '', false, true );
    wp_enqueue_script( 'jquery' );

    //only this one's (mobile detect) been added by Renuka
    wp_register_script('mobile-detect', 'http://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.2.0/mobile-detect.min.js');
    wp_enqueue_script('mobile-detect');

    wp_register_script( 'flylabel_js', get_template_directory_uri() . '/assets/js/flyLabel/flyLabel.min.js', '', false, true );
    wp_enqueue_script( 'flylabel_js' );


    wp_register_script( 'slick', get_template_directory_uri() . '/assets/js/slick.min.js', '', false, true );
    wp_enqueue_script( 'slick' );

    // wp_register_script( 'imgsloaded', get_template_directory_uri() . '/assets/js/imagesLoaded/imagesloaded.pkgd.min.js', '', false, true );
    // wp_enqueue_script( 'imgsloaded' );

    wp_register_script( 'classie', get_template_directory_uri() . '/assets/js/classie/classie.js', '', false, true );
    wp_enqueue_script( 'classie' );

	////
	wp_register_script( 'readmore', get_template_directory_uri() . '/assets/js/readmore/readmore.js', array('jquery'),'1.2'  );
    wp_enqueue_script( 'readmore' );

    //if (is_home()) {
      wp_register_script( 'videojs', get_template_directory_uri() . '/assets/js/video-js/video.js', '', false, true );
      wp_enqueue_script( 'videojs' );
    //}

    if( is_single()){
      wp_register_script( 'videojs', get_template_directory_uri() . '/assets/js/video-js/video.js', '', false, true );
      wp_enqueue_script( 'videojs' );

      wp_register_script( 'videobgjs', get_template_directory_uri() . '/assets/js/video-js/videojs-Background.js', '', false, true );
      wp_enqueue_script( 'videobgjs' );

      wp_register_script( 'youtube', get_template_directory_uri() . '/assets/js/video-js/youtube.js', '', false, true );
      wp_enqueue_script( 'youtube' );
    }

    wp_register_script( 'custom_js', get_template_directory_uri() . '/assets/js/custom.js', '', false, true );
    wp_enqueue_script( 'custom_js' );

    wp_register_script( 'like_js', get_template_directory_uri(). '/assets/js/post-like.js');
    wp_enqueue_script( 'like_js' );

     wp_register_script( 'scroll_js', get_template_directory_uri(). '/assets/js/jquery.infinitescroll.min.js');
    wp_enqueue_script( 'scroll_js' );


    wp_localize_script( "jquery", "SITEURL", site_url() );
    wp_localize_script( "jquery", "ajaxurl", admin_url( 'admin-ajax.php' ) );

}
add_action( 'wp_enqueue_scripts', 'add_custom_scripts' );

// enqueue javascript
if( !function_exists( "wp_bootstrap_theme_js" ) ) {
  function wp_bootstrap_theme_js(){

    if ( !is_admin() ){
      if ( is_singular() AND comments_open() AND ( get_option( 'thread_comments' ) == 1) )
        wp_enqueue_script( 'comment-reply' );
    }

    // This is the full Bootstrap js distribution file. If you only use a few components that require the js files consider loading them individually instead
    wp_register_script( 'bootstrap',
      get_template_directory_uri() . '/bower_components/bootstrap/dist/js/bootstrap.js',
      array('jquery'),
      '1.2' );

    wp_register_script( 'wpbs-js',
      get_template_directory_uri() . '/library/dist/js/scripts.d1e3d952.min.js',
      array('bootstrap'),
      '1.2' );

    wp_register_script( 'modernizr',
      get_template_directory_uri() . '/bower_components/modernizer/modernizr.js',
      array('jquery'),
      '1.2' );

    wp_enqueue_script( 'bootstrap' );
    wp_enqueue_script( 'wpbs-js' );
    wp_enqueue_script( 'modernizr' );

  }
}
add_action( 'wp_enqueue_scripts', 'wp_bootstrap_theme_js' );

// Get <head> <title> to behave like other themes
function wp_bootstrap_wp_title( $title, $sep ) {
  global $paged, $page;

  if ( is_feed() ) {
    return $title;
  }

  // Add the site name.
  $title .= get_bloginfo( 'name' );

  // Add the site description for the home/front page.
  $site_description = get_bloginfo( 'description', 'display' );
  if ( $site_description && ( is_home() || is_front_page() ) ) {
    $title = "$title $sep $site_description";
  }

  // Add a page number if necessary.
  if ( $paged >= 2 || $page >= 2 ) {
    $title = "$title $sep " . sprintf( __( 'Page %s', 'wpbootstrap' ), max( $paged, $page ) );
  }

  return $title;
}
add_filter( 'wp_title', 'wp_bootstrap_wp_title', 10, 2 );

// Related Posts Function (call using wp_bootstrap_related_posts(); )
function wp_bootstrap_related_posts() {
  echo '<ul id="bones-related-posts">';
  global $post;
  $tags = wp_get_post_tags($post->ID);
  if($tags) {
    foreach($tags as $tag) { $tag_arr .= $tag->slug . ','; }
        $args = array(
          'tag' => $tag_arr,
          'numberposts' => 5, /* you can change this to show more */
          'post__not_in' => array($post->ID)
      );
        $related_posts = get_posts($args);
        if($related_posts) {
          foreach ($related_posts as $post) : setup_postdata($post); ?>
              <li class="related_post"><a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></li>
          <?php endforeach; }
      else { ?>
            <li class="no_related_post">No Related Posts Yet!</li>
    <?php }
  }
  wp_reset_query();
  echo '</ul>';
}

// Numeric Page Navi (built into the theme by default)
function wp_bootstrap_page_navi($before = '', $after = '') {
  global $wpdb, $wp_query;
  $request = $wp_query->request;
  $posts_per_page = intval(get_query_var('posts_per_page'));
  $paged = intval(get_query_var('paged'));
  $numposts = $wp_query->found_posts;
  $max_page = $wp_query->max_num_pages;
  if ( $numposts <= $posts_per_page ) { return; }
  if(empty($paged) || $paged == 0) {
    $paged = 1;
  }
  $pages_to_show = 7;
  $pages_to_show_minus_1 = $pages_to_show-1;
  $half_page_start = floor($pages_to_show_minus_1/2);
  $half_page_end = ceil($pages_to_show_minus_1/2);
  $start_page = $paged - $half_page_start;
  if($start_page <= 0) {
    $start_page = 1;
  }
  $end_page = $paged + $half_page_end;
  if(($end_page - $start_page) != $pages_to_show_minus_1) {
    $end_page = $start_page + $pages_to_show_minus_1;
  }
  if($end_page > $max_page) {
    $start_page = $max_page - $pages_to_show_minus_1;
    $end_page = $max_page;
  }
  if($start_page <= 0) {
    $start_page = 1;
  }

  echo $before.'<ul class="pagination">'."";
  if ($paged > 1) {
    $first_page_text = "&laquo";
    echo '<li class="prev"><a href="'.get_pagenum_link().'" title="' . __('First','wpbootstrap') . '">'.$first_page_text.'</a></li>';
  }

  $prevposts = get_previous_posts_link( __('&larr; Previous','wpbootstrap') );
  if($prevposts) { echo '<li>' . $prevposts  . '</li>'; }
  else { echo '<li class="disabled"><a href="#">' . __('&larr; Previous','wpbootstrap') . '</a></li>'; }

  for($i = $start_page; $i  <= $end_page; $i++) {
    if($i == $paged) {
      echo '<li class="active"><a href="#">'.$i.'</a></li>';
    } else {
      echo '<li><a href="'.get_pagenum_link($i).'">'.$i.'</a></li>';
    }
  }
  echo '<li class="">';
  next_posts_link( __('Next &rarr;','wpbootstrap') );
  echo '</li>';
  if ($end_page < $max_page) {
    $last_page_text = "&raquo;";
    echo '<li class="next"><a href="'.get_pagenum_link($max_page).'" title="' . __('Last','wpbootstrap') . '">'.$last_page_text.'</a></li>';
  }
  echo '</ul>'.$after."";
}

// Remove <p> tags from around images
function wp_bootstrap_filter_ptags_on_images( $content ){
  return preg_replace( '/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content );
}
add_filter( 'the_content', 'wp_bootstrap_filter_ptags_on_images' );

//code added by Surekha//

add_action( 'init', 'create_region_taxonomy' );

//register a taxonomy//
function create_region_taxonomy() {

  $labels = array(
    'name'                       => _x( 'Regions', 'taxonomy general name' ),
    'singular_name'              => _x( 'Region', 'taxonomy singular name' ),
    'search_items'               => __( 'Search Regions' ),
    'popular_items'              => __( 'Popular Regions' ),
    'all_items'                  => __( 'All Regions' ),
    'parent_item'                => null,
    'parent_item_colon'          => null,
    'edit_item'                  => __( 'Edit Region' ),
    'update_item'                => __( 'Update Region' ),
    'add_new_item'               => __( 'Add New Region' ),
    'new_item_name'              => __( 'New Region Name' ),
    'separate_items_with_commas' => __( 'Separate Regions with commas' ),
    'add_or_remove_items'        => __( 'Add or remove Regions' ),
    'choose_from_most_used'      => __( 'Choose from the most used Regions' ),
    'not_found'                  => __( 'No Regions found.' ),
    'menu_name'                  => __( 'Regions' ),
  );
  register_taxonomy(
    'region',
    'post',
    array(
      'labels' => $labels,
      'rewrite' => array( 'slug' => 'region' ),
      'hierarchical' => true,
    )
  );
}


add_action( 'init', 'create_language_taxonomy' );

//register a taxonomy//
function create_language_taxonomy()
{

  $labels = array(
    'name'                       => _x( 'Languages', 'taxonomy general name' ),
    'singular_name'              => _x( 'Language', 'taxonomy singular name' ),
    'search_items'               => __( 'Search Languages' ),
    'popular_items'              => __( 'Popular Languages' ),
    'all_items'                  => __( 'All Languages' ),
    'parent_item'                => null,
    'parent_item_colon'          => null,
    'edit_item'                  => __( 'Edit Language' ),
    'update_item'                => __( 'Update Language' ),
    'add_new_item'               => __( 'Add New Language' ),
    'new_item_name'              => __( 'New Language Name' ),
    'separate_items_with_commas' => __( 'Separate Languages with commas' ),
    'add_or_remove_items'        => __( 'Add or remove Languages' ),
    'choose_from_most_used'      => __( 'Choose from the most used Languages' ),
    'not_found'                  => __( 'No Languages found.' ),
    'menu_name'                  => __( 'Languages' ),
  );
  register_taxonomy(
    'language',
    'post',
    array(
      'labels' => $labels,
      'rewrite' => array( 'slug' => 'language' ),
      'hierarchical' => true,
    )
  );
}

//

add_action( 'init', 'create_playlist_taxonomy' );

//register a taxonomy//
function create_playlist_taxonomy()
{

  $labels = array(
    'name'                       => _x( 'Playlists', 'taxonomy general name' ),
    'singular_name'              => _x( 'Playlist', 'taxonomy singular name' ),
    'search_items'               => __( 'Search Playlists' ),
    'popular_items'              => __( 'Popular Playlists' ),
    'all_items'                  => __( 'All Playlists' ),
    'parent_item'                => null,
    'parent_item_colon'          => null,
    'edit_item'                  => __( 'Edit Playlist' ),
    'update_item'                => __( 'Update Playlist' ),
    'add_new_item'               => __( 'Add New Playlist' ),
    'new_item_name'              => __( 'New Playlist Name' ),
    'separate_items_with_commas' => __( 'Separate Playlists with commas' ),
    'add_or_remove_items'        => __( 'Add or remove Playlists' ),
    'choose_from_most_used'      => __( 'Choose from the most used Playlists' ),
    'not_found'                  => __( 'No Playlists found.' ),
    'menu_name'                  => __( 'Playlists' ),
  );
  register_taxonomy(
    'playlist',
    'post',
    array(
      'labels' => $labels,
      'rewrite' => array( 'slug' => 'playlist' ),
      'hierarchical' => true,
    )
  );
}




function wp_trim_all_excerpt($text) {

  global $post;

  if ( '' == $text ) {

      $text = $post->post_content;
      $text = strip_shortcodes( $text );


   }

$text = strip_tags($text);
$excerpt_length = apply_filters('excerpt_length', 20);
$text = wp_trim_words( $text, $excerpt_length, $excerpt_more );


// $excerpt_more = apply_filters( 'excerpt_more', ' <a href="#">' . 'Read More &raquo;' . '</a>' );

return apply_filters('wp_trim_excerpt', $text, $raw_excerpt);


}

//add_filter('get_the_excerpt', 'wp_trim_all_excerpt');




//register custom fields for post///

function render_film_type( $post ) {

  // Add an nonce field so we can check for it later.
  wp_nonce_field( 'film_type_meta_box', 'film_type_nonce' );

  /*
   * Use get_post_meta() to retrieve an existing value
   * from the database and use the value for the form.
   */
  $type = get_post_meta( $post->ID, 'type', true );

  ?>
    <select name="film_type" id="film_type">
        <option value="youtube" <?php if($type == 'youtube') echo 'selected'; ?>>Youtube</option>
        <option value="vimeo" <?php if($type == 'vimeo') echo 'selected'; ?>>Vimeo</option>
           </select>
  <?php



}
function render_film_videourl( $post ) {


  // Add an nonce field so we can check for it later.
  wp_nonce_field( 'film_videourl_meta_box', 'film_videourl_nonce' );

  /*
   * Use get_post_meta() to retrieve an existing value
   * from the database and use the value for the form.
   */
  $videourl = get_post_meta( $post->ID, 'videourl', true );

  ?>
    <input type="textbox" name="videourl" id="videourl" value="<?php echo $videourl ;?>" />
  <?php


}

function render_film_duration( $post ) {


  // Add an nonce field so we can check for it later.
  wp_nonce_field( 'film_duration_meta_box', 'film_duration_nonce' );

  /*
   * Use get_post_meta() to retrieve an existing value
   * from the database and use the value for the form.
   */
  $duration = get_post_meta( $post->ID, 'duration', true );

  ?>
    <input type="textbox" name="duration" id="duration" value="<?php echo $duration ;?>" />
  <?php


}
function render_film_tagline( $post ) {


  // Add an nonce field so we can check for it later.
  wp_nonce_field( 'film_tagline_meta_box', 'film_tagline_nonce' );

  /*
   * Use get_post_meta() to retrieve an existing value
   * from the database and use the value for the form.
   */
  $tagline = get_post_meta( $post->ID, 'tagline', true );

  ?>
    <input type="textbox" name="tagline" id="tagline" value="<?php echo $tagline ;?>" />
  <?php


}



function render_articles_for_post( $post )
{

  //// Add an nonce field so we can check for it later.
  wp_nonce_field( 'articles_for_post_meta_box', 'articles_for_post_nonce' );


 //retrieve list of articles from Database

 $args = array(

        'orderby'          	=> 'post_date',
		'order'            	=> 'DESC',
		'post_type' 	   	=> 'article',
		'post_status'      	=> 'publish'

      );

	$query = new WP_Query($args);



	echo '<select name="related_article" id="related_article">';

	while ($query->have_posts())
	{

		$query->the_post();

		$related_article = get_post_meta( $post->ID, 'related_article', true );

		if($related_article == get_the_ID())
		{
			$selected = "selected";
		}
		else
		{
			$selected = "";
		}

		echo '<option value="'.get_the_ID().'" '.$selected.'>'.get_the_title().'</option>';

	}

	echo '</select>' ;


 /*
   * Use get_post_meta() to retrieve an existing value
   * from the database and use the value for the form.
   */


}


function adding_custom_meta_boxes( $post )
{
    add_meta_box(
        'film_type',
        __( 'Type' ),
        'render_film_type',
        'post',
        'normal',
        'default'
    );

    add_meta_box(
        'film_videourl',
        __( 'Video URL' ),
        'render_film_videourl',
        'post',
        'normal',
        'default'
    );

    add_meta_box(
        'film_duration',
        __( 'Duration (mins)' ),
        'render_film_duration',
        'post',
        'normal',
        'default'
    );

     add_meta_box(
        'film_tagline',
        __( 'Tagline' ),
        'render_film_tagline',
        'post',
        'normal',
        'default'
    );


	add_meta_box(
        'related_article',
        __( 'related_article' ),
        'render_articles_for_post',
        'post',
        'normal',
        'default'
    );

}
add_action( 'add_meta_boxes_post', 'adding_custom_meta_boxes' );



function save_related_article($post_id,$post)
{

$related_article = sanitize_text_field( $_POST['related_article'] );

        update_post_meta( $post_id, 'related_article', $related_article );
}

add_action( 'save_post', 'save_related_article',10,2 );




function save_meta_box_data( $post_id,$post )
{

      if($post->post_status == 'auto-draft')
        return;

        // If this is an autosave, our form has not been submitted, so we don't want to do anything.
        if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
          return;
        }

        if ( isset( $_REQUEST['post_type'] ) &&  'page' == $_REQUEST['post_type'] || isset( $_REQUEST['action'] ) && $_REQUEST['action'] == 'trash' ) {

          return;


        } else {

          if ( ! current_user_can( 'edit_post', $post_id ) ) {
            return;
          }
        }

        /* OK, it's safe for us to save the data now. */

        // Sanitize user input.
       $film_type = sanitize_text_field( $_POST['film_type'] );



        // Update the meta field in the database.
        update_post_meta( $post_id, 'type', $film_type );



          // Sanitize user input.
        $videourl = sanitize_text_field( $_POST['videourl'] );




        if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$videourl) && $post->post_status != 'inherit' ) {



          add_settings_error(
              'videourl',
              'Videourl cannot be empty',
              'Entered URL is not valid.',
              'error'
            );
         set_transient( 'settings_errors', get_settings_errors(), 30 );

         return false;
        }

        // Update the meta field in the database.
        update_post_meta( $post_id, 'videourl', $videourl );

         // Sanitize user input.
        $duration = sanitize_text_field( $_POST['duration'] );

        if($duration == "" && $post->post_status != 'inherit')
       {
          add_settings_error(
            'duration',
            '',
            'Enter Duration.',
            'error'
          );

         set_transient( 'settings_errors', get_settings_errors(), 30 );

          return false;
       }
        if(!is_numeric($duration ) && $post->post_status != 'inherit')
       {
          add_settings_error(
            'duration',
            '',
            'Duration should only contain numbers.',
            'error'
          );

         set_transient( 'settings_errors', get_settings_errors(), 30 );

          return false;
       }

        // Update the meta field in the database.
        update_post_meta( $post_id, 'duration', $duration );

          // Sanitize user input.
        $tagline = sanitize_text_field( $_POST['tagline'] );

        update_post_meta( $post_id, 'tagline', $tagline );


}
add_action( 'save_post', 'save_meta_box_data',3,2 );

add_action( 'admin_notices', '_location_admin_notices' );

function _location_admin_notices() {

  // If there are no errors, then we'll exit the function
  if ( ! ( $errors = get_transient( 'settings_errors' ) ) ) {
    return;
  }

  // Otherwise, build the list of errors that exist in the settings errores
  $message = '<div id="acme-message" class="error below-h2"><p><ul>';

  foreach ( $errors as $error ) {
    $message .= '<li>' . $error['message'] . '</li>';
  }
  $message .= '</ul></p></div><!-- #error -->';

  // Write them out to the screen
  echo $message;

  // Clear and the transient and unhook any other notices so we don't see duplicate messages
  delete_transient( 'settings_errors' );
  remove_action( 'admin_notices', '_location_admin_notices' );

}



add_action( 'admin_menu', 'shortfilm_menu' );
function shortfilm_menu()
	{
		add_menu_page( 'shortfilm', 'Shortfilm', 'manage_options', 'shortfilm', 'display_shortfilm_menu_page');
	}

	function display_shortfilm_menu_page()
	{
		include('shortfilm_menu_page.php');
	}


	add_action('wp_ajax_populate_posts', 'fill_posts');
	add_action('wp_ajax_nopriv_populate_posts', 'fill_posts');

	function fill_posts()
	{

		$cat_id = $_REQUEST['cat_id'];


	    $args1 = array('category' => $cat_id);

		$myposts = get_posts($args1);

			foreach($myposts as $element)
			{
					$postid = $element->ID;
					$posttitle = $element->post_title;

					$option .= "<option value='".$postid."'>".$posttitle."</option>";
			}

			echo $option;

			die();
	}



	add_action('wp_ajax_save_homepage_video', 'add_homepage_video');
	add_action('wp_ajax_nopriv_save_homepage_video', 'add_homepage_video');

	function add_homepage_video()
	{
		$cat_id = $_POST['cat_id'];
		$post_id = $_POST['post_id'];

		if(update_option('homepage_video',$post_id))
		{
			$response = Film\Video::get($post_id);

			wp_send_json($response);

		}
		else
		{
			echo "Updation failed. Please select another category/post";
		}

		die();
	}


	add_action('wp_ajax_show_default_staffpick_post', 'get_default_staffpick_post');
	add_action('wp_ajax_nopriv_show_default_staffpick_post', 'get_default_staffpick_post');

	function get_default_staffpick_post()
	{
		$args = array(
			'numberposts' => '1',
			'post_status' => 'publish'
		);

		$recent_posts = wp_get_recent_posts( $args );

		$recent_post_id = $recent_posts[0]["ID"];

		$response = Film\Video::get($recent_post_id);


		if (is_wp_error($response))
		{
		   echo false;
		}
		else
		{
			wp_send_json($response);
		}
	}


	add_action('wp_ajax_show_staffpick_category_post', 'get_staffpick_category_post');
	add_action('wp_ajax_nopriv_show_staffpick_category_post', 'get_staffpick_category_post');

	function get_staffpick_category_post($postid)
	{

		$response = Film\Video::get($postid);

		if (is_wp_error($response))
		{
		   echo false;
		}
		else
		{
		   wp_send_json($response);
		}
	}


	function get_pairs_category_post($no_of_categories)
	{
		//echo "in get_pairs_category_post()";

		$response = array();

		$args_cat = array(
			'number'  => $no_of_categories,
			'parent' => 0
		);

		$categories = get_categories( $args_cat );



		foreach ( $categories as $category )
		{
			$args_post = array(
				'posts_per_page' => 1,
				'orderby'        => 'rand',
				'category' 		 => $category->cat_ID,
				'post_status' 	 => 'publish'
				);

			$random_posts = get_posts( $args_post );

			foreach ( $random_posts as $random_post )
			{
				$random_post_id = $random_post->ID;
			}


			$response[]=array(

				'catid'   => $category->cat_ID,
				'catname' => $category->cat_name,
				'postid'  => $random_post_id
			);

		}


		if (is_wp_error($response))
		{
		   return false;
		}
		else
		{
		   return $response;
		}

	}


/*
	function get_pairs_category_post($no_of_categories)
	{
		$response = array();

		$args_cat = array(
			'number'  => $no_of_categories,
			'parent' => 0
		);

		$categories = get_categories( $args_cat );

		foreach ( $categories as $category )
		{
			$args_post = array(
				'numberposts' => '1',
				'category' => $category->term_id,
				'post_status' => 'publish'
				);

			$recent_posts = wp_get_recent_posts( $args_post );

			$recent_post_id = $recent_posts[0]["ID"];

			$response[]=array(

				'catid' => $category->term_id,
				'catname' => $category->name,
				'postid' => $recent_post_id
			);

		}

		if (is_wp_error($response))
		{
		   return false;
		}
		else
		{
		   return $response;
		}

	}

*/

	function create_custom_post_article()
	{
		$labels = array(
			'name'               => _x( 'Articles', 'post type general name' ),
			'singular_name'      => _x( 'Article', 'post type singular name' ),
			'add_new'            => _x( 'Add New', 'article' ),
			'add_new_item'       => __( 'Add New Article' ),
			'edit_item'          => __( 'Edit Article' ),
			'new_item'           => __( 'New Article' ),
			'all_items'          => __( 'All Articles' ),
			'view_item'          => __( 'View Article' ),
			'search_items'       => __( 'Search Article' ),
			'not_found'          => __( 'No articles found' ),
			'not_found_in_trash' => __( 'No articles found in the Trash' ),
			'parent_item_colon'  => '',
			'menu_name'          => 'Articles'
		);
		$args = array(
			'labels'        => $labels,
			'description'   => 'Holds title, excerpt etc.',
			'public'        => true,
			'menu_position' => 5,
			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments' ),
			'has_archive'   => true,
			'rewrite' => array('slug' => 'article'),
		);
		register_post_type( 'article', $args );
	}

	add_action( 'init', 'create_custom_post_article' );


function change_excerpt_length( $length )
{
	return 20;
}

add_filter( 'excerpt_length', 'change_excerpt_length', 999 );


function get_popular_articles($args)
{
	$query = new WP_Query($args);
	$response = array();

    while ( $query->have_posts() )
	{
		$query->the_post();
		$response[] = Article_post\Article::get_article($query->post->ID);
	}

	return $response;
}


function get_recent_articles()
{
	$params = array(
				'numberposts' => 6,
				'order' => 'DESC',
				'post_type'   => 'article',
				'post_status' => 'publish'
	);

	$recent_posts = wp_get_recent_posts( $params );

	foreach ($recent_posts as $recent_post)
	{
		$post_detail = Article_post\Article::get_article($recent_post['ID']);

		$post_response[] = array(
				'slug'				=> $post_detail['slug'],
				'featured_image'	=> $post_detail['featured_image'],
				'small_image'	=> $post_detail['small_image'],
				'medium_image'	=> $post_detail['medium_image'],
				'large_image'	=> $post_detail['large_image'],
				'title'				=> $post_detail['title'],
				//'duration'			=> $post_detail['duration'],
				//'region'			=> $post_detail['region'],
				'director'			=> $post_detail['director'],
				'categories'		=> $post_detail['categories'],
				'excerpt'			=> $post_detail['excerpt'],
				'post_like_count'	=> $post_detail['post_like_count'],
				'no_of_views'		=> $post_detail['no_of_views'],
				////'post_date'			=> $post_detail['post_date']
				'post_date'			=> $post_detail['post_date']

			);

	}

	return $post_response;

} // end get_recent_articles()


function get_recent_videos()
{
	$params = array(
				'numberposts' => 3,
				'order' => 'DESC',
				'post_type'   => 'post',
				'post_status' => 'publish'
	);

	$recent_posts = wp_get_recent_posts( $params );


	foreach ($recent_posts as $recent_post)
	{
		$post_detail = Film\Video::get($recent_post['ID']);


		$post_response[] = array(
				'id'				=> $post_detail['id'],
				'slug'				=> $post_detail['slug'],
				'featured_image'	=> $post_detail['featured_image'],
				'small_image'	=> $post_detail['small_image'],
				'medium_image'	=> $post_detail['medium_image'],
				'large_image'	=> $post_detail['large_image'],
				'title'				=> $post_detail['title'],
				'duration'			=> $post_detail['duration'],
				'region'			=> $post_detail['region'],
				'director'			=> $post_detail['director'],
				'categories'		=> $post_detail['categories'],
				'excerpt'			=> $post_detail['excerpt'],
				'post_like_count'	=> $post_detail['post_like_count'],
				'no_of_views'		=> $post_detail['no_of_views'],
				'post_date'			=> get_the_date()

			);

	}

	return $post_response;

} // end get_recent_articles()


function get_embed_url($postid,$videourl)
{

	$videotype = get_post_meta( $postid , 'type', true );

	//if youtube video
	if ($videotype == "youtube")
	{
		$youtubehttpval =  explode("://", $videourl);
		$httpval = $youtubehttpval[0];

		$youtubeUrl =  explode("?v=", $videourl);

		if($youtubeUrl[1])  //if not embed link
		{
			$youtubeUrlid =  $youtubeUrl[1];
		}
		else  //if embed link
		{
			$youtubeUrl =  explode("/embed/", $videourl);

			$youtubeUrlid =  $youtubeUrl[1];

		}

		$embedurl =  $httpval .'://www.youtube.com/embed/'.$youtubeUrlid.'?autoplay=1';

	}

	//if vimeo video
	else if ($videotype == "vimeo")
	{
		$vimeoUrl =  explode("vimeo.com/", $videourl);

		$vimeoUrlUrlid =  $vimeoUrl[1];

		$embedurl =  '//player.vimeo.com/video/'.$vimeoUrlUrlid.'?autoplay=1';

	}

	return $embedurl;

}


function show_excerpt($charlength,$post_matter)
{

	$excerpt = strip_tags($post_matter);

	$charlength++;

	if ( mb_strlen( $excerpt ) > $charlength )
	{
		$subex = mb_substr( $excerpt, 0, $charlength - 5 );
		$exwords = explode( ' ', $subex );
		$excut = - ( mb_strlen( $exwords[ count( $exwords ) - 1 ] ) );
		if ( $excut < 0 )
		{
			return mb_substr( $subex, 0, $excut );
		}
		else
		{
			return $subex;
		}

	}
	else
	{
		return $excerpt;
	}
}


add_action('template_redirect', 'increment_article_number_of_views');

function increment_article_number_of_views()
{
	global $post;

	$type = $post->post_type;

	if($type == 'article')
	{
		$old_count = get_post_meta( $post->ID, "no_of_views", true);

		update_post_meta( $post->ID, "no_of_views", $old_count+1);

	}

}


add_action( 'wp_ajax_increase_video_number_of_views', 'increment_video_number_of_views' );
add_action( 'wp_ajax_nopriv_increase_video_number_of_views', 'increment_video_number_of_views' );

function increment_video_number_of_views()
{

	$video_id= $_POST['video_id'];   //ajax data

	$post = get_post($video_id);


	$old_count = get_post_meta( $post->ID, "no_of_views", true);

	update_post_meta( $post->ID, "no_of_views", $old_count+1);

	wp_die();

}


function get_posts_by_author($author_id)
{

	$args = array(
        //'post_author' 		=> $author_id,
		'author' 			=> $author_id,
        'orderby'          	=> 'post_date',
		'order'            	=> 'DESC',
		//'posts_per_page' 	=> 12,
		'posts_per_page' 	=> 6,
		'post_type' 	   	=> 'post',
		'post_status'      	=> 'publish'

      );


	$query = new WP_Query($args);

	$response = array();

	while ($query->have_posts())
	{

		$query->the_post();

		$response[] = Film\Video::get($query->post->ID);


	}

	return $response;

}


function get_articles_by_author($author_id)
{

	$args = array(
        //'post_author' 		=> $author_id,
		'author' 			=> $author_id,
        'orderby'          	=> 'post_date',
		'order'            	=> 'DESC',
		//'posts_per_page' 	=> 12,
		'posts_per_page' 	=> 6,
		'post_type' 	   	=> 'article',
		'post_status'      	=> 'publish'

      );


	$query = new WP_Query($args);

	$response = array();

	while ($query->have_posts())
	{

		$query->the_post();

		$response[] = Article_post\Article::get_article($query->post->ID);

	}

	return $response;

}


add_action( 'wp_ajax_fetch_posts_by_author', 'get_more_posts_by_author' );
add_action( 'wp_ajax_nopriv_fetch_posts_by_author', 'get_more_posts_by_author' );


function get_more_posts_by_author()
{

		$author_id= $_POST['author_id'];



		$offset = isset($_REQUEST['offset']) && $_REQUEST['offset'] !="" ?
						$_REQUEST['offset'] : 0;

		if($offset != 0)
			$offset = intval($offset) +  1;

		$args = array(

					//'post_author' 		=> $author_id,
					'author' 			=> $author_id,
					'orderby'           => 'post_date',
					'order'             => 'DESC',
					//'posts_per_page'   	=> 12,
					'posts_per_page'   	=> 6,
					'post_status'      	=> 'publish',
					'post_type' 	   	=> 'post',
					'offset'           	=> $offset

		);



	$query = new WP_Query($args);

	$response = array();

	while ($query->have_posts())
	{


		$query->the_post();

		$response[] = Film\Video::get($query->post->ID);

	}

	 wp_send_json($response);


}



add_action( 'wp_ajax_fetch_articles_by_author', 'get_more_articles_by_author' );
add_action( 'wp_ajax_nopriv_fetch_articles_by_author', 'get_more_articles_by_author' );


function get_more_articles_by_author()
{

		$author_id= $_POST['author_id'];



		$offset_art = isset($_REQUEST['offset_art']) && $_REQUEST['offset_art'] !="" ?
						$_REQUEST['offset_art'] : 0;

		if($offset_art != 0)
			$offset_art = intval($offset_art) +  1;

		$args = array(

					//'post_author' 		=> $author_id,
					'author' 			=> $author_id,
					'orderby'           => 'post_date',
					'order'             => 'DESC',
					//'posts_per_page'   	=> 12,
					'posts_per_page'   	=> 6,
					'post_status'      	=> 'publish',
					'post_type' 	   	=> 'article',
					//'offset'           	=> $offset
					'offset'           	=> $offset_art

		);


	$query = new WP_Query($args);

	$response = array();

	while ($query->have_posts())
	{


		$query->the_post();

		$response[] = Article_post\Article::get_article($query->post->ID);


	}


	 wp_send_json($response);


}


function get_author_info($author_id)
{

	//get author name
	$name = (!get_user_details($author_id)) ? "" :
				 get_user_meta(get_user_details($author_id)->ID,'first_name' , true).' '.
				 get_user_meta(get_user_details($author_id)->ID,'last_name' , true);

	if($name == " ")
		$name = get_user_details($author_id)->data->display_name;

	$author_description = get_user_meta(get_user_details($author_id)->ID,'description' , true);

	$post_user_like = (!get_user_details($author_id)) ? "" :get_user_details($author_id)->data->user_like_count;

	$author_link = get_author_posts_url($author_id);

	$author_nicename = get_the_author_meta( 'user_nicename', $author_id );

	$no_of_videos_by_author = count_user_posts( $author_id , "post"  );

	$no_of_articles_by_author = count_user_posts( $author_id , "article"  );

	$author_email = get_the_author_meta( 'user_email', $author_id );


	$author_info = array(

			'author_id'				   => $author_id,
			'author_name'		 	   => $name,
			'author_description'	   => $author_description,
			'post_user_like' 	 	   => $post_user_like,
			'author_link'		 	   => $author_link,
			'author_nicename'	 	   => $author_nicename,
			'no_of_videos_by_author'   => $no_of_videos_by_author,
			'no_of_articles_by_author' => $no_of_articles_by_author,
			'author_email'	 	  	   => $author_email

	);


	return $author_info;

}

function get_playlist_info($playlist_id, $taxonomy, $image_size)
{

	$playlist_details = get_term( $playlist_id, $taxonomy );

	//to convert object to array

	$playlist_name				= $playlist_details->name;
	$playlist_slug 				= $playlist_details->slug;
	$playlist_taxonomy  		= $playlist_details->taxonomy;
	$playlist_description   	= $playlist_details->description;
	$playlist_object_id   		= $playlist_details->object_id;

	$no_of_videos_in_playlist   = $playlist_details->count;

	$playlist_link = get_term_link($playlist_id, $taxonomy);

	$full_playlist_link = '<a href="'.esc_url( $playlist_link ).'" title="Playlist Name">'.$playlist_name.'</a>';

	$playlist_image = s8_get_taxonomy_image_src($playlist_details, $image_size);

	$playlist_image_url = $playlist_image['src'];


	$playlist_info = array(

			'playlist_id'				    => $playlist_id,
			'playlist_name'		 	   		=> $playlist_name,
			'playlist_slug'		 	   		=> $playlist_slug,
			'playlist_taxonomy'		 	    => $playlist_taxonomy,
			'playlist_description'	  		=> $playlist_description,
			'playlist_object_id'	  		=> $playlist_object_id,
			'playlist_link'		 	  		=> $playlist_link,
			'full_playlist_link'		 	=> $full_playlist_link,
			'no_of_videos_in_playlist'      => $no_of_videos_in_playlist,
			'playlist_image_url'      		=> $playlist_image_url

	);



	return $playlist_info;

}

function get_genre_total_runtime($genre_id){
  $total_runtime = 0;




  $args = array(
    'orderby'           => 'post_date',
    'order'             => 'DESC',
    'genre'       => $genre_id,
    'region'      => '',
    'language'      => '',
    'offset'            => 0
  );



 /* $response_posts = Film\Video::get_video_duration($args);

  foreach($response_posts as $response_post)
  {
    $total_runtime+=$response_post['duration'];

  }*/
  $total_runtime = Film\Video::get_video_duration($args);
  $temp_runtime_hours = $total_runtime/60;
  $runtime_hours = floor($temp_runtime_hours);

  $runtime_mins = $total_runtime%60;

  //$final_runtime = array();

  //$final_runtime['runtime_hours'] = $runtime_hours;
  //$final_runtime['runtime_mins']  = $runtime_mins;
  //$final_runtime['total_runtime']  = $total_runtime;

  //return $final_runtime;

  return $total_runtime;
}


function get_playlist_total_runtime($playlist_id, $taxonomy)
{
	$total_runtime = 0;

	$playlist_details = get_term( $playlist_id, $taxonomy );


	$args = array(
		'orderby'           => 'post_date',
		'order'             => 'DESC',
		'genre'				=> '',
		'playlist'		    => $playlist_id,
		'taxonomy'			=> $taxonomy,
		'region'			=> '',
		'language'			=> '',
		'posts_per_page'   	=> 12,
		'offset'           	=> 0

	);



	$response_posts = Film\Video::get_many($args);

	foreach($response_posts as $response_post)
	{
		$total_runtime+=$response_post['duration'];

	}

	$temp_runtime_hours = $total_runtime/60;
	$runtime_hours = floor($temp_runtime_hours);

	$runtime_mins = $total_runtime%60;

/*	$final_runtime = array();

	$final_runtime['runtime_hours'] = $runtime_hours;
	$final_runtime['runtime_mins']  = $runtime_mins;
	$final_runtime['total_runtime']  = $total_runtime;

	return $final_runtime;*/

	return $total_runtime;


} //end function



function get_video_category_links($categories)
{


	$cat_array = array();

	$temp = array();

	foreach ($categories as $value)
	{


			$category_id = get_cat_ID( $value );


			$category_link = get_category_link( $category_id );


			array_push($temp, $category_link);


			 $link = '<a href="'.esc_url( $category_link ).'" title="Category Name">'.$value.'</a>';


			array_push($cat_array, $link);


	}


	return $cat_array;

}

function get_video_region_links($regions)
{
	$region_array = array();

	foreach ($regions as $value)
	{
		// $region_id = get_cat_ID( $value );
		$region_id = get_term_by( 'name', $value, 'region');

		// $region_link = get_category_link( $region_id );
		$region_link = get_term_link( $region_id );

		// $link = '<a href="'.esc_url( $region_link ).'" target="_blank"  title="Region Name">'.$value.'</a>';
		$link = '<a href="'.esc_url( $region_link ).'" title="Region Name">'.$value.'</a>';

		array_push($region_array, $link);
	}

	if(count($region_array) == 0)
		$region_array = array(0 => 'No regions');

	return $region_array;

}

function get_video_language_links($languages)
{
	$language_array = array();

	foreach ($languages as $value)
	{
		$language_id = get_term_by( 'name', $value, 'language');

		$language_link = get_term_link( $language_id );

		$link = '<a href="'.esc_url( $language_link ).'" title="Language Name">'.$value.'</a>';

		array_push($language_array, $link);
	}

	if(count($language_array) == 0)
		$language_array = array(0 => 'No languages');

	return $language_array;

}

function get_video_playlist_links($playlists)
{

	$playlist_array = array();

	foreach ($playlists as $value)
	{
		$playlist_id = get_term_by( 'name', $value, 'playlist');

		$playlist_link = get_term_link( $playlist_id );

		$link = '<a href="'.esc_url( $playlist_link ).'" title="Playlist Name">'.$value.'</a>';

		array_push($playlist_array, $link);
	}

	if(count($playlist_array) == 0)
		$playlist_array = array(0 => 'No playlists');

	return $playlist_array;

}


function get_list_of_all_languages()
{
	$args = array(
		'orderby'           => 'name',
		'order'             => 'ASC'
	);

	$all_language_list = get_terms('language', $args);


	return $all_language_list;
}

function get_list_of_all_playlists()
{
	$args = array(
		'orderby'           => 'name',
		'order'             => 'ASC'
	);

	$all_playlist_list = get_terms('playlist', $args);


	return $all_playlist_list;

}


function get_category_info($category_id, $taxonomy, $image_size)
{

	$playlist_details = get_term( $playlist_id, $taxonomy );

	//to convert object to array

	$playlist_name				= $playlist_details->name;
	$playlist_slug 				= $playlist_details->slug;
	$playlist_taxonomy  		= $playlist_details->taxonomy;
	$playlist_description   	= $playlist_details->description;
	$playlist_object_id   		= $playlist_details->object_id;

	$no_of_videos_in_playlist   = $playlist_details->count;

	$playlist_link = get_term_link($playlist_id, $taxonomy);

	$full_playlist_link = '<a href="'.esc_url( $playlist_link ).'" title="Playlist Name">'.$playlist_name.'</a>';

	$playlist_image = s8_get_taxonomy_image_src($playlist_details, $image_size);

	$playlist_image_url = $playlist_image['src'];


	$playlist_info = array(

			'playlist_id'				    => $playlist_id,
			'playlist_name'		 	   		=> $playlist_name,
			'playlist_slug'		 	   		=> $playlist_slug,
			'playlist_taxonomy'		 	    => $playlist_taxonomy,
			'playlist_description'	  		=> $playlist_description,
			'playlist_object_id'	  		=> $playlist_object_id,
			'playlist_link'		 	  		=> $playlist_link,
			'full_playlist_link'		 	=> $full_playlist_link,
			'no_of_videos_in_playlist'      => $no_of_videos_in_playlist,
			'playlist_image_url'      		=> $playlist_image_url

	);



	return $playlist_info;

}


function get_few_categories($image_size)
{
	//get objects
	$cat_indian = get_category_by_slug('indian');

	$cat_music_video = get_category_by_slug('music-video');

	$cat_short_doc = get_category_by_slug('short-doc');

	$cat_thriller = get_category_by_slug('thriller');


	//get image urls
	$cat_indian_image = s8_get_taxonomy_image_src($cat_indian, $image_size);

	$cat_indian_image_url = $cat_indian_image['src'];


	$cat_music_video_image = s8_get_taxonomy_image_src($cat_music_video, $image_size);

	$cat_music_video_image_url = $cat_music_video_image['src'];


	$cat_short_doc_image = s8_get_taxonomy_image_src($cat_short_doc, $image_size);

	$cat_short_doc_image_url = $cat_short_doc_image['src'];


	$cat_thriller_image = s8_get_taxonomy_image_src($cat_thriller, $image_size);

	$cat_thriller_image_url = $cat_thriller_image['src'];


	//get links

	$cat_indian_link = get_category_link( $cat_indian->term_id );

	$cat_music_video_link = get_category_link( $cat_music_video->term_id );

	$cat_short_doc_video_link = get_category_link( $cat_short_doc->term_id );

	$cat_thriller_video_link = get_category_link( $cat_thriller->term_id );


	$response_cats[]=array(

		'cat_indian_image_url'     	   =>  $cat_indian_image_url,
		'cat_music_video_image_url'    =>  $cat_music_video_image_url,
		'cat_short_doc_image_url'  	   =>  $cat_short_doc_image_url,
		'cat_thriller_image_url'       =>  $cat_thriller_image_url,
		'cat_indian_link'	  		   =>  $cat_indian_link,
		'cat_music_video_link'	  	   =>  $cat_music_video_link,
		'cat_short_doc_video_link'	   =>  $cat_short_doc_video_link,
		'cat_thriller_video_link'	   =>  $cat_thriller_video_link

	);


	if (is_wp_error($response_cats))
	{
	   return false;
	}
	else
	{


	   return $response_cats;
	}

}


function get_some_categories($no_of_categories, $image_size)
{
	$response_cats = array();

	$args_cat = array(

				'number'      => $no_of_categories,
				'parent'      => 0

	);

	$categories = get_categories($args_cat);


	foreach ( $categories as $category )
	{

		////get image urls
		$cat_image = s8_get_taxonomy_image_src($category, $image_size);

		$cat_image_url = $cat_image['src'];

		// //get links
		$cat_link = get_category_link( $category->term_id );


		// $cat_link = get_category_link( $category->term_id );

		$response_cats[]=array(

			'cat_id'     	 	 =>  $category->cat_ID,
			'cat_name'   		 =>  $category->cat_name,
			'cat_termid' 		 =>  $category->term_id,
			'cat_slug'   		 =>  $category->slug,
			'cat_count'	 		 =>  $category->category_count,
			'cat_taxonomy'	 	 =>  $category->taxonomy,
			'cat_description'	 =>  $category->category_description,
			'cat_link'	 		 =>  $cat_link,
			'cat_image_url'	 	 =>  $cat_image_url


		);
	}

	if (is_wp_error($response_cats))
	{
	   return false;
	}
	else
	{
	   return $response_cats;
	}

}


function author_director_rewrite(){
$GLOBALS['wp_rewrite']->author_base = 'director';
}
add_action('init', 'author_director_rewrite');



add_action('save_post', 'check_featured_image', 100);


function check_featured_image($post_id)
{
    $post = get_post($post_id);

	//to check featured image size while adding new post & while updating post

	if(has_post_thumbnail($post_id))
	{
    	$image_data = wp_get_attachment_image_src( get_post_thumbnail_id( $post_id ), "full" );
    	$image_width = $image_data[1];


    	if($image_width < 2000)
		{
    		$post->post_status = 'draft';

			remove_action('save_post', 'check_featured_image', 100);
			wp_update_post( $post );
			add_action('save_post', 'check_featured_image', 100);


    		$message = '<p>Please, add featured image with minimum width 2000px !</p>'
    		. '<p><a href="' . admin_url('post.php?post=' . $post_id . '&action=edit') . '">Go back and edit the post</a></p>';
    		wp_die($message, 'Error - Invalid featured image size!');

    	}

    }

	// to populate number of likes & views while adding new post

	$post_status = get_post_status($post_id);

	if ( $post_status == 'auto-draft' )  // new post with no content
	{
		$post_like_count = get_post_meta( $post_id, "_post_like_count", true );

		$no_of_views = get_post_meta( $post_id, "no_of_views", true );


		if(($post_like_count==false) || ($no_of_views==false))
		{
			// if likes & views are not present den populate dem wid random values

			$random_views = rand(50, 500);

			do
			{
				$random_likes = rand(50, 500);

			} while ($random_likes >= $random_views);

			update_post_meta( $post_id, "no_of_views", $random_views);

			update_post_meta( $post_id, "_post_like_count", $random_likes);

		}


	} //end outer if


} //end function



/*
function check_featured_image($post_id)
{
    $post = get_post($post_id);

    if(has_post_thumbnail($post_id))
	{
    	$image_data = wp_get_attachment_image_src( get_post_thumbnail_id( $post_id ), "full" );
    	$image_width = $image_data[1];

    	if($image_width < 2000)
		{
    		$post->post_status = 'draft';

			remove_action('save_post', 'check_featured_image', 100);
			wp_update_post( $post );
			add_action('save_post', 'check_featured_image', 100);


    		$message = '<p>Please, add featured image with minimum width 2000px!</p>'
    		. '<p><a href="' . admin_url('post.php?post=' . $post_id . '&action=edit') . '">Go back and edit the post</a></p>';
    		wp_die($message, 'Error - Invalid featured image size!');

    	}

    }

}
*/



////

add_action( 'wp_trash_post', 'remove_image_size_validation_on_click_of_post_trash' );

function remove_image_size_validation_on_click_of_post_trash($post_id)
{
    $post = get_post($post_id);

    if(has_post_thumbnail($post_id))
	{
		remove_action('save_post', 'check_featured_image', 100);
    }


}

////

function validate_duration($hook)
{
  wp_enqueue_script( 'custom_script', get_template_directory_uri() . '/assets/js/duration_validation.js', array('jquery') );
}
add_action( 'admin_enqueue_scripts', 'validate_duration' );


function get_all_playlists($image_size)
{
	$all_playlists =  get_terms('playlist', 'orderby=id', 'order=DESC');

	$newlist = array();

	foreach($all_playlists as $playlist)
	{
		$playlist_image = s8_get_taxonomy_image_src($playlist, $image_size);

		$playlist_image_url = $playlist_image['src'];

		$list = (array) $playlist;

		$play_name = $list['name'];

		$play_id = get_term_by( 'name', $play_name, 'playlist');

		$play_link = get_term_link( $play_id );

		$link = '<a href="'.esc_url( $play_link ).'" title="Playlist Name">'.$play_name.'</a>';


		$newlist[] = array(
						'playlist_id' => $list['term_id'],
						'playlist_name' => $list['name'],
						'playlist_slug' => $list['slug'],
						'playlist_taxonomy' => $list['taxonomy'],
						'playlist_description' => $list['description'],
						'playlist_count' => $list['count'],
						// 'playlist_link' => $link,
						'playlist_link' => $play_link,
						'playlist_image_url' => $playlist_image_url

		);

	}


	return $newlist;
}


function get_playlists($image_size, $playlists_per_page, $offset)
{
	$args = array(
				'orderby'           => 'id',
				'order'             => 'ASC',
				'number'            => $playlists_per_page,
				'offset'			=> $offset
			);


	$playlists =  get_terms(array('playlist'), $args);

	$newlist = array();

	foreach($playlists as $playlist)
	{
		$playlist_image = s8_get_taxonomy_image_src($playlist, $image_size);

		$playlist_image_url = $playlist_image['src'];


		$list = (array) $playlist;

		$play_name = $list['name'];

		$play_id = get_term_by( 'name', $play_name, 'playlist');

		$play_link = get_term_link( $play_id );

		$link = '<a href="'.esc_url( $play_link ).'" title="Playlist Name">'.$play_name.'</a>';


		$newlist[] = array(
						'playlist_id' => $list['term_id'],
						'playlist_name' => $list['name'],
						'playlist_slug' => $list['slug'],
						'playlist_taxonomy' => $list['taxonomy'],
						'playlist_description' => $list['description'],
						'playlist_count' => $list['count'],
						// 'playlist_link' => $link,
						'playlist_link' => $play_link,
						'playlist_image_url' => $playlist_image_url

		);

	}


	return $newlist;
}



function get_recent_playlists($image_size, $playlists_per_page)
{
	$args = array(
				'orderby'           => 'id',
				'order'             => 'DESC',
				'number'            => $playlists_per_page

			);


	$playlists =  get_terms(array('playlist'), $args);

	$newlist = array();

	foreach($playlists as $playlist)
	{
		$playlist_image = s8_get_taxonomy_image_src($playlist, $image_size);

		$playlist_image_url = $playlist_image['src'];


		$list = (array) $playlist;

		$play_name = $list['name'];

		$play_id = get_term_by( 'name', $play_name, 'playlist');

		$play_link = get_term_link( $play_id );

		$link = '<a href="'.esc_url( $play_link ).'" title="Playlist Name">'.$play_name.'</a>';


		$newlist[] = array(
						'playlist_id' => $list['term_id'],
						'playlist_name' => $list['name'],
						'playlist_slug' => $list['slug'],
						'playlist_taxonomy' => $list['taxonomy'],
						'playlist_description' => $list['description'],
						'playlist_count' => $list['count'],
						// 'playlist_link' => $link,
						'playlist_link' => $play_link,
						'playlist_image_url' => $playlist_image_url

		);

	}

	return $newlist;
}



// custom admin login logo
function custom_login_logo()
{
	 echo '<style type="text/css">
	 h1 a { background-image: url('.get_bloginfo('template_directory').'/images/logo.png) !important;   width: 100% !important; background-size: auto !important;}
	 </style>';
}
add_action('login_head', 'custom_login_logo');



//caching data funtions start
function save_cached_data($object_id='',$object_type,$data){
    global $wpdb;
    
    $wpdb->insert('cache_data', array(
                'id' => '',
                'object_id' => $object_id,
                'object_type' => $object_type,
                'object_value' => maybe_serialize($data),
                'last_updated_date'=> date('Y-m-d')
                ),array(
                '%d',
                '%d',
                '%s',
                '%s',
                '%s',
                ) 
    );
}
function delete_cache_data($object_id,$object_type){
    global $wpdb;
    
    $wpdb->delete( 'cache_data', array( 'object_id' => $object_id,'object_type' => $object_type ) );
}




function get_cached_data($object_type,$object_id=''){
    global $wpdb;

    if($object_id!='')
        $where=" and object_id=".$object_id;
    
    $query_cached="select object_id,object_value from cache_data where object_type='".$object_type."'".$where;
    $cached_results=$wpdb->get_results($query_cached,ARRAY_A);

    foreach ($cached_results as $cached_value) {
        $cached_array[$cached_value['object_id']]=maybe_unserialize($cached_value['object_value']);
    }
    return $cached_array;
}


// add_action( 'publish_post', 'sendPushNotifications',10,2 );
add_action( 'save_post', 'sendPushNotifications',10,2 );

function sendPushNotifications($ID, $post)
{
  $post = (array)$post;

if($post['post_status']=='publish'){
  $post_title = $post["post_title"]; 

  $post_date = $post["post_date"]; 
  $post_modified = $post["post_modified"]; 
  $ID = (string)$post["ID"];

  $object_id=1;
  $object_type='default_data';
  delete_cache_data($object_id,$object_type);//call to delete the cache data
  fetch_default_data();//call to update the cache data
  if ($post_date == $post_modified) 
  {
    require 'push.php'; 
    $data_movie= single_video($post["ID"]);  
    $moviedetails=urlencode(json_encode($data_movie));
    $data = array("alert" => $post_title,"movieId" => $ID,"movieDetails" => $moviedetails);
    $notify = new pushNotifications;
    $notify->sendNotifications($data);
  }
}
}

//caching data funtions End

/*

////add_action( 'init', 'populate_likes_and_views' );

function populate_likes_and_views()
{

	$videos_args = array(
		'numberposts'	   => -1,
		'post_type'        => 'post',
		'post_status'      => 'publish'

	);

	$all_videos = get_posts($videos_args);


	foreach($all_videos as $post_video)
	{
		$random_video_views = rand(50, 500);

		do
		{
			$random_video_likes = rand(50, 500);

		} while ($random_video_likes >= $random_video_views);

		update_post_meta( $post_video->ID, "no_of_views", $random_video_views);

		update_post_meta( $post_video->ID, "_post_like_count", $random_video_likes);

	} //end foreach


	$articles_args = array(

		'numberposts'	   => -1,
		'post_type'        => 'article',
		'post_status'      => 'publish'

	);

	$all_articles = get_posts( $articles_args );


	foreach($all_articles as $post_article)
	{
		$random_article_views = rand(50, 500);

		do
		{
			$random_article_likes = rand(50, 500);

		} while ($random_article_likes >= $random_article_views);

		update_post_meta( $post_article->ID, "no_of_views", $random_article_views);

		update_post_meta( $post_article->ID, "_post_like_count", $random_article_likes);

	} //end foreach


} //end function

*/
add_action( 'admin_menu', 'wporg_custom_admin_menu' );
 
function wporg_custom_admin_menu() {
    add_options_page(
        'Cache Data Update Feature',
        'Refresh Cache Data',
        'manage_options',
        'wporg-plugin',
        'wporg_options_page'
    );
}
function wporg_options_page() {
  global $wpdb;
  $object_id=1;
  $object_type='default_data';
  delete_cache_data($object_id,$object_type);
  fetch_default_data();

    ?>
    <div class="wrap">
        <h2>Cache Data Update Feature</h2>
        <b>You Have Succesfully Updated the Cache Data !!!</b>
    </div>
    <?php
}


function my_wp_trash_post ($post_id) {
    global $post;
    if('post' == $post->post_type) {
      $object_id=1;
      $object_type='default_data';
      delete_cache_data($object_id,$object_type);
      fetch_default_data();  
    }
}
add_action('publish_to_trash', 'my_wp_trash_post');
// add_action('untrash_post',  'my_wp_trash_post');

class SortMdArray {
    public $sort_order = 'asc'; // default
    public $sort_key = 'position'; // default
     
    public function sortByKey(&$array) {       
        usort($array, array(__CLASS__, 'sortByKeyCallback'));     
    }
     
    function sortByKeyCallback($a, $b) {
        if($this->sort_order == 'asc') {
            $return = $a[$this->sort_key] - $b[$this->sort_key];
        } else if($this->sort_order == 'desc') {
            $return = $b[$this->sort_key] - $a[$this->sort_key];
        }
        return $return;
    } 
}


//code added by kapil//
require_once (get_template_directory().'/api/class.mobileapp.api.php');
require_once(get_template_directory().'/functions-mobileapp.php');












function wpdocs_register_meta_boxes() {
    add_meta_box( 'meta-box-id', __( 'Mobile Image', 'textdomain' ), 'wpdocs_my_display_callback', 'post','side',
        'core' );
    wp_enqueue_script( 'mobile_image_js', get_template_directory_uri() . '/assets/js/mobile-image.js', array( 'jquery' ));
    wp_localize_script( 'mobile_image_js', 'mobilecustom', array(
      'ajax_url' => admin_url( 'admin-ajax.php' )
      ));
}
add_action( 'add_meta_boxes', 'wpdocs_register_meta_boxes' );


function wpdocs_my_display_callback( $post ) {

    $mobile_image = get_post_meta($post->ID, 'mobile_image', TRUE);
    if($mobile_image != '') {
      $display = '';
      $mobile_uploader_text = 'Remove mobile image';
      $img_action_id = 'removeMobileImage';
    }else{
      $display = 'display:none';
      $mobile_uploader_text = 'Set mobile image';
      $img_action_id = 'uploadForMobile';      
    }
    ?>
    <img class="mobile-preview-image" style="<?php echo $display; ?>" src="<?php echo $mobile_image; ?>" width="150">
    <input type="hidden" name="mobile_image" id="mobile_image" value="" class="regular-text" />
    <p><a href="" id="<?php echo $img_action_id; ?>" data-post="<?php echo $post->ID; ?>"><?php echo $mobile_uploader_text; ?></a></p>
    <?php
}
 
/**
 * Save meta box content.
 *
 * @param int $post_id Post ID
 */
function wpdocs_save_meta_box( $post_id ) {
    // Save logic goes here. Don't forget to include nonce checks!
}
add_action( 'save_post', 'wpdocs_save_meta_box' );




add_action( 'wp_ajax_upload_mobile_image', 'upload_mobile_image' );

function upload_mobile_image() {

  $img_url = $_REQUEST['imgurl'];
  $img_path = $_SERVER['DOCUMENT_ROOT'].str_replace(get_site_url(), '', $img_url);

  if(file_exists($img_path)){
    list($width, $height) = getimagesize($img_path);

    $var1=$width;
    $var2=$height;

    for($x=$var2;$x>1;$x--) {
      if(($var1%$x)==0 && ($var2 % $x)==0) {
        $var1 = $var1/$x;
        $var2 = $var2/$x;
      }
    }
    $ratio = "$var1 : $var2";

    if($ratio == '3 : 2'){
      update_post_meta($_REQUEST['post_id'],'mobile_image',$_REQUEST['imgurl']);
      $response = array(
        'status'=>'success',
        'mobile_image'=>$_REQUEST['imgurl'],
        'image_path'=>$img_path,
        'img_height'=>$height,
        'img_width'=>$width
        );
    }else{
      $response = array(
      'status'=>'failed',
      'reason'=>'wrong_size'
      );
    }

  }else{
    $response = array(
    'status'=>'failed',
    'reason'=>'no_file'
    );
  }
  
  echo json_encode($response);
  die();
}



add_action( 'wp_ajax_remove_mobile_image', 'remove_mobile_image' );

function remove_mobile_image() {

  delete_post_meta($_REQUEST['post_id'],'mobile_image');
  $response = array(
    'status'=>'success'
    );
  echo json_encode($response);
  die();
}




add_action( 'admin_enqueue_scripts', 'enqueue_admin' );

function enqueue_admin()
{
  wp_enqueue_script( 'thickbox' );
  wp_enqueue_style('thickbox');

  wp_enqueue_script('media-upload');
}