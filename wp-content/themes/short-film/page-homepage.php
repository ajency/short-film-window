<?php
/*
Template Name: Homepage
*/
?>

<?php get_header(); ?>

			<!-- slider -->

        <div class="slider3 full-slider">
          <div><img src="<?php echo get_template_directory_uri(); ?>/assets/img/home_main.jpg" class="img-responsive"></div>

        </div>

        <!-- slider ends -->

        <!--Content-->
        <div class="container">
            <div class="content-wrapper">
                <div class="spacer-40"></div>

                <h2 class="brand">STAFF PICKS <small><em class="brand_cat_name">This Week's Premiere</em></small></h2>

                <hr class="m-t-0">

                <div class="row">
                    <div class="col-sm-9">

						<div class="staffpick-display-section">

						</div>



                    </div>

                    <div class="col-sm-3">
                        <nav class="movie-cat visible-sm visible-md visible-lg">
                            <ul>
							     <li><a class="staffpick-default" href="#">THIS WEEK'S PREMIERE</a></li>

							<?php

								$pairs = get_pairs_category_post();

								foreach ( $pairs as $pair )
								{

									echo '<li><a class="staffpick-category" data-cat-id="'.$pair['catid'].'" data-cat-name="'.$pair['catname'].'" data-post-id="'.$pair['postid'].'" href="#">' . $pair['catname'].'</a></li>';

								}

							?>
							</ul>
                        </nav>
                    </div>
                </div>

    <div class="spacer-50"></div>
    <div class="row">
		<div class="col-md-9">
            <div class="">
                <h2 class="brand">NEW AND NOTEWORTHY</h2>
                    </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group m-t-20">

				  <div class="search_menu">

					   <input type="text" class="form-control search_nn" placeholder="Search">
                       <i class="fa fa-search"></i>

					</div>

			   </div>
            </div>
    </div>

	<hr class="m-t-0">

	<div class="search_nn-results-message">
	</div>


	<div class="all_posts">

	<?php

		$response = get_noteworthy_videos ();

		// response[0],response[1],response[2] = 3 recent videos
		// response[3],response[4],response[5] = 3 popular videos

		if(count($response) > 0)
		{
			$gridreposnse = generate_grid_response($response);

			foreach ($gridreposnse as $key => $value)
			{
	?>
				<div class="row">
                    <div class="col-sm-6 multi-grid">
                        <div class="grid-box grid-full content-align-bottom">
							<?php
								if($value[0]['slug'])
								{
							?>
									<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value[0]['slug'];?>">
							<?php
								}
								else
								{
							?>
									<a class="content-bottom" href="#">
							<?php
								}
							?>

                                <div class="grid-image">
                                    <img src="<?php echo $value[0]['medium_image'] ;?>">
                                </div>
                                <div class="grid-text-wrap">
                                    <div class="grid-title"><?php echo $value[0]['title'];?></div>

								   <div class="grid-meta <?php echo $value[0]['class'] ;?>"><?php echo implode(',',$value[0]['region']);?>/<?php echo $value[0]['duration'];?> MIN</div>

                                    <div class="grid-meta"><?php echo implode(',',$value[0]['categories']);?></div>

                                    <div class="grid-meta <?php echo $value[0]['class'] ;?>">DIR.<?php echo  ucfirst($value[0]['director']);?></div>

                                </div>
                                <div class="grid-text-wrap hover-text">
                                    <div class="grid-title"><?php echo $value[0]['title'];?></div>
                                    <div class="grid-meta">
                                        <div class="row">
                                            <div class="col-sm-4">
												<div class="pull-left text-center m-t-10 <?php echo $value[0]['class'] ;?>">

												</div>
												<div class="pull-left p-l-10 m-t-10 <?php echo $value[0]['class'] ;?>">
													<div><?php echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
													<div class="<?php echo $value[0]['class'] ;?>"><?php echo $value[0]['post_like_count'];?>
														<i class="fa fa-thumbs-up"></i></div>
												</div>
                                            </div>
                                            <div class="col-sm-8">
                                                <div class="pull-right text-right m-t-10">
                                                   <?php echo $value[0]['excerpt'];?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="overlay-vertical"></div>
                            </a>
                        </div>

					   <div class="grid-box grid-half content-align-bottom">

							<?php
								if($value[1]['slug'])
								{
							?>
									<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value[1]['slug'];?>">
							<?php
								}
								else
								{
							?>
									<a class="content-bottom" href="#">
							<?php
								}
							?>


                                <div class="grid-image">
                                    <img src="<?php echo $value[1]['small_image'] ;?>">
                                </div>
                                <div class="grid-text-wrap">
                                    <div class="grid-title"><?php echo $value[1]['title'];?></div>

									<div class="grid-meta <?php echo $value[1]['class'] ;?>"><?php echo implode(',',$value[1]['region']);?>/<?php echo $value[1]['duration'];?> MIN</div>

                                    <div class="grid-meta"><?php echo implode(',',$value[1]['categories']);?></div>

                                    <div class="grid-meta <?php echo $value[1]['class'] ;?>">DIR.<?php echo  ucfirst($value[1]['director']);?></div>

                                </div>
                                <div class="grid-text-wrap hover-text">
                                    <div class="grid-title"><?php echo $value[1]['title'];?></div>
                                    <div class="grid-meta">
                                        <div class="row">
                                            <div class="col-sm-4 vid-meta">
												<div class="pull-left text-center m-t-10 <?php echo $value[1]['class'] ;?>">

												</div>
												<div class="pull-left p-l-10 m-t-10 <?php echo $value[1]['class'] ;?>">
													<div><?php echo $value[1]['no_of_views'];?><i class="fa fa-eye"></i></div>
													<div class="<?php echo $value[1]['class'] ;?>"><?php echo $value[1]['post_like_count'];?>
														<i class="fa fa-thumbs-up"></i></div>
												</div>
                                            </div>
                                            <div class="col-sm-8 vid-desc">
                                                <div class="pull-right text-right m-t-10">
                                                    <?php echo $value[1]['excerpt'];?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="overlay-vertical"></div>
                            </a>
                        </div>

					   <div class="grid-box grid-half content-align-bottom">

							<?php
								if($value[2]['slug'])
								{
							?>
									<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value[2]['slug'];?>">
							<?php
								}
								else
								{
							?>
									<a class="content-bottom" href="#">
							<?php
								}
							?>


                                <div class="grid-image">
                                    <img src="<?php echo $value[2]['small_image'] ;?>">
                                </div>
                                <div class="grid-text-wrap">
                                    <div class="grid-title"><?php echo $value[2]['title'];?></div>

									<div class="grid-meta <?php echo $value[2]['class'] ;?>"><?php echo implode(',',$value[2]['region']);?>/<?php echo $value[2]['duration'];?> MIN</div>

                                    <div class="grid-meta"><?php echo implode(',',$value[2]['categories']);?></div>

                                    <div class="grid-meta <?php echo $value[2]['class'] ;?>">DIR.<?php echo  ucfirst($value[2]['director']);?></div>

                                </div>
                                <div class="grid-text-wrap hover-text">
                                    <div class="grid-title"><?php echo $value[2]['title'];?></div>
                                    <div class="grid-meta">
                                        <div class="row">
                                            <div class="col-sm-4 vid-meta">
												<div class="pull-left text-center m-t-10 <?php echo $value[2]['class'] ;?>">

												</div>
												<div class="pull-left p-l-10 m-t-10 <?php echo $value[2]['class'] ;?>">
													<div><?php echo $value[2]['no_of_views'];?><i class="fa fa-eye"></i></div>
													<div class="<?php echo $value[2]['class'] ;?>"><?php echo $value[2]['post_like_count'];?>
														<i class="fa fa-thumbs-up"></i></div>
												</div>
                                            </div>
                                            <div class="col-sm-8 vid-desc">
                                                <div class="pull-right text-right m-t-10">
                                                    <?php echo $value[2]['excerpt'];?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="overlay-vertical"></div>
                            </a>
                        </div>
                    </div>

				   <div class="col-sm-6 multi-grid">

					   <div class="grid-box grid-half content-align-bottom">

							<?php
								if($value[3]['slug'])
								{
							?>
									<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value[3]['slug'];?>">
							<?php
								}
								else
								{
							?>
									<a class="content-bottom" href="#">
							<?php
								}
							?>


                                <div class="grid-image">
                                    <img src="<?php echo $value[3]['small_image'] ;?>">
                                </div>
                                <div class="grid-text-wrap">
                                    <div class="grid-title"><?php echo $value[3]['title'];?></div>

								   <div class="grid-meta <?php echo $value[3]['class'] ;?>"><?php echo implode(',',$value[3]['region']);?>/<?php echo $value[3]['duration'];?> MIN</div>

                                    <div class="grid-meta"><?php echo implode(',',$value[3]['categories']);?></div>

                                   <div class="grid-meta <?php echo $value[3]['class'] ;?>">DIR.<?php echo  ucfirst($value[3]['director']);?></div>

                                </div>
                                <div class="grid-text-wrap hover-text">
                                    <div class="grid-title"><?php echo $value[3]['title'];?></div>
                                    <div class="grid-meta">
                                        <div class="row">
                                            <div class="col-sm-4 vid-meta">
												<div class="pull-left text-center m-t-10 <?php echo $value[3]['class'] ;?>">

												</div>
												<div class="pull-left p-l-10 m-t-10 <?php echo $value[3]['class'] ;?>">
													<div><?php echo $value[3]['no_of_views'];?><i class="fa fa-eye"></i></div>
													<div class="<?php echo $value[3]['class'] ;?>"><?php echo $value[3]['post_like_count'];?>
														<i class="fa fa-thumbs-up"></i></div>
												</div>
                                            </div>
                                            <div class="col-sm-8 vid-desc">
                                                <div class="pull-right text-right m-t-10">
                                                   <?php echo $value[3]['excerpt'];?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="overlay-vertical"></div>
                            </a>
                        </div>

						<div class="grid-box grid-half content-align-bottom">

							<?php
								if($value[4]['slug'])
								{
							?>
									<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value[4]['slug'];?>">
							<?php
								}
								else
								{
							?>
									<a class="content-bottom" href="#">
							<?php
								}
							?>


                                <div class="grid-image">
                                    <img src="<?php echo $value[4]['small_image'] ;?>">
                                </div>
                                <div class="grid-text-wrap">
                                    <div class="grid-title"><?php echo $value[4]['title'];?></div>

								   <div class="grid-meta <?php echo $value[4]['class'] ;?>"><?php echo implode(',',$value[4]['region']);?>/<?php echo $value[4]['duration'];?> MIN</div>

                                    <div class="grid-meta"><?php echo implode(',',$value[4]['categories']);?></div>

                                  <div class="grid-meta <?php echo $value[4]['class'] ;?>">DIR.<?php echo  ucfirst($value[4]['director']);?></div>

                                </div>
                                <div class="grid-text-wrap hover-text">
                                    <div class="grid-title"><?php echo $value[4]['title'];?></div>
                                    <div class="grid-meta">
                                        <div class="row">
                                            <div class="col-sm-4 vid-meta">
												<div class="pull-left text-center m-t-10 <?php echo $value[4]['class'] ;?>">

												</div>
												<div class="pull-left p-l-10 m-t-10 <?php echo $value[4]['class'] ;?>">
													<div><?php echo $value[4]['no_of_views'];?><i class="fa fa-eye"></i></div>
													<div class="<?php echo $value[4]['class'] ;?>"><?php echo $value[4]['post_like_count'];?>
														<i class="fa fa-thumbs-up"></i></div>
												</div>
                                            </div>
                                            <div class="col-sm-8 vid-desc">
                                                <div class="pull-right text-right m-t-10">
                                                    <?php echo $value[4]['excerpt'];?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="overlay-vertical"></div>
                            </a>
                        </div>

					  <div class="grid-box grid-full content-align-bottom">

								<?php
								if($value[5]['slug'])
								{
							?>
									<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value[5]['slug'];?>">
							<?php
								}
								else
								{
							?>
									<a class="content-bottom" href="#">
							<?php
								}
							?>


                                <div class="grid-image">
                                    <img src="<?php echo $value[5]['medium_image'] ;?>">
                                </div>
                                <div class="grid-text-wrap">
                                    <div class="grid-title"><?php echo $value[5]['title'];?></div>

									<div class="grid-meta <?php echo $value[5]['class'] ;?>"><?php echo implode(',',$value[5]['region']);?>/<?php echo $value[5]['duration'];?> MIN</div>

                                    <div class="grid-meta"><?php echo implode(',',$value[5]['categories']);?></div>

                                     <div class="grid-meta <?php echo $value[5]['class'] ;?>">DIR.<?php echo  ucfirst($value[5]['director']);?></div>

                                </div>
                                <div class="grid-text-wrap hover-text">
                                    <div class="grid-title"><?php echo $value[5]['title'];?></div>
                                    <div class="grid-meta">
                                        <div class="row">
                                            <div class="col-sm-4">
												<div class="pull-left text-center m-t-10 <?php echo $value[5]['class'] ;?>">

												</div>
												<div class="pull-left p-l-10 m-t-10 <?php echo $value[5]['class'] ;?>">
													<div><?php echo $value[5]['no_of_views'];?><i class="fa fa-eye"></i></div>
													<div class="<?php echo $value[5]['class'] ;?>"><?php echo $value[5]['post_like_count'];?>
														<i class="fa fa-thumbs-up"></i></div>
												</div>
                                            </div>
                                            <div class="col-sm-8">
                                                <div class="pull-right text-right m-t-10">
                                                    <?php echo $value[5]['excerpt'];?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="overlay-vertical"></div>
                            </a>
                        </div>
                    </div>
                </div>

	<?php

			} //end foreach

		} //end if

	?>
	</div>	<!-- end all_posts-->

                <div class="row">
                    <div class="col-md-12 text-center">
                    <h6>

						<a class="exp_all" href="<?php echo site_url();?>/movies">EXPLORE ALL FILMS <i class="fa fa-angle-double-down hidden"></i></a>

                    </h6>
                    </div>
                </div>

                <div class="spacer-50"></div>
                <div class="row">
                    <div class="col-md-9">
                        <div class="">
                            <h3 class="brand">IN FOCUS</h3>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group m-t-20">


						</div>
                    </div>
                </div>

