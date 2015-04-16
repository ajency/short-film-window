<?php
/*
YARPP Template: Slick Slider
Description: Requires a theme which supports post thumbnails
Author: mitcho (Michael Yoshitaka Erlewine)
*/ ?>

<!--<h3>Related Photos</h3>-->

<?php if (have_posts()):?>

    <div class="slider2 regular-slider cap-show-on-hover">
        <?php while (have_posts()) : the_post(); ?>
            
                <div class="slide-cont">
                    <?php if (has_post_thumbnail()):
                        the_post_thumbnail('full');
                    else:?>
                        <img src="<?php echo get_stylesheet_directory_uri() ?>/assets/img/placeholder.jpg" />
                    <?php endif; ?>
                    <div class="cap-s">
                        <h5><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
                            <?php the_title_attribute(); ?>
                        </a><!-- (<?php the_score(); ?>)--></h5>
                        <p>
                            <?php echo get_the_excerpt(); ?>
                        </p>
                    </div>
                </div>
            
        <?php endwhile; ?>
    </div>

<?php else: ?>
<p>No related photos.</p>
<?php endif; ?>
