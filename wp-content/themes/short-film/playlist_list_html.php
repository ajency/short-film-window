<?php
/*
Template Name: List of Playlist HTML
*/
?>
<?php get_header(); ?>

	<!--Content-->
    <div class="container header-space playlist_list">
        <div class="content-wrapper">
			<div class="row posrel">
				<div class="col-md-12 posata"> <!-- <div class="col-md-8"> -->

					<div class="row">

						<div class="col-md-8">
							<h2 class="auth_name">
								PLAYLISTS
							</h2>
						</div>
						<div class="col-md-4 m-t-20">
							<div class="form-group row form-horizontal">
								<label for="" class="col-md-3 control-label"><em>Sort by:</em> </label>
		                        <div class="col-md-9">
		                            <select class="" name="sort" id="sort">
		                                <option value="1">Freshness</option>
		                                <option value="2">Popularity</option>
		                                <option value="3">Length</option>
		                            </select>
		                        </div>
	                        </div>
						</div>

					</div>

					<hr class="m-t-0">

				</div>
			</div> <!-- end row -->
			<div class="spacer-40"></div>

			<!-- Playlist Grid -->
			<div class="playlist-grid">
				<div class="row pushin">
					<div class="col-md-4 col-sm-6">

						<div class="p-grid-c">
							<span class="p-img-c">
								<img src="http://lorempixel.com/450/450" alt="">
							</span>

							<div class="p-text">
								<h4 class="p-head">Children's Movies</h4>
								<p class="p-desc">Donec pharetra turpis auctor sagittis iaculis. Praesent et convallis tellus, ut volutpat eros.</p>

								<div class="p-btm">
									<div class="iconexp_sp pull-left">
										<div>321<?php //echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
										<div class="<?php echo $value[0]['class'] ;?>">184<?php //echo $value[0]['post_like_count'];?>
											<i class="fa fa-thumbs-up"></i>
										</div>
									</div>

									<div class="pull-right p-count">
										<p>16 films</p>
									</div>
								</div>
							</div>

							<a href="#" class="p-g-all-link">&nbsp;</a>
						</div>

					</div>
					<div class="col-md-4 col-sm-6">

						<div class="p-grid-c">
							<span class="p-img-c">
								<img src="http://lorempixel.com/450/450" alt="">
							</span>

							<div class="p-text">
								<h4 class="p-head">Children's Movies</h4>
								<p class="p-desc">Donec pharetra turpis auctor sagittis iaculis. Praesent et convallis tellus, ut volutpat eros.</p>

								<div class="p-btm">
									<div class="iconexp_sp pull-left">
										<div>321<?php //echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
										<div class="<?php echo $value[0]['class'] ;?>">184<?php //echo $value[0]['post_like_count'];?>
											<i class="fa fa-thumbs-up"></i>
										</div>
									</div>

									<div class="pull-right p-count">
										<p>16 films</p>
									</div>
								</div>
							</div>

							<a href="#" class="p-g-all-link">&nbsp;</a>
						</div>

					</div>
					<div class="col-md-4 col-sm-6">

						<div class="p-grid-c">
							<span class="p-img-c">
								<img src="http://lorempixel.com/450/450" alt="">
							</span>

							<div class="p-text">
								<h4 class="p-head">Children's Movies</h4>
								<p class="p-desc">Donec pharetra turpis auctor sagittis iaculis. Praesent et convallis tellus, ut volutpat eros.</p>

								<div class="p-btm">
									<div class="iconexp_sp pull-left">
										<div>321<?php //echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
										<div class="<?php echo $value[0]['class'] ;?>">184<?php //echo $value[0]['post_like_count'];?>
											<i class="fa fa-thumbs-up"></i>
										</div>
									</div>

									<div class="pull-right p-count">
										<p>16 films</p>
									</div>
								</div>
							</div>

							<a href="#" class="p-g-all-link">&nbsp;</a>
						</div>

					</div>
				</div>
			</div>

			<!-- Load More btn -->
            <div class="row pushin">
            	<div class="col-md-12">
            		<div class="text-center">
						<input type="hidden" name="offset" id="offset" value="0" />
						<a href="#" class="btn btn-primary load_more">Load More Videos</a>
					</div>
            	</div>
            </div>

			<div class="recent-movies pushin">

				<div class="row">
					<div class="col-md-12">
						<h4>New and Noteworthy</h4>
					</div>
	            </div>

				<hr class="m-t-0">

				<div class="row sim_mov">

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

				</div>

			</div> <!--movies end-->

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

											// +'<h6 class="m-t-0 m-b-0">Dir: <a target="_blank" href="'+SITEURL+'/author/'+value.director_nicename+'" title="Author">' + value.director + '</a></h6>'

											 +'<h6 class="m-t-0 m-b-0">Dir: <a target="_blank" href="'+SITEURL+'/director/'+value.director_nicename+'" title="Author">' + value.director + '</a></h6>'



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

























