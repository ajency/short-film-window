<?php
/*
YARPP Template: Slick Slider
Description: Requires a theme which supports post thumbnails
Author: mitcho (Michael Yoshitaka Erlewine)
*/ ?>

<!--<h3>Related Photos</h3>-->

<?php if (have_posts()):?>




    <div class="row sim_mov">
        <?php while (have_posts()) : the_post(); ?>

				<?php
						$postid = get_the_ID();
						$response = Film\Video::get($postid);
						//print_r($response);
				?>

                <div class="col-sm-4">
                   <div class="grid-box grid-full content-align-bottom">

						<!-- <a class="content-bottom" href="<?php// echo site_url();?>/<?php// echo $response['slug']; ?>"> -->

                        <a class="content-bottom" href="<?php the_permalink(); ?>">
                           <div class="grid-image" style="background-image: url(
                               <?php if (has_post_thumbnail()): ?>
                                   <?php

                                    $image_attributes = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID), 'thumbnail');

                                    echo $image_attributes[0];


                                   ?>


                                   <?php //the_post_thumbnail('thumbnail'); ?>
                               <?php else:?>
                                   <?php echo get_stylesheet_directory_uri() ?>/assets/img/placeholder.jpg
                                <?php endif; ?>
                                );">
                           </div>
                           <div class="grid-text-wrap">
                               <div class="grid-title"><?php the_title_attribute(); //echo $response['title'];?></div>
                               <div class="grid-meta"><?php echo implode(', ',$response['region']);?>/<?php echo $response['duration'];?> MIN</div>
                               <div class="grid-meta"><?php echo implode(', ',$response['categories']);?></div>
                               <div class="grid-meta">DIR. <?php echo  ucfirst($response['director']);?></div>
                            </div>
                           <div class="grid-text-wrap hover-text">
                               <div class="grid-title">
                                   <?php the_title_attribute(); //echo $response['title'];?>
                               </div>
                               <div class="grid-meta">
                                   <div class="row">
                                       <div class="col-xs-4">
                                           <div class="pull-left p-l-10 m-t-10">
                                               <div>
                                                   <?php echo $response['no_of_views'];?>
                                                   <i class="fa fa-eye"></i>
                                               </div>
                                               <div>
                                                   <?php echo $response['post_like_count'];?>
                                                   <i class="fa fa-thumbs-up"></i>
                                               </div>
                                           </div>
                                       </div>
                                       <div class="col-xs-8">
                                           <div class="pull-right text-right m-t-10">
                                               <?php echo get_the_excerpt(); //echo $response['excerpt'];?>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
						</a>
						 <a class="overlay-vertical" href="<?php the_permalink(); ?>">
						 </a>

                    </div>
                </div>

        <?php endwhile; ?>
    </div>



<?php else: ?>
<p>No related videos.</p>
<?php endif; ?>
