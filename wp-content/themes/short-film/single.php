<?php 

get_header(); ?>

	
	<?php if (have_posts()) : while (have_posts()) : the_post(); 
	
	global $post;

	$response = Film\Video::get($post->ID);
	
	//$video_id = $response['id'];
	
	$embedurl = get_embed_url($response['id'],$response['videourl']);
	
	?>
	
	
	<!--	
		<video id="bg-video"
			 class="video-js vjs-default-skin"
			 height="auto"
			 width="auto"
			 poster="<?php echo $response['featured_image'];?>"
			 loop
			 controls
			 data-setup='{ "techOrder": ["youtube"], "quality":"720p", "playsInline": true, "src": "<?php echo $response['videourl'] ;?>" }'>

			  <p>
				Your browser doesn't support video. Please <a href="http://browsehappy.com/">upgrade your browser</a> to see the example.
			  </p>
		</video>
	-->
	
    <div class="posrel">
        
        <div class="vid-previous"></div>
		<div class="vid-next"></div>
       
        <div class="video-section vid_if" style="position: relative;">
            <div class="show-featured-image vid_if" style=" position: relative">
                
				<img src="<?php echo $response['featured_image']; ?>" alt="" class="img-responsive width-full">
                
				<a href="#" class="play_movie_big" data-id ="<?php echo $response['id'] ; ?>"> </a>
            </div>	
            <!--	
                <div class="play-video">
                    <iframe class="vid_if" src="<?php echo $embedurl ;?>" frameborder="0" allowfullscreen></iframe>
                </div>
            -->
        </div>
    </div>
		

	<div id="movie-header" class="movie-header">
		
<!--			
	<div class="video-js-responsive-container vjs-hd" id="vjs-hd">
	</div>
-->
		
		<div class="container movie-info">
			<div class="row posrel">
				<div class="col-md-10">
					<h3 class="pull-left"><?php echo ucfirst($response['title']); ?></h3>
				</div>
				<div class="col-md-2">
					<div class="socia l-strip soc-ico share-button2">
                        <?php echo do_shortcode("[ssba]"); ?>
<!--
                        <div class="soc-ico">
                            <a href="#" class="facebook-head"></a>
                            <a href="#" class="facebook-like-head"></a>
                            <a href="#" class="twitter-head"></a>
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
					            <a href="http://pinterest.com/pin/create/link/?url=http://<?php// echo get_permalink(); ?>" target="_blank"><i class="fa fa-pinterest fa-lg"></i></a>
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
			

			
			<hr class="m-t-0 m-b-5">
			<div class="row">
			    <div class="col-xs-9">
			        <h6 class="m-t-0"><small><em><?php echo $response['tagline']; ?></em></small></h6>
			       
				 <!--  <h5 class="director m-t-0 m-b-0"><small><em>by </em></small><?php echo ucfirst($response['director']);?></h5>  -->
				 
				 <h5 class="director m-t-0 m-b-0"><small><em>by </em></small> <a href="<?php echo get_author_posts_url($response['directorid']); ?>"><?php echo ucfirst($response['director']);?></a> </h5>
				    
					<?php
			        	$region_array = array();
			        	$cat_array = array();
			        	
						foreach ($response['region'] as $value) {
			        			$id = get_term_by( 'name', $value, 'region');
			        			$category_link = get_term_link( $id );
			        			$link = '<a href='.esc_url( $category_link ).' target="_blank" class="def_link" title="Region Name">'.$value.'</a>';
			        			array_push($region_array, $link);
			        	}
			        	if(count($region_array) == 0)
			        		$region_array = array(0 => 'No regions');
						$temp = array();
			        	foreach ($response['categories'] as $value) {
			        			$category_id = get_cat_ID( $value );
			        			$category_link = get_category_link( $category_id );
								array_push($temp, $category_link);
			        			$link = '<a href='.esc_url( $category_link ).' target="_blank"  title="Category Name">'.$value.'</a>';
			        			array_push($cat_array, $link);
			        	}
					
			        ?>
			        <h6 class="m-t-0 m-b-0"><small><?php echo $response['duration'] ;?> Min / <?php echo implode(',',$region_array) ;?></small></h6>
			        <p class="categories m-t-10 m-b-0">

                            <span class="label label-greydark">
                                <?php echo implode('</span><span class="label label-greydark">', $cat_array); ?>
                            </span>

                    </p>
			    </div>
				
						
		
				
			    <div class="col-xs-3 text-right">
                    <div class="info-ico">
                        <div class="views">
                            <?php  echo $response['no_of_views'] ;?> <i class="fa fa-eye"></i>
                        </div>
						
                        <div class="like-action">
                            
                            <?php echo getPostLikeLink( get_the_ID() ) ; ?>
							
							<?php// echo getPostLikeLink( $response['id'] ) ; ?>
							
                           
                        </div>
						
                        <div class="watchlist-add">
                            <a href="#">Add to Watchlist <i class="fa fa-binoculars"></i></a>
                        </div>
					</div>										
<!--
						<div class="pull-right share-button">
								<?php///ssba_activate(); ?>
								<?php //echo do_shortcode("[ssba]"); ?>
						</div>
