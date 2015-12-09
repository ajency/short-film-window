<?php get_header(); ?>


	<!--Content-->
    <div class="container header-space author_page">
        <div class="content-wrapper">


			<?php

				$queried_object = get_queried_object();

				$taxonomy = $queried_object->taxonomy;

				$term_name = $queried_object->name;

				$total_no_of_videos = $queried_object->count;


				if($taxonomy == "region")
				{
					$args = array(
						'orderby'           => 'post_date',
						'order'             => 'DESC',
						'genre'				=> '',
						'region'		    => $queried_object->term_id,
						'taxonomy'			=> $queried_object->taxonomy,
						'language'			=> '',
						'playlist'			=> '',
						'posts_per_page'   	=> 12,
						'offset'           	=> 0

					);

				}
				else if($taxonomy == "language")
				{
					$args = array(
						'orderby'           => 'post_date',
						'order'             => 'DESC',
						'genre'				=> '',
						'language'		    => $queried_object->term_id,
						'taxonomy'			=> $queried_object->taxonomy,
						'region'			=> '',
						'playlist'			=> '',
						'posts_per_page'   	=> 12,
						'offset'           	=> 0

					);
				}


				$posts_per_page = 12;

				$response_posts = Film\Video::get_many($args);



			?>


                <div class="row">
                    <div class="col-md-6">

						<?php

							if($taxonomy == "region")
							{
						?>
								<h2 class="brand">REGION: <small><em><?php echo $term_name; ?></em></small></h2>

						<?php
							}
							else if($taxonomy == "language")
							{
						?>

								<h2 class="brand">LANGUAGE: <small><em><?php echo $term_name; ?></em></small></h2>
						<?php

							}
						?>

					</div>
					<div class="col-md-3 col-md-offset-3 col-sm-12">
						<div class="m-t-20 search_menu">


                        </div>
					</div>
                </div>

                <hr class="m-t-0">

                <div class="spacer-40"></div>

	        <div class="row listlayout push in">

				<?php
					if(count($response_posts) > 0)
					{
				?>
						<div class="show_posts col-md-12">

							<div class="all_posts">

								<?php

									foreach ($response_posts as $key => $value)
									{

								?>
										<div class="row listlayout">

											<div class="col-md-5">
												<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
													<img src="<?php echo $value['medium_image'];?>" class="img-responsive width-full">
												</a>
											</div>

											<div class="col-md-7">

												<div class="row">

													<div class="col-md-12">
														<h4 class="m-t-0">
															<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
																<?php echo $value['title'];?>
															</a>

														</h4>
													</div>

												</div>


												<div class="row">

													<div class="col-xs-8 cont">

														<p><?php echo $value['excerpt'];?></p>


														<h6 class="m-t-0 m-b-0"><?php echo implode(', ',$value['video_region_links']);?>/<?php echo $value['duration'];?> MIN</h6>

														<h6 class="m-t-0 m-b-0">Dir: <span class="author"><a href="<?php echo get_author_posts_url($value['directorid']); ?>" title="Author"><?php echo ucfirst($value['director']);?> </a> </span></h6>


														<p class="categories">
															<span class="label label-greydark">
																<?php echo implode('</span><span class="label label-greydark">',$value['video_category_links']);?>
															</span>
														</p>

													</div>

													<div class="col-xs-4 text-right list-info-btns">

														<div class="soc-ico nh">

															   <?php echo do_shortcode('[ssba url="' . get_permalink($value['id']) . '" title="' . get_the_title($value['id']) . '"]'); ?>
														</div>


														<div class="lico_c">
															<div title="Views" class="lico small">

																<?php echo $value['no_of_views'];?> <i class="fa fa-eye"></i>

															</div>

															<div class="lico like-action">


																	<?php echo getPostLikeLink($value['id']) ; ?>
															</div>

														</div>

													</div>

												</div>


											</div>


										</div>


							<?php
									} //end foreach
							?>

							</div> <!-- end #all_posts -->

							<div class="spacer-40"></div><div class="loader_more"></div>

							<div class="text-center">

								<input type="hidden" name="taxonomy" id="taxonomy" value="<?php echo $queried_object->taxonomy; ?>" />

								<?php
									if($queried_object->taxonomy == 'region')
									{
								?>
										<input type="hidden" name="region" id="region" value="<?php echo $queried_object->term_id; ?>" />
								<?php
									}
									else if($queried_object->taxonomy == 'language')
									{
								?>

										<input type="hidden" name="language" id="language" value="<?php echo $queried_object->term_id; ?>" />
								<?php
									}
								?>

								<input type="hidden" name="offset" id="offset" value="0" />


								<input type="hidden" name="total_no_of_videos" id="total_no_of_videos" value="<?php echo $total_no_of_videos; ?>" />

								<?php

									if($total_no_of_videos > $posts_per_page)
									{
								?>
										<a href="#" class="btn btn-primary load_more">Load More Videos</a>
										<div class="spacer-40">
								<?php
									}
								?>


							</div>


						</div> <!-- end #show_posts -->
				<?php

					} //end if

				?>


			</div> <!-- end #container header-space -->

		</div> <!-- end content-wrapper -->
    </div> <!-- end container header-space -->

