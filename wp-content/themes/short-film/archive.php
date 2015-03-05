<?php get_header(); ?>
			<div class="header">
            <div class="logo">
                <img src="../assets/img/logo.jpg">
            </div>
            <div class="pull-right">
                <div class="links pull-left">
                    <a href="#">LOGIN</a>
                    <span>|</span>
                    <a href="#">SEARCH</a>
                </div>
                <div class="social-links pull-left">
                    <div class="fb link">
                        <div class="icon">
                            <i class="fa fa-facebook fa-lg fa-fw"></i>
                        </div>
                        <div class="action"><a href="#"><small>Like</small></a></div>                        
                    </div>
                    <div class="clearfix"></div>
                    <div class="twitter link">
                        <div class="action"><a href="#"><small>Follow</small></a></div>
                        <div class="icon">
                            <i class="fa fa-twitter fa-lg fa-fw"></i>
                        </div>
                    </div>
                </div>                
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="sub-header">
            <a href="#">Home</a>
            <span>|</span>
            <a href="#">Movies</a>
            <span>|</span>
            <a href="#">Playlists</a>
            <span>|</span>
            <a href="#">Articles</a>
            <span>|</span>
            <a href="#">Submit Films</a>
        </div>
            
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
                    <div class="col-md-6">
                        <div class="pull-right m-t-20">
                            <form action="" class="form-horizontal">
                                <div class="form-group">
                                    <div class="col-md-12"><input type="text" class="form-control" placeholder="Search"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <hr class="m-t-0">
                
                <div class="row">
                    <div class="col-md-10 col-md-offset-1">
                        <h5>FILTER BY</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <form action="" class="form-horizontal">
                                    <div class="form-group">
                                        <label for="" class="col-md-3 control-label"><em>Genre:</em> </label>
                                        <div class="col-md-9"><select name="genre" id="genre">
                                                <option value="">all</option>
                                                <?php 
												  $categories = get_categories(); 
												  foreach ($categories as $category) {
												  	$option = '<option value="'.$category->term_id.'">';
													$option .= $category->cat_name;
													$option .= '</option>';
													echo $option;
												  }
												 ?>
                                            </select></div>
                                    </div>
                                </form>
                                <form action="" class="form-horizontal">
                                    <div class="form-group">
                                        <label for="" class="col-md-3 control-label"><em>Language:</em> </label>
                                        <div class="col-md-9"><select name="language" id="language">
                                                <option value="">all</option>
                                                <option value="ENGLISH">ENGLISH</option>
                                                <option value="FRENCH">FRENCH</option>
                                            </select></div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-md-6 text-right">
                                <form action="" class="form-horizontal">
                                    <div class="form-group">
                                        <label for="" class="col-md-3 control-label"><em>SORT BY:</em> </label>
                                        <div class="col-md-9"><select name="" id="">
                                                <option value="">all</option>
                                            </select></div>
                                    </div>
                                </form>
                                <a href="#"><i class="fa fa-th-large fa-2x"></i></a>
                                <a href="#"><i class="fa fa-th-list fa-2x"></i></a>
                                <a href="#"><i class="fa fa-list-alt fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="spacer-40"></div><div class="all_posts">
                <?php $args = array(
					'orderby'           => 'post_date',
					'order'             => 'DESC',
					'genre'		    	=> '',
					'language'			=> '',
					'posts_per_page'   	=> 1,
					'offset'           	=> 0,


				);
				$response = Film\Video::get_many($args);
				if(count($response) > 0)
					{ 
						foreach ($response as $key => $value) {
					
				 ?>
                <div class="row">
                    <div class="col-sm-6 multi-grid">
                        <div class="grid-box grid-full content-align-bottom">
                            <a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
                                <div class="grid-image">
                                    <img src="<?php echo $value['featured_image'];?>">
                                </div>
                                <div class="grid-text-wrap">
                                    <div class="grid-title"><?php echo $value['title'];?></div>
                                    <div class="grid-meta"><?php echo implode(',',$value['region']);?>/<?php echo $value['duration'];?> MIN</div>
                                    <div class="grid-meta"><?php echo implode(',',$value['categories']);?></div>
                                    <div class="grid-meta">DIR.<?php echo $value['director'];?></div>
                                </div>
                                
                                <div class="overlay-vertical"></div>
                            </a>
                        </div>
                                                    
                    </div>                    
                </div>
              

                
        <!-- /container -->
       

					
						 <!-- end article -->
					
					<?php }

					}?></div> 

 					<div class="spacer-40"></div>
					</div> <div class="text-center">
					<input type="hidden" name="offset" id="offset" value="0" />
                    <a href="#" class="btn btn-primary load_more">Load More...</a>
                </div>
                <div class="spacer-40"></div><!-- end #main -->
    
				
    
			 <!-- end #content -->

			<?php get_footer(); ?>

<script type="text/javascript">

window.onload = function() {

	
	jQuery('#genre').live('change',function(e){

		jQuery('.all_posts').html("")
		get_all_posts();
	    

		
	});


	jQuery('#language').live('change',function(e){

		jQuery('#genre').trigger('change');
	});

	jQuery('.load_more').live('click',function(e){

		count = parseInt(jQuery('#offset').val()) + parseInt("<?php echo count($response) ;?>");
		jQuery('#offset').val(count);


		e.preventDefault();
		get_all_posts();

		
	});


	function get_all_posts(){

		genre = jQuery('#genre').val();
		language = jQuery('#language').val();
		posts_per_page = 1;
		offset = jQuery('#offset').val();
		data = 'genre='+genre+'&language='+language+'&posts_per_page='+posts_per_page+'&offset='+offset;
		

		jQuery.ajax({
				type : 'GET',
				url : SITEURL+'/wp-json/videos',
				data : data,
				success:function(response){
					html = jQuery('.all_posts').html()
					jQuery.each(response,function(index,value){
						html += '<div class="row">'
				                    +'<div class="col-sm-6 multi-grid">'
				                        +'<div class="grid-box grid-full content-align-bottom">'
				                            +'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value.slug+'">'
				                                +'<div class="grid-image">'
				                                    +'<img src="'+value.featured_image+'">'
				                                +'</div>'
				                                +'<div class="grid-text-wrap">'
				                                    +'<div class="grid-title">'+value.title+'</div>'
				                                    +'<div class="grid-meta">'+value.region.join(',')+'/'+value.region+' MIN</div>'
				                                    +'<div class="grid-meta">'+value.categories.join(',')+'</div>'
				                                    +'<div class="grid-meta">DIR.'+value.director+'</div>'
				                                +'</div>'
				                                
				                                +'<div class="overlay-vertical"></div>'
				                            +'</a>'
				                        +'</div>'
				                                                    
				                    +'</div>'                    
				                +'</div>'


					});
				jQuery('.all_posts').html(html);
					
				},
				error:function(error){
					
					jQuery('.all_posts').html('No Posts found');
					
				} 
			})
	}

	
}

</script>