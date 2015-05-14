<?php get_header(); ?>

	<!--Content-->
    <div class="container header-space author_page">
        <div class="content-wrapper">

			<?php

				$queried_object = get_queried_object();

				//print_r($queried_object);


				$author_id	= $queried_object->ID;


				$response_posts = get_posts_by_author($author_id);

				$response_articles = get_articles_by_author($author_id);


				$author_info = get_author_info($author_id);

				//print_r($author_info);
			?>


<!--		<div class="page-header">-->
            <!--this row contains author info-->
				<div class="row">



					<div class="col-md-2">

							<!-- <img src="<?php//// echo get_avatar( get_the_author_meta('ID'), 60); ?>">  //60 is size is image  -->

							<?php//  echo get_avatar( get_the_author_meta('ID'), 150);?>


							<!-- <img src="<?php// echo get_avatar( get_the_author_meta($author_id), 60); ?>"> -->

							<?php // echo get_avatar( get_the_author_meta($author_id), 150);?>


							<!-- <img src="<?php// echo get_avatar($author_id, 60); ?>"> -->
							<?php// echo get_avatar( $author_id, 150 ); ?>


							<?php echo get_avatar( $author_info['author_email'], 150 ); ?>



					</div>




					<div class="col-md-10"> <!-- <div class="col-md-8"> -->

						<div class="row">

							<div class="col-md-12">
								<h4 class="m-t-0 auth_name">
									<?php echo $author_info['author_name']; ?>
								</h4>
							</div>

						</div>

						<hr class="m-t-0 m-b-5">

						<div class="row">

							<div class="col-xs-8 cont">

								<div>
									<p><?php echo $author_info['author_description'];?></p>
								</div>

								<div>
									<p>No of Films:	<?php echo $author_info['no_of_videos_by_author'];?> <p>

								</div>

							</div>

							<!--<div class="col-xs-4 text-right list-info-btns">-->
							<div class="col-xs-4 text-right list-info-btns">

								<div class="soc-ico nh">

									   <?php// echo do_shortcode('[ssba url="' . get_permalink($author_id) . '" title="' . $author_info['author_name'] . '"]'); ?>

									   <?php echo do_shortcode('[ssba url="' . $author_info['author_link'] . '" title="' . $author_info['author_name'] . '"]'); ?>

									   <?php// echo do_shortcode('[ssba]'); ?>

									  <?php //echo "hii";?>

									  <?php// echo aal_author_likes($author_id);			//imp  ?>

									    <?php//// echo getAuthorLikeLink( $author_id ); ?>

								</div>


								<div class="lico_c">
									<!--<div class="lico small"><?php echo $value['no_of_views'];?> <i class="fa fa-eye"></i></div> -->

									<div class="lico like-action">

										<!-- <?php echo $author_info['post_user_like'] ;?> <i class="fa fa-thumbs-up"></i>  -->

									</div>

								</div>

							</div>

							<!--</div>-->


						</div>
					</div>

                    <div class="col-md-12">
                        <hr class="border-btm">
                    </div>
				</div> <!-- end row -->

<!--		</div>--> <!-- end #page-header -->


<!--<hr>-->

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
							//if(count($response_posts) > 0)
							foreach ($response_posts as $key => $value)
							{

						?>
								<div class="row listlayout">

									<div class="col-md-5">
										<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
											<img src="<?php echo $value['featured_image'];?>" class="img-responsive width-full">
										</a>
									</div>

									<div class="col-md-7">

										<div class="row">

											<div class="col-md-12">
												<h4 class="m-t-0">
													<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
														<?php echo $value['title'];?>
													</a>
<!--													 <small><em> By <?php //echo ucfirst($value['director']);?></em></small> -->
												</h4>
											</div>

										</div>

<!--										<hr class="m-t-0 m-b-5">-->

										<div class="row">

											<div class="col-xs-8 cont">

												<p><?php echo $value['excerpt'];?></p>


												<h6 class="m-t-0 m-b-0"><?php echo implode(', ',$value['video_region_links']);?>/<?php echo $value['duration'];?> MIN</h6>


												<h6 class="m-t-0 m-b-0">Dir: <span class="author"><a target="_blank" href="<?php echo get_author_posts_url($value['directorid']); ?>" title="Author"><?php echo ucfirst($value['director']);?> </a> </span></h6>

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

														<!--<?php// echo $value['post_like_count'] ;?> <i class="fa fa-thumbs-up"></i> -->
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

					<div class="text-center">
						<input type="hidden" name="offset" id="offset" value="0" />
						<a href="#" class="btn btn-primary load_more">Load More Videos...</a>
					</div>

                    <hr class="border-btm m-t-35">
				</div> <!-- end #show_posts -->
		<?php

			} //end if

		?>

