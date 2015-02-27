<?php get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

			<div class="slider3 full-slider">
			  <div><img src="<?php echo get_template_directory_uri(); ?>/assets/img/home_main.jpg" class="img-responsive"></div>
			  <div><img src="<?php echo get_template_directory_uri(); ?>/assets/img/home_main.jpg" class="img-responsive"></div>
			  <!-- <div><img src="https://placeimg.com/1000/404/people" class="img-responsive"></div>
			  <div><img src="https://placeimg.com/1000/404/nature" class="img-responsive"></div> -->
			</div>

			<div class="container">
				<h3><?php the_title(); ?></h3>
				<hr class="m-t-0 m-b-5">
				<div class="row">
				    <div class="col-xs-9">
				        <h6 class="m-t-0"><small><em>Tagline of the film</em></small></h6>
				        <h5 class="m-t-0 m-b-0"><small><em>by</em></small> Name of the Director</h5>
				        <h6 class="m-t-0 m-b-0"><small><em>1.7 Min / Region</em></small></h6>
				        <h6 class="m-t-0 m-b-0"><small><em><?php the_category(', '); ?></em></small></h6>
				    </div>
				    <div class="col-xs-3 text-right">
				        <div class="small">199 <i class="fa fa-eye"></i></div>
				        <div class="small">75 <i class="fa fa-thumbs-up"></i></div>
				        <div class="small">Watchlist <i class="fa fa-binoculars"></i></div>
				    </div>
				</div>
			</div>
			
			<div class="spacer-40"></div>
			<div class="container">

		            <div class="img-content">
		                <div class="img-div">
		                    <?php the_post_thumbnail( 'wpbs-featured', array( 'class' => 'img-responsive' ) ); ?>
		                </div>
		                <div class="img-content">
		                	<?php the_content(); ?>
		                </div>
		            </div>

		            <div class="clearfix"></div>
			        
			        <div class="spacer-50"></div>

	                <div class="row">
	                    <div class="col-md-6">
	                        <div class="pull-left">
	                            <h4>IN FOCUS: <small><em>Name of the film</em></small></h4>
	                        </div> 
	                    </div>
	                    <div class="col-md-6">
	                        <div class="m-t-30 pull-right">
	                            <a href="#"><i class="fa fa-facebook-square fa-2x"></i></a>
	                            <a href="#"><i class="fa fa-twitter-square fa-2x"></i></a>
	                            <a href="#"><i class="fa fa-youtube-square fa-2x"></i></a>
	                        </div>
	                    </div>
	                </div>
	                <hr class="m-t-0"> 

	                <div class="row">
	                    <div class="col-md-5">
	                         <img src="http://lorempixel.com/500/150" class="img-responsive">
	                    </div>
	                    <div class="col-md-7">
	                        <h5 class="m-t-0">HELLO WORLD</h5>
	                        <div>
	                            <p class="pull-left"><small>January 29, 2015</small></p>
	                            <p class="pull-right">
	                                <span><i class="fa fa-thumbs-up"></i> 75 </span>
	                                <span><i class="fa fa-eye"></i> 199 </span>
	                            </p>
	                        </div>
	                        <div class="clearfix"></div>
	                    </div>
	                </div>

			        
			        <div class="spacer-40"></div>
			        <div class="row">
			            <div class="col-md-12">
			                <h3>SIMILAR MOVIES WE PICKED FOR YOU</h3>
			                <hr>
			                    <div class="row">
			                        <div class="col-md-4 col-sm-4">
			                            <img src="http://erikjohanssonphoto.com/wp-content/uploads/2014/12/dont-look-back-588x388.jpg" class="img-responsive">
			                        </div>
			                        <div class="col-md-4 col-sm-4">
			                            <img src="http://erikjohanssonphoto.com/wp-content/uploads/2014/12/dont-look-back-588x388.jpg" class="img-responsive">
			                        </div>
			                        <div class="col-md-4 col-sm-4">
			                            <img src="http://erikjohanssonphoto.com/wp-content/uploads/2014/12/dont-look-back-588x388.jpg" class="img-responsive">
			                        </div>
			                    </div>
			            </div>
			        </div>

			        <div class="spacer-40"></div>

	                <h4>WHAT ARE PEOPLE SAYING</h4>
	                <hr class="m-t-0">

	                <ul class="p-l-0">
		                <li class="post comments-section">
		                	<div class="user-profile-pic-wrapper">
		                		<div class="user-profile-pic-normal">
		                			<img alt="" src="http://erikjohanssonphoto.com/wp-content/uploads/2015/01/walk-a-way-188x188.jpg" class="img-circle img-responsive">
		                		</div>
		                	</div>
		                	<div class="info-wrapper">
		                		<div class="username">
		                			<h5 class="m-b-0">
		                				<a href="#">Amy</a>
		                			</h5>
		                		</div>
		                		<div class="info">
		                			Crazy Film
		                		</div>
		                	</div>
		                	<div class="clearfix"></div>
		                </li>
	                </ul>

	                <?php comments_template('',true); ?>

	                <!-- <div class="row">
	                    <form action="" class="form-horizontal">
	                        <div class="form-group">
	                            <label class="col-md-1 col-sm-1">
	                                <img src="http://erikjohanssonphoto.com/wp-content/uploads/2015/01/dreamwalker-188x188.jpg" class="img-responsive">
	                            </label>
	                            <div class="col-md-11 col-sm-11">
	                                <textarea name="" id="" class="form-control"></textarea>
	                            </div>
	                        </div>
	                    </form>
	                </div> -->

		            <div class="text-center">
		                <a href="" class="btn btn-primary btn-lg">Watch more awesome movies</a>
		            </div>
			        
			</div>
	        
	        <?php endwhile; ?>			
	        
	        <?php else : ?>
	        
		        <article id="post-not-found">
		            <header>
		            	<h1><?php _e("Not Found", "wpbootstrap"); ?></h1>
		            </header>
		            <section class="post_content">
		            	<p><?php _e("Sorry, but the requested resource was not found on this site.", "wpbootstrap"); ?></p>
		            </section>
		            <footer>
		            </footer>
		        </article>
	        
	        <?php endif; ?>


<?php get_footer(); ?>