<hr class="m-t-0">

<?php

	$recentarticles = get_recent_articles();

	if(count($recentarticles) > 0)
	{
?>
		<div class="row">
			<div class="col-md-12">
				<div class="slider1 regular-slider arrows-top">
					<?php

						foreach($recentarticles as $recentarticle)
						{
					?>
							<div>
								<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $recentarticle['slug'];?>">

									<div class="focus-img">
										<img src="<?php echo $recentarticle['small_image'] ;?>" class="img-responsive">
									</div>
								</a>

									<div class="infocus_home posrel">
										<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $recentarticle['slug'];?>">
											<h6><?php echo $recentarticle['title']; ?></h6>
										</a>
										<p><?php echo $recentarticle['excerpt']; ?></p>
										<div>
											<p class="pull-left"><small title="Published Date"><?php echo $recentarticle['post_date']; ?></small></p>
											<p class="pull-right">
												<span title="Likes"><i class="fa fa-thumbs-up"></i> <?php echo $recentarticle['post_like_count']; ?> </span>

												<span title="Views"><i class="fa fa-eye"></i> <?php echo $recentarticle['no_of_views']; ?> </span>

											</p>
										</div>
										<div class="clearfix"></div>
										<hr class="m-t-0">
									</div>

							</div>
					<?php
						}

					?>
				</div>
			</div>
		</div>


<?php

	} //end if

