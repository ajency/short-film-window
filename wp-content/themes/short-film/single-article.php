
<?php
get_header(); ?>


	<?php if (have_posts()) : while (have_posts()) : the_post();

	global $post;

	$response = Article_post\Article::get_article($post->ID);


	?>



	<div id="movie-header" class="movie-header article_single">
        <div class="article_s_img">
             <img src="<?php echo $response['large_image'];?>" class="img-responsive width-full">
        </div>


		<div class="container movie-info">
			<div class="row">
				<div class="col-md-12">
					<h3 class="article_title">
					    <?php echo ucfirst($response['title']); ?>
					    <small><em>by <a href="<?php echo get_author_posts_url($response['directorid']); ?>"><?php echo ucfirst($response['director']);?></a></em></small>
				    </h3>
				    <p class="pull-right goup"><i class="fa fa-clock-o"></i><?php echo $response['post_date']; ?></p>
				</div>
            </div>
            <div class="row">
				<div class="col-md-5">
					<div class="">

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

					<?php// echo do_shortcode("[ssba]"); ?>

					<?php echo do_shortcode('[ssba url="' . get_permalink($response['id']) . '" title="' . get_the_title($response['id']) . '"]'); ?>

				</div>
		    </div>
			<div class="img-content">
				<?php


					echo wpautop( $response['content'] );
				?>
			</div>

		</div>

	    <div class="spacer-40"></div>

		<div class="recent-movies">

			<div class="row">
				<div class="col-md-12">
					<h3 class="brand upp">SOME MOVIES WE PICKED FOR YOU</h3>
				</div>
            </div>

			<hr class="m-t-0">

			<div class="row sim_mov">


					<?php

						$recentvideos = get_recent_videos();

						foreach ($recentvideos as $recentvideo)
						{


					?>
							<div class="col-sm-4">
								<div class="grid-box grid-full content-align-bottom">

									<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $recentvideo['slug'];?>">

										<div class="grid-image" style="background-image: url(<?php echo $recentvideo['small_image'];?>);">
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


										<div class="overlay-vertical"></div>
									</a>
								</div>

							</div>

					<?php

						} //end foreach
					?>


			</div>

		</div>

	    <div class="spacer-40"></div>



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


	            <div class="spacer-50 hideinsmall"></div>

	            <div class="container">
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
													<span class="p-img-c" style="background-image: url(<?php echo $playlist['playlist_image_url']; ?>);">
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

<?php get_footer(); ?>


<script type="text/javascript">

window.onload = function() {

	jQuery('#noofviews').val();


}

</script>
