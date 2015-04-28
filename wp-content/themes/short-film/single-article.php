
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
	
		<div class="vid-previous"></div>
		<div class="vid-next"></div>

		<div class="container movie-info">
			<div class="row">
				<div class="col-md-12">
					<h3 class="article_title">
					    <?php echo ucfirst($response['title']); ?>
					    <small><em>by <?php echo ucfirst($response['director']);?></em></small>
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
		        <!--
				<span class="art_views"><i class="fa fa-eye"></i><?php  echo $response['no_of_views'] ;?></span>
		        -->
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
	    <div class="row">
	        <div class="col-md-12">
	            <h3>SOME MOVIES WE PICKED FOR YOU</h3>
	            <hr>
	                <div class="row">
											
						<div class="col-md-12">
							<?php 
								
								related_posts(); 
									//C:\xampp\htdocs\shortfilm\wp-content\plugins\yet-another-related-posts-plugin\includes\related_functions.php\related_posts()
							
							?>
						</div>

					</div>
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


}

</script>
