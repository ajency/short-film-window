<?php
/*
Template Name: category_template
*/
?>


<?php get_header(); ?>

        <!--Navigation--> 
			<!-- <div id="content" class="clearfix row">
			
				<div id="main" class="col-sm-8 clearfix" role="main">
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
            <div class="content-wrapper">

                <div class="row">
                    <div class="col-md-6">
                        <h2>EXPLORE</h2>
                    </div>
					<div class="col-md-3 col-md-offset-3 col-sm-12">
						<div class="m-t-20">
                            <form action="" class="">
                                <div class="form-group">
                                    <input type="text" class="form-control search" value="" placeholder="Search"/>
                                </div>
                            </form>
                        </div>
					</div>
                </div>

                <hr class="m-t-0">
                
                <div class="row">
                    <div class="col-md-5">
                		<h5>FILTER BY</h5>
                        <form action="" class="form-horizontal">
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
                        </form>
                        <form action="" class="form-horizontal">
                            <div class="form-group">
                                <label for="" class="col-md-3 control-label"><em>Language:</em> </label>
                                <div class="col-md-9">
                                	<select name="language" id="language">
                                        <option value="">All</option>
                                        <option value="ENGLISH">ENGLISH</option>
                                        <option value="FRENCH">FRENCH</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4 col-md-offset-3">
                    	 <h5>SORT BY</h5>
                        <form action="" class="">
                            <div class="form-group">
                                <select name="sort" id="sort">
                                    <option value="1">Freshness</option>
                                    <option value="2">Popularity</option>
                                    <option value="3">Length</option>
                                </select>
                            </div>
                        </form>
                        <div class="row">
                            <div class="col-xs-4">
                                <a href="#" id="gridoption" class="option" title="Grid"><i class="fa fa-th-large fa-3x"></i></a>
                            </div>
                            <div class="col-xs-4 text-center">
                                <a href="#" id="listoption"  class="option"title="List"><i class="fa fa-th-list fa-3x"></i></a>
                            </div>
                            <div class="col-xs-4 text-right">
                                <a href="#" id="couchoption" class="option" title="Couch"><i class="fa fa-list-alt fa-3x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="spacer-40"></div><div class="loader"></div><div class="all_posts">
                <?php 
 					
 				$args = array(
					'orderby'           => 'post_date',
					'order'             => 'DESC',
					'genre'		    	=> '',
					'language'			=> '',
					'posts_per_page'   	=> 12,
					'offset'           	=> 0,


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
                            <div class="grid-box grid-full content-align-bottom">
                                <a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value[0]['slug'];?>">
                                    <div class="grid-image">
                                        <img src="<?php echo $value[0]['featured_image'] ;?>">
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
                                        <div class="grid-meta"><?php echo implode(', ',$value[1]['categories']);?></div>
                                        <div class="grid-meta <?php echo $value[1]['class'] ;?>">DIR.<?php echo  ucfirst($value[1]['director']);?></div>

                                    </div>
                                    <div class="grid-text-wrap hover-text">
                                        <div class="grid-title"><?php echo $value[1]['title'];?></div>
                                        <div class="grid-meta">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[1]['class'] ;?>">
                                                        <i class="fa fa-binoculars fa-2x"></i><br>Watchlist
                                                    </div>

                                                    <div class="pull-left p-l-10 m-t-10 <?php echo $value[1]['class'] ;?>">
                                                        <div><?php echo $value[1]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[1]['class'] ;?>"><?php echo $value[1]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-8">
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
                                        <div class="grid-meta"><?php echo implode(', ',$value[2]['categories']);?></div>
                                        <div class="grid-meta <?php echo $value[2]['class'] ;?>">DIR.<?php echo  ucfirst($value[2]['director']);?></div>
                                    </div>
                                    <div class="grid-text-wrap hover-text">
                                        <div class="grid-title"><?php echo $value[2]['title'];?></div>
                                        <div class="grid-meta">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[2]['class'] ;?>">
                                                        <i class="fa fa-binoculars fa-2x"></i><br>Watchlist
                                                    </div>
                                                    <div class="pull-left p-l-10 m-t-10 <?php echo $value[2]['class'] ;?>">
                                                        <div><?php echo $value[2]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[2]['class'] ;?>"><?php echo $value[2]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-8">
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
                                        <div class="grid-meta"><?php echo implode(', ',$value[3]['categories']);?></div>
                                        <div class="grid-meta <?php echo $value[3]['class'] ;?>">DIR.<?php echo  ucfirst($value[3]['director']);?></div>
                                    </div>
                                    <div class="grid-text-wrap hover-text">
                                        <div class="grid-title"><?php echo $value[3]['title'];?></div>
                                        <div class="grid-meta">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[3]['class'] ;?>">
                                                        <i class="fa fa-binoculars fa-2x"></i><br>Watchlist
                                                    </div>
                                                    <div class="pull-left p-l-10 m-t-10 <?php echo $value[3]['class'] ;?>">
                                                        <div><?php echo $value[3]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[3]['class'] ;?>"><?php echo $value[3]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-8">
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
                                        <div class="grid-meta"><?php echo implode(', ',$value[4]['categories']);?></div>
                                        <div class="grid-meta <?php echo $value[4]['class'] ;?>">DIR.<?php echo  ucfirst($value[4]['director']);?></div>
                                    </div>
                                    <div class="grid-text-wrap hover-text">
                                        <div class="grid-title"><?php echo $value[4]['title'];?></div>
                                        <div class="grid-meta">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="pull-left text-center m-t-10 <?php echo $value[4]['class'] ;?>">
                                                        <i class="fa fa-binoculars fa-2x"></i><br>Watchlist
                                                    </div>
                                                    <div class="pull-left p-l-10 m-t-10 <?php echo $value[4]['class'] ;?>">
                                                        <div><?php echo $value[4]['no_of_views'];?><i class="fa fa-eye"></i></div>
                                                        <div class="<?php echo $value[4]['class'] ;?>"><?php echo $value[4]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-8">
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
                                        <div class="grid-meta"><?php echo implode(', ',$value[5]['categories']);?></div>
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
                                                        <div class="<?php echo $value[5]['class'] ;?>"><?php echo $value[5]['post_like_count'];?><i class="fa fa-thumbs-up"></i></div>
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
      }
        
                	foreach ($response as $key => $value) {
							if(count($value['region']) == 0)
								$value['region'] = array(0 => 'No regions added');
				 
                ?>
                <div class="row listlayout">
                    <div class="col-md-5">
                         <img src="<?php echo $value['featured_image'];?>" class="img-responsive width-full">
                    </div>
                    <div class="col-md-7">
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="m-t-0">
                                	<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
                                		<?php echo $value['title'];?>
                                	</a>
                                	<small><em>By <?php echo ucfirst($value['director']);?></em></small>
                                </h4>
                            </div>
<!--
                            <div class="col-md-4">
                                
                            </div>
-->
                        </div>
                        <hr class="m-t-0 m-b-5">
                        <div class="row">
                            <div class="col-xs-8 cont">
                                <p><?php echo $value['excerpt'];?></p>
                                <h6 class="m-t-30 m-b-0"><?php echo implode(', ',$value['region']);?>/<?php echo $value['duration'];?> MIN</h6>
                                <h6 class="m-t-0 m-b-0">Dir: <?php echo ucfirst($value['director']);?></h6>
                                <p class="categories">
                                    <span class="label label-greydark">
                                        <?php echo implode('</span><span class="label label-greydark">',$value['categories']);?>
                                    </span>
                                </p>
                            </div>
                            <?php echo $value['permalink']; ?>
                            <div class="col-xs-4 text-right list-info-btns">
                                <div class="soc-ico nh">
                                   <?php echo do_shortcode("[ssba]"); ?>
                                </div>
                                <div class="share-button hidden">
                                    <div class="social-toggle"><i class="fa fa-share"></i> Share</div>
                                    
                                    <div class="social-networks">
                                        <ul>
                                            <li class="social-twitter">
                                                <a href="https://twitter.com/share"><i class="fa fa-twitter fa-lg"></i></a>
                                            </li>
                                            <li class="social-facebook">
                                                <a href="http://www.facebook.com/sharer.php?u=http://<?php echo get_permalink(); ?>" target="_blank"><i class="fa fa-facebook-square fa-lg"></i></a>
                                            </li>
                                            <li class="social-pin">
                                                <a href="http://pinterest.com/pin/create/link/?url=http://<?php echo get_permalink(); ?>" target="_blank"><i class="fa fa-pinterest fa-lg"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="lico_c">
                                    <div class="lico small"><?php echo $value['no_of_views'];?> <i class="fa fa-eye"></i></div>
                                    <div class="lico like-action">
<!--                                        <span class="m-l-5 m-r-5">|</span>-->
                                        <?php echo $value['post_like_count'] ;?> <i class="fa fa-thumbs-up"></i>
<!--                                        <span class="m-l-5 m-r-5">|</span>-->
                                    </div>
                                    <div class="lico watchlist-add"> 
                                        <a href="#"><i class="fa fa-binoculars"></i> Add to Watchlist </a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>	                
                </div>

	            <div class="couchlayout">	            	
            		<img src="<?php echo $value['featured_image'];?>" alt="" class="img-responsive width-full">
                    <div class="row">
                        <div class="col-sm-10">
                            <h3 class="pull-l eft">
                                <a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
                                	<?php echo $value['title'];?>
                                </a>
                                <small><em>by <?php echo ucfirst($value['director']);?></em></small>	                                
                            </h3>
                        </div>
                        <div class="col-sm-2">
                            <div class="soc-ico nh pull-right" style="margin-top: 35px;">
                               <?php echo do_shortcode("[ssba]"); ?>
                            </div>
                                
                            <div class="pull-right share-button hidden">
                                <div class="social-toggle"><i class="fa fa-share"></i> Share</div>
                                    <div class="social-networks">
                                      <ul>
                                        <li class="social-twitter">
                                          <a href="https://twitter.com/share"><i class="fa fa-twitter fa-lg"></i></a>
                                        </li>
                                        <li class="social-facebook">
                                        <a href="http://www.facebook.com/sharer.php?u=http://<?php echo get_permalink(); ?>" target="_blank"><i class="fa fa-facebook-square fa-lg"></i></a>
                                        </li>
                                        <li class="social-pin">
                                        <a href="http://pinterest.com/pin/create/link/?url=http://<?php echo get_permalink(); ?>" target="_blank"><i class="fa fa-pinterest fa-lg"></i></a>
                                        </li>
                                      </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <hr class="m-t-0 m-b-5">
                    <div class="row main-ex">
                        <div class="col-xs-9 cont">
                            <p><em><?php echo $value['excerpt'];?></em></p>
                            
                            <h6 class="m-t-30 m-b-0"><em><?php echo implode(',',$value['region']);?> / <?php echo $value['duration'];?> MIN</em></h6>
                            <p class="categories">
                                <span class="label label-greydark">
                                    <?php echo implode('</span><span class="label label-greydark">',$value['categories']);?>
                                </span>
                            </p>
                        </div>
                        
                        <div class="col-xs-3 text-right">
                            <div class="">
                                
                                <div class="lico_c social-strip">
                                    <div class="lico small"><?php echo $value['no_of_views'];?><i class="fa fa-eye"></i></div>
                                    
                                    <div class="lico like-action">
<!--                                        <span class="m-l-5 m-r-5">|</span>-->
                                        <?php echo $value['post_like_count'] ;?> <i class="fa fa-thumbs-up"></i>
<!--                                        <span class="m-l-5 m-r-5">|</span>-->
                                    </div>
                                    
                                    <div class="lico watchlist-add"> 
                                        <a href="#"><i class="fa fa-binoculars"></i> Add to Watchlist </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    </div>
                    
                    <hr class="m-t-20 m-b-20">
                    
                    <div class="spacer-20"></div>
                    <p><em><?php echo $value['excerpt'];?></em></p>                    
	            </div>
              

                
        <!-- /container -->
       

					
						 <!-- end article -->
					
					<?php }

					}?></div> 

 					<div class="spacer-40"></div>
 					<input type="hidden" name="tracker" id="tracker" value="" / >
					</div> <div class="text-center">
					<input type="hidden" name="offset" id="offset" value="0" />
                    <input type="hidden" name="searchids" id="searchids" value="0" />
                    <a href="#" class="btn btn-primary load_more">Load More...</a>
                </div>
                <div class="spacer-40"></div>

                <a id="next" href="<?php echo site_url() ;?>/wp-json/page2/tagposts?tag=trending"></a>
       
                    
                <div class="trending">
                </div>

                <div class="spacer-40"></div>

                <a id="award" href="<?php echo site_url() ;?>/wp-json/page2/catposts?cat=awardwinning"></a>
       
                    
                <div class="awardwinning">
                </div>

                <div class="spacer-40"></div>

                <a id="indian" href="<?php echo site_url() ;?>/wp-json/page2/catposts?cat=indian"></a>
       
                    
                <div class="indian">
                </div>
    
    
				
    
			 <!-- end #content -->

			<?php get_footer(); ?>

