<?php get_header(); ?>

	<!--Content-->
    <div class="container header-space author_page">
        <div class="content-wrapper">

			<?php

				$queried_object = get_queried_object();
				
				// print_r($queried_object);


				$author_id	= $queried_object->ID;

				$total_no_of_videos = count_user_posts( $author_id , 'post' );

				$total_no_of_articles = count_user_posts( $author_id , 'article' );

				$posts_per_page = 6;


				$response_posts = get_posts_by_author($author_id);

				$response_articles = get_articles_by_author($author_id);

				// echo "***********************************";
				// echo $total_no_of_videos;
				// echo "###";
				// echo $total_no_of_articles;

				$author_info = get_author_info($author_id);

			?>

            <!--this row contains author info-->
			<div class="row posrel">



					<div class="col-md-4">

						<?php

							$author_name = $author_info['author_name'];

							$image_url = get_author_image_url($author_id);  //plugin function

							if($image_url)
							{
						?>
								<img src="<?php echo $image_url;?>" alt="Photo of <?php echo $author_name;?>" class="img-responsive" />
						<?php
							}
							else
							{
								$image_url = get_template_directory_uri().'/assets/img/user.jpg';


						?>

								<img src="<?php echo $image_url;?>" alt="Photo of <?php echo $author_name;?>" class="img-responsive" />

						<?php
							}
						?>

					</div>




					<div class="col-md-8 posata">

						<div class="row">

							<div class="col-md-12">
								<h4 class="m-t-0 auth_name">
									<?php echo $author_info['author_name']; ?>
								</h4>
							</div>

						</div>

						<hr class="m-t-0 m-b-5">

						<div class="row">

							<div class="col-xs-8 cont posata">

								<div>
									<p><?php echo $author_info['author_description'];?></p>
								</div>

								<div class="auth_btm">

									<?php
											if($author_info['no_of_videos_by_author']!=0)
											{
									?>
												<p>No of Films:	<span class="co"><?php echo $author_info['no_of_videos_by_author'];?></span> <p>
									<?php
											}
											if($author_info['no_of_articles_by_author']!=0)
											{
									?>
												<p>No of Articles:	<span class="co"><?php echo $author_info['no_of_articles_by_author'];?></span> <p>
									<?php
											}
									?>

								</div>

							</div>


							<div class="col-xs-4 text-right list-info-btns posata">

								<div class="soc-ico nh">



									   <?php echo do_shortcode('[ssba url="' . $author_info['author_link'] . '" title="' . $author_info['author_name'] . '"]'); ?>

									  <?php// echo aal_author_likes($author_id); ?>

									    <?php//// echo getAuthorLikeLink( $author_id ); ?>

								</div>


								<div class="lico_c">


									<div class="lico like-action">



									</div>

								</div>

							</div>




						</div>
					</div>

                    <div class="col-md-12">
                        <hr class="border-btm">
                    </div>
			</div> <!-- end row -->



	        <div class="row listlayout pushin">

                <?php
                    if(count($response_posts) > 0)
                    {
                ?>

				<div class="show_posts col-md-12">

					<div class="heading sec_head">
						<h4> Videos by <span><?php echo $author_info['author_name']; ?></span> </h4>
					</div>

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

													   <?php

															echo implode('</span><span class="label label-greydark">',$value['video_category_links']);

														?>



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

					<div class="spacer-40"></div>
					<div class="text-center">
						<input type="hidden" name="offset" id="offset" value="0" />


						<input type="hidden" name="total_no_of_videos" id="total_no_of_videos" value="<?php echo $total_no_of_videos; ?>" />

						<?php

							if($total_no_of_videos > $posts_per_page)
							{
						?>
								<a href="#" class="btn btn-primary load_more">Load More Videos</a>
						<?php
							}
						?>
						<div class="loader_more load_dis"></div>



					</div>

                    <hr class="border-btm m-t-35">
				</div> <!-- end #show_posts -->
		<?php

			} //end if

		?>



		<?php
			if(count($response_articles) > 0)
			{
		?>

				<div class="show_articles col-md-12">

					<div class="heading sec_head">
						<h4> Articles by <span><?php echo $author_info['author_name']; ?></span> </h4>
					</div>

					<div class="all_articles">

						<?php

							foreach ($response_articles as $key => $value)
							{

						?>
								<div class="row listlayout article_row">

								<div class="col-md-5">

									<a class="content-bottom article_fi" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">

										<img src="<?php echo $value['medium_image'];?>" class="img-responsive width-full">

									</a>

								</div>

								<div class="col-md-7">
									<div class="row">

										<!--when hadding share icons change this to col-md-8 and remove class 'hidden' from col-md-4-->
										<div class="col-md-12">
											<h4 class="m-t-0">

												<a class="content-bottom article_title" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">

													<?php echo $value['title']; ?>

												</a>



											</h4>
										</div>

										<div class="col-md-4 hidden">


										</div>
									</div>


								   <div class="row">
										<div class="col-xs-9">
                                            <p class="article_meta">
                                                <span class="date" title="Published Date"><i class="fa fa-clock-o"></i> <?php echo $value['post_date'];?></span>

											   <span class="author"><a href="<?php echo get_author_posts_url($value['directorid']); ?>" title="Author"><i class="fa fa-user"></i> <?php echo ucfirst($value['director']);?> </a> </span>


												<span class="art_likes"><?php echo getPostLikeLink($value['id']) ; ?> </span>

												<span class="art_views" title="Views"><i class="fa fa-eye"></i><?php  echo $value['no_of_views'] ;?></span>

                                            </p>
                                        </div>
                                        <div class="col-xs-3">
                                            <div class="social-strip soc-ico pull-r ight">
												<?php echo do_shortcode('[ssba url="' . get_permalink($value['id']) . '" title="' . get_the_title($value['id']) . '"]'); ?>
											</div>
                                       </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p class="article_cont">
                                                <?php echo $value['excerpt'];?>
                                            </p>
                                        </div>
                                    </div>
                                </div>
							</div>


					<?php
							} //end foreach
					?>

					</div> <!-- end #all_posts -->



					<div class="text-center">
						<input type="hidden" name="offset_art" id="offset_art" value="0" />

						<input type="hidden" name="total_no_of_articles" id="total_no_of_articles" value="<?php echo $total_no_of_articles; ?>" />

						<?php

							if($total_no_of_articles > $posts_per_page)
							{
								
						?>
								<a href="#" class="btn btn-primary load_more_art">Load More Articles</a>
						<?php
							}
						?>
						<div class="loader_more_art load_dis"></div>
						<div class="spacer-40"></div>


					</div>

				</div> <!-- end #show_articles -->
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

		count_art = parseInt(jQuery('#offset_art').val()) + parseInt("<?php echo count($response_articles) ;?>");
		count_art=count_art-1;

		if(count_art == 0)
		{
			count_art=1;
		}

		jQuery('#offset_art').val(count_art);

		jQuery('.load_more').live('click',function(e){


			e.preventDefault();

			jQuery('.loader_more').html('<div class="loader_c"><div class="loader_i"></div></div>');

			get_all_posts();

		});


		jQuery('.load_more_art').live('click',function(e){

			e.preventDefault();

			jQuery('.loader_more_art').html('<div class="loader_c"><div class="loader_i"></div></div>');

			get_all_articles();

		});

		function get_all_posts()
		{
			posts_per_page = 6;
			offset = jQuery('#offset').val();

			var total_no_of_videos = jQuery('#total_no_of_videos').val();

			if((total_no_of_videos-offset)<=posts_per_page)
			{

				jQuery('.load_more').hide();
			}


			jQuery.ajax({

					type : 'POST',

					url : ajaxurl,

					data:
					{
						offset:offset,
						author_id: <?php echo $author_id; ?>,
						action : 'fetch_posts_by_author'

					},

					success:function(response)
					{
						generate_data(response);

						count = parseInt(jQuery('#offset').val()) + parseInt(response.length);
						jQuery('#offset').val(count);
						// console.log(count);

					},
					error:function(error)
					{
						jQuery('.loader_more').text("");
						jQuery('.all_posts').html('<p class="noneLeft">No videos found</p>');
						console.log(" inside get_all_posts error ");

					}
			});

		}


		function get_all_articles()
		{
			posts_per_page = 6;
			offset_art = jQuery('#offset_art').val();

			var total_no_of_articles = jQuery('#total_no_of_articles').val();
			
						
			if((total_no_of_articles-offset_art)<=posts_per_page)
			{

				jQuery('.load_more_art').hide();
			}


			jQuery.ajax({

					type : 'POST',

					url : ajaxurl,

					data:
					{
						offset_art:offset_art,
						author_id: <?php echo $author_id; ?>,
						action : 'fetch_articles_by_author'

					},

					success:function(response)
					{
						generate_data_art(response);

						count_art = parseInt(jQuery('#offset_art').val()) + parseInt(response.length);
						jQuery('#offset_art').val(count_art);
						// console.log(count_art);

					},
					error:function(error)
					{
						jQuery('.loader_more_art').text("");
						jQuery('.all_articles').html('<p class="noneLeft">No Articles found</p>');
						console.log(" inside get_all_articles error ");

					}
			});

		}


		function generate_data(response)
		{
            jQuery('.loader_more').text("");
            jQuery('.loader_more_art').text("");


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


							+'</div>';



				});

				jQuery('.all_posts').html(html);

			} //end if

			else
			{
				jQuery('.all_posts').html("");
				html += '<p class="noneLeft">No videos found</p>';
				jQuery('.all_posts').html(html);
				jQuery('.load_more').hide()
			}

		} //end generate_data



		function generate_data_art(response)
		{
			jQuery('.loader_more').text("");
            jQuery('.loader_more_art').text("");

			html = jQuery('.all_articles').html();

			if(response.length>0)
			{

				jQuery.each(response,function(index,value)
				{
					// console.log(" inside jQuery of generate_data_art ");

					html += '<div class="row listlayout article_row">'
                     +'<div class="col-md-5">'
						+'<a class="content-bottom article_fi" href="'+SITEURL+'/'+value.slug+'">'
							+'<img src="'+value.medium_image+'" class="img-responsive width-full">'
						+'</a>'
					 +'</div>'
                     +'<div class="col-md-7">'
                        +'<div class="row">'
                            +'<div class="col-md-12">'
                                +'<h4 class="m-t-0">'

									+'<a class="content-bottom article_title" href="'+SITEURL+'/'+value.slug+'">'+value.title+'</a>'


								+'</h4>'
                            +'</div>'
                            +'<div class="col-md-4">'



							+'</div>'
                        +'</div>'

                         +'<div class="row">'
                             +'<div class="col-xs-9">'
									+'<p class="article_meta">'
                                        +'<span class="date" title="Published Date"><i class="fa fa-clock-o"></i> '+value.post_date+'</span>'

										+'<span class="author">'

											+'<a href="'+SITEURL+'/director/'+value.director_nicename+'" title="Author"><i class="fa fa-user"></i>' + value.director + '</a>'

										+'</span>'

										+'<span class="art_likes"><a href="#" class="post-like liked" data-post_id="'+value.id+'" title="Like/Unlike"><i id="icon-like" class="fa fa-thumbs-up"></i>'+value.post_like_count+'</a> </span>'

										+'<span class="art_views" title="Views"><i class="fa fa-eye"></i>'+value.no_of_views+'</span>'

                                    +'</p>'

                             +'</div>'
                             +'<div class="col-xs-3">'
                                +'<div class="social-strip soc-ico">'


										+'<div class="ssba"><div style="text-align:right"><a class="ssba_facebook_share" href="http://www.facebook.com/sharer.php?u='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/facebook.png" title="Facebook" class="ssba" alt="Share on Facebook"></a><a href="http://pinterest.com/pin/create/bookmarklet/?is_video=false&amp;url='+SITEURL+'/'+value.slug+'/&amp;media='+value.featured_image+'&amp;description='+value.title+'" class="ssba_pinterest_share ssba_share_link" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/pinterest.png" title="Pinterest" class="ssba" alt="Pin on Pinterest"></a><a class="ssba_twitter_share" href="http://twitter.com/share?url='+SITEURL+'/'+value.slug+'/&amp;text='+value.title+'+" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/twitter.png" title="Twitter" class="ssba" alt="Tweet about this on Twitter"></a><a class="ssba_google_share" href="https://plus.google.com/share?url='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/google.png" title="Google+" class="ssba" alt="Share on Google+"></a></div></div>'



								+'</div>'
                             +'</div>'

                         +'</div>'
                         +'<div class="row">'
                             +'<div class="col-md-12">'
                                +'<p class="article_cont">'
                                    +value.excerpt
                                +'</p>'
                             +'</div>'
                         +'</div>'
                     +'</div>'
                 +'</div>';

				});

				jQuery('.all_articles').html(html);

			} //end if

			else
			{
				jQuery('.all_articles').html("");
				html += '<p class="noneLeft">No articles found</p>';
				jQuery('.all_articles').html(html);
				jQuery('.load_more_art').hide()
			}

		} //end generate_data_art



	} //end onload

</script>

























