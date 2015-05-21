<?php get_header(); ?>


<?php

	$queried_object = get_queried_object();

	//print_r($queried_object);

	$taxonomy = $queried_object->taxonomy;

	$term_name = $queried_object->name;

	$playlist_id = $queried_object->term_id;

	// echo " *** taxonomy= ".$queried_object->taxonomy;
	// echo " *** term_name= ".$queried_object->name;
	// echo " *** playlist_id= ".$queried_object->term_id;


	 // $playlist_info = get_playlist_info($playlist_id, $taxonomy);
	 $playlist_info = get_playlist_info($playlist_id, $taxonomy, 'thumbnail');

	 $total_runtime = get_playlist_total_runtime($playlist_id, $taxonomy);



	 // print_r($playlist_info);
	 // exit;

?>


        <!--Content-->
        <div class="container header-space playlist">
            <div class="content-wrapper">
			<!--
                <div class="row">
                    <div class="col-md-6">
                        <h2>EXPLORE</h2>
                    </div>
					<div class="col-md-3 col-md-offset-3 col-sm-12">
						<div class="m-t-20 search_menu">


                                <div class="form-group">

								  <input type="text" class="form-control search" value="" placeholder="Search"/>

                                    <i class="fa fa-search"></i>
                                </div>


                        </div>
					</div>
                </div>

                <hr class="m-t-0">
			-->
                <div class="row posrel">

					<!--this row contains playlist info-->
					<div class="row">

							<div class="col-md-4">

								<?php
									$playlist_name = $playlist_info['playlist_name'];
									$playlist_image_url = $playlist_info['playlist_image_url'];
								?>
								<img src="<?php echo $playlist_image_url;?>" alt="Photo of <?php echo $playlist_name;?>" />

							</div>


							<div class="col-md-8 posata">
								<div class="row">

									<div class="col-md-12">
										<h4 class="m-t-0 auth_name">
											<?php echo $playlist_info['playlist_name']; ?>
										</h4>
									</div>

								</div>

								<hr class="m-t-0 m-b-5">

								<div class="row">
									<div class="col-xs-8 cont posata">

										<div>
											<p><?php echo $playlist_info['playlist_description'];?></p>
										</div>

										<div class="auth_btm">
											<?php
													if($playlist_info['no_of_videos_in_playlist']!=0)
													{
											?>
													<p>No of Films:	<span class="co"><?php echo $playlist_info['no_of_videos_in_playlist'];?></span> <p>
											<?php
													}

											?>
											<p>Total Runtime: <span class="co"><?php echo $total_runtime;?></span> </p>
										</div>
									</div>

									<!--<div class="col-xs-4 text-right list-info-btns">-->
									<div class="col-xs-4 text-right list-info-btns posata">

										<div class="soc-ico nh">

											   <?php echo do_shortcode('[ssba url="' . $playlist_info['playlist_link'] . '" title="' . $playlist_info['playlist_name'] . '"]'); ?>

											   <?php// echo do_shortcode('[ssba]'); ?>

										</div>


										<div class="lico_c">
											<!--<div class="lico small"><?php// echo $value['no_of_views'];?> <i class="fa fa-eye"></i></div> -->

											<div class="lico like-action">

												<!-- <?php// echo $author_info['post_user_like'] ;?> <i class="fa fa-thumbs-up"></i>  -->

											</div>

										</div>

										<div class="row opts disp_btm">
											<div class="col-md-12">
												<a href="#" id="gridoption" class="option" title="Grid"><i class="fa fa-th-large fa-3x"></i></a>

												<a href="#" id="listoption"  class="option"title="List"><i class="fa fa-th-list fa-3x"></i></a>

												<a href="#" id="couchoption" class="option" title="Couch"><i class="fa fa-list-alt fa-3x"></i></a>

										   </div>
										</div>

									</div> <!-- end list info btns -->

									<!--</div>-->


								</div> <!-- row end -->
							</div> <!-- col-md-8 posata end -->

							<div class="col-md-12">
								<hr class="border-btm">
							</div>


					</div> <!-- end row -->



				<!--
				   <div class="col-md-5">
                		<h5 class="un">FILTER BY</h5>



						   <div class="form-group">
                                <label for="" class="col-md-3 control-label"><em>Genre:</em> </label>
                                <div class="col-md-9">
                                	<select name="genre" id="genre">
                                        <option value="">All</option>
                                        <?php
										  // $categories = get_categories();
										  // foreach ($categories as $category) {
										  	// $option = '<option value="'.$category->term_id.'">';
											// $option .= $category->cat_name;
											// $option .= '</option>';
											// echo $option;
										  // }
										 ?>
                                    </select>
                                </div>
                            </div>




						   <div class="form-group">

								<?php
									// $all_language_list = get_list_of_all_languages();
									//print_r($all_language_list);

								?>

								<label for="" class="col-md-3 control-label"><em>Language:</em> </label>
                                <div class="col-md-9">

									<select name="language" id="language">

										<option value="">All</option>

										<?php
											// foreach ($all_language_list as $lang_value)
											// {

												 // echo '<option value="'.$lang_value->term_id.'">'.$lang_value->name.'</option>';

										    // }
										?>

								   </select>

							   </div>
                            </div>



					</div>
                    <div class="col-md-4 col-md-offset-3 padd-68">

                            <label for="" class="col-md-3 control-label"><em>Sort by:</em> </label>
                            <div class="col-md-9">
                                <select class="" name="sort" id="sort">
                                    <option value="1">Freshness</option>
                                    <option value="2">Popularity</option>
                                    <option value="3">Length</option>
                                </select>
                            </div>

                    </div>
				-->



                </div>

                <div class="spacer-40"></div><div class="loader"></div>

				<div class="search-results-message">
				</div>

                <div class="all_posts">

			<?php
					/////////////


				if($taxonomy == "playlist")
				{
					$args = array(
						'orderby'           => 'post_date',
						'order'             => 'DESC',
						'genre'				=> '',
						'playlist'		    => $queried_object->term_id,
						'taxonomy'			=> $queried_object->taxonomy,
						'region'			=> '',
						'language'			=> '',
						'posts_per_page'   	=> 12,
						'offset'           	=> 0

					);
				}

				//////////////

				$response = Film\Video::get_many($args);

				if(count($response) > 0)
				{
					$gridreposnse = generate_grid_response($response);

					foreach ($gridreposnse as $key => $value)
					{
						foreach ($value as $k => $val)
						{
							$value[$k]['class'] = '';


							if($val['slug'] == "")
							{

								$value[$k]['class'] = 'hidden';
							}

							if(count($val['region']) == 0)
							{

								$value[$k]['region'] = array(0 => 'No regions');
							}

							if(count($val['categories']) == 0)
							{

								$value[$k]['categories'] = array(0 => 'No categories');
							}

						}

				?>

					<div class="row gridlayout">

				 		<div class="col-sm-6 multi-grid">
                            <div class="grid-box grid-full content-align-bottom">
                                <a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value[0]['slug'];?>">
                                    <div class="grid-image">
                                        <img src="<?php echo $value[0]['medium_image'] ;?>">
                                    </div>
                                    <div class="grid-text-wrap">
                                        <div class="grid-title"><?php echo $value[0]['title'];?></div>
                                        <div class="grid-meta <?php echo $value[0]['class'] ;?>"><?php echo implode(',',$value[0]['region']);?>/<?php echo $value[0]['duration'];?> MIN</div>
                                        <div class="grid-meta"><?php echo implode(', ',$value[0]['categories']);?></div>
                                        <div class="grid-meta <?php echo $value[0]['class'] ;?>">DIR.<?php echo  ucfirst($value[0]['director']);?></div>


                                    </div>
                                    <div class="grid-text-wrap hover-text">
                                        <div class="grid-title"><?php echo $value[0]['title'];?></div>
                                        <div class="grid-meta">
                                            <div class="row">
                                                <div class="col-xs-4">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[0]['class'] ;?>">
                                                       <!-- <i class="fa fa-binoculars fa-2x"></i><br>Watchlist -->
                                                    </div>
                                                    <div class="iconexp_sp pull-left p-l-10 m-t-10 <?php echo $value[0]['class'] ;?>">
                                                        <div><?php echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[0]['class'] ;?>"><?php echo $value[0]['post_like_count'];?>
                                                            <i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-8">
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
                                <a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value[1]['slug'];?>">
                                    <div class="grid-image">
                                        <img src="<?php echo $value[1]['small_image'] ;?>">
                                    </div>
                                    <div class="grid-text-wrap">
                                        <div class="grid-title"><?php echo $value[1]['title'];?></div>
                                        <div class="grid-meta <?php echo $value[1]['class'] ;?>"><?php echo implode(',',$value[1]['region']);?>/<?php echo $value[1]['duration'];?> MIN</div>
                                        <div class="grid-meta"><?php echo implode(', ',$value[1]['categories']);?></div>
                                        <div class="grid-meta <?php echo $value[1]['class'] ;?>">DIR.<?php echo  ucfirst($value[1]['director']);?></div>

                                    </div>
                                    <div class="grid-text-wrap hover-text">
                                        <div class="grid-title"><?php echo $value[1]['title'];?></div>
                                        <div class="grid-meta">
                                            <div class="row">
                                                <div class="col-xs-4">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[1]['class'] ;?>">
                                                       <!-- <i class="fa fa-binoculars fa-2x"></i><br>Watchlist -->
                                                    </div>

                                                    <div class="iconexp_sp pull-left p-l-10 m-t-10 <?php echo $value[1]['class'] ;?>">
                                                        <div><?php echo $value[1]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[1]['class'] ;?>"><?php echo $value[1]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-8">
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
                                <a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value[2]['slug'];?>">
                                    <div class="grid-image">
                                        <img src="<?php echo $value[2]['small_image'] ;?>">
                                    </div>
                                    <div class="grid-text-wrap">
                                        <div class="grid-title"><?php echo $value[2]['title'];?></div>
                                        <div class="grid-meta <?php echo $value[2]['class'] ;?>"><?php echo implode(',',$value[2]['region']);?>/<?php echo $value[2]['duration'];?> MIN</div>
                                        <div class="grid-meta"><?php echo implode(', ',$value[2]['categories']);?></div>
                                        <div class="grid-meta <?php echo $value[2]['class'] ;?>">DIR.<?php echo  ucfirst($value[2]['director']);?></div>
                                    </div>
                                    <div class="grid-text-wrap hover-text">
                                        <div class="grid-title"><?php echo $value[2]['title'];?></div>
                                        <div class="grid-meta">
                                            <div class="row">
                                                <div class="col-xs-4">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[2]['class'] ;?>">
                                                       <!-- <i class="fa fa-binoculars fa-2x"></i><br>Watchlist -->
                                                    </div>
                                                    <div class="iconexp_sp pull-left p-l-10 m-t-10 <?php echo $value[2]['class'] ;?>">
                                                        <div><?php echo $value[2]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[2]['class'] ;?>"><?php echo $value[2]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-8">
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
                                <a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value[3]['slug'];?>">
                                    <div class="grid-image">
                                        <img src="<?php echo $value[3]['small_image'] ;?>">
                                    </div>
                                    <div class="grid-text-wrap">
                                        <div class="grid-title"><?php echo $value[3]['title'];?></div>
                                        <div class="grid-meta <?php echo $value[3]['class'] ;?>"><?php echo implode(',',$value[3]['region']);?>/<?php echo $value[3]['duration'];?> MIN</div>
                                        <div class="grid-meta"><?php echo implode(', ',$value[3]['categories']);?></div>
                                        <div class="grid-meta <?php echo $value[3]['class'] ;?>">DIR.<?php echo  ucfirst($value[3]['director']);?></div>
                                    </div>
                                    <div class="grid-text-wrap hover-text">
                                        <div class="grid-title"><?php echo $value[3]['title'];?></div>
                                        <div class="grid-meta">
                                            <div class="row">
                                                <div class="col-xs-4">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[3]['class'] ;?>">
                                                       <!-- <i class="fa fa-binoculars fa-2x"></i><br>Watchlist  -->
                                                    </div>
                                                    <div class="iconexp_sp pull-left p-l-10 m-t-10 <?php echo $value[3]['class'] ;?>">
                                                        <div><?php echo $value[3]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[3]['class'] ;?>"><?php echo $value[3]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-8">
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
                                <a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value[4]['slug'];?>">
                                    <div class="grid-image">
                                        <img src="<?php echo $value[4]['small_image'] ;?>">
                                    </div>
                                    <div class="grid-text-wrap">
                                         <div class="grid-title"><?php echo $value[4]['title'];?></div>
                                        <div class="grid-meta <?php echo $value[4]['class'] ;?>"><?php echo implode(',',$value[4]['region']);?>/<?php echo $value[4]['duration'];?> MIN</div>
                                        <div class="grid-meta"><?php echo implode(', ',$value[4]['categories']);?></div>
                                        <div class="grid-meta <?php echo $value[4]['class'] ;?>">DIR.<?php echo  ucfirst($value[4]['director']);?></div>
                                    </div>
                                    <div class="grid-text-wrap hover-text">
                                        <div class="grid-title"><?php echo $value[4]['title'];?></div>
                                        <div class="grid-meta">
                                            <div class="row">
                                                <div class="col-xs-4">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[4]['class'] ;?>">
                                                       <!-- <i class="fa fa-binoculars fa-2x"></i><br>Watchlist  -->
                                                    </div>
                                                    <div class="iconexp_sp pull-left p-l-10 m-t-10 <?php echo $value[4]['class'] ;?>">
                                                        <div><?php echo $value[4]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[4]['class'] ;?>"><?php echo $value[4]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-8">
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
                                <a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value[5]['slug'];?>">
                                    <div class="grid-image">
                                        <img src="<?php echo $value[5]['medium_image'] ;?>">
                                    </div>
                                    <div class="grid-text-wrap">
                                         <div class="grid-title"><?php echo $value[5]['title'];?></div>
                                        <div class="grid-meta <?php echo $value[5]['class'] ;?>"><?php echo implode(',',$value[5]['region']);?>/<?php echo $value[5]['duration'];?> MIN</div>
                                        <div class="grid-meta"><?php echo implode(', ',$value[5]['categories']);?></div>
                                        <div class="grid-meta <?php echo $value[5]['class'] ;?>">DIR.<?php echo  ucfirst($value[5]['director']);?></div>
                                    </div>
                                    <div class="grid-text-wrap hover-text">
                                        <div class="grid-title"><?php echo $value[5]['title'];?></div>
                                        <div class="grid-meta">
                                            <div class="row">
                                                <div class="col-xs-4">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[5]['class'] ;?>">
                                                       <!-- <i class="fa fa-binoculars fa-2x"></i><br>Watchlist -->
                                                    </div>
                                                    <div class="iconexp_sp pull-left p-l-10 m-t-10 <?php echo $value[5]['class'] ;?>">
                                                        <div><?php echo $value[5]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[5]['class'] ;?>"><?php echo $value[5]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-8">
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
      }

                	foreach ($response as $key => $value) {
							if(count($value['region']) == 0)
								$value['region'] = array(0 => 'No regions added');

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
                                <h6 class="m-t-30 m-b-0"><?php echo implode(', ',$value['video_region_links']);?>/<?php echo $value['duration'];?> MIN</h6>


								<h6 class="m-t-0 m-b-0">Dir: <span class="author"><a href="<?php echo get_author_posts_url($value['directorid']); ?>" title="Author"><?php echo ucfirst($value['director']);?> </a> </span></h6>

							   <p class="categories">
									<span class="label label-greydark">

										<?php

											echo implode('</span><span class="label label-greydark">',$value['video_category_links']);
										?>

									</span>
                                </p>

                            </div>
                            <?php// echo $value['permalink']; ?>
                            <div class="col-xs-4 text-right list-info-btns">
                                <div class="soc-ico nh">
                                   <?php// echo do_shortcode("[ssba]"); ?>

								   <?php echo do_shortcode('[ssba url="' . get_permalink($value['id']) . '" title="' . get_the_title($value['id']) . '"]'); ?>

                                </div>

                                <div class="lico_c">
                                    <div title="Views" class="lico small"><?php echo $value['no_of_views'];?> <i class="fa fa-eye"></i></div>
                                    <div class="lico like-action">

										<span class="post_likes"> <?php echo getPostLikeLink($value['id']); ?> </span>

                                        <!-- <?php // echo $value['post_like_count'] ;?> <i class="fa fa-thumbs-up"></i> -->

                                    </div>
									<!--
                                    <div class="lico watchlist-add">
                                        <a href="#"><i class="fa fa-binoculars"></i> Add to Watchlist </a>
                                    </div>
									-->
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

	            <div class="couchlayout">

					<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
						<img src="<?php echo $value['large_image'];?>" alt="" class="img-responsive width-full">
					</a>

                    <div class="row">
                        <div class="col-sm-10">
                            <h3 class="pull-l eft">
                                <a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
                                	<?php echo $value['title'];?>
                                </a>

								<small><em>by <span class="author"><a href="<?php echo get_author_posts_url($value['directorid']); ?>" title="Author"><?php echo ucfirst($value['director']);?> </a> </span></em></small>

                            </h3>
                        </div>
                        <div class="col-sm-2">
                            <div class="soc-ico nh pull-right" style="margin-top: 35px;">

								<?php echo do_shortcode('[ssba url="' . get_permalink($value['id']) . '" title="' . get_the_title($value['id']) . '"]'); ?>

                               <?php// echo do_shortcode("[ssba]"); ?>
                            </div>


                        </div>
                    </div>
                    <hr class="m-t-0 m-b-5 vern">
                    <div class="row main-ex">
                        <div class="col-xs-8 cont">
                            <p><em><?php echo $value['excerpt'];?></em></p>

                            <h6 class="m-t-30 m-b-0"><em><?php echo implode(', ',$value['video_region_links']);?> / <?php echo $value['duration'];?> MIN</em></h6>
                            <p class="categories">
                                <span class="label label-greydark">

								   <?php

								    echo implode('</span><span class="label label-greydark">',$value['video_category_links']);
								   ?>

								</span>
                            </p>
                        </div>

                        <div class="col-xs-4 text-right">
                            <div class="">

                                <div class="lico_c social-strip">
                                    <div title="Views" class="lico small"><?php echo $value['no_of_views'];?><i class="fa fa-eye"></i></div>

                                    <div class="lico like-action">

										<span class="post_likes"> <?php echo getPostLikeLink($value['id']); ?> </span>

                                        <!-- <?php// echo $value['post_like_count'] ;?> <i class="fa fa-thumbs-up"></i> -->

                                    </div>
									<!--
                                    <div class="lico watchlist-add">
                                        <a href="#"><i class="fa fa-binoculars"></i> Add to Watchlist </a>
                                    </div>
									-->
                                </div>
                            </div>
                        </div>

                    </div>

<!--                    <hr class="m-t-20 m-b-20">-->

<!--                    <div class="spacer-20"></div>-->
                    <p class="cou_exc"><em><?php echo $value['excerpt'];?></em></p>
	            </div>



        <!-- /container -->



						 <!-- end article -->

					<?php }

					}?></div>

 					<div class="spacer-40"></div>
 					<input type="hidden" name="tracker" id="tracker" value="" / >
            </div>
            <div class="content-wrapper">
                <div class="text-center">
                    <input type="hidden" name="offset" id="offset" value="0" />
                    <input type="hidden" name="searchids" id="searchids" value="0" />

					<input type="hidden" name="taxonomy" id="taxonomy" value="<?php echo $queried_object->taxonomy; ?>" />

					<input type="hidden" name="playlist" id="playlist" value="<?php echo $queried_object->term_id; ?>" />

                    <a href="#" class="btn btn-primary load_more">Load More...</a>

			   </div>


            </div>



		<div class="recent-movies">

			<div class="row">
				<div class="col-md-12">
					<h4>NEW AND NOTEWORTHY</h4>
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

									<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $recentvideo['slug'];?>">

										<div class="grid-image">
											<img src="<?php echo $recentvideo['small_image'];?>">
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
												<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $recentvideo['slug'];?>">
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



			 <!-- end #content -->

			<?php get_footer(); ?>

