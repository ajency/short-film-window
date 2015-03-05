		

		    <div class="footer-push"></div>
		</div><!-- /wrapper -->
		
		<!-- Site footer -->
		<footer class="footer m-t-20">
		    <div class="footer-container">
		        <div class="row">
		            <div class="col-md-8">
		            	<?php wp_bootstrap_footer_links(); // Adjust using Menus in Wordpress Admin ?>
		                <div class="row">
		                    <div class="col-md-3">
		                        <p><a href="#">MOVIES</a></p>
		                        <p><a href="#">SUBMIT FILMS</a></p>
		                    </div>
		                    <div class="col-md-3">
		                        <p><a href="#">ARTICLES</a></p>
		                        <p><a href="#">ABOUT</a></p>
		                    </div>
		                    <div class="col-md-3">
		                        <p><a href="#">PLAYLIST</a></p>
		                        <p><a href="#">CONTACT US</a></p>
		                    </div>
		                    <div class="col-md-3">
		                        <p><a href="#">FAQ</a></p>
		                        <p><a href="#">BE AN AMBASSADOR</a></p>
		                    </div>
		                </div>
		            </div>
		            <div class="col-md-4">
		                <form action="" class="form-horizontal">
		                    <div class="form-group">
		                        <label for="" class="col-md-5 text-right">FOLLOW US</label>
		                        <div class="col-md-7">
		                            <div class="social-links">
		                                <div class="fb link">
		                                    <div class="icon">
		                                        <a href="#"><i class="fa fa-facebook fa-lg fa-fw"></i></a>
		                                    </div>
		                                </div>
		                                <div class="twitter link">
		                                    <div class="icon">
		                                        <a href="#"><i class="fa fa-twitter fa-lg fa-fw"></i></a>
		                                    </div>
		                                </div>
		                                <div class="youtube link">
		                                    <div class="icon">
		                                        <a href="#"><i class="fa fa-youtube-play fa-lg fa-fw"></i></a>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="form-group has-feedback">
		                        <label for="" class="col-md-5 text-right">SUBSCRIBE</label>
		                        <div class="col-md-7">
		                            <input type="email" class="form-control input-sm subscribe" name="subscribe" placeholder="Subscribe to our newsletter to know about latest movies and articles" >
		                            <span class="fa fa-envelope fa-2x form-control-feedback" aria-hidden="true"></span>
		                        </div>
		                    </div>
		                </form>
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