<?php get_footer(); ?>



<script type="text/javascript">

	window.onload = function()
	{

		count = parseInt(jQuery('#offset').val()) + parseInt("<?php echo count($response_posts) ;?>");
		count=count-1;

		if(count == 0)
		{
			count=1;
		}

		jQuery('#offset').val(count);


		jQuery('.load_more').live('click',function(e){

			e.preventDefault();

			jQuery('.loader_more').html('<div class="loader_c"><div class="loader_i"></div></div>');

			get_all_posts();

		});


	function get_all_posts()
	{
		taxonomy = jQuery('#taxonomy').val();

		region = jQuery('#region').val();

		language = jQuery('#language').val();

		posts_per_page = 12;
		offset = jQuery('#offset').val();

		var total_no_of_videos = jQuery('#total_no_of_videos').val();

		if((total_no_of_videos-offset)<=posts_per_page)
		{
			posts_per_page = total_no_of_videos-offset;

			jQuery('.load_more').hide();
		}


		data = 'taxonomy='+taxonomy+'&posts_per_page='+posts_per_page+'&offset='+offset+'&region='+region+'&language='+language;



		jQuery.ajax({
				type : 'GET',
				url : SITEURL+'/wp-json/videos',
				data : data,
				success:function(response)
				{

                    generate_data(response);
					count = parseInt(jQuery('#offset').val()) + parseInt(response.length);
                    jQuery('#offset').val(count);


				},
				error:function(error){
					// jQuery('.loader').text("")
					jQuery('.loader_more').text("")
					jQuery('.all_posts').html('<p class="noneLeft">No Posts found</p>');

				}
			})
	}


		function generate_data(response)
		{
			console.log(" inside generate_data ");

			jQuery('.loader_more').text("");

			html = jQuery('.all_posts').html();

			if(response.length>0)
			{

				jQuery.each(response,function(index,value)
				{
					console.log(" inside jQuery ");
					html += '<div class="row listlayout">'

								+'<div class="col-md-5">'
									+'<a class="content-bottom" href="'+SITEURL+'/'+value.slug+'">'
										+'<img src="'+value.medium_image+'" class="img-responsive width-full">'
									+'</a>'
								+'</div>'

								+'<div class="col-md-7">'

									+'<div class="row">'

										+'<div class="col-md-12">'
											+'<h4 class="m-t-0">'
												+'<a class="content-bottom" href="'+SITEURL+'/'+value.slug+'">'+value.title+'</a>'

											+'</h4>'
										+'</div>'

									+'</div>'



									+'<div class="row">'

										+'<div class="col-xs-8 cont">'

											+'<p>'+value.excerpt+'</p>'

											+ '<h6 class="m-t-30 m-b-0">'+value.video_region_links.join(', ')+'/'+value.duration+' Minutes</h6>'



											+'<h6 class="m-t-0 m-b-0">Dir: <a href="'+SITEURL+'/director/'+value.director_nicename+'" title="Author">' + value.director + '</a></h6>'


                                            + '<p class="categories">'
                                                + '<span class="label label-greydark">'
                                                    + value.video_category_links.join('</span><span class="label label-greydark">')
                                                + '</span>'
                                            + '</p>'



										+'</div>'

										+'<div class="col-xs-4 text-right list-info-btns">'

											+'<div class="soc-ico nh">'

												+'<div class="ssba"><div style="text-align:right"><a class="ssba_facebook_share" href="http://www.facebook.com/sharer.php?u='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/facebook.png" title="Facebook" class="ssba" alt="Share on Facebook"></a><a href="http://pinterest.com/pin/create/bookmarklet/?is_video=false&amp;url='+SITEURL+'/'+value.slug+'/&amp;media='+value.featured_image+'&amp;description='+value.title+'" class="ssba_pinterest_share ssba_share_link" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/pinterest.png" title="Pinterest" class="ssba" alt="Pin on Pinterest"></a><a class="ssba_twitter_share" href="http://twitter.com/share?url='+SITEURL+'/'+value.slug+'/&amp;text='+value.title+'+" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/twitter.png" title="Twitter" class="ssba" alt="Tweet about this on Twitter"></a><a class="ssba_google_share" href="https://plus.google.com/share?url='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/google.png" title="Google+" class="ssba" alt="Share on Google+"></a></div></div>'

											+'</div>'


											+'<div class="lico_c">'
												+'<div title="Views" class="lico small">'+value.no_of_views+'<i class="fa fa-eye"></i></div>'
												+'<div class="lico like-action">'

													+'<a href="#" class="post-like liked" data-post_id="'+value.id+'" title="Like/Unlike"><i id="icon-like" class="fa fa-thumbs-up"></i>'+value.post_like_count+'</a> '

												+'</div>'

											+'</div>'

										+'</div>'

									+'</div>'


								+'</div> '


							+'</div>'



				});

				jQuery('.all_posts').html(html);

			} //end if

			else
			{
				jQuery('.all_posts').html("");
				html += '<p class="noneLeft">No posts found</p>';
				jQuery('.all_posts').html(html);
				jQuery('.load_more').hide()
			}

		} //end generate_data



	} //end onload

</script>

