<script type="text/javascript">

window.onload = function() {
	jQuery('#tracker').val('gridoption');

	showLayout();

	//jQuery('#genre').val(<?php echo $queried_object->term_id;?>);

	jQuery('#gridoption').children().addClass('text-primary');
    count = parseInt(jQuery('#offset').val()) + parseInt("<?php echo count($response) ;?>");
    jQuery('#offset').val(count);




	jQuery('.load_more').live('click',function(e){


		jQuery('.loader').text("Loading data...")

		e.preventDefault();
		get_all_posts();


	});

	jQuery('.option').live('click',function(e){
		e.preventDefault();
		jQuery('#gridoption').children().removeClass('text-primary');
		// jQuery('#gridoption').children().nextAll().removeClass('text-primary');
		jQuery('#tracker').val(e.currentTarget.id);
		showLayout();


	});


	//jQuery('.search').change(function(e) {
/*
    jQuery('.search').live('change',function(e)
	{

   	    e.preventDefault();

		console.log("in search change event..");

        jQuery('#genre').val("");
        jQuery('#language').val("");
        jQuery('#offset').val(0);

		var title = jQuery(e.target).val();

		data = 'title='+jQuery(e.target).val();

		jQuery('.load_more').hide();

		jQuery.ajax({
                type : 'GET',
                url : SITEURL+'/wp-json/filters',
                data : data,
                success:function(response)
				{
                    jQuery('#offset').val(0)
                    jQuery('.loader').text("Loading data...")

					jQuery('.search-results-message').html("Search Results for "+title);

                    jQuery('.all_posts').html("")
                     myarr = [];
                    jQuery.each(response,function(index,value)
					{

                            console.log(value);

                                if(value.id != "")
                                {
                                    myarr.push(value['id']);

                                }

                    });
                    jQuery('#searchids').val(myarr.join(','));
                    generate_data(response);
                },
                error:function(response){

                }
        });



    });
*/
    function resizeimgs(tw, obj, i) {
        var ar = obj.width() / obj.height();
        console.log('Number: ' + i + '\n-------------------------');
        console.log('aspectratio ' + ar);
        console.log('cont-resize ' + tw.width() / tw.height());
        console.log('END Number: ' + i + '\n-------------------------');

        if ( (tw.width() / tw.height()) < ar ) {
            obj
                .removeClass()
                .addClass('bgheight');
        } else {
            obj
                .removeClass()
                .addClass('bgwidth');
        }
    }

	function showLayout(){

		if(jQuery('#tracker').val() == 'gridoption'){

			jQuery('.listlayout').hide();
			jQuery('.couchlayout').hide();
			jQuery('.gridlayout').show();

		}
		else if(jQuery('#tracker').val() == 'listoption'){
			jQuery('.gridlayout').hide();
			jQuery('.couchlayout').hide();
			jQuery('.listlayout').show();
		}
		else if(jQuery('#tracker').val() == 'couchoption'){
			jQuery('.gridlayout').hide();
			jQuery('.listlayout').hide();
			jQuery('.couchlayout').show();
		}
        jQuery('.grid-box .grid-image').each(function(i) {
            resizeimgs(jQuery(this), jQuery(this).find('img'), i);
        });
	}

	function get_all_posts()
	{
		/////////////////

		taxonomy = jQuery('#taxonomy').val();

		playlist = jQuery('#playlist').val();

		posts_per_page = 12;
		offset = jQuery('#offset').val();

		//data = 'genre='+genre+'&language='+language+'&posts_per_page='+posts_per_page+'&offset='+offset+'&exclude='+jQuery('#searchids').val();

		data = 'taxonomy='+taxonomy+'&posts_per_page='+posts_per_page+'&offset='+offset+'&playlist='+playlist;

		/////////////

		jQuery.ajax({
				type : 'GET',
				url : SITEURL+'/wp-json/videos',
				data : data,
				success:function(response){



                    generate_data(response);
					count = parseInt(jQuery('#offset').val()) + parseInt(response.length);
                    jQuery('#offset').val(count);


				},
				error:function(error){
					jQuery('.loader').text("")
					jQuery('.all_posts').html('<p class="noneLeft">No Playlists found</p>');

				}
			})
	}


	showLayout();

	function generate_grid_reponse(response)
	{


		var grid ={};
		var multiple = [6,6];
		var k = 0 ;
		grid[k] = {};
		var j = 0;
        var image  = SITEURL+'/wp-content/themes/short-film/assets/img/placeholder.jpg';
		for (var i= 0; i < multiple[k]; i++) {

			if(response[j] == undefined){
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
					'featured_image': image,
					'small_image': image,
					'medium_image': image,
					'large_image': image,
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


    function generate_data(response)
	{

        jQuery('.loader').text("")
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
                            +'<a class="content-bottom" href="'+SITEURL+'/'+value[0]['slug']+'">'
                                +'<div class="grid-image">'
                                    +'<img src="'+value[0]['medium_image']+'">'
                                +'</div>'
                                +'<div class="grid-text-wrap">'
                                    +'<div class="grid-title">'+value[0]['title']+'</div>'
                                    +'<div class="grid-meta '+value[0]['class']+'">'+value[0]['region'].join(',')+'/'+value[0]['duration']+'MIN</div>'
                                    +'<div class="grid-meta">'+value[0]['categories'].join(', ')+'</div>'
                                    +'<div class="grid-meta '+value[0]['class']+'">DIR.'+value[0]['director'].toUpperCase()+'</div>'

                                +'</div>'
                               +' <div class="grid-text-wrap hover-text">'
                                    +'<div class="grid-title">'+value[0]['title']+'</div>'
                                    +'<div class="grid-meta">'
                                        +'<div class="row">'
                                            +'<div class="col-xs-4">'
                                                +'<div class="pull-left text-center m-t-10 '+value[0]['class']+'">'
                                                    //+'<i class="fa fa-binoculars fa-2x"></i><br>Watchlist'
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
                            +'<a class="content-bottom" href="'+SITEURL+'/'+value[1]['slug']+'">'
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
                                                  // +' <i class="fa fa-binoculars fa-2x"></i><br>Watchlist'
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
                           +' <a class="content-bottom" href="'+SITEURL+'/'+value[2]['slug']+'">'
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
                                                   //+' <i class="fa fa-binoculars fa-2x"></i><br>Watchlist'
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
                            +'<a class="content-bottom" href="'+SITEURL+'/'+value[3]['slug']+'">'
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
                                                    //+'<i class="fa fa-binoculars fa-2x"></i><br>Watchlist'
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
                            +'<a class="content-bottom" href="'+SITEURL+'/'+value[4]['slug']+'">'
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
                                                   //+' <i class="fa fa-binoculars fa-2x"></i><br>Watchlist'
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
                            +'<a class="content-bottom" href="'+SITEURL+'/'+value[5]['slug']+'">'
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
                                                    //+'<i class="fa fa-binoculars fa-2x"></i><br>Watchlist'
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


            jQuery.each(response,function(index,value){

                            if(value.region.length == 0){
                                value.region = ['No regions added'];
                            }



                html += '<div class="row listlayout">'
                    + '<div class="col-md-5">'
						+ '<a class="content-bottom" href="'+SITEURL+'/'+value.slug+'">'
							+ '<img src="'+value.medium_image+'" class="img-responsive width-full">'
						+'</a>'
                    + '</div>'
                    + '<div class="col-md-7">'
                        + '<div class="row">'
                            + '<div class="col-md-12">'
                                + '<h4 class="m-t-0">'
                                	+ '<a class="content-bottom" href="'+SITEURL+'/'+value.slug+'">'
                                		+ value.title
                                	+ '</a>'


                                + '</h4>'
                            + '</div>'
                        + '</div>'
                        //+ '<hr class="m-t-0 m-b-5">'

						+ '<div class="row">'

							+ '<div class="col-xs-8 cont">'
                                + '<p>'+value.excerpt+'</p>'
                                + '<h6 class="m-t-30 m-b-0">'+value.video_region_links.join(', ')+'/'+value.duration+' MIN</h6>'


								+'<h6 class="m-t-0 m-b-0">Dir: <a href="'+SITEURL+'/author/'+value.director_nicename+'" title="Author">' + value.director + '</a></h6>'

								+ '<p class="categories">'
                                    + '<span class="label label-greydark">'

										+ value.video_category_links.join('</span><span class="label label-greydark">')

									+ '</span>'
                                + '</p>'
                            + '</div>'

                            + '<div class="col-xs-4 text-right list-info-btns">'
                                + '<div class="soc-ico nh">'

									+'<div class="ssba"><div style="text-align:right"><a class="ssba_facebook_share" href="http://www.facebook.com/sharer.php?u='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/facebook.png" title="Facebook" class="ssba" alt="Share on Facebook"></a><a href="http://pinterest.com/pin/create/bookmarklet/?is_video=false&amp;url='+SITEURL+'/'+value.slug+'/&amp;media='+value.featured_image+'&amp;description='+value.title+'" class="ssba_pinterest_share ssba_share_link" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/pinterest.png" title="Pinterest" class="ssba" alt="Pin on Pinterest"></a><a class="ssba_twitter_share" href="http://twitter.com/share?url='+SITEURL+'/'+value.slug+'/&amp;text='+value.title+'+" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/twitter.png" title="Twitter" class="ssba" alt="Tweet about this on Twitter"></a><a class="ssba_google_share" href="https://plus.google.com/share?url='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/google.png" title="Google+" class="ssba" alt="Share on Google+"></a></div></div>'

                                + '</div>'

                                + '<div class="lico_c">'
                                   + '<div title="Views" class="lico small">'+value.no_of_views+' <i class="fa fa-eye"></i></div>'

								   + '<div class="lico like-action">'

										+'<span class="post_likes"><a href="#" class="post-like liked" data-post_id="'+value.id+'" title="Like/Unlike"><i id="icon-like" class="fa fa-thumbs-up"></i>'+value.post_like_count+'</a> </span>'

									+ '</div>'

									+ '<div class="lico watchlist-add"> '
                                       // + '<a href="#"><i class="fa fa-binoculars"></i> Add to Watchlist </a>'
                                    + '</div>'
                                + '</div>'
                            + '</div>'
                        + '</div>'
                    + '</div>'
                + '</div>';



                html += '<div class="couchlayout">'

					+ '<a class="content-bottom" href="'+SITEURL+'/'+value.slug+'">'
						+ '<img src="'+value.large_image+'" alt="" class="img-responsive width-full">'
                    +'</a>'
					+ '<div class="row">'

						+ '<div class="col-sm-10">'
                            + '<h3 class="pull-l eft">'
                                + '<a class="content-bottom" href="'+SITEURL+'/'+value.slug+'">'
                                	+ value.title
                                + '</a>'

								+ '<small><em>by <a href="'+SITEURL+'/author/'+value.director_nicename+'" title="Author">'+value.director+'</a></em></small>'

                            + '</h3>'
                        + '</div>'

                        + '<div class="col-sm-2">'

							+ '<div class="soc-ico nh pull-right" style="margin-top: 35px;">'

								+'<div class="ssba"><div style="text-align:right"><a class="ssba_facebook_share" href="http://www.facebook.com/sharer.php?u='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/facebook.png" title="Facebook" class="ssba" alt="Share on Facebook"></a><a href="http://pinterest.com/pin/create/bookmarklet/?is_video=false&amp;url='+SITEURL+'/'+value.slug+'/&amp;media='+value.featured_image+'&amp;description='+value.title+'" class="ssba_pinterest_share ssba_share_link" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/pinterest.png" title="Pinterest" class="ssba" alt="Pin on Pinterest"></a><a class="ssba_twitter_share" href="http://twitter.com/share?url='+SITEURL+'/'+value.slug+'/&amp;text='+value.title+'+" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/twitter.png" title="Twitter" class="ssba" alt="Tweet about this on Twitter"></a><a class="ssba_google_share" href="https://plus.google.com/share?url='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/google.png" title="Google+" class="ssba" alt="Share on Google+"></a></div></div>'

							+ '</div>'

						+ '</div>'
					+ '</div>'

                    + '<hr class="m-t-0 m-b-5">'
                    + '<div class="row main-ex">'
                        + '<div class="col-xs-8 cont">'
                            + '<p><em>'+value.excerpt+'</em></p>'

                            + '<h6 class="m-t-30 m-b-0"><em>'+value.video_region_links.join(', ')+'/'+value.duration+' MIN</em></h6>'
                            + '<p class="categories">'
                                + '<span class="label label-greydark">'

									+ value.video_category_links.join('</span><span class="label label-greydark">')

								+ '</span>'
                            + '</p>'
                        + '</div>'

                        + '<div class="col-xs-4 text-right">'
                            + '<div class="">'


								+ '<div class="lico_c social-strip">'
                                    + '<div title="Views" class="lico small">'+value.no_of_views+' <i class="fa fa-eye"></i></div>'

									+ '<div class="lico like-action">'

										+'<span class="post_likes"><a href="#" class="post-like liked" data-post_id="'+value.id+'" title="Like/Unlike"><i id="icon-like" class="fa fa-thumbs-up"></i>'+value.post_like_count+'</a> </span>'

                                    + '</div>'

                                    + '<div class="lico watchlist-add">'
                                       // + '<a href="#"><i class="fa fa-binoculars"></i> Add to Watchlist </a>'
                                    + '</div>'

                                + '</div>'


                            + '</div>'
                        + '</div>'
                    + '</div>'
                    + '<hr class="m-t-20 m-b-20">'
                    + '<div class="spacer-20"></div>'
                    + '<p><em>'+value.excerpt+'</em></p>'
	            + '</div>';


                        });
                        jQuery('.all_posts').html(html);
                        showLayout();
                    }
                    else
                    {
                        jQuery('.all_posts').html("");
                        html += '<p class="noneLeft">No videos found.</p>';
                        jQuery('.all_posts').html(html);

						jQuery('.load_more').hide();
                    }


    }
function loadslick(){
    jQuery('.slider1').slick({
            // mobileFirst: true,
            infinite: true,
            slidesToShow: 3,
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
        });
}
}

</script>