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
            
                <div class="col-xs-4">
                   <div class="grid-box grid-full content-align-bottom">
                       <a class="content-bottom" target="_blank" href="<?php the_permalink()?>">
                           <div class="grid-image">
                               <?php if (has_post_thumbnail()):
                                   the_post_thumbnail('full');
                               else:?>
                                   <img src="<?php echo get_stylesheet_directory_uri() ?>/assets/img/placeholder.jpg" />
                                <?php endif; ?>
                           </div>
                           <div class="grid-text-wrap">
                               <div class="grid-title"><?php the_title_attribute(); //echo $recentvideo['title'];?></div>
                               <div class="grid-meta">Region<?php //echo implode(',',$recentvideo['region']);?>/<?php echo $recentvideo['duration'];?> MIN</div>
                               <div class="grid-meta">Category<?php //echo implode(',',$recentvideo['categories']);?></div>
                               <div class="grid-meta">DIR. Director<?php //echo  ucfirst($recentvideo['director']);?></div>
                            </div>
                           <div class="grid-text-wrap hover-text">
                               <div class="grid-title">
                                   <?php the_title_attribute(); //echo $recentvideo['title'];?>
                               </div>
                               <div class="grid-meta">
                                   <div class="row">
                                       <div class="col-xs-4">
                                           <div class="pull-left p-l-10 m-t-10">
                                               <div>
                                                   <?php //echo $recentvideo['no_of_views'];?>
                                                   <i class="fa fa-eye"></i>
                                               </div>
                                               <div>
                                                   <?php //echo $recentvideo['post_like_count'];?>
                                                   <i class="fa fa-thumbs-up"></i>
                                               </div>
                                           </div>
                                       </div>
                                       <div class="col-xs-8">
                                           <div class="pull-right text-right m-t-10">
                                               <?php echo get_the_excerpt(); //echo $recentvideo['excerpt'];?>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div class="overlay-vertical"></div>
                       </a>
                    </div>
                </div>
            
        <?php endwhile; ?>
    </div>
   
    

<?php else: ?>
<p>No related photos.</p>
<?php endif; ?>
