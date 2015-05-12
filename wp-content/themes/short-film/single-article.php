
<?php 
get_header(); ?>

	
	<?php if (have_posts()) : while (have_posts()) : the_post(); 
	
	global $post;

	$response = Article_post\Article::get_article($post->ID);
	

	?>
	

	
	<div id="movie-header" class="movie-header article_single">
        <div class="article_s_img">
             <img src="<?php echo $response['featured_image'];?>" class="img-responsive width-full">  
        </div>
		 <!-- <div class="video-js-responsive-container vjs-hd" id="vjs-hd"></div> -->
	
		<!--
		<div class="vid-previous"></div>
		<div class="vid-next"></div>
		-->

		<div class="container movie-info">
			<div class="row">
				<div class="col-md-12">
					<h3 class="article_title">
					    <?php echo ucfirst($response['title']); ?>
					    <small><em>by <a target="_blank" href="<?php echo get_author_posts_url($response['directorid']); ?>"><?php echo ucfirst($response['director']);?></a></em></small>
				    </h3>
				    <p class="pull-right goup"><i class="fa fa-clock-o"></i><?php echo $response['post_date']; ?></p>
				</div>
            </div>
            <div class="row">
				<div class="col-md-5">
					<div class="">

					<!--
					    <div class="pull-right like-action">
					        <span class="m-l-5 m-r-5">|</span> <span class="m-l-5 m-r-5">|</span>
					    </div>
					-->
																														
					<!--
					    <div class="share-button">
					        <div class="social-toggle"><i class="fa fa-share"></i> Share</div>
					        <div class="social-networks">
							
							<?php///ssba_activate(); ?>
							
							<?php // echo do_shortcode("[ssba]"); ?>
					-->
							  <!--
					          <ul>
					            <li class="social-twitter">
					              <a href="https://twitter.com/share"><i class="fa fa-twitter fa-lg"></i></a>
					            </li>
					            <li class="social-facebook">
					            <a href="http://www.facebook.com/sharer.php?u=http://<?php// echo get_permalink(); ?>" target="_blank"><i class="fa fa-facebook-square fa-lg"></i></a>
					            </li>
					            <li class="social-pin">
					            <a href="http://pinterest.com/pin/create/link/?url=http://<?php //echo get_permalink(); ?>" target="_blank"><i class="fa fa-pinterest fa-lg"></i></a>
					            </li>
					          </ul>
							  -->
					<!--		  
					        </div>
					    </div>
					-->
					</div>
				</div>

			</div>
			
		</div>
		<div class="overlay"></div>
	</div>

	<input type="hidden" name="noofviews" id="noofviews" value="0" / >
	<input type="hidden" name="post_id" id="post_id" value="<?php echo $response["id"];?>" / >

	<div class="container article_s_cont">

		<div class="clearfix"></div>
		 <a id="next" href="<?php echo site_url() ;?>/wp-json/page2/<?php echo $post->ID ;?>"></a>
       

	    
		<div class="description">
		    <div class="article_s_links">
		        
				
				<span class="art_likes"><?php echo getPostLikeLink( get_the_ID() ) ; ?> </span>
		        
				
				<span class="art_views" title="Views"><i class="fa fa-eye"></i><?php  echo $response['no_of_views'] ;?></span>
		       
		        <div class="pull-right soc-ico">
				    <?php///ssba_activate(); ?>
					<?php echo do_shortcode("[ssba]"); ?>
				</div>
		    </div>
			
			<?php  
				
				//echo $response['content'] ;
				echo wpautop( $response['content'] );
			?>
			
		</div>
		
	    <div class="spacer-40"></div>
	    
		<div class="recent-movies">
		
			<div class="row">
				<div class="col-md-12">
					<h2>SOME MOVIES WE PICKED FOR YOU</h2>
				</div>	
            </div>
			
			<hr class="m-t-0">
			
			<div class="row sim_mov">
