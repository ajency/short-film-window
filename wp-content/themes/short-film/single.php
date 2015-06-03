<?php

get_header(); ?>


	<?php if (have_posts()) : while (have_posts()) : the_post();

	global $post;

	$response = Film\Video::get($post->ID);

	?>


    <div class="posrel headspace">

        <div class="vid-previous"></div>
		<div class="vid-next"></div>

		<div class="video-section" data-video-id="<?php echo $response['id']; ?>" data-video-img="<?php echo $response['featured_image']; ?>" data-video-embedurl="<?php echo $response['embedurl'];?>" style="position: relative;">
			<a href="#" class="stopclass" id="stopid"> <i class="fa fa-times"></i> </a>

            <div class="show-featured-image" style="position:relative">

				<img src="<?php echo $response['large_image']; ?>" alt="" class="img-responsive width-full">


				<a href="#" class="play_movie_big" data-id="<?php echo $response['id']; ?>" data-embedurl="<?php echo $response['embedurl']; ?>"> </a>
            </div>

        </div>
    </div>


	<div id="movie-header" class="movie-header">


		<div class="container movie-info">
			<div class="row posrel">
				<div class="col-md-10">
					<h3 class="pull -left"><?php echo ucfirst($response['title']); ?></h3>
				</div>
				<div class="col-md-2">
					<div class="socia l-strip soc-ico share-button2">

                        <?php// echo do_shortcode("[ssba]"); ?>

						 <?php echo do_shortcode('[ssba url="' . get_permalink($response['id']) . '" title="' . get_the_title($response['id']) . '"]'); ?>


					</div>
				</div>

			</div>

			<hr class="m-t-0 m-b-5">
			<div class="row">
			    <div class="col-xs-9">
			        <h6 class="m-t-0"><small><em><?php echo $response['tagline']; ?></em></small></h6>

				 <h5 class="in_1 director m-t-0 m-b-0"><small><em>by </em></small> <a href="<?php echo get_author_posts_url($response['directorid']); ?>"><?php echo ucfirst($response['director']);?></a> </h5>

					<?php
			        	$region_array = array();
			        	$cat_array = array();


						$language_array = array();

						foreach ($response['region'] as $value)
						{
			        			$id = get_term_by( 'name', $value, 'region');
			        			$category_link = get_term_link( $id );
			        			$link = '<a href='.esc_url( $category_link ).' class="def_link" title="Region Name">'.$value.'</a>';
			        			array_push($region_array, $link);
			        	}
			        	if(count($region_array) == 0)
			        		$region_array = array(0 => 'No regions');


						 ?>

							 <h6 class="in_2 m-t-0 m-b-0"><small> <?php echo implode(', ',$response['video_language_links']); ?></small></h6>


						<?php


						$temp = array();
			        	foreach ($response['categories'] as $value)
						{
			        			$category_id = get_cat_ID( $value );
			        			$category_link = get_category_link( $category_id );
								array_push($temp, $category_link);
			        			$link = '<a href='.esc_url( $category_link ).' title="Category Name">'.$value.'</a>';
			        			array_push($cat_array, $link);
			        	}

			        ?>
			        <h6 class="in_3 m-t-0 m-b-0"><small><?php echo $response['duration'] ;?> Min / <?php echo implode(', ',$region_array) ;?></small></h6>
			        <p class="categories m-t-10 m-b-0">

                            <span class="label label-greydark">
                                <?php echo implode('</span><span class="label label-greydark">', $cat_array); ?>
                            </span>

                    </p>
			    </div>




			    <div class="col-xs-3 text-right">
                    <div class="info-ico">
                        <div class="views" title="Views">
                            <?php  echo $response['no_of_views'] ;?> <i class="fa fa-eye"></i>
                        </div>

                        <div class="like-action">

                            <?php echo getPostLikeLink( get_the_ID() ) ; ?>

                        </div>



					</div>

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

	    <h3 class="brand">WHAT ARE PEOPLE SAYING</h3>
	    <hr class="m-t-0">


	    <?php comments_template('',true); ?>


	    <div class="text-center">

	        <a href="<?php echo $temp[0] ?>"  class="btn btn-primary btn-lg watchmore">Watch more awesome films</a>
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

