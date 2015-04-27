<?php
/*
Template Name: Homepage
*/
?>

<?php get_header(); ?>
			
			<!-- slider -->
                 
        <div class="slider3 full-slider">
          <div><img src="<?php echo get_template_directory_uri(); ?>/assets/img/home_main.jpg" class="img-responsive"></div>
          <!-- <div><img src="https://placeimg.com/1000/404/nature" class="img-responsive"></div>
          <div><img src="https://placeimg.com/1000/404/people" class="img-responsive"></div>
          <div><img src="https://placeimg.com/1000/404/nature" class="img-responsive"></div> -->
        </div>
            
        <!-- slider ends -->
        
        <!--Content-->
        <div class="container">
            <div class="content-wrapper">
                <div class="spacer-40"></div>

                <h2 class="brand">STAFF PICKS <small><em>This Week's Premiere</em></small></h2>

                <hr class="m-t-0">

                <div class="row">
                    <div class="col-sm-9">
						
						<div class="staffpick-display-section">
							<!--
							<div class="inside-script">
								<a>
									<img src="<?php //echo get_template_directory_uri(); ?>/assets/img/video_placeholder.jpg" alt="" class="img-responsive width-full">
									
									<div class="role-settings">
										<div class="row">
											<div class="col-md-9">
												<div class="pull-left">
													<h3>HELLO WORLD <small><em>by Director</em></small></h3>
												</div>        
											</div>
											<div class="col-md-3">
												<div class="pull-right">
												
													<div class="pull-right share-button">													
														<?php //echo do_shortcode("[ssba]"); ?>							
													</div>
												</div>
											</div>
										</div>
										<hr class="m-t-0 m-b-5">
										<div class="row">
											<div class="col-xs-6">
												<h5 class="m-t-0 m-b-0"><small><em>Tag line</em></small></h5>
												<h5 class="m-t-0 m-b-0"><small><em>1.7 Min / Region</em></small></h5>
												<h5 class="m-t-0 m-b-0"><small><em>Horror</em></small></h5>
											</div>
											<div class="col-xs-6 text-right">
												<div>199 <i class="fa fa-eye"></i></div>
												<div>75 <i class="fa fa-thumbs-up"></i></div>
												<div>Watchlist <i class="fa fa-binoculars"></i></div>
											</div>
										</div>
									</div>
								</a>
							</div>		
							-->
						</div>
						
                    </div>
                    <div class="col-sm-3">
                        <nav class="movie-cat visible-sm visible-md visible-lg">
                            <ul>
							     <li><a href="">THIS WEEK'S PREMIERE</a></li>
							
							<?php
							
								$pairs = get_pairs_category_post();
												
								foreach ( $pairs as $pair )
								{								
									echo '<li><a class="staffpick-category" data-cat-id="'.$pair['catid'].'" data-post-id="'.$pair['postid'].'" href="#">' . $pair['catname'].'</a></li>';
									
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
                    <form action="" class="search_menu">
                        <input type="text" class="form-control search" placeholder="Search">
                            <i class="fa fa-search"></i>
                    </form>
                </div>
            </div>
    </div>
                
	<hr class="m-t-0">

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
                            <a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value[0]['slug'];?>">
                                <div class="grid-image">
                                    <img src="<?php echo $value[0]['featured_image'] ;?>">
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
													<i class="fa fa-binoculars fa-2x"></i><br>Watchlist
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
                            <a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value[1]['slug'];?>">
                                <div class="grid-image">
                                    <img src="<?php echo $value[1]['featured_image'] ;?>">
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
													<i class="fa fa-binoculars fa-2x"></i><br>Watchlist
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
                            <a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value[2]['slug'];?>">
                                <div class="grid-image">
                                    <img src="<?php echo $value[2]['featured_image'] ;?>">
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
													<i class="fa fa-binoculars fa-2x"></i><br>Watchlist
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
                            <a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value[3]['slug'];?>">
                                <div class="grid-image">
                                    <img src="<?php echo $value[3]['featured_image'] ;?>">
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
													<i class="fa fa-binoculars fa-2x"></i><br>Watchlist
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
                            <a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value[4]['slug'];?>">
                                <div class="grid-image">
                                    <img src="<?php echo $value[4]['featured_image'] ;?>">
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
													<i class="fa fa-binoculars fa-2x"></i><br>Watchlist
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
                            <a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value[5]['slug'];?>">
                                <div class="grid-image">
                                    <img src="<?php echo $value[5]['featured_image'] ;?>">
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
													<i class="fa fa-binoculars fa-2x"></i><br>Watchlist
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
				
                <div class="row">
                    <div class="col-md-12 text-center">
                    <h6>
                      <!--  <a href="#">EXPLORE ALL FILMS <i class="fa fa-angle-double-down"></i></a>  -->
						
						<a target="_blank" href="<?php echo site_url();?>/movies">EXPLORE ALL FILMS </a>
						
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
                        	<form action="" class="search_menu">
                                <input type="text" class="form-control search" placeholder="Search">
                                <i class="fa fa-search"></i>
                        	</form>
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
								<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $recentarticle['slug'];?>">
									
									<div class="focus-img">
										<img src="<?php echo $recentarticle['featured_image'] ;?>" class="img-responsive">
									</div>
									<div>
										<h6><?php echo $recentarticle['title']; ?></h6>
								</a>		
										<p><?php echo $recentarticle['excerpt']; ?></p>
										<div>
											<p class="pull-left"><small><?php echo $recentarticle['post_date']; ?></small></p>
											<p class="pull-right">
												<span><i class="fa fa-thumbs-up"></i> <?php echo $recentarticle['post_like_count']; ?> </span>
												<!--
												<span><i class="fa fa-eye"></i> <?php echo $recentarticle['no_of_views']; ?> </span>
												-->
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
                    <div class="col-md-6 col-sm-6 col-xs-6">
                         <div class="pull-right">
                            <div class="btn-group genre-dd">
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    Genre <i class="fa fa-angle-double-down"></i>
                                </button>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Adventure</a></li>
                                    <li><a href="#">Fiction</a></li>
                                    <li><a href="#">Drama</a></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
                <hr class="m-t-0"> 
                <div class="row">
                    <div class="col-md-12">
                        <div class="slider1 regular-slider">
                            <div>
                                <div class="focus-img">
                                    <img src="https://placeimg.com/260/150/tech" class="img-responsive">
                                </div>
                            </div>
                            <div>
                                <div class="focus-img">
                                    <img src="https://placeimg.com/260/150/nature" class="img-responsive">
                                </div>
                            </div>
                            <div>
                                <div class="focus-img">
                                    <img src="https://placeimg.com/260/150/people" class="img-responsive">
                                </div>
                            </div>
                            <div>
                                <div class="focus-img">
                                    <img src="https://placeimg.com/260/150/nature" class="img-responsive">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="spacer-50 hideinsmall"></div>
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="brand"><small><em>SOME AWESOME</em></small> PLAYLISTS</h3>
                        <hr class="m-t-0">
                        <div class="slider2 regular-slider cap-show-on-hover">
                            <div class="slide-cont">
                                <img src="https://placeimg.com/338/338/tech" class="img-responsive">
                                <div class="cap-s">
                                    <h5><a href="#">Playlist Name</a></h5>
                                    <p>Description with some words to look important</p>
                                    <div class="sli-foot">
                                        <div class="pull-l eft numbers">
                                            <p>415 <i class="fa fa-eye"></i></p>
                                            <p>402 <i class="fa fa-thumbs-up"></i></p>
                                        </div>
                                        <div class="pull-ri ght sm-numbers">
                                            <span class="number">15</span> Films
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-cont">
                                <img src="https://placeimg.com/338/338/nature" class="img-responsive">
                                <div class="cap-s">
                                    <h5><a href="#">Playlist Name</a></h5>
                                    <p>Description with some words to look important</p>
                                    <div class="sli-foot">
                                        <div class="pull-l eft numbers">
                                            <p>415 <i class="fa fa-eye"></i></p>
                                            <p>402 <i class="fa fa-thumbs-up"></i></p>
                                        </div>
                                        <div class="pull-ri ght sm-numbers">
                                            <span class="number">15</span> Films
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-cont">
                                <img src="https://placeimg.com/338/338/people" class="img-responsive">
                                <div class="cap-s">
                                    <h5><a href="#">Playlist Name</a></h5>
                                    <p>Description with some words to look important</p>
                                    <div class="sli-foot">
                                        <div class="pull-l eft numbers">
                                            <p>415 <i class="fa fa-eye"></i></p>
                                            <p>402 <i class="fa fa-thumbs-up"></i></p>
                                        </div>
                                        <div class="pull-ri ght sm-numbers">
                                            <span class="number">15</span> Films
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-cont">
                                <img src="https://placeimg.com/338/338/nature" class="img-responsive">
                                <div class="cap-s">
                                    <h5><a href="#">Playlist Name</a></h5>
                                    <p>Description with some words to look important</p>
                                    <div class="sli-foot">
                                        <div class="pull-l eft numbers">
                                            <p>415 <i class="fa fa-eye"></i></p>
                                            <p>402 <i class="fa fa-thumbs-up"></i></p>
                                        </div>
                                        <div class="pull-ri ght sm-numbers">
                                            <span class="number">15</span> Films
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-cont">
                                <img src="https://placeimg.com/338/338/people" class="img-responsive">
                                <div class="cap-s">
                                    <h5><a href="#">Playlist Name</a></h5>
                                    <p>Description with some words to look important</p>
                                    <div class="sli-foot">
                                        <div class="pull-l eft numbers">
                                            <p>415 <i class="fa fa-eye"></i></p>
                                            <p>402 <i class="fa fa-thumbs-up"></i></p>
                                        </div>
                                        <div class="pull-ri ght sm-numbers">
                                            <span class="number">15</span> Films
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-cont">
                                <img src="https://placeimg.com/338/338/nature" class="img-responsive">
                                <div class="cap-s">
                                    <h5><a href="#">Playlist Name</a></h5>
                                    <p>Description with some words to look important</p>
                                    <div class="sli-foot">
                                        <div class="pull-l eft numbers">
                                            <p>415 <i class="fa fa-eye"></i></p>
                                            <p>402 <i class="fa fa-thumbs-up"></i></p>
                                        </div>
                                        <div class="pull-ri ght sm-numbers">
                                            <span class="number">15</span> Films
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                            
                    </div>                    
                </div>

            </div>
        </div>

<?php get_footer(); ?>



<script type="text/javascript">
	
	jQuery(document).ready(function($) {
		

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
		
		
		$('.staffpick-category').click(function(event){
							
			event.preventDefault();
			var postid = $(event.target).attr('data-post-id');
			
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
		console.log(response);
		if(response)
		{
			html+=
					'<div class="inside-script">'
					
								// +'<video id="bg-video" '
									// +'class="video-js vjs-default-skin" '
									// +'height="auto" '
									// +'width="auto" '
									// +'poster="'+response.featured_image+'" '
									// +'loop'
									// +'controls'
									// +'data-setup={ "techOrder": ["youtube"], "quality":"720p", "playsInline": true, "src":" '+ response.videourl+'"}">'

								  // +'<p>Your browser doesnot support video. Please <a href="http://browsehappy.com/">upgrade your browser</a> to see the example'
								  // +'</p>'
								// +'</video>'
					
							+'<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/'+response.slug+'">'
							+'<img src=" '+response.featured_image+' " alt="" class="img-responsive width-full">'
							
							+'<div class="role-settings">'
								+'<div class="row">'
									+'<div class="col-md-9">'
										+'<div class="pull-left">'
											+'<h3>'+response.title+'<small><em> by '+response.director+'</em></small></h3>'
										+'</div>'
									+'</div>'
									+'<div class="col-md-3">'
										+'<div class="pull-right">'
										
											+'<div class="pull-right share-button2">'						
											+'</div>'
										+'</div>'
									+'</div>'
								+'</div>'
								+'<hr class="m-t-0 m-b-5">'
								+'<div class="row">'
									+'<div class="col-xs-6">'
										+'<h5 class="m-t-0 m-b-0"><small><em>'+response.tagline+'</em></small></h5>'
										+'<h5 class="m-t-0 m-b-0"><small><em>'+response.duration+' Min / '+response.region[0]+' </em></small></h5>'
										+'<h5 class="m-t-0 m-b-0"><small><em>'+response.categories[0]+'</em></small></h5>'
									+'</div>'
									+'<div class="col-xs-6 text-right">'
										+'<div>'+response.no_of_views+'<i class="fa fa-eye"></i></div>'
										+'<div>'+response.post_like_count+'<i class="fa fa-thumbs-up"></i></div>'
										+'<div>Watchlist <i class="fa fa-binoculars"></i></div>'
									+'</div>'
								+'</div>'
							+'</div>'
						+'</a>'	
					+'</div>'		
		
			;
		
			jQuery('.staffpick-display-section').html(html);
			
			jQuery('.staffpick-display-section').find(".share-button2").html("<?php echo addslashes (do_shortcode("[ssba]")); ?>");
			
		}
		else
		{
			jQuery('.staffpick-display-section').html("");
			html += "<div>No posts found.</div>";
			jQuery('.staffpick-display-section').html(html);
		}
		
    } // end of generate_data
				
	
	});  // end of document.ready function

</script>
























