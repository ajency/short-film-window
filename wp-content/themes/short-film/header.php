<!doctype html>

<!--[if IEMobile 7 ]> <html <?php language_attributes(); ?>class="no-js iem7"> <![endif]-->
<!--[if lt IE 7 ]> <html <?php language_attributes(); ?> class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html <?php language_attributes(); ?> class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html <?php language_attributes(); ?> class="no-js ie8"> <![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!--><html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<!-- ##################################-->

		<meta property='fb:app_id' content='955517544488844' />

		<!-- ##################################-->

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><?php wp_title( '|', true, 'right' ); ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
  		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />

		<!-- wordpress head functions -->
		<?php wp_head(); ?>
		<!-- end of wordpress head -->
		<!-- IE8 fallback moved below head to work properly. Added respond as well. Tested to work. -->
			<!-- media-queries.js (fallback) -->
		<!--[if lt IE 9]>
			<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
		<![endif]-->

		<!-- html5.js -->
		<!--[if lt IE 9]>
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

			<!-- respond.js -->
		<!--[if lt IE 9]>
		          <script type='text/javascript' src="http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js"></script>
		<![endif]-->
		
		<!-- Google Analytics -->

            <script>
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-52449074-1', 'auto');
              ga('send', 'pageview');

            </script>
    
		<!-- Google Analytics -->
		
	</head>

	<body <?php body_class(); ?>>

<!-- for facebook like in header & facebook follow in footer-->
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=955517544488844";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	</script>


<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

<!-- for youtube subscribe in footer-->
<script src="https://apis.google.com/js/platform.js"></script>


		<div class="wrapper" style="position: relative;">

			<!--<header role="banner">

				<div class="navbar navbar-default navbar-fixed-top">
					<div class="container">

						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>

							<a class="navbar-brand" title="<?php echo get_bloginfo('description'); ?>" href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a>
						</div>

						<div class="collapse navbar-collapse navbar-responsive-collapse">
							<?php wp_bootstrap_main_nav(); // Adjust using Menus in Wordpress Admin ?>

							<?php //if(of_get_option('search_bar', '1')) {?>
							<form class="navbar-form navbar-right" role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
								<div class="form-group">
									<input name="s" id="s" type="text" class="search-query form-control" autocomplete="off" placeholder="<?php _e('Search','wpbootstrap'); ?>">
								</div>
							</form>
							<?php //} ?>
						</div>

					</div>
				</div>

			</header> --> <!-- end header -->

			<div class="header">
			    <div class="header-links">
			        <div class="links">
			           
 					   <!-- <a href="<?php// echo site_url(); ?>/wp-login.php">LOGIN</a> -->
			            <!-- <span>|</span>
			            <a href="#">SEARCH</a> -->
			        </div>
			        <div class="social-links">


						<?php// echo do_shortcode('[ssba url="' . home_url() . '"]'); ?>


			            <div class="fb link">
			                <div class="icon">
			                    <i class="fa fa-facebook fa-lg fa-fw"></i>
			                </div>
			                <div class="action">

								<!--
			                	<div class="fb-like" data-href="https://www.facebook.com/pages/My_sfw_fb_page/980939678591959?ref=aymt_homepage_panel" data-layout="button" data-action="like" data-show-faces="true" data-share="false"></div>
								-->

								<div class="fb-like" data-href="https://www.facebook.com/Shortfilmwindow" data-layout="button" data-action="like" data-show-faces="false" data-share="false"></div>

			                	<!-- <small>Like</small> -->
			                </div>
			            </div>




					   <div class="clearfix"></div>

					   <div class="twitter link">
							<div class="action">
								<!--
								<a href="https://twitter.com/ajency123" class="twitter-follow-button" data-show-count="false" data-show-screen-name="false">Follow</a>
								-->
								<a href="https://twitter.com/shortfilmwindow" class="twitter-follow-button" data-show-count="false" data-show-screen-name="false">Follow</a>

								<!-- <small>Follow</small> -->
							</div>
			                <div class="icon">
			                    <i class="fa fa-twitter fa-lg fa-fw"></i>
			                </div>
					  </div>



			        </div>
			    </div>
			    <div class="logo">
			        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.png" class="img-responsive">
			    </div>

				<!--
				<div class="fb-like" data-href="https://www.facebook.com/mysfwpage" data-layout="button" data-action="like" data-show-faces="true" data-share="false"></div>
				-->


				<!--
				<div class="fb-like" data-href="https://www.facebook.com/pages/My_sfw_fb_page" data-layout="button" data-action="like" data-show-faces="true" data-share="false"></div>
				-->




				<div class="clearfix"></div>


			<div class="sub-header">
                <div class="navbar navbar-default navbar-fi xed-top">
					<div class="container">

						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>

<!--							<a class="navbar-brand" title="<?php //echo get_bloginfo('description'); ?>" href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a>-->
						</div>

						<div class="collapse navbar-collapse navbar-responsive-collapse">
				            <?php wp_bootstrap_main_nav(); ?>
                        </div>
                    </div>
                </div>
	        </div>
			</div>