?>


	<div class="spacer-50 hideinsmall"></div>

	<div class="row ge">
		<div class="col-md-6 col-sm-6 col-xs-6">
			<h3 class="brand"><small><em>EXPLORE BY</em></small> GENRE</h3>
		</div>

	</div>

	<hr class="m-t-0">

	<?php

		$image_size = 'thumbnail';

		$no_of_categories = 4;

		$response_cats = get_some_categories($no_of_categories, $image_size);

		if(count($response_cats) > 0)
		{
	?>

			<div class="row">
				<div class="col-md-12">
					<div class="slider_gen regular-slider">

						<?php
							foreach($response_cats as $response_cat)
							{
						?>
								<div>

									<div class="focus-img">

										<a class="content-bottom" href="<?php echo $response_cat['cat_link'];?>">

											<img src="<?php echo $response_cat['cat_image_url'];?>" alt="Photo of category- <?php echo $response_cat['cat_name']; ?>" />

										</a>

									</div>

								</div>
						<?php
							} //end foreach
						?>
					</div>
				</div>
			</div>

	<?php
		} //end if
	?>

                <div class="spacer-50 hideinsmall"></div>
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="brand"><small><em>SOME AWESOME</em></small> PLAYLISTS</h3>

						<hr class="m-t-0">

						<?php
							$image_size = 'thumbnail';
							$playlists_per_page = 8;

							$playlists = get_recent_playlists($image_size, $playlists_per_page);

							if(count($playlists) > 0)
							{
						?>
								<div class="slider2 regular-slider cap-show-on-hover playlist-grid">

									<?php

										foreach($playlists as $playlist)
										{
									?>
											<div class="slide-cont">

												<div class="p-grid-c">
													<span class="p-img-c">
														<img src="<?php echo $playlist['playlist_image_url']; ?>" alt="">
													</span>
													<div class="p-text">
														<h5 class="p-head"><?php echo $playlist['playlist_name']; ?></h5>
														<p class="p-desc"><?php echo $playlist['playlist_description']; ?></p>

														<div class="p-btm">

															<!--
															<div class="iconexp_sp pull-left">
																<div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
																<div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
																	<i class="fa fa-thumbs-up"></i>
																</div>
															</div>
															-->

															<div class="pull-right p-count">
																<p><?php echo $playlist['playlist_count']; ?> films</p>
															</div>
														</div>
													</div>
													<a href="<?php echo $playlist['playlist_link']; ?>" class="p-g-all-link"> </a>
												</div>


											</div>
									<?php

										} //end foreach
									?>

								</div> <!-- end div slider2 -->

						<?php
							} //end if
						?>

                    </div>
                </div>

            </div>
        </div>