//function to resize the staffpick image after the viedo is stopped
        function resizeimgs(tw, obj, i) {
            var ar = obj.width() / obj.height();


            if ( (tw.width() / tw.height()) < ar ) {
                obj
                    .removeClass()
                    .addClass('bgheight');
            } else {
                obj
                    .removeClass()
                    .addClass('bgwidth');
            }
            if (jQuery('body').hasClass('no-csstransforms')) {
                obj.css({
                    'top': 0,
                    'left': 0
                });
            }
        }

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
collapsedHeight: 188,
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
		appendCallback	: false, // USE FOR PREPENDING

    }, function( response ) {

    	html = '<div class="row">'
	        +'<div class="col-md-6">'
	            +'<div class="pull-left">'
	                +'<h3 class="brand upp">IN FOCUS: <small><em><a class="content-bottom" href="'+SITEURL+'/'+response.slug+'">'+response.title+'</a></em></small></h3>'
	            +'</div> '
	        +'</div>'
	        +'<div class="col-md-6">'
	            +'<div class="m-t-30 pull-right">'

					+'<div class="soc-ico"><div style="text-align:right"><a class="ssba_facebook_share" href="http://www.facebook.com/sharer.php?u='+SITEURL+'/'+response.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/facebook.png" title="Facebook" class="ssba" alt="Share on Facebook"></a><a href="http://pinterest.com/pin/create/bookmarklet/?is_video=false&amp;url='+SITEURL+'/'+response.slug+'/&amp;media='+response.featured_image+'&amp;description='+response.title+'" class="ssba_pinterest_share ssba_share_link" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/pinterest.png" title="Pinterest" class="ssba" alt="Pin on Pinterest"></a><a class="ssba_twitter_share" href="http://twitter.com/share?url='+SITEURL+'/'+response.slug+'/&amp;text='+response.title+'+" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/twitter.png" title="Twitter" class="ssba" alt="Tweet about this on Twitter"></a><a class="ssba_google_share" href="https://plus.google.com/share?url='+SITEURL+'/'+response.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/google.png" title="Google+" class="ssba" alt="Share on Google+"></a></div></div>'

	            +'</div>'
	        +'</div>'
	    +'</div>'
	    +'<hr class="m-t-0"> '

	    +'<div class="row">'
	        +'<div class="col-md-5">'
				+'<a class="content-bottom" href="'+SITEURL+'/'+response.slug+'">'

					+'<img src="'+response.medium_image+'" class="img-responsive">'
				+'</a>'

	        +'</div>'
	        +'<div class="col-md-7">'
	            +'<p class="m-t-0">'+response.excerpt+'</p>'
	           +' <div class="adjust_i article_meta">'
	                +'<p class="pull-left" title="Publishd Date"><i class="fa fa-clock-o"></i> '+response.post_date+'</p>'
					+'<p class="pull-left" title="Author"><i class="fa fa-user"></i> '+response.director+'</p>'
	               +' <p class="pull-right leftinsmall">'


	                    +'<span class="post_likes"><a href="#" class="post-like liked" data-post_id="'+response.id+'" title="Like/Unlike"><i id="icon-like" class="fa fa-thumbs-up"></i>'+response.post_like_count+'</a> </span>'

						+'<span title="Views"><i class="fa fa-eye"></i>'+response.no_of_views+'</span>'

					+'</p>'
	            +'</div>'
	           +' <div class="clearfix"></div>'
	        +'</div>'
	        //+'</a>'
	    +'</div>';

	    jQuery('.infocus').html(html);


				      });

	jQuery('.play_movie_big').live('click',function(event){

		var video_id = jQuery(this).attr("data-id");

		event.preventDefault();


		jQuery.ajax({

			type : 'POST',
			url : ajaxurl,

			data:{

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
        jQuery('.vid_if ').each(function() {
        	jQuery(this).css('height', height);
        });
        jQuery('.video-section').addClass('ontop');

	});


	function generate_video()
	{
		jQuery('.video-section').html("")

	    html = jQuery('.video-section').html()

			html+=
					'<a href="#" class="stopclass" id="stopid"> <i class="fa fa-times"></i> </a>'
					+'<div class="play-video">'

						+'<iframe id="playid" class="vid_if" src="<?php echo $response['embedurl'];?>" frameborder="0" allowfullscreen></iframe>'

					+'</div>'

			;

			jQuery('.video-section').html(html);

		console.log(html);

    } // end of generate_video

    //onclick of playing video
    jQuery(document).on('click', 'iframe.vid_if', function() {
        jQuery('.video-section').toggleClass('ontop');
    });


	//onclick of STOP btn

    jQuery(document).on('click', '.stopclass', function(event) {

		event.preventDefault();

		var url = jQuery('#playid').attr('src');

		jQuery('#playid').attr('src', '');
		jQuery('.video-section').removeClass('ontop');
		jQuery('.vid_if ').each(function() {
        	jQuery(this).css('height', height);
        });

		generate_featured_image();


    });

	function generate_featured_image()
	{
		var post_featured_image = jQuery('.video-section').attr('data-video-img');

		var post_video_id = jQuery('.video-section').attr('data-video-id');

		var post_embedurl = jQuery('.video-section').attr('data-video-embedurl');

		//width = window.innerWidth ? window.innerWidth : jQuery(window).width();
		//if (width <= 767) {
			//$height = 'auto';
		//} else {
			//$height = (window.innerHeight ? window.innerHeight : jQuery(window).height()) + 'px';
		//}

		jQuery('.video-section').html("");


	   html= "";


				html+=
						'<div class="show-featured-image" style="position: relative;;">'
						+'<img src="'+post_featured_image+'" alt="" class="img-responsive width-full">'
						+'<a href="#" class="play_movie_big" data-id="'+post_video_id+'" data-embedurl="'+post_embedurl+'"> </a></div>'

				;

			jQuery('.video-section').html(html);

			height_a = jQuery('.show-featured-image').find(img).height();
			jQuery('.show-featured-image').css('height', height_a);

			// resizeimgs(jQuery('.show-featured-image'), jQuery('.show-featured-image img'));
			// jQuery('.show-featured-image img').show();

		console.log(html);

    } // end of generate_featured_image


} //end onload


</script>
