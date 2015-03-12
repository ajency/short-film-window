<?php get_header(); ?>

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
					<div class="col-md-3 col-md-offset-3 col-sm-12">
						<div class="m-t-20">
                            <form action="" class="">
                                <div class="form-group">
                                    <input type="text" class="form-control search" placeholder="Search">
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
                                <select name="" id="">
                                    <option value="">All</option>
                                </select>
                            </div>
                        </form>
                        <div class="row">
                            <div class="col-xs-4">
                                <a href="#" title="Grid"><i class="fa fa-th-large fa-3x"></i></a>
                            </div>
                            <div class="col-xs-4 text-center">
                                <a href="#" title="List"><i class="fa fa-th-list fa-3x"></i></a>
                            </div>
                            <div class="col-xs-4 text-right">
                                <a href="#" title="Couch"><i class="fa fa-list-alt fa-3x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="spacer-40"></div><div class="loader"></div><div class="all_posts">
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
		jQuery('#offset').val(0)
		jQuery('.loader').text("Loading data...")
		jQuery('.all_posts').html("")
		get_all_posts();
	    

		
	});


	jQuery('#language').live('change',function(e){

		jQuery('#genre').trigger('change');
	});

	jQuery('.load_more').live('click',function(e){

		count = parseInt(jQuery('#offset').val()) + parseInt("<?php echo count($response) ;?>");
		jQuery('#offset').val(count);
		jQuery('.loader').text("Loading data...")

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
					jQuery('.loader').text("")
					html = jQuery('.all_posts').html()
					if(response.length>0)
					{
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
					}
					else
					{
						html += "<div>No more posts found.</div>";
						jQuery('.all_posts').html(html);
					}
					
				
					
				},
				error:function(error){
					jQuery('.loader').text("Loading data...")
					jQuery('.all_posts').html('No Posts found');
					
				} 
			})
	}

	
}

</script>