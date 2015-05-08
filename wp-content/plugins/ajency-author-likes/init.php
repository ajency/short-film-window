<?php
/**
 * Plugin Name: Ajency Author Likes
 * Plugin URI: http://ajency.in/
 * Description: Author likes plugin.
 * Version: 1.1.0
 * Author: Ajency.in
 * Author URI: http://ajency.in/
 *
 * @author  Ajency.in
 * @package Ajency Author Likes
 * @version 1.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly



define( 'AAL_URL', plugin_dir_url( __FILE__ ) );
define( 'AAL_DIR', plugin_dir_path( __FILE__ ) );
define( 'AAL_VERSION', '1.1.0' );

   
function aal_constructor() {
    
require_once( 'common/aal-functions.php' );
}

add_action( 'plugins_loaded', 'aal_constructor' );