<!--				<div class="col-md-12">-->
																
					<?php

						$recentvideos = get_recent_videos();
											
						foreach ($recentvideos as $recentvideo)
						{		
							
							
					?>									
							<div class="col-xs-4">									
								<div class="grid-box grid-full content-align-bottom">
									
									<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $recentvideo['slug'];?>">
										
										<div class="grid-image">
											<img src="<?php echo $recentvideo['featured_image'];?>">
										</div>
	
										<div class="grid-text-wrap">
											
											<div class="grid-title"><?php echo $recentvideo['title'];?></div>
										   
										   <div class="grid-meta"><?php echo implode(',',$recentvideo['region']);?>/<?php echo $recentvideo['duration'];?> MIN</div>
										   
											<div class="grid-meta"><?php echo implode(',',$recentvideo['categories']);?></div>
											
											<div class="grid-meta">DIR. <?php echo  ucfirst($recentvideo['director']);?></div>
											 
										</div>
										
										<div class="grid-text-wrap hover-text">
											<div class="grid-title"><?php echo $recentvideo['title'];?></div>
											<div class="grid-meta">
												<div class="row">
													<div class="col-xs-4">

														<div class="pull-left p-l-10 m-t-10">
															<div>
																<?php echo $recentvideo['no_of_views'];?>
																<i class="fa fa-eye"></i>
															</div>
															<div>
																<?php echo $recentvideo['post_like_count'];?>
																<i class="fa fa-thumbs-up"></i>
															</div>
														</div>
													</div>
													<div class="col-xs-8">
														<div class="pull-right text-right m-t-10">
														   <?php echo $recentvideo['excerpt'];?>
														</div>
													</div>
												</div>
											</div>
										</div>
																					
											<!--
											<div>
												<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $recentvideo['slug'];?>">
													<h6><?php echo $recentvideo['title']; ?></h6>
												</a>
												
												<p class="pop_auth"><small><em> by <?php echo $recentvideo['director']; ?></em></small></p>
												
												<p>	<?php echo $recentvideo['excerpt']; ?>	</p>
												<div>
													<p class="pull-left"><small><?php echo $recentvideo['post_date'];?></small></p>
													<p class="pull-right">
														<span><i class="fa fa-thumbs-up"></i> <?php echo $recentvideo['post_like_count'];?> </span>
														
														<span><i class="fa fa-eye"></i> <?php echo $recentvideo['no_of_views'];?> </span>
														
													</p>
												</div>
												
												<div class="clearfix"></div>
												
												<hr class="m-t-0">
											
											</div>
											-->
										<div class="overlay-vertical"></div>
									</a>
								</div>
																
							</div>
							
					<?php
								
						} //end foreach							
					?>			
							
<!--				</div>-->
			</div>
		
		</div>	

	    <div class="spacer-40"></div>

		<!--
	    <div class="text-center">
	        <a href="" class="btn btn-primary btn-lg">Watch more awesome films</a>
	    </div>
	    --> 
		 
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


<script type="text/javascript">

window.onload = function() {

	jQuery('#noofviews').val();
/*	
	prev = "<?php echo $response['prev_post'];?>";

	if(parseInt(prev) == 0)
	{
		jQuery('.vid-previous').hide();
		
	}

	next = "<?php echo $response['next_post'];?>";

	if(parseInt(next) == 0)
	{
		jQuery('.vid-next').hide();
		
	}
	
	jQuery('.vid-previous').click(function(x){

		if(parseInt(prev) == 0)
		{
			alert('No previous video');
			return false;
		}

		window.location.href = SITEURL+'/'+"<?php echo $response['prev_post'];?>";
	});

	jQuery('.vid-next').click(function(x){
		
		if(parseInt(next) == 0)
		{
			alert('No next video');
			return false;
		}

		window.location.href = SITEURL+'/'+"<?php echo $response['next_post'];?>";
	});
*/

}

</script>