<!--	<hr>-->

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
							//if(count($response_posts) > 0)
							foreach ($response_articles as $key => $value)
							{

						?>
								<div class="row listlayout article_row">

								<div class="col-md-5">

									<a class="content-bottom article_fi" target="_blank" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">

										<img src="<?php echo $value['featured_image'];?>" class="img-responsive width-full">

									</a>

								</div>

								<div class="col-md-7">
									<div class="row">

										<!--when hadding share icons change this to col-md-8 and remove class 'hidden' from col-md-4-->
										<div class="col-md-12">
											<h4 class="m-t-0">

												<a class="content-bottom article_title" target="_blank" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">

													<?php echo $value['title']; ?>

												</a>


<!--												<small><em>By </em></small>-->

											</h4>
										</div>

										<div class="col-md-4 hidden">


<!--
											<div class="social-strip">

												<?php// echo do_shortcode("[ssba]"); ?>

												<?php// echo do_shortcode("[ssba_post post_id='".$value['id']."']"); ?>

												<?php //echo do_shortcode('[ssba url="' . get_permalink($value['id']) . '" title="' . get_the_title($value['id']) . '"]'); ?>



											</div>
-->


											<!--
											<div class="social-strip">
												<div class="pull-right watchlist-add">
													<a href="#"><i class="fa fa-binoculars"></i> Add to Watchlist </a>
												</div>
												<div class="pull-right like-action">
													<span class="m-l-5 m-r-5">|</span> <?php// echo $value['post_like_count'] ;?> <i class="fa fa-thumbs-up"></i><span class="m-l-5 m-r-5">|</span>
												</div>

												<div class="share-button">

													<div class="social-toggle"><i class="fa fa-share"></i> Share</div>
													<div class="social-networks">
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
													</div>

												</div>

											</div>
											-->
										</div>
									</div>
<!--									<hr class="m-t-0 m-b-5">-->

								   <div class="row">
										<div class="col-xs-9">
                                            <p class="article_meta">
                                                <span class="date" title="Published Date"><i class="fa fa-clock-o"></i> <?php echo $value['post_date'];?></span>

											   <span class="author"><a target="_blank" href="<?php echo get_author_posts_url($value['directorid']); ?>" title="Author"><i class="fa fa-user"></i> <?php echo ucfirst($value['director']);?> </a> </span>

											   <!-- <span><i class="fa fa-thumbs-up"></i> <?php echo $value['post_like_count'];?> </span>-->

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
						<a href="#" class="btn btn-primary load_more_art">Load More Articles...</a>
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

			//jQuery('.loader').text("Loading data...")

			e.preventDefault();

			get_all_posts();

		});


		jQuery('.load_more_art').live('click',function(e){

			e.preventDefault();

			//get_all_posts();
			get_all_articles();

		});

		function get_all_posts()
		{
			console.log(" inside get_all_posts ");

			//posts_per_page = 12;
			posts_per_page = 6;
			offset = jQuery('#offset').val();


			jQuery.ajax({

					type : 'POST',

					url : ajaxurl,

					data:
					{
						offset:offset,
						author_id: <?php echo $author_id; ?>,
						action : 'fetch_posts_by_author'

					},
					//dataType: 'json',

					success:function(response)
					{

						console.log(" inside get_all_posts success ");
						//console.log(response);

						generate_data(response);

						count = parseInt(jQuery('#offset').val()) + parseInt(response.length);
						jQuery('#offset').val(count);
						console.log(count);

					},
					error:function(error)
					{
						//jQuery('.loader').text("")
						jQuery('.all_posts').html('No Posts found');
						console.log(" inside get_all_posts error ");

					}
			});

		}


		function get_all_articles()
		{
			console.log(" inside get_all_articles ");

			//posts_per_page = 12;
			posts_per_page = 6;
			offset_art = jQuery('#offset_art').val();


			jQuery.ajax({

					type : 'POST',

					url : ajaxurl,

					data:
					{
						offset_art:offset_art,
						author_id: <?php echo $author_id; ?>,
						action : 'fetch_articles_by_author'

					},
					//dataType: 'json',

					success:function(response)
					{

						console.log(" inside get_all_articles success ");
						//console.log(response);

						generate_data_art(response);

						count_art = parseInt(jQuery('#offset_art').val()) + parseInt(response.length);
						jQuery('#offset_art').val(count_art);
						console.log(count_art);

					},
					error:function(error)
					{
						//jQuery('.loader').text("")
						jQuery('.all_articles').html('No Articles found');
						console.log(" inside get_all_articles error ");

					}
			});

		}


		function generate_data(response)
		{
			console.log(" inside generate_data ");


			html = jQuery('.all_posts').html();

			//html="";

			if(response.length>0)
			{

				jQuery.each(response,function(index,value)
				{
					console.log(" inside jQuery ");
					html += '<div class="row listlayout">'

								+'<div class="col-md-5">'
									+'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value.slug+'">'
										+'<img src="'+value.featured_image+'" class="img-responsive width-full">'
									+'</a>'
								+'</div>'

								+'<div class="col-md-7">'

									+'<div class="row">'

										+'<div class="col-md-12">'
											+'<h4 class="m-t-0">'
												+'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value.slug+'">'+value.title+'</a>'
												 //+'<small><em> By '+value.director+'</em></small>'
											+'</h4>'
										+'</div>'

									+'</div>'

									//+'<hr class="m-t-0 m-b-5">'

									+'<div class="row">'

										+'<div class="col-xs-8 cont">'

											+'<p>'+value.excerpt+'</p>'

											+ '<h6 class="m-t-30 m-b-0">'+value.video_region_links.join(', ')+'/'+value.duration+' Minutes</h6>'

											//+'<h6 class="m-t-0 m-b-0">'+value.duration+' Minutes</h6>'

											//+'<h6 class="m-t-0 m-b-0">Dir: '+value.director+'</h6>'

											+'<h6 class="m-t-0 m-b-0">Dir: <a target="_blank" href="'+SITEURL+'/author/'+value.director_nicename+'" title="Author">' + value.director + '</a></h6>'



                                            + '<p class="categories">'
                                                + '<span class="label label-greydark">'

                                                + value.video_category_links.join('</span><span class="label label-greydark">')

												+ '</span>'
                                            + '</p>'

											//+'<span class="date"><i class="fa fa-clock-o"></i> '+value.post_date+'</span>'

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
				html += "<div>No posts found.</div>";
				jQuery('.all_posts').html(html);
				jQuery('.load_more').hide()
			}

		} //end generate_data



		function generate_data_art(response)
		{
			console.log(" inside generate_data_art ");


			html = jQuery('.all_articles').html();

			//html="";

			if(response.length>0)
			{

				jQuery.each(response,function(index,value)
				{
					console.log(" inside jQuery of generate_data_art ");

					html += '<div class="row listlayout article_row">'
                     +'<div class="col-md-5">'
						+'<a class="content-bottom article_fi" target="_blank" href="'+SITEURL+'/'+value.slug+'">'
							+'<img src="'+value.featured_image+'" class="img-responsive width-full">'
						+'</a>'
					 +'</div>'
                     +'<div class="col-md-7">'
                        +'<div class="row">'
                            +'<div class="col-md-12">'
                                +'<h4 class="m-t-0">'

									+'<a class="content-bottom article_title" target="_blank" href="'+SITEURL+'/'+value.slug+'">'+value.title+'</a>'

									//+'<small><em> By '+value.director+'</em></small>'

								+'</h4>'
                            +'</div>'
                            +'<div class="col-md-4">'



							/*
                                 +'<div class="social-strip">'

                                    +'<div class="pull-right watchlist-add">'
                                        +'<a href="#"><i class="fa fa-binoculars"></i> Add to Watchlist </a>'
                                    +'</div>'
                                    +'<div class="pull-right like-action">'
                                        +'<span class="m-l-5 m-r-5">|</span> '+value.post_like_count+' <i class="fa fa-thumbs-up"></i><span class="m-l-5 m-r-5">|</span>'
                                    +'</div>'
                                    +'<div class="share-button">'
                                        +'<div class="social-toggle"><i class="fa fa-share"></i> Share</div>'
                                        +'<div class="social-networks">'
                                          +'<ul>'
                                            +'<li class="social-twitter">'
                                              +'<a href="https://twitter.com/share"><i class="fa fa-twitter fa-lg"></i></a>'
                                            +'</li>'
                                            +'<li class="social-facebook">'
                                            +'<a href="http://www.facebook.com/sharer.php?u=http://<?php echo get_permalink(); ?>" target="_blank"><i class="fa fa-facebook-square fa-lg"></i></a>'
                                            +'</li>'
                                            +'<li class="social-pin">'
                                            +'<a href="http://pinterest.com/pin/create/link/?url=http://<?php echo get_permalink(); ?>" target="_blank"><i class="fa fa-pinterest fa-lg"></i></a>'
                                            +'</li>'
                                          +'</ul>'
                                        +'</div>'
                                    +'</div>'
                                +'</div>'
							*/

							+'</div>'
                        +'</div>'
                         //+'<hr class="m-t-0 m-b-5">'
                         +'<div class="row">'
                             +'<div class="col-xs-9">'
									+'<p class="article_meta">'
                                        +'<span class="date" title="Published Date"><i class="fa fa-clock-o"></i> '+value.post_date+'</span>'

										//+'<span class="author"><i class="fa fa-user"></i> '+value.director+'</span>'

										+'<span class="author">'

											+'<a target="_blank" href="'+SITEURL+'/author/'+value.director_nicename+'" title="Author"><i class="fa fa-user"></i>' + value.director + '</a>'

										+'</span>'


										//+'<span class="author"><i class="fa fa-user"></i> <a target="_blank" href="<?php echo get_author_posts_url($value['directorid']); ?>"> <?php echo ucfirst($value['director']);?> </a> </span>'



										//+'<span><i class="fa fa-thumbs-up"></i>'+value.post_like_count+'</span>'
										+'<span class="art_likes"><a href="#" class="post-like liked" data-post_id="'+value.id+'" title="Like/Unlike"><i id="icon-like" class="fa fa-thumbs-up"></i>'+value.post_like_count+'</a> </span>'

										+'<span class="art_views" title="Views"><i class="fa fa-eye"></i>'+value.no_of_views+'</span>'

                                    +'</p>'

                             +'</div>'
                             +'<div class="col-xs-3">'
                                +'<div class="social-strip soc-ico">'

									//+'<p>'+value.id+'</p>'

										+'<div class="ssba"><div style="text-align:right"><a class="ssba_facebook_share" href="http://www.facebook.com/sharer.php?u='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/facebook.png" title="Facebook" class="ssba" alt="Share on Facebook"></a><a href="http://pinterest.com/pin/create/bookmarklet/?is_video=false&amp;url='+SITEURL+'/'+value.slug+'/&amp;media='+value.featured_image+'&amp;description='+value.title+'" class="ssba_pinterest_share ssba_share_link" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/pinterest.png" title="Pinterest" class="ssba" alt="Pin on Pinterest"></a><a class="ssba_twitter_share" href="http://twitter.com/share?url='+SITEURL+'/'+value.slug+'/&amp;text='+value.title+'+" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/twitter.png" title="Twitter" class="ssba" alt="Tweet about this on Twitter"></a><a class="ssba_google_share" href="https://plus.google.com/share?url='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/google.png" title="Google+" class="ssba" alt="Share on Google+"></a></div></div>'



								+'</div>'
                             +'</div>'
                             // +'<div class="col-xs-4 text-right">'
                                 // +'<div class="small m-t-20">'+value.no_of_views+' <i class="fa fa-eye"></i></div>'
                             // +'</div>'
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
				html += "<div>No articles found.</div>";
				jQuery('.all_articles').html(html);
				jQuery('.load_more_art').hide()
			}

		} //end generate_data_art



	} //end onload

</script>

























