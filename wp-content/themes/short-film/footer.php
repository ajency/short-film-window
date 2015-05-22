		

		    <div class="footer-push"></div>
		</div><!-- /wrapper -->
		
		<!-- Site footer -->
		<footer class="footer m-t-20">
		    <div class="footer-container">
		        <div class="row">
		            <div class="col-md-8">
		            	<?php wp_bootstrap_footer_links(); // Adjust using Menus in Wordpress Admin ?>
<!--
		                <div class="row">
		                    <div class="col-sm-3 col-xs-6">
		                        <p><a href="#">MOVIES</a></p>
		                        <p><a href="#">SUBMIT FILMS</a></p>
		                    </div>
		                    <div class="col-sm-3 col-xs-6">
		                        <p><a href="#">ARTICLES</a></p>
		                        <p><a href="#">ABOUT</a></p>
		                    </div>
		                    <div class="col-sm-3 col-xs-6">
		                        <p><a href="#">PLAYLIST</a></p>
		                        <p><a href="#">CONTACT US</a></p>
		                    </div>
		                    <div class="col-sm-3 col-xs-6">
		                        <p><a href="#">FAQ</a></p>
		                        <p><a href="#">BE AN AMBASSADOR</a></p>
		                    </div>
		                </div>
-->
		            </div>
		            <div class="col-md-4 break-cols">
		            	<div class="row">
		            		<div class="col-xs-5 col-md-12">
							
								<?php// echo do_shortcode('[ssba url="' . home_url() . '"]'); ?>
							
		            			<div class="row">
			                        <label for="" class="col-sm-4 text-right">FOLLOW US</label>
			                        <div class="col-sm-8">
			                            <div class="social-links">
			                               
										    <div class="fb link">
			                                   <!--
											   <div class="icon">
			                                        <a href="#"><i class="fa fa-facebook fa-fw"></i></a>
			                                    </div>
												-->
												<div class="fb-follow" data-href="https://www.facebook.com/pages/My_sfw_fb_page/980939678591959?ref=aymt_homepage_panel" data-colorscheme="light" data-layout="button" data-show-faces="false">
												</div>
												
			                                </div>
											
											
			                                <div class="twitter link">
			                                   <!--
											   <div class="icon">
			                                        <a href="#"><i class="fa fa-twitter fa-fw"></i></a>
			                                    </div>
												-->
												<div class="twitter link">	
													<a href="https://twitter.com/ajency123" class="twitter-follow-button" data-show-count="false" data-show-screen-name="false">Follow</a>
												</div>
			                                </div>
											
											
			                                <div class="youtube link">
												<!--
			                                    <div class="icon">
			                                        <a href="#"><i class="fa fa-youtube-play fa-fw"></i></a>
			                                    </div>
												-->
												<div class="g-ytsubscribe" data-channel="GoogleDevelopers" data-layout="default" data-count="hidden"></div>
			                                </div>
																						
			                            </div>
			                        </div>
		                        </div>
	                        </div>
	                        <div class="col-xs-7 col-md-12">
				                <form action="" class="form-horizontal">
				                    <div class="form-group has-feedback">
				                        <label for="" class="col-sm-5 col-md-4 text-right">SUBSCRIBE</label>
				                        <div class="col-sm-7 col-md-8">
				                            <input type="email" class="form-control input-sm subscribe" name="subscribe" placeholder="Subscribe to our newsletter to know about latest movies and articles" >
				                            <span class="fa fa-envelope fa-2x form-control-feedback" aria-hidden="true"></span>
				                        </div>
				                    </div>
				                </form>
			                </div>
		                </div>
		            </div>
		        </div>
		    </div>            
		    <div class="container-fluid footer-bar">                    
		        &copy; <?php bloginfo('name'); ?> | All Rights Reserved.
		    </div>
		</footer>
				
		<!--[if lt IE 7 ]>
  			<script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
  			<script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
		<![endif]-->
		
		<?php wp_footer(); // js scripts are inserted using this function ?>

		<!-- remove this for production -->

		<!-- <script src="//localhost:35729/livereload.js"></script> -->

	</body>

</html>