-->
			    </div>
			</div>
		</div>
		<div class="overlay"></div>
	</div>

	<input type="hidden" name="noofviews" id="noofviews" value="0" / >
	<input type="hidden" name="post_id" id="post_id" value="<?php echo $response["id"];?>" / >
	<div class="spacer-40"></div>
	<div class="container">
	      
	        <div class="img-content">
				
				<?php 

					$postcontent = $response['content'];

					//echo $postcontent;
					echo wpautop( $postcontent );
					
				?>
				
	        </div>
	  		

		<div class="clearfix"></div>
		 <a id="next" href="<?php echo site_url() ;?>/wp-json/page2/<?php echo $post->ID ;?>"></a>
       
	    <div class="spacer-50"></div>
	    <div class="infocus">
	    
</div>
	    
	    <div class="spacer-40"></div>
	    <div class="row">
	        <div class="col-md-12">
	            <h3 class="brand">SIMILAR MOVIES WE PICKED FOR YOU</h3>
	            <hr>
	                <div class="row">
					
						<!-- <div class="col-sm-4"> -->
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

	    <h4 class="brand">WHAT ARE PEOPLE SAYING</h4>
	    <hr class="m-t-0">

	    <!-- <ul class="p-l-0">
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
	    </ul> -->

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
			
	        <a href="<?php echo $temp[0] ?>"  class="btn btn-primary btn-lg">Watch more awesome films</a>
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


jQuery('.img-content').readmore({
speed: 100,
collapsedHeight: 200,
heightMargin: 16,
moreLink: '<a href="#" class="readmore_dn"></a>',
lessLink: '<a href="#" class="readmore_up"></a>',
embedCSS: true,
blockCSS: 'display: block; width: 100%;',
startOpen: false,

// callbacks
beforeToggle: function(){},
afterToggle: function(){}
});

	

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

	jQuery('.infocus').infinitescroll({
		
		navSelector  	: "a#next:last",
		nextSelector 	: "a#next:last",
		itemSelector 	: ".infocus",
		debug		 	: true,
		dataType	 	: 'json',
		// behavior		: 'twitter',
		appendCallback	: false, // USE FOR PREPENDING
		// pathParse     	: function( pathStr, nextPage ){ return pathStr.replace('2', nextPage ); }
    }, function( resp ) {
    	
    	response = resp[0];


    	html = '<div class="row">'
    	+'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+response.slug+'">'
	         
	        +'<div class="col-md-6">'
	            +'<div class="pull-left">'
	                +'<h4>IN FOCUS: <small><em>'+response.title+'</em></small></h4>'
	            +'</div> '
	        +'</div>'
	        +'<div class="col-md-6">'
	            +'<div class="m-t-30 pull-right">'
	                 // +'<a href="#"><i class="fa fa-facebook-square fa-2x"></i></a>'
	                 // +'<a href="#"><i class="fa fa-twitter-square fa-2x"></i></a>'
	                 // +'<a href="#"><i class="fa fa-youtube-square fa-2x"></i></a>'
					
					
	            +'</div>'
	        +'</div>'
	    +'</div>'
	    +'<hr class="m-t-0"> '

	    +'<div class="row">'
	        +'<div class="col-md-5">'
	             +'<img src="'+response.featured_image+'" class="img-responsive">'
	        +'</div>'
	        +'<div class="col-md-7">'
	            +'<h5 class="m-t-0">'+response.excerpt+'</h5>'
	           +' <div>'
	                +'<p class="pull-left"><small>'+response.post_date+'</small></p>'
	               +' <p class="pull-right">'
	                    +'<span><i class="fa fa-thumbs-up"></i>'+response.post_like_count+'</span>'
	                    +'<span><i class="fa fa-eye"></i>'+response.no_of_views+'</span>'
	                +'</p>'
	            +'</div>'
	           +' <div class="clearfix"></div>'
	        +'</div>'
	        +'</a>'
	    +'</div>';

	    jQuery('.infocus').html(html);
						
						
				      });


	jQuery('.play_movie_big').click(function(event){
						
		//console.log("in script");
		
		var video_id = jQuery(this).attr("data-id");
		
		event.preventDefault();
		
		
		jQuery.ajax({
		
			type : 'POST',
			url : ajaxurl,

			data:{
			
				//video_id: '<?php echo $video_id; ?>',
				video_id: video_id,
				action : 'increase_video_number_of_views'
		
			},
			success:function(response)
			{												
				console.log(response);
								
			},
			error:function(response)
			{
				console.log(" Error ");
			}

        });
	
		generate_video();
        
		height = window.innerHeight ? window.innerHeight : $(window).height();
        jQuery('.vid_if ').css('height', height);
        jQuery('.video-section').addClass('ontop');
		
	});					  
	

	function generate_video()
	{		
		jQuery('.video-section').html("")
       
	    html = jQuery('.video-section').html()

			html+=
					'<div class="play-video">'
					
						+'<iframe class="vid_if" src="<?php echo $embedurl ;?>" frameborder="0" allowfullscreen></iframe>'
						
					+'</div>'		
		
			;
		
			jQuery('.video-section').html(html);
		
		console.log(html);
		
    } // end of generate_video	
    
    //onclick of playing video
    jQuery(document).on('click', 'iframe.vid_if', function() {
        jQuery('.video-section').toggleClass('ontop');
    });
					  
} //end onload


</script>
