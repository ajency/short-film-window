<?php get_header(); ?>

        <!--Navigation-->
			<!-- <div id="content" class="clearfix row">

				<div id="main" class="col-xs-8 clearfix" role="main">
				 -->
					<!-- <!-- <div class="page-header">
					<?php if (is_category()) { ?>
						<h1 class="archive_title h2">
							<span><?php _e("Posts Categorized:", "wpbootstrap"); ?></span> <?php single_cat_title(); ?>
						</h1>
					<?php } elseif (is_tag()) { ?>
						<h1 class="archive_title h2">
							<span><?php _e("Posts Tagged:", "wpbootstrap"); ?></span> <?php single_tag_title(); ?>
						</h1>
					<?php } elseif (is_author()) { ?>
						<h1 class="archive_title h2">
							<span><?php _e("Posts By:", "wpbootstrap"); ?></span> <?php get_the_author_meta('display_name'); ?>
						</h1>
					<?php } elseif (is_day()) { ?>
						<h1 class="archive_title h2">
							<span><?php _e("Daily Archives:", "wpbootstrap"); ?></span> <?php the_time('l, F j, Y'); ?>
						</h1>
					<?php } elseif (is_month()) { ?>
					    <h1 class="archive_title h2">
					    	<span><?php _e("Monthly Archives:", "wpbootstrap"); ?></span> <?php the_time('F Y'); ?>
					    </h1>
					<?php } elseif (is_year()) { ?>
					    <h1 class="archive_title h2">
					    	<span><?php _e("Yearly Archives:", "wpbootstrap"); ?></span> <?php the_time('Y'); ?>
					    </h1>
					<?php } ?>
					</div> -->



        <!--Content-->
        <div class="container header-space">
            <div class="content-wrapper" style="  overflow: visible;">

                <div class="row">
                    <div class="col-md-6">
                        <h2 class="brand">EXPLORE</h2>
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

                <div class="row pushin">
                    <div class="col-md-5">
                		<h5 class="un">FILTER BY</h5>

					   <div class="form-horizontal">

						   <div class="form-group">
                                <label for="" class="col-md-3 control-label"><em>Genre:</em> </label>
                                <div class="col-md-9">
                                	<select name="genre" id="genre">
                                        <option value="">All</option>
                                        <?php
										  $categories = get_categories();
										  foreach ($categories as $category) {
										  	$option = '<option value="'.$category->term_id.'">';
											$option .= $category->cat_name;
											$option .= '</option>';
											echo $option;
										  }
										 ?>
                                    </select>
                                </div>
                            </div>
                       </div>

						<div class="form-horizontal">

						   <div class="form-group">

								<?php
									$all_language_list = get_list_of_all_languages();

								?>

								<label for="" class="col-md-3 control-label"><em>Language:</em> </label>
                                <div class="col-md-9">

									<select name="language" id="language">

										<option value="">All</option>

										<?php
											foreach ($all_language_list as $lang_value)
											{

												 echo '<option value="'.$lang_value->term_id.'">'.$lang_value->name.'</option>';

										    }
										?>

								   </select>

							   </div>
                            </div>

                        </div>

					</div>
                    <div class="col-md-4 col-md-offset-3 padd-68">


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

						<div class="row opts">
                            <div class="col-md-12">

                                <a href="#" id="gridoption" class="option" title="Grid"><i class="fa fa-th-large fa-3x"></i></a>


                                <a href="#" id="listoption"  class="option"title="List"><i class="fa fa-th-list fa-3x"></i></a>


                                <a href="#" id="couchoption" class="option" title="Couch"><i class="fa fa-list-alt fa-3x"></i></a>

                           </div>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="spacer-40"></div><div class="loader"></div>

				<div class="search-results-message">
				</div>

				<?php

					$queried_object = get_queried_object();


					$total_no_of_videos = $queried_object->category_count;

					// echo $total_no_of_videos;
				?>

                <div class="all_posts">

			<?php


 				$args = array(
					'orderby'           => 'post_date',
					'order'             => 'DESC',
					'genre'		    	=> $queried_object->term_id ,
					'region'			=> '',
					'taxonomy'			=> '',
					'language'			=> '',
					'posts_per_page'   	=> 12,
					'offset'           	=> 0,
                    'sort'              => 1


				);
				$response = Film\Video::get_many($args);
				if(count($response) > 0)
					{
						$gridreposnse = generate_grid_response($response);

						foreach ($gridreposnse as $key => $value){
                            foreach ($value as $k => $val) {
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
                            <div class="grid-box grid-full content-align-bottom <?php echo $value[0]['class'] ;?>">
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

                                    <div class="grid-image" style="background-image: url(<?php echo $value[0]['medium_image'] ;?>);">
                                        <!-- <img src="<?php echo $value[0]['medium_image'] ;?>"> -->
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
                                                <div class="col-xs-4 vid-meta">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[0]['class'] ;?>">

                                                    </div>
                                                    <div class="iconexp_sp pull-left p-l-10 m-t-10 <?php echo $value[0]['class'] ;?>">
                                                        <div><?php echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[0]['class'] ;?>"><?php echo $value[0]['post_like_count'];?>
                                                            <i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-8 vid-desc">
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
                            <div class="grid-box grid-half content-align-bottom <?php echo $value[1]['class'] ;?>">

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

                                    <div class="grid-image" style="background-image: url(<?php echo $value[1]['medium_image'] ;?>);">
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
                                                <div class="col-xs-4 vid-meta">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[1]['class'] ;?>">

                                                    </div>

                                                    <div class="iconexp_sp pull-left p-l-10 m-t-10 <?php echo $value[1]['class'] ;?>">
                                                        <div><?php echo $value[1]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[1]['class'] ;?>"><?php echo $value[1]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-8 vid-desc">
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
                            <div class="grid-box grid-half content-align-bottom <?php echo $value[2]['class'] ;?>">

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

                                    <div class="grid-image" style="background-image: url(<?php echo $value[2]['medium_image'] ;?>);">
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
                                                <div class="col-xs-4 vid-meta">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[2]['class'] ;?>">

                                                    </div>
                                                    <div class="iconexp_sp pull-left p-l-10 m-t-10 <?php echo $value[2]['class'] ;?>">
                                                        <div><?php echo $value[2]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[2]['class'] ;?>"><?php echo $value[2]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-8 vid-desc">
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
                            <div class="grid-box grid-half content-align-bottom <?php echo $value[3]['class'] ;?>">

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

                                    <div class="grid-image" style="background-image: url(<?php echo $value[3]['medium_image'] ;?>);">
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
                                                <div class="col-xs-4 vid-meta">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[3]['class'] ;?>">

                                                    </div>
                                                    <div class="iconexp_sp pull-left p-l-10 m-t-10 <?php echo $value[3]['class'] ;?>">
                                                        <div><?php echo $value[3]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[3]['class'] ;?>"><?php echo $value[3]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-8 vid-desc">
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
                            <div class="grid-box grid-half content-align-bottom <?php echo $value[4]['class'] ;?>">

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

                                    <div class="grid-image" style="background-image: url(<?php echo $value[4]['medium_image'] ;?>);">
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
                                                <div class="col-xs-4 vid-meta">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[4]['class'] ;?>">

                                                    </div>
                                                    <div class="iconexp_sp pull-left p-l-10 m-t-10 <?php echo $value[4]['class'] ;?>">
                                                        <div><?php echo $value[4]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[4]['class'] ;?>"><?php echo $value[4]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-8 vid-desc">
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
                            <div class="grid-box grid-full content-align-bottom <?php echo $value[5]['class'] ;?>">

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

                                    <div class="grid-image" style="background-image: url(<?php echo $value[5]['medium_image'] ;?>);">
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
                                                <div class="col-xs-4 vid-meta">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[5]['class'] ;?>">

                                                    </div>
                                                    <div class="iconexp_sp pull-left p-l-10 m-t-10 <?php echo $value[5]['class'] ;?>">
                                                        <div><?php echo $value[5]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[5]['class'] ;?>"><?php echo $value[5]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-8 vid-desc">
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
                <div class="row listlayout" style="display: none;">
                    <div class="col-md-5">

						<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
							<img data-src="<?php echo $value['medium_image'];?>" src="" class="img-responsive width-full">
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

                            <div class="col-xs-4 text-right list-info-btns">
                                <div class="soc-ico nh">


								   <?php echo do_shortcode('[ssba url="' . get_permalink($value['id']) . '" title="' . get_the_title($value['id']) . '"]'); ?>

                                </div>

                                <div class="lico_c">
                                    <div title="Views" class="lico small"><?php echo $value['no_of_views'];?> <i class="fa fa-eye"></i></div>
                                    <div class="lico like-action">

										<span class="post_likes"> <?php echo getPostLikeLink($value['id']); ?> </span>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

	            <div class="couchlayout" style="display: none;">

					<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
						<img data-src="<?php echo $value['large_image'];?>" src="" alt="" class="img-responsive width-full">
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


                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


	            </div>


        <!-- /container -->

						 <!-- end article -->

					<?php }

					}?></div>

 					<div class="spacer-40"></div>
 					<input type="hidden" name="tracker" id="tracker" value="" / >
            </div>
            <div class="content-wrapper">

				<div class="spacer-40"></div>

                <div class="text-center">
                    <input type="hidden" name="offset" id="offset" value="0" />
                    <input type="hidden" name="searchids" id="searchids" value="0" />
                    <a href="#" class="btn btn-primary load_more">Load More</a>
                    <div class="loader_more load_dis"></div>
                </div>

                <div class="spacer-40 hideinsmall"></div>

                <a id="next" href="<?php echo site_url() ;?>/wp-json/page2/tagposts?tag=trending"></a>


                <div class="trending">
                </div>

                <div class="spacer-40 hideinsmall"></div>

                <!-- <a id="award" href="<?php echo site_url() ;?>/wp-json/page2/catposts?cat=awardwinning"></a> -->

				<a id="award" href="<?php echo site_url() ;?>/wp-json/page2/tagposts?tag=awardwinning"></a>


                <div class="awardwinning">
                </div>

                <div class="spacer-40 hideinsmall"></div>

                <!-- <a id="indian" href="<?php echo site_url() ;?>/wp-json/page2/catposts?cat=indian"></a> -->

				<a id="indian" href="<?php echo site_url() ;?>/wp-json/page2/regionposts?region=india"></a>


                <div class="indian">
                </div>
            </div>



			 <!-- end #content -->

			<?php get_footer(); ?>

<script type="text/javascript">

jQuery(document).ready(function(){
	jQuery('#tracker').val('gridoption');

	showLayout();

	jQuery('#genre').val(<?php echo $queried_object->term_id;?>);
	jQuery('#gridoption').children().addClass('text-primary');

   count = parseInt(jQuery('#offset').val()) + parseInt("<?php echo count($response) ;?>");

   count=count-1;

	if(count == 0)
	{
		count=1;
	}

	jQuery('#offset').val(count);

	jQuery('#genre').live('change',function(e){
        jQuery('#searchids').val("");
        jQuery('.search').val("");
		jQuery('#offset').val(0)
		jQuery('.loader').html('<div class="loader_c"><div class="loader_i"></div></div>')
		jQuery('.all_posts').html("")
		get_all_posts();



	});


	jQuery('#language').live('change',function(e)
	{
		jQuery('#searchids').val("");
        jQuery('.search').val("");
		jQuery('#offset').val(0)
		jQuery('.loader').html('<div class="loader_c"><div class="loader_i"></div></div>')
		jQuery('.all_posts').html("")

		get_all_posts();

	});


	jQuery('.load_more').live('click',function(e){

		e.preventDefault();

		jQuery('.loader_more').html('<div class="loader_c"><div class="loader_i"></div></div>');

		get_all_posts();


	});

	jQuery('.option').live('click',function(e){
		e.preventDefault();
		jQuery('#gridoption').children().removeClass('text-primary');

		jQuery('#tracker').val(e.currentTarget.id);
		showLayout();


	});

    jQuery('#sort').live('change',function(e){
        e.preventDefault();
        genre = jQuery('#genre').val();
        language = jQuery('#language').val();

        offset = jQuery('#offset').val();

        var total_no_of_videos = jQuery('#total_no_of_videos').val();

        posts_per_page = 12;

        // if((total_no_of_videos-offset)<=posts_per_page)
        // {
            // posts_per_page = total_no_of_videos-offset;

            // jQuery('.load_more').hide();
        // }


        if(language)
        {
            taxonomy = 'language';

            data = 'genre='+genre+'&language='+language+'&taxonomy='+taxonomy+'&posts_per_page='+posts_per_page+'&offset=0&exclude='+jQuery('#searchids').val()+'&sort='+jQuery(e.target).val();
        }
        else
        {
            data = 'genre='+genre+'&language='+language+'&posts_per_page='+posts_per_page+'&offset=0&exclude='+jQuery('#searchids').val()+'&sort='+jQuery(e.target).val();
        }

        jQuery.ajax({
                type : 'GET',
                url : SITEURL+'/wp-json/sort',
                data : data,
                success:function(response){
                    jQuery('.loader').html('<div class="loader_c"><div class="loader_i"></div></div>')
                    jQuery('.all_posts').html("")
                    generate_data(response);


                    },
                    error:function(response){

                    }

        });




    });


    jQuery('.search').live('change',function(e)
	{

   	    e.preventDefault();

		
        jQuery('.search-results-message').show()
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
                    jQuery('.loader').html('<div class="loader_c"><div class="loader_i"></div></div>')

					//var clear = '<a href="#" id="clear-search-results-btn">Clear Search Results</a>';
                    var clear = '<i class="fa fa-times"></i>';

                    jQuery('.search-results-message').html('<h5 class="search_ed">Search Results for <span><a href="#" id="clear-search-results-btn" title="Clear Search Results">'+title+clear+'</a></span></h5>');


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
        //testing img size
        var tt = setInterval(checkgridsize(), 1000);
        var count = 1;
        function checkgridsize() {
            if (count==10) {
                clearInterval(tt);
            } else {
                jQuery(window).trigger('resize');
                count++;
            }
        }

    });

	jQuery('.fa-search').live('click',function(e){


   	    e.preventDefault();

		jQuery('.search-results-message').show();

        jQuery('#genre').val("");
        jQuery('#language').val("");
        jQuery('#offset').val(0);

		var title = jQuery(this).prev().val();

		data = 'title='+jQuery(this).prev().val();

		jQuery('.load_more').hide();

		jQuery.ajax({
                type : 'GET',
                url : SITEURL+'/wp-json/filters',
                data : data,
                success:function(response)
				{
                    jQuery('#offset').val(0)
                    jQuery('.loader').html('<div class="loader_c"><div class="loader_i"></div></div>')


					//var clear = '<a href="#" id="clear-search-results-btn">Clear Search Results</a>';
                    var clear = '<i class="fa fa-times"></i>';

                    jQuery('.search-results-message').html('<h5 class="search_ed">Search Results for <span><a href="#" id="clear-search-results-btn" title="Clear Search Results">'+title+clear+'</a></span></h5>');

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
        //testing img size
        var tt = setInterval(checkgridsize(), 1000);
        var count = 1;
        function checkgridsize() {
            if (count==10) {
                clearInterval(tt);
            } else {
                jQuery(window).trigger('resize');
                count++;
            }
        }

    });

	jQuery('#clear-search-results-btn').live('click',function(e){
        e.preventDefault();
		location.reload();

	});

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
            jQuery('.gridlayout img').each(function(index,value){

                jQuery(value).attr('src' ,jQuery(value).attr('data-src'));
            })

		}
		else if(jQuery('#tracker').val() == 'listoption'){
			jQuery('.gridlayout').hide();
			jQuery('.couchlayout').hide();
			jQuery('.listlayout').show();
            jQuery('.listlayout img').each(function(index,value){

                jQuery(value).attr('src' ,jQuery(value).attr('data-src'));
            })
		}
		else if(jQuery('#tracker').val() == 'couchoption'){
			jQuery('.gridlayout').hide();
			jQuery('.listlayout').hide();
			jQuery('.couchlayout').show();
            jQuery('.couchlayout img').each(function(index,value){

                jQuery(value).attr('src' ,jQuery(value).attr('data-src'));
            })
		}
	}

	function get_all_posts()
	{

		genre = jQuery('#genre').val();
        language = jQuery('#language').val();
        jQuery('.search-results-message').hide()
        offset = jQuery('#offset').val();

        var total_no_of_videos = jQuery('#total_no_of_videos').val();

        posts_per_page = 12;

        // if((total_no_of_videos-offset)<=posts_per_page)
        // {
            // posts_per_page = total_no_of_videos-offset;

            // jQuery('.load_more').hide();
        // }


        if(language)
        {
            taxonomy = 'language';

            data = 'genre='+genre+'&language='+language+'&taxonomy='+taxonomy+'&posts_per_page='+posts_per_page+'&offset='+offset+'&exclude='+jQuery('#searchids').val()+'&sort='+jQuery('#sort').val();
        }
        else
        {
            data = 'genre='+genre+'&language='+language+'&posts_per_page='+posts_per_page+'&offset='+offset+'&exclude='+jQuery('#searchids').val()+'&sort='+jQuery('#sort').val();
        }



		jQuery.ajax({
				type : 'GET',
				url : SITEURL+'/wp-json/videos',
				data : data,
				success:function(response){



                    generate_data(response);
					count = parseInt(jQuery('#offset').val()) + parseInt(response.length);
                    jQuery('#offset').val(count);
                    //testing img size
                    var tt = setInterval(checkgridsize(), 1000);
                    var count = 1;
                    function checkgridsize() {
                        if (count==10) {
                            clearInterval(tt);
                        } else {
                            jQuery(window).trigger('resize');
                            count++;
                        }
                    }


				},
				error:function(error){
					jQuery('.loader').text("");
					jQuery('.loader_more').text("");
					jQuery('.all_posts').html('<p class="noneLeft">No videos found</p>');

				}
			})
	}


	showLayout();

	function generate_grid_reponse(response){


		var grid ={};
		var multiple = [6,6];
		var k = 0 ;
		grid[k] = {};
		var j = 0;
        // var image  = SITEURL+'/wp-content/themes/short-film/assets/img/placeholder.jpg';
        var image  = SITEURL+'/wp-content/themes/short-film/assets/img/white.png';
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


    jQuery('.trending').infinitescroll({

        navSelector     : "a#next:last",
        nextSelector    : "a#next:last",
        itemSelector    : ".trending",
        debug           : true,
        dataType        : 'json',

        appendCallback  : false, // USE FOR PREPENDING

    }, function( response ) {
        html = '<h3>TRENDING</h3><hr class="m-t-0"><div class="row">'
        jQuery.each(response,function(index,value){


					html +=	'<div class="col-sm-4">'

								+'<div class="grid-box grid-full content-align-bottom">'

									+'<a class="content-bottom" href="'+SITEURL+'/'+value.slug+'">'

										+'<div class="grid-image" style="background-image: url('+value.small_image+');">'
										+'</div>'

										+'<div class="grid-text-wrap">'

											+'<div class="grid-title">'+value.title+'</div>'

										    +'<div class="grid-meta">'+value.region.join(',')+'/'+value.duration+' MIN</div>'

										    +'<div class="grid-meta">'+value.categories.join(',')+'</div>'

											+'<div class="grid-meta">DIR.'+value.director+'</div>'

										+'</div>'

										+'<div class="grid-text-wrap hover-text">'
											+'<div class="grid-title">'+value.title+'</div>'
											+'<div class="grid-meta">'
												+'<div class="row">'
													+'<div class="col-xs-4 vid-meta">'

														+'<div class="pull-left p-l-10 m-t-10">'
															+'<div>'
																+value.no_of_views
																+'<i class="fa fa-eye"></i>'
															+'</div>'
															+'<div>'
																+value.post_like_count
																+'<i class="fa fa-thumbs-up"></i>'
															+'</div>'
														+'</div>'

													+'</div>'

													+'<div class="col-xs-8 vid-desc">'
														+'<div class="pull-right text-right m-t-10">'
															+value.excerpt

														+'</div>'
													+'</div>'
												+'</div>'
											+'</div>'
										+'</div>'


										+'<div class="overlay-vertical"></div>'
									+'</a>'
								+'</div>'

							+'</div>';


        });


        jQuery('.trending').html(html);
        loadslick();


    });
    jQuery('.awardwinning').infinitescroll({

        navSelector     : "a#award:last",
        nextSelector    : "a#award:last",
        itemSelector    : ".awardwinning",
        debug           : true,
        dataType        : 'json',

        appendCallback  : false, // USE FOR PREPENDING

    }, function( response ) {
        html = '<h3>AWARD WINNING</h3><hr class="m-t-0"><div class="row">'
        jQuery.each(response,function(index,value){



					html +=	'<div class="col-sm-4">'

								+'<div class="grid-box grid-full content-align-bottom">'

									+'<a class="content-bottom" href="'+SITEURL+'/'+value.slug+'">'

										+'<div class="grid-image" style="background-image: url('+value.small_image+');">'
										+'</div>'

										+'<div class="grid-text-wrap">'

											+'<div class="grid-title">'+value.title+'</div>'


										   +'<div class="grid-meta">'+value.region.join(',')+'/'+value.duration+' MIN</div>'

										   +'<div class="grid-meta">'+value.categories.join(',')+'</div>'


											+'<div class="grid-meta">DIR.'+value.director+'</div>'

										+'</div>'

										+'<div class="grid-text-wrap hover-text">'
											+'<div class="grid-title">'+value.title+'</div>'
											+'<div class="grid-meta">'
												+'<div class="row">'
													+'<div class="col-xs-4 vid-meta">'

														+'<div class="pull-left p-l-10 m-t-10">'
															+'<div>'
																+value.no_of_views
																+'<i class="fa fa-eye"></i>'
															+'</div>'
															+'<div>'
																+value.post_like_count
																+'<i class="fa fa-thumbs-up"></i>'
															+'</div>'
														+'</div>'

													+'</div>'

													+'<div class="col-xs-8 vid-desc">'
														+'<div class="pull-right text-right m-t-10">'
															+value.excerpt

														+'</div>'
													+'</div>'
												+'</div>'
											+'</div>'
										+'</div>'


										+'<div class="overlay-vertical"></div>'
									+'</a>'
								+'</div>'

							+'</div>';


        });


        jQuery('.awardwinning').html(html);
          loadslick();

    });
    jQuery('.indian').infinitescroll({

        navSelector     : "a#indian:last",
        nextSelector    : "a#indian:last",
        itemSelector    : ".indian",
        debug           : true,
        dataType        : 'json',

        appendCallback  : false, // USE FOR PREPENDING

    }, function( response ) {
        html = '<h3>INDIAN</h3><hr class="m-t-0"><div class="row">'
        jQuery.each(response,function(index,value){


					html +=	'<div class="col-sm-4">'

								+'<div class="grid-box grid-full content-align-bottom">'

									+'<a class="content-bottom" href="'+SITEURL+'/'+value.slug+'">'

										+'<div class="grid-image" style="background-image: url('+value.small_image+');">'
										+'</div>'

										+'<div class="grid-text-wrap">'

											+'<div class="grid-title">'+value.title+'</div>'


										   +'<div class="grid-meta">'+value.region.join(',')+'/'+value.duration+' MIN</div>'

										   +'<div class="grid-meta">'+value.categories.join(',')+'</div>'


											+'<div class="grid-meta">DIR.'+value.director+'</div>'

										+'</div>'

										+'<div class="grid-text-wrap hover-text">'
											+'<div class="grid-title">'+value.title+'</div>'
											+'<div class="grid-meta">'
												+'<div class="row">'
													+'<div class="col-xs-4 vid-meta">'

														+'<div class="pull-left p-l-10 m-t-10">'
															+'<div>'
																+value.no_of_views
																+'<i class="fa fa-eye"></i>'
															+'</div>'
															+'<div>'
																+value.post_like_count
																+'<i class="fa fa-thumbs-up"></i>'
															+'</div>'
														+'</div>'

													+'</div>'

													+'<div class="col-xs-8 vid-desc">'
														+'<div class="pull-right text-right m-t-10">'
															+value.excerpt

														+'</div>'
													+'</div>'
												+'</div>'
											+'</div>'
										+'</div>'


										+'<div class="overlay-vertical"></div>'
									+'</a>'
								+'</div>'

							+'</div>';


        });



        jQuery('.indian').html(html);
        loadslick();


    });


    function generate_data(response){

        jQuery('.loader').text("");
		jQuery('.loader_more').text("");

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
                       +' <div class="grid-box grid-full content-align-bottom '+value[0]['class']+'">'
							+'<a class="content-bottom check-slug" data-slug="'+value[0]['slug']+'" href="'+SITEURL+'/'+value[0]['slug']+'">'
                                +'<div class="grid-image" style="background-image: url('+value[0]['medium_image']+');">'
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
                                            +'<div class="col-xs-4 vid-meta">'
                                                +'<div class="pull-left text-center m-t-10 '+value[0]['class']+'">'

                                                +'</div>'
                                                +'<div class="pull-left p-l-10 m-t-10 '+value[0]['class']+'">'
                                                    +'<div>'+value[0]['no_of_views']+'<i class="fa fa-eye"></i></div>'
                                                    +'<div class="'+value[0]['class']+'">'+value[0]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
                                                +'</div>'
                                            +'</div>'
                                           +' <div class="col-xs-8 vid-desc">'
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
                        +'<div class="grid-box grid-half content-align-bottom '+value[1]['class']+'">'
                           +'<a class="content-bottom check-slug" data-slug="'+value[1]['slug']+'" href="'+SITEURL+'/'+value[1]['slug']+'">'
                                +'<div class="grid-image" style="background-image: url('+value[1]['medium_image']+');">'
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
                                           +' <div class="col-xs-4 vid-meta">'
                                                +'<div class="pull-left text-center m-t-10 '+value[1]['class']+'">'

                                                +'</div>'
                                                +'<div class="pull-left p-l-10 m-t-10 '+value[1]['class']+'">'
                                                   +' <div>'+value[1]['no_of_views']+'<i class="fa fa-eye"></i></div>'
                                                    +'<div class="'+value[1]['class']+'">'+value[1]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
                                               +' </div>'
                                            +'</div>'
                                           +' <div class="col-xs-8 vid-desc">'
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
                        +'<div class="grid-box grid-half content-align-bottom '+value[2]['class']+'">'
                          +'<a class="content-bottom check-slug" data-slug="'+value[2]['slug']+'" href="'+SITEURL+'/'+value[2]['slug']+'">'
                                +'<div class="grid-image" style="background-image: url('+value[2]['medium_image']+');">'
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
                                            +'<div class="col-xs-4 vid-meta">'
                                                +'<div class="pull-left text-center m-t-10 '+value[2]['class']+'">'

                                               +' </div>'
                                                +'<div class="pull-left p-l-10 m-t-10 '+value[2]['class']+'">'
                                                   +' <div>'+value[2]['no_of_views']+'<i class="fa fa-eye"></i></div>'
                                                    +'<div class="'+value[2]['class']+'">'+value[2]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
                                               +' </div>'
                                            +'</div>'
                                            +'<div class="col-xs-8 vid-desc">'
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
                       +' <div class="grid-box grid-half content-align-bottom '+value[3]['class']+'">'
                           +'<a class="content-bottom check-slug" data-slug="'+value[3]['slug']+'" href="'+SITEURL+'/'+value[3]['slug']+'">'
                                +'<div class="grid-image" style="background-image: url('+value[3]['medium_image']+');">'
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
                                           +' <div class="col-xs-4 vid-meta">'
                                               +' <div class="pull-left text-center m-t-10 '+value[3]['class']+'">'

                                                +'</div>'
                                                +'<div class="pull-left p-l-10 m-t-10 '+value[3]['class']+'">'
                                                   +' <div>'+value[3]['no_of_views']+'<i class="fa fa-eye"></i></div>'
                                                   +' <div class="'+value[3]['class']+'">'+value[3]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
                                                +'</div>'
                                           +' </div>'
                                            +'<div class="col-xs-8 vid-desc">'
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
                       +' <div class="grid-box grid-half content-align-bottom '+value[4]['class']+'">'
                            +'<a class="content-bottom check-slug" data-slug="'+value[4]['slug']+'" href="'+SITEURL+'/'+value[4]['slug']+'">'
                                +'<div class="grid-image" style="background-image: url('+value[4]['medium_image']+');">'
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
                                           +' <div class="col-xs-4 vid-meta">'
                                                +'<div class="pull-left text-center m-t-10 '+value[4]['class']+'">'

                                                +'</div>'
                                                +'<div class="pull-left p-l-10 m-t-10 '+value[4]['class']+'">'
                                                   +' <div>'+value[4]['no_of_views']+'<i class="fa fa-eye"></i></div>'
                                                   +' <div class="'+value[4]['class']+'">'+value[4]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
                                               +' </div>'
                                           +' </div>'
                                           +' <div class="col-xs-8 vid-desc">'
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
                        +'<div class="grid-box grid-full content-align-bottom '+value[5]['class']+'">'
                            +'<a class="content-bottom check-slug" data-slug="'+value[5]['slug']+'" href="'+SITEURL+'/'+value[5]['slug']+'">'
                                +'<div class="grid-image" style="background-image: url('+value[5]['medium_image']+');">'
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
                                           +' <div class="col-xs-4 vid-meta">'
                                               +' <div class="pull-left text-center m-t-10 '+value[5]['class']+'">'

                                                +'</div>'
                                               +' <div class="pull-left p-l-10 m-t-10 '+value[5]['class']+'">'
                                                   +'<div>'+value[5]['no_of_views']+'<i class="fa fa-eye"></i></div>'
                                                    +'<div class="'+value[5]['class']+'">'+value[5]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
                                                +'</div>'
                                            +'</div>'
                                           +' <div class="col-xs-8 vid-desc">'
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
							+ '<img data-src="'+value.medium_image+'" src="" class="img-responsive width-full">'
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

						+ '<div class="row">'

							+ '<div class="col-xs-8 cont">'
                                + '<p>'+value.excerpt+'</p>'
                                + '<h6 class="m-t-30 m-b-0">'+value.video_region_links.join(', ')+'/'+value.duration+' MIN</h6>'


								+'<h6 class="m-t-0 m-b-0">Dir: <a href="'+SITEURL+'/director/'+value.director_nicename+'" title="Author">' + value.director + '</a></h6>'

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

                                    + '</div>'
                                + '</div>'
                            + '</div>'
                        + '</div>'
                    + '</div>'
                + '</div>';



                html += '<div class="couchlayout">'

					+ '<a class="content-bottom" href="'+SITEURL+'/'+value.slug+'">'
						+ '<img data-src="'+value.large_image+'" src="" alt="" class="img-responsive width-full">'
                    +'</a>'
					+ '<div class="row">'

						+ '<div class="col-sm-10">'
                            + '<h3 class="pull-l eft">'
                                + '<a class="content-bottom" href="'+SITEURL+'/'+value.slug+'">'
                                	+ value.title
                                + '</a>'

								+ '<small><em>by <a href="'+SITEURL+'/director/'+value.director_nicename+'" title="Author">'+value.director+'</a></em></small>'

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

                                    + '</div>'

                                + '</div>'


                            + '</div>'
                        + '</div>'
                    + '</div>'
                    + '<hr class="m-t-20 m-b-20">'
                    + '<div class="spacer-20"></div>'

	            + '</div>';


                        });
                        jQuery('.all_posts').html(html);
                        showLayout();
                    }
                    else
                    {
                        jQuery('.all_posts').html("");
                        html += '<p class="noneLeft">No videos found</p>';
                        jQuery('.all_posts').html(html);

						jQuery('.load_more').hide();
                    }


    }
function loadslick(){
    jQuery('.slider1').slick({

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

	jQuery('.check-slug').live('click',function(event){

		var slug = jQuery(event.currentTarget).attr('data-slug');

		if( slug === '')
		{
			event.preventDefault();
			jQuery(event.currentTarget).attr('href', '#');

		}

	});


}) //onload

</script>