<?php get_footer(); ?>



<script type="text/javascript">

	jQuery(document).ready(function($) {

        //function to resize the staffpick image after the viedo is stopped
        function resizeimgs(tw, obj, i) {
            var ar = obj.width() / obj.height();

            console.log('AR: '+ar+'\n cont: ' + (tw.width() / tw.height()));
            if ( (tw.width() / tw.height()) < ar ) {
                obj
                    .removeClass()
                    .addClass('bgheight');
            } else if ( (tw.width() / tw.height()) > ar ) {
                obj
                    .removeClass()
                    .addClass('bgwidth');
            } else {
            	obj
                    .removeClass()
                    .addClass('bgheight');
            }
            if (jQuery('body').hasClass('no-csstransforms')) {
                obj.css({
                    'top': 0,
                    'left': 0
                });
            }
        }
        jQuery('.p-grid-c .p-img-c img').hide();
        jQuery(window).load(function() {
        	jQuery('.p-grid-c .p-img-c').each(function(i) {

	            resizeimgs(jQuery(this), jQuery(this).find('img'), i);
	            jQuery(this).find('img').show();
	        });
        });

		jQuery('.staffpick-display-section').text("Loading data...");

		jQuery.ajax({

			type : 'GET',
			url : ajaxurl,

			data:{
				action : 'show_default_staffpick_post'
			},
			success:function(response)
			{
				generate_data(response);

				console.log(" Success default staffpick ");

			},
			error:function(response)
			{
				console.log(" Error ");
			}

        });

        //addclass to first one (this week's premiere) by default
		$('.movie-cat ul li').eq(0).addClass('active');

		$('.staffpick-default').click(function(event){

			event.preventDefault();

			$('.movie-cat ul li').removeClass('active');
			//$('.staffpick-default').addClass('active');
			$('.movie-cat ul li').eq(0).addClass('active');


			jQuery('.brand_cat_name').html("This Week's Premiere")


			jQuery.ajax({

				type : 'GET',
				url : ajaxurl,

				data:{
					action : 'show_default_staffpick_post'
				},
				success:function(response)
				{
					generate_data(response);

					console.log(" Success default staffpick ");

				},
				error:function(response)
				{
					console.log(" Error ");
				}

			});


		});

		$('.staffpick-category').click(function(event){

			event.preventDefault();

			$('.movie-cat ul li').removeClass('active')
			$(this).parent().addClass('active');

			var postid = $(event.target).attr('data-post-id');

			/////
			var catname = $(event.target).attr('data-cat-name');

			jQuery('.brand_cat_name').html(catname)
			////

			console.log(postid);

			// make ajax request
			$.ajax({

				type : 'GET',
				url : SITEURL+'/wp-json/videos/'+postid,
				success:function(response)
				{
                    generate_data(response);
					console.log("Success staffpick-category");

				},
				error:function(error)
				{
					console.log("Error");
				}

			});
		});

	function generate_data(response)
	{
		jQuery('.staffpick-display-section').text("")
		jQuery('.staffpick-display-section').html("")

	   html = jQuery('.staffpick-display-section').html()
	   console.log("in generate_data ");
		console.log(response);
		if(response)
		{
			html+=
					'<div class="inside-script">'

								+'<div class="video-section vid_if sp_inside_vid" data-staff-id="'+response.id+'" data-staff-img="'+response.medium_image+'" data-staff-embedurl="'+response.embedurl+'">'

									+'<div class="show-featured-image vid_if posrel">'

										+'<img class="staff-img" src=" '+response.medium_image+' " alt="" class="img-responsive width-full">'

										+'<a href="#" class="play_movie_big" data-id ="'+response.id+'" data-embedurl="'+response.embedurl+'"> </a>'

									+'</div>'
								+'</div>'

								+'<div class="role-settings">'
									+'<div class="row posrel">'
										+'<div class="col-md-10">'
											+'<div class="pull-lef t">'

												+'<h3><a class="content-bottom" href="'+SITEURL+'/'+response.slug+'">'+response.title+'</a><small><em> by <a title="Author" href="'+SITEURL+'/author/'+response.director_nicename+'">'+response.director+'</a></em></small></h3>'

											+'</div>'

									+'</div>'
									+'<div class="col-md-2">'
										+'<div class="">'

											+'<div class="share-button2 soc-ico">'

												+'<div class="ssba"><div style="text-align:right"><a class="ssba_facebook_share" href="http://www.facebook.com/sharer.php?u='+SITEURL+'/'+response.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/facebook.png" title="Facebook" class="ssba" alt="Share on Facebook"></a><a href="http://pinterest.com/pin/create/bookmarklet/?is_video=false&amp;url='+SITEURL+'/'+response.slug+'/&amp;media='+response.featured_image+'&amp;description='+response.title+'" class="ssba_pinterest_share ssba_share_link" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/pinterest.png" title="Pinterest" class="ssba" alt="Pin on Pinterest"></a><a class="ssba_twitter_share" href="http://twitter.com/share?url='+SITEURL+'/'+response.slug+'/&amp;text='+response.title+'+" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/twitter.png" title="Twitter" class="ssba" alt="Tweet about this on Twitter"></a><a class="ssba_google_share" href="https://plus.google.com/share?url='+SITEURL+'/'+response.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/google.png" title="Google+" class="ssba" alt="Share on Google+"></a></div></div>'

											+'</div>'
										+'</div>'
									+'</div>'
								+'</div>'
								+'<hr class="m-t-0 m-b-5">'
								+'<div class="row">'
									+'<div class="col-md-10 col-xs-8">'

										+'<p class="m-t-0 m-b-0 staff_tag"><em>'+response.tagline+'</em></p>'

										+'<h5 class="m-t-0 m-b-0"><small><em>'+response.duration+' Min / '+response.video_region_links.join(', ')+' </em></small></h5>'

										+'<p class="categories m-t-0 m-b-0"><span class="label label-greydark">'+response.video_category_links.join('</span><span class="label label-greydark">')+'</span></p>'

									+'</div>'
									+'<div class="col-md-2 col-xs-4 text-right meta-ico">'
										+'<div class="meta-ico-in" title="Views">'+response.no_of_views+'<i class="fa fa-eye"></i></div>'


										+'<div class="post_likes"><a href="#" class="post-like liked" data-post_id="'+response.id+'" title="Like/Unlike"> <i id="icon-like" class="fa fa-thumbs-up"></i>'+response.post_like_count+'</a> </div>'


									+'</div>'
								+'</div>'
							+'</div>'
					+'</div>'

			;

			jQuery('.staffpick-display-section').html(html);

			//jQuery('.staffpick-display-section').find(".share-button2").html("<?php echo addslashes (do_shortcode("[ssba]")); ?>");

            resizeimgs(jQuery('.show-featured-image'), jQuery('.show-featured-image img'));
            jQuery('.show-featured-image img').show();
		}
		else
		{
			jQuery('.staffpick-display-section').html("");
			html += "<div>No videos found.</div>";
			jQuery('.staffpick-display-section').html(html);
		}

    } // end of generate_data


	jQuery('.play_movie_big').live('click',function(event){

		event.preventDefault();
        sf_height = jQuery(this).parent().height();
		console.log("in play_movie_big click event");

		var video_id = jQuery(this).attr("data-id");
		var embedurl = jQuery(this).attr("data-embedurl");

		jQuery.ajax({

			type : 'POST',
			url : ajaxurl,

			data:{

				video_id: video_id,
				action : 'increase_video_number_of_views'

			},
			success:function(responsedata)
			{
				console.log(responsedata);

			},
			error:function(responsedata)
			{
				console.log(" Error ");
			}

        });

		generate_video(embedurl);

        jQuery('.vid_if ').css('height', sf_height);
        jQuery('.video-section').addClass('ontop');

	});

	function generate_video(embedurl)
	{
		console.log("in generate_video() ");

		jQuery('.video-section').html("")

	    html = jQuery('.video-section').html()

			html+=
                    '<a href="#" class="stopclass" id="stopid"> <i class="fa fa-times"></i> </a>'
					+'<div class="play-video">'

						+'<iframe id="playid" class="vid_if" src="'+embedurl+'" frameborder="0" allowfullscreen></iframe>'

					+'</div>';

			jQuery('.video-section').html(html);

		console.log(html);

    } // end of generate_video

    //onclick of playing video

	jQuery(document).on('click', 'iframe.vid_if', function() {
        jQuery('.video-section').toggleClass('ontop');
    });


	jQuery('.search_nn').live('change',function(e){

        e.preventDefault();

        jQuery('#offset').val(0);

		var title = jQuery(e.target).val();

		data = 'title='+jQuery(e.target).val();

		jQuery.ajax({
                type : 'GET',
                url : SITEURL+'/wp-json/filters',
                data : data,

				success:function(response)
				{

					console.log("inside success ");
					console.log(response);
                    jQuery('#offset').val(0)
                    jQuery('.loader').text("Loading data...")

					//var clear = '<a href="#" id="clear-search-results-btn">Clear Search Results</a>';
					var clear = '<i class="fa fa-times"></i>';

					jQuery('.search_nn-results-message').html('<h5 class="search_ed">Search Results for <span><a href="#" id="clear-search-results-btn" title="Clear Search Results">'+title+clear+'</a></span></h5>');


                    jQuery('.all_posts').html("")
                     myarr = [];
                    jQuery.each(response,function(index,value){

                            console.log(value);

                                if(value.id != "")
                                {
                                    myarr.push(value['id']);

                                }

                    });
                    jQuery('#searchids').val(myarr.join(','));

                    generate_data_search_nn(response);

                    jQuery('.grid-box .grid-image').each(function(i) {
		                resizeimgs(jQuery(this), jQuery(this).find('img'));
		                jQuery(this).find('img').show();
		            });

                },
                error:function(response)
				{
					console.log("inside error ");

                }
        });



    });


	jQuery('.fa-search').live('click',function(e){

        e.preventDefault();

        jQuery('#offset').val(0);

		var title = jQuery(this).prev().val();

		data = 'title='+jQuery(this).prev().val();

		jQuery.ajax({
                type : 'GET',
                url : SITEURL+'/wp-json/filters',
                data : data,

				success:function(response)
				{

					console.log("inside success ");
					console.log(response);
                    jQuery('#offset').val(0)
                    jQuery('.loader').text("Loading data...")

					//var clear = '<a href="#" id="clear-search-results-btn">Clear Search Results</a>';
					var clear = '<i class="fa fa-times"></i>';

					jQuery('.search_nn-results-message').html('<h5 class="search_ed">Search Results for <span><a href="#" id="clear-search-results-btn" title="Clear Search Results">'+title+clear+'</a></span></h5>');


                    jQuery('.all_posts').html("")
                     myarr = [];
                    jQuery.each(response,function(index,value){

                            console.log(value);

                                if(value.id != "")
                                {
                                    myarr.push(value['id']);

                                }

                    });
                    jQuery('#searchids').val(myarr.join(','));

                    generate_data_search_nn(response);
                    jQuery('.grid-box .grid-image').each(function(i) {
		                resizeimgs(jQuery(this), jQuery(this).find('img'));
		                jQuery(this).find('img').show();
		            });

                },
                error:function(response)
				{
					console.log("inside error ");

                }
        });

    });

	jQuery('#clear-search-results-btn').live('click',function(e){
		e.preventDefault();
		location.reload();

	});

	function generate_data_search_nn(response)
	{

		html = jQuery('.all_posts').html()

		if(response.length>0)
		{

			grid = generate_grid_reponse(response);

			jQuery.each(grid,function(index,value){

				jQuery.each(value,function(index,val){
					value[index]['class'] = '';


					if(val['slug'] == "")
					{

						value[index]['class'] = 'hidden';
					}
					if(val['region'].length == 0)
						val['region'] = ['No regions'];

				});

				html+='<div class="row gridlayout">'

					+'<div class="col-sm-6 multi-grid">'
						+' <div class="grid-box grid-full content-align-bottom">'

							+'<a class="content-bottom check-slug" data-slug="'+value[0]['slug']+'" href="'+SITEURL+'/'+value[0]['slug']+'">'

								+'<div class="grid-image">'
									+'<img src="'+value[0]['medium_image']+'">'
								+'</div>'

								+'<div class="grid-text-wrap">'
									+'<div class="grid-title">'+value[0]['title']+'</div>'
									+'<div class="grid-meta '+value[0]['class']+'">'+value[0]['region'].join(',')+'/'+value[0]['duration']+'MIN</div>'
									+'<div class="grid-meta">'+value[0]['categories'].join(', ')+'</div>'
									+'<div class="grid-meta '+value[0]['class']+'">DIR.'+value[0]['director'].toUpperCase()+'</div>'

								+'</div>'

								+'<div class="grid-text-wrap hover-text">'
									+'<div class="grid-title">'+value[0]['title']+'</div>'
									+'<div class="grid-meta">'
										+'<div class="row">'

											+'<div class="col-xs-4">'
												+'<div class="pull-left text-center m-t-10 '+value[0]['class']+'">'

												+'</div>'
												+'<div class="pull-left p-l-10 m-t-10 '+value[0]['class']+'">'
													+'<div>'+value[0]['no_of_views']+'<i class="fa fa-eye"></i></div>'
													+'<div class="'+value[0]['class']+'">'+value[0]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
												+'</div>'
											+'</div>'

											+' <div class="col-xs-8">'
												+'<div class="pull-right text-right m-t-10">'
													+value[0]['excerpt']
												+'</div>'
											+' </div>'
										+'</div>'
									+' </div>'
								+'</div>'
							+'<div class="overlay-vertical"></div>'
					   +' </a>'
					+'</div>'
					+'<div class="grid-box grid-half content-align-bottom">'

							+'<a class="content-bottom check-slug" data-slug="'+value[1]['slug']+'" href="'+SITEURL+'/'+value[1]['slug']+'">'

							+'<div class="grid-image">'
								+'<img src="'+value[1]['small_image']+'">'
							+'</div>'
							+'<div class="grid-text-wrap">'
								+'<div class="grid-title">'+value[1]['title']+'</div>'
								+'<div class="grid-meta '+value[1]['class']+'">'+value[1]['region'].join(',')+'/'+value[1]['duration']+'MIN</div>'
								 +'<div class="grid-meta">'+value[1]['categories'].join(', ')+'</div>'
								+'<div class="grid-meta '+value[1]['class']+'">DIR.'+value[1]['director'].toUpperCase()+'</div>'

						   +' </div>'
							+'<div class="grid-text-wrap hover-text">'
								+'<div class="grid-title">'+value[1]['title']+'</div>'
							   +' <div class="grid-meta">'
									+'<div class="row">'
									   +' <div class="col-xs-4">'
											+'<div class="pull-left text-center m-t-10 '+value[1]['class']+'">'

											+'</div>'
											+'<div class="pull-left p-l-10 m-t-10 '+value[1]['class']+'">'
											   +' <div>'+value[1]['no_of_views']+'<i class="fa fa-eye"></i></div>'
												+'<div class="'+value[1]['class']+'">'+value[1]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
										   +' </div>'
										+'</div>'
									   +' <div class="col-xs-8">'
										  +'  <div class="pull-right text-right m-t-10">'
											 +value[1]['excerpt']
										   +' </div>'
									   +' </div>'
									+'</div>'
								+'</div>'
							+'</div>'
							+'<div class="overlay-vertical"></div>'
						+'</a>'
					+'</div>'
					+'<div class="grid-box grid-half content-align-bottom">'


							+'<a class="content-bottom check-slug" data-slug="'+value[2]['slug']+'" href="'+SITEURL+'/'+value[2]['slug']+'">'

							+'<div class="grid-image">'
							   +' <img src="'+value[2]['small_image']+'">'
						   +' </div>'
							+'<div class="grid-text-wrap">'
							   +' <div class="grid-title">'+value[2]['title']+'</div>'
							   +' <div class="grid-meta '+value[2]['class']+'">'+value[2]['region'].join(',')+'/'+value[2]['duration']+'MIN</div>'
								 +'<div class="grid-meta">'+value[2]['categories'].join(', ')+'</div>'
								+'<div class="grid-meta '+value[2]['class']+'">DIR.'+value[2]['director'].toUpperCase()+'</div>'

							+'</div>'
							+'<div class="grid-text-wrap hover-text">'
								+'<div class="grid-title">'+value[2]['title']+'</div>'
								+'<div class="grid-meta">'
									+'<div class="row">'
										+'<div class="col-xs-4">'
											+'<div class="pull-left text-center m-t-10 '+value[2]['class']+'">'

										   +' </div>'
											+'<div class="pull-left p-l-10 m-t-10 '+value[2]['class']+'">'
											   +' <div>'+value[2]['no_of_views']+'<i class="fa fa-eye"></i></div>'
												+'<div class="'+value[2]['class']+'">'+value[2]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
										   +' </div>'
										+'</div>'
										+'<div class="col-xs-8">'
											+'<div class="pull-right text-right m-t-10">'
											  +value[2]['excerpt']
											+'</div>'
									   +' </div>'
								   +' </div>'
								+'</div>'
						   +' </div>'
						  +'  <div class="overlay-vertical"></div>'
						+'</a>'
					+'</div>'
			   +' </div>'
				+'<div class="col-sm-6 multi-grid">'
				   +' <div class="grid-box grid-half content-align-bottom">'

							+'<a class="content-bottom check-slug" data-slug="'+value[3]['slug']+'" href="'+SITEURL+'/'+value[3]['slug']+'">'

							+'<div class="grid-image">'
							   +' <img src="'+value[3]['small_image']+'">'
							+'</div>'
						   +' <div class="grid-text-wrap">'
							   +' <div class="grid-title">'+value[3]['title']+'</div>'
							   +' <div class="grid-meta '+value[3]['class']+'">'+value[3]['region'].join(',')+'/'+value[3]['duration']+'MIN</div>'
								+'<div class="grid-meta">'+value[3]['categories'].join(', ')+'</div>'
								+'<div class="grid-meta '+value[3]['class']+'">DIR.'+value[3]['director'].toUpperCase()+'</div>'

						   +' </div>'
						   +' <div class="grid-text-wrap hover-text">'
							   +' <div class="grid-title">'+value[3]['title']+'</div>'
								+'<div class="grid-meta">'
								   +' <div class="row">'
									   +' <div class="col-xs-4">'
										   +' <div class="pull-left text-center m-t-10 '+value[3]['class']+'">'

											+'</div>'
											+'<div class="pull-left p-l-10 m-t-10 '+value[3]['class']+'">'
											   +' <div>'+value[3]['no_of_views']+'<i class="fa fa-eye"></i></div>'
											   +' <div class="'+value[3]['class']+'">'+value[3]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
											+'</div>'
									   +' </div>'
										+'<div class="col-xs-8">'
										   +' <div class="pull-right text-right m-t-10">'
											 +value[3]['excerpt']
										   +' </div>'
										+'</div>'
								   +' </div>'
								+'</div>'
						   +' </div>'
						   +' <div class="overlay-vertical"></div>'
					   +' </a>'
				   +' </div>'
				   +' <div class="grid-box grid-half content-align-bottom">'

							+'<a class="content-bottom check-slug" data-slug="'+value[4]['slug']+'" href="'+SITEURL+'/'+value[4]['slug']+'">'


							+'<div class="grid-image">'
								+'<img src="'+value[4]['small_image']+'">'
							+'</div>'
							+'<div class="grid-text-wrap">'
							   +' <div class="grid-title">'+value[4]['title']+'</div>'
							   +' <div class="grid-meta '+value[4]['class']+'">'+value[4]['region'].join(',')+'/'+value[4]['duration']+'MIN</div>'
								+'<div class="grid-meta ">'+value[4]['categories'].join(', ')+'</div>'
								+'<div class="grid-meta '+value[4]['class']+'">DIR.'+value[4]['director'].toUpperCase()+'</div>'
							+'</div>'
						   +' <div class="grid-text-wrap hover-text">'
								+'<div class="grid-title">'+value[4]['title']+'</div>'
								+'<div class="grid-meta">'
									+'<div class="row">'
									   +' <div class="col-xs-4">'
											+'<div class="pull-left text-center m-t-10 '+value[4]['class']+'">'

											+'</div>'
											+'<div class="pull-left p-l-10 m-t-10 '+value[4]['class']+'">'
											   +' <div>'+value[4]['no_of_views']+'<i class="fa fa-eye"></i></div>'
											   +' <div class="'+value[4]['class']+'">'+value[4]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
										   +' </div>'
									   +' </div>'
									   +' <div class="col-xs-8">'
											+'<div class="pull-right text-right m-t-10">'
											  +value[4]['excerpt']
											+'</div>'
										+'</div>'
								   +' </div>'
								+'</div>'
							+'</div>'
							+'<div class="overlay-vertical"></div>'
						+'</a>'
					+'</div>'
					+'<div class="grid-box grid-full content-align-bottom">'

							+'<a class="content-bottom check-slug" data-slug="'+value[5]['slug']+'" href="'+SITEURL+'/'+value[5]['slug']+'">'

							+'<div class="grid-image">'
								+'<img src="'+value[5]['medium_image']+'">'
							+'</div>'
							+'<div class="grid-text-wrap">'
							   +' <div class="grid-title">'+value[5]['title']+'</div>'
							   +' <div class="grid-meta '+value[5]['class']+'">'+value[5]['region'].join(',')+'/'+value[5]['duration']+'MIN</div>'
								+'<div class="grid-meta">'+value[5]['categories'].join(', ')+'</div>'
								+'<div class="grid-meta '+value[5]['class']+'">DIR.'+value[5]['director'].toUpperCase()+'</div>'
						   +' </div>'
						   +' <div class="grid-text-wrap hover-text">'
								+'<div class="grid-title">'+value[5]['title']+'</div>'
								+'<div class="grid-meta">'
								   +' <div class="row">'
									   +' <div class="col-xs-4">'
										   +' <div class="pull-left text-center m-t-10 '+value[5]['class']+'">'

											+'</div>'
										   +' <div class="pull-left p-l-10 m-t-10 '+value[5]['class']+'">'
											   +'<div>'+value[5]['no_of_views']+'<i class="fa fa-eye"></i></div>'
												+'<div class="'+value[5]['class']+'">'+value[5]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
											+'</div>'
										+'</div>'
									   +' <div class="col-xs-8">'
										   +' <div class="pull-right text-right m-t-10">'
											  +value[5]['excerpt']
											+'</div>'
										+'</div>'
								   +' </div>'
								+'</div>'
							+'</div>'
							+'<div class="overlay-vertical"></div>'
						+'</a>'
					+'</div> '
				+'</div></div> ';

			});

			jQuery('.all_posts').html(html);

		} //end if

		else
		{
			jQuery('.all_posts').html("");
			html += "<div>No videos found.</div>";
			jQuery('.all_posts').html(html);
		}


	} //end generate_data_search_nn

		function generate_grid_reponse(response)
		{
			var grid ={};
			var multiple = [6,6];
			var k = 0 ;
			grid[k] = {};
			var j = 0;
			var image  = SITEURL+'/wp-content/themes/short-film/assets/img/placeholder.jpg';
			for (var i= 0; i < multiple[k]; i++) {

				if(response[j] == undefined)
				{
					grid[k][i] = {
						'id'            : "",
						'slug'			: "",
						'title'			: "",
						'type'			: "",
						'tagline'		: "",
						'videourl'  	: "",
						'excerpt'		: "",
						'director'		: "",
						'next_post'		: "",
						'prev_post'		: "",
						'comments'		: "",
						'categories'	: [],
						'duration'		: 0,
						'region'		: [],
						'tags'			: "",
						'featured_image':image,
						'small_image':image,
						'medium_image':image,
						'large_image':image,
						'user_like_count'	: "",
						'post_like_count' : 0,
						'no_of_views'    : 0

					};

				}
				else
					grid[k][i] = response[j];

				if(i == 5 && response.length > multiple[k])
				{

					k = k + 1;
					i = -1 ;
					if(multiple.hasOwnProperty(k))
						grid[k] = {};
				}
				j = j + 1;

			}

			console.log(grid);
			return grid;
		}


		jQuery('.stopclass').live('click',function(event){

			event.preventDefault();

			var url = jQuery('#playid').attr('src');

			jQuery('#playid').attr('src', '');



			generate_featured_image();


		});


		function generate_featured_image()
		{

				var staff_featured_image = jQuery('.video-section').attr('data-staff-img');

				var staff_video_id = jQuery('.video-section').attr('data-staff-id');

				var staff_embedurl = jQuery('.video-section').attr('data-staff-embedurl');


			 jQuery('.video-section').html("")

		   html = "";

				html+=
						'<div class="show-featured-image vid_if" style=" position: relative">'

							+'<img src="'+staff_featured_image+'" alt="" class="img-responsive width-full">'

							+'<a href="#" class="play_movie_big" data-id ="'+staff_video_id+'" data-embedurl="'+staff_embedurl+'"> </a>'


						+'</div>'

					;

				jQuery('.video-section').html(html);

                resizeimgs(jQuery('.show-featured-image'), jQuery('.show-featured-image img'));
                jQuery('.show-featured-image img').show();

			console.log(html);

		} // end of generate_featured_image


		jQuery('.check-slug').live('click',function(event){


			var slug = jQuery(event.currentTarget).attr('data-slug');

			if(slug == "")
			{
				event.preventDefault();

				jQuery(event.currentTarget).attr('href', '#');


			}

		});


	});  // end of document.ready function

</script>
