<script type="text/javascript">

window.onload = function() {
	jQuery('#tracker').val('gridoption');
	
	jQuery('#gridoption').children().addClass('text-primary');
    count = parseInt(jQuery('#offset').val()) + parseInt("<?php echo count($response) ;?>");
	count=count-1;
    jQuery('#offset').val(count);
	
	jQuery('#genre').live('change',function(e){
        jQuery('#searchids').val("");
        jQuery('.search').val("");
		jQuery('#offset').val(0)
		jQuery('.loader').text("Loading data...")
		jQuery('.all_posts').html("")
		get_all_posts();
	    

		
	});


	jQuery('#language').live('change',function(e){

        
		jQuery('#genre').trigger('change');
	});

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

    jQuery('#sort').live('change',function(e){
        e.preventDefault();
        data = 'sort='+jQuery(e.target).val()
        jQuery.ajax({
                type : 'GET',
                url : SITEURL+'/wp-json/sort',
                data : data,
                success:function(response){
                    jQuery('.loader').text("Loading data...")
                    jQuery('.all_posts').html("")
                    generate_data(response);


                    },
                    error:function(response){

                    }

        });
        
        
        
        
    });

    jQuery('.search').live('change',function(e){
        e.preventDefault();
        jQuery('#genre').val("");
        jQuery('#language').val("");
        jQuery('#offset').val(0);
        data = 'title='+jQuery(e.target).val();
        jQuery.ajax({
                type : 'GET',
                url : SITEURL+'/wp-json/filters',
                data : data,
                success:function(response){
                    jQuery('#offset').val(0)
                    jQuery('.loader').text("Loading data...")
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
                    generate_data(response);
                },
                error:function(response){

                }
        });
        
        
        
    });

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
	}

	function get_all_posts(){

        jQuery('.all_posts').html('');
		genre = jQuery('#genre').val();
		language = jQuery('#language').val();
		posts_per_page = 12;
		offset = jQuery('#offset').val();
		data = 'genre='+genre+'&language='+language+'&posts_per_page='+posts_per_page+'&offset='+offset+'&exclude='+jQuery('#searchids').val();
		

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
					jQuery('.all_posts').html('No Posts found');
					
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
					'featured_image':image,
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
        // behavior     : 'twitter',
        appendCallback  : false, // USE FOR PREPENDING
        // pathParse        : function( pathStr, nextPage ){ return pathStr.replace('2', nextPage ); }
    }, function( response ) {
        html = '<h3>TRENDING</h3><hr class="m-t-0"><div class="slider1 regular-slider">'
        jQuery.each(response,function(index,value){

                

                html += '<div>'
                        +'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value.slug+'"><div class="focus-img">'
                           +' <img src="'+value.featured_image+'" class="img-responsive">'
                       +' </div></a>'
                    +'</div>'


        });
       
               
               
                   
        html +='</div>';

        jQuery('.trending').html(html);
        loadslick();
                        
                        
    });
    jQuery('.awardwinning').infinitescroll({
    
        navSelector     : "a#award:last",
        nextSelector    : "a#award:last",
        itemSelector    : ".awardwinning",
        debug           : true,
        dataType        : 'json',
        // behavior     : 'twitter',
        appendCallback  : false, // USE FOR PREPENDING
        // pathParse        : function( pathStr, nextPage ){ return pathStr.replace('2', nextPage ); }
    }, function( response ) {
        html = '<h3>AWARD WINNING</h3><hr class="m-t-0"><div class="slider1 regular-slider">'
        jQuery.each(response,function(index,value){

               
                html += '<div>'
                        +'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value.slug+'"><div class="focus-img">'
                           +' <img src="'+value.featured_image+'" class="img-responsive">'
                       +' </div></a>'
                    +'</div>'


        });
       
               
               
                   
        html +='</div>';

        jQuery('.awardwinning').html(html);
          loadslick();               
                        
    });
    jQuery('.indian').infinitescroll({
    
        navSelector     : "a#indian:last",
        nextSelector    : "a#indian:last",
        itemSelector    : ".indian",
        debug           : true,
        dataType        : 'json',
        // behavior     : 'twitter',
        appendCallback  : false, // USE FOR PREPENDING
        // pathParse        : function( pathStr, nextPage ){ return pathStr.replace('2', nextPage ); }
    }, function( response ) {
        html = '<h3>INDIAN</h3><hr class="m-t-0"><div class="slider1 regular-slider">'
        jQuery.each(response,function(index,value){

                html += '<div>'
                        +'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value.slug+'"><div class="focus-img">'
                           +' <img src="'+value.featured_image+'" class="img-responsive">'
                       +' </div></a>'
                    +'</div>'


        });
       
               
               
                   
        html +='</div>';

        jQuery('.indian').html(html);
        loadslick();
                        
                        
    });


    function generate_data(response){

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
                            +'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value[0]['slug']+'">'
                                +'<div class="grid-image">'
                                    +'<img src="'+value[0]['featured_image']+'">'
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
                                            +'<div class="col-sm-4">'
                                                +'<div class="pull-left text-center m-t-10 '+value[0]['class']+'">'
                                                    +'<i class="fa fa-binoculars fa-2x"></i><br>Watchlist'
                                                +'</div>'
                                                +'<div class="pull-left p-l-10 m-t-10 '+value[0]['class']+'">'
                                                    +'<div>'+value[0]['no_of_views']+'<i class="fa fa-eye"></i></div>'
                                                    +'<div class="'+value[0]['class']+'">'+value[0]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
                                                +'</div>'
                                            +'</div>'
                                           +' <div class="col-sm-8">'
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
                            +'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value[1]['slug']+'">'
                                +'<div class="grid-image">'
                                    +'<img src="'+value[1]['featured_image']+'">'
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
                                           +' <div class="col-sm-4">'
                                                +'<div class="pull-left text-center m-t-10 '+value[1]['class']+'">'
                                                   +' <i class="fa fa-binoculars fa-2x"></i><br>Watchlist'
                                                +'</div>'
                                                +'<div class="pull-left p-l-10 m-t-10 '+value[1]['class']+'">'
                                                   +' <div>'+value[1]['no_of_views']+'<i class="fa fa-eye"></i></div>'
                                                    +'<div class="'+value[1]['class']+'">'+value[1]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
                                               +' </div>'
                                            +'</div>'
                                           +' <div class="col-sm-8">'
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
                           +' <a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value[2]['slug']+'">'
                                +'<div class="grid-image">'
                                   +' <img src="'+value[2]['featured_image']+'">'
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
                                            +'<div class="col-sm-4">'
                                                +'<div class="pull-left text-center m-t-10 '+value[2]['class']+'">'
                                                   +' <i class="fa fa-binoculars fa-2x"></i><br>Watchlist'
                                               +' </div>'
                                                +'<div class="pull-left p-l-10 m-t-10 '+value[2]['class']+'">'
                                                   +' <div>'+value[2]['no_of_views']+'<i class="fa fa-eye"></i></div>'
                                                    +'<div class="'+value[2]['class']+'">'+value[2]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
                                               +' </div>'
                                            +'</div>'
                                            +'<div class="col-sm-8">'
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
                            +'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value[3]['slug']+'">'
                                +'<div class="grid-image">'
                                   +' <img src="'+value[3]['featured_image']+'">'
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
                                           +' <div class="col-sm-4">'
                                               +' <div class="pull-left text-center m-t-10 '+value[3]['class']+'">'
                                                    +'<i class="fa fa-binoculars fa-2x"></i><br>Watchlist'
                                                +'</div>'
                                                +'<div class="pull-left p-l-10 m-t-10 '+value[3]['class']+'">'
                                                   +' <div>'+value[3]['no_of_views']+'<i class="fa fa-eye"></i></div>'
                                                   +' <div class="'+value[3]['class']+'">'+value[3]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
                                                +'</div>'
                                           +' </div>'
                                            +'<div class="col-sm-8">'
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
                            +'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value[4]['slug']+'">'
                                +'<div class="grid-image">'
                                    +'<img src="'+value[4]['featured_image']+'">'
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
                                           +' <div class="col-sm-4">'
                                                +'<div class="pull-left text-center m-t-10 '+value[4]['class']+'">'
                                                   +' <i class="fa fa-binoculars fa-2x"></i><br>Watchlist'
                                                +'</div>'
                                                +'<div class="pull-left p-l-10 m-t-10 '+value[4]['class']+'">'
                                                   +' <div>'+value[4]['no_of_views']+'<i class="fa fa-eye"></i></div>'
                                                   +' <div class="'+value[4]['class']+'">'+value[4]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
                                               +' </div>'
                                           +' </div>'
                                           +' <div class="col-sm-8">'
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
                            +'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value[5]['slug']+'">'
                                +'<div class="grid-image">'
                                    +'<img src="'+value[5]['featured_image']+'">'
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
                                           +' <div class="col-sm-4">'
                                               +' <div class="pull-left text-center m-t-10 '+value[5]['class']+'">'
                                                    +'<i class="fa fa-binoculars fa-2x"></i><br>Watchlist'
                                                +'</div>'
                                               +' <div class="pull-left p-l-10 m-t-10 '+value[5]['class']+'">'
                                                   +'<div>'+value[5]['no_of_views']+'<i class="fa fa-eye"></i></div>'
                                                    +'<div class="'+value[5]['class']+'">'+value[5]['post_like_count']+'<i class="fa fa-thumbs-up"></i></div>'
                                                +'</div>'
                                            +'</div>'
                                           +' <div class="col-sm-8">'
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
                                value.region = ['No regions added'];}
                        


                        html += '<div class="row listlayout">'
                    + '<div class="col-md-5">'
                         + '<img src="'+value.featured_image+'" class="img-responsive width-full">'
                    + '</div>'
                    + '<div class="col-md-7">'
                        + '<div class="row">'
                            + '<div class="col-md-12">'
                                + '<h4 class="m-t-0">'
                                	+ '<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value.slug+'">'
                                		+ value.title
                                	+ '</a>'
                                	+ '<small><em>By '+value.director+'</em></small>'
                                + '</h4>'
                            + '</div>'
                        + '</div>'
                        + '<hr class="m-t-0 m-b-5">'
                        + '<div class="row">'
                            + '<div class="col-xs-8 cont">'
                                + '<p>'+value.excerpt+'</p>'
                                + '<h6 class="m-t-30 m-b-0">'+value.region.join(',')+'/'+value.duration+' MIN</h6>'
                                + '<h6 class="m-t-0 m-b-0">Dir: '+value.director+'</h6>'
                                + '<p class="categories">'
                                    + '<span class="label label-greydark">'
                                        + value.categories.join('</span><span class="label label-greydark">')
                                    + '</span>'
                                + '</p>'
                            + '</div>'
                            + '<div class="col-xs-4 text-right list-info-btns">'
                                + '<div class="soc-ic o nh">'
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
                                + '</div>'
                                + '<div class="lico_c">'
                                    + '<div class="lico small">'+value.no_of_views+' <i class="fa fa-eye"></i></div>'
                                    + '<div class="lico like-action">'
                                    + value.post_like_count+' <i class="fa fa-thumbs-up"></i>'
                                    + '</div>'
                                    + '<div class="lico watchlist-add"> '
                                        + '<a href="#"><i class="fa fa-binoculars"></i> Add to Watchlist </a>'
                                    + '</div>'
                                + '</div>'
                            + '</div>'
                        + '</div>'
                    + '</div>'
                + '</div>';


                 html += '<div class="couchlayout">'
            		+ '<img src="'+value.featured_image+'" alt="" class="img-responsive width-full">'
                    + '<div class="row">'
                        + '<div class="col-sm-10">'
                            + '<h3 class="pull-l eft">'
                                + '<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value.slug+'">'
                                	+ value.title
                                + '</a>'
                                + '<small><em>by '+value.director+'</em></small>'    
                            + '</h3>'
                        + '</div>'
                        + '<div class="col-sm-2">'
                            + '<div class="pull-right share-button">'
                                + '<div class="social-toggle"><i class="fa fa-share"></i> Share</div>'
                                    + '<div class="social-networks">'
                                      + '<ul>'
                                        + '<li class="social-twitter">'
                                          + '<a href="https://twitter.com/share"><i class="fa fa-twitter fa-lg"></i></a>'
                                        + '</li>'
                                        + '<li class="social-facebook">'
                                        + '<a href="http://www.facebook.com/sharer.php?u=http://<?php echo get_permalink(); ?>" target="_blank"><i class="fa fa-facebook-square fa-lg"></i></a>'
                                        + '</li>'
                                        + '<li class="social-pin">'
                                        + '<a href="http://pinterest.com/pin/create/link/?url=http://<?php echo get_permalink(); ?>" target="_blank"><i class="fa fa-pinterest fa-lg"></i></a>'
                                        + '</li>'
                                      + '</ul>'
                                    + '</div>'
                                + '</div>'
                        + '</div>'
                    + '</div>'
                    + '<hr class="m-t-0 m-b-5">'
                    + '<div class="row main-ex">'
                        + '<div class="col-xs-9 cont">'
                            + '<p><em>'+value.excerpt+'</em></p>'
                            
                            + '<h6 class="m-t-30 m-b-0"><em>'+value.region.join(', ')+'/'+value.duration+' MIN</em></h6>'
                            + '<p class="categories">'
                                + '<span class="label label-greydark">'
                                    + value.categories.join('</span><span class="label label-greydark">')
                                + '</span>'
                            + '</p>'
                        + '</div>'
                        
                        + '<div class="col-xs-3 text-right">'
                            + '<div class="">'
                                + '<div class="lico_c social-strip">'
                                    + '<div class="lico small">'+value.no_of_views+' <i class="fa fa-eye"></i></div>'
                                    + '<div class="lico like-action">'
                                        + value.post_like_count+' <i class="fa fa-thumbs-up"></i>'
                                    + '</div>'
                                    + '<div class="lico watchlist-add">'
                                        + '<a href="#"><i class="fa fa-binoculars"></i> Add to Watchlist </a>'
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
                        html += "<div>No posts found.</div>";
                        jQuery('.all_posts').html(html);
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