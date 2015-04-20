<?php
/*
Template Name: articles_template
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
                        <h2>IN FOCUS</h2>
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
	
                    </div>
						
				
                    <div class="col-md-4 col-md-offset-3">
						
						
                        <div class="row">
                          
							<div class="col-xs-4 text-center">
                               
							   <a href="#" id="listoption"  class="option"title="List">
									<!-- <i class="fa fa-th-list fa-3x"></i>  -->
							   </a>
							   
                            </div>

                        </div>
					
                    </div>
					
                </div>
				<!--
                <hr>
				-->
                <div class="spacer-40"></div><div class="loader"></div>
				<div class="all_posts">
				
				<?php 
								
					$args = array(
								'orderby'           => 'post_date',
								'order'             => 'DESC',
								'posts_per_page'   	=> 12,
								'offset'           	=> 0,


					);

					//$response = Film\Video::get_many_articles($args);
					$response = Article_post\Article::get_many_articles($args);
			
					if(count($response) > 0)
					{ 										
						foreach ($response as $key => $value)
						{						 
				?>
							<div class="row listlayout">
								
								<div class="col-md-5">
								
									<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
									
										<img src="<?php echo $value['featured_image'];?>" class="img-responsive width-full">
								
									</a>
								
								</div>
								
								<div class="col-md-7">
									<div class="row">
										
										<div class="col-md-8">
											<h4 class="m-t-0">
												
												<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
													
													<?php echo $value['title']; ?>
												
												</a>
												
												
												<small><em>By <?php echo ucfirst($value['director']);?></em></small>
												
											</h4>
										</div>
										
										<div class="col-md-4">
											
											<!--
											<div class="social-strip">
											
												<?php// echo do_shortcode("[ssba]"); ?>
											
											</div>
											-->
										
											<!--
											<div class="social-strip">
												<div class="pull-right watchlist-add"> 
													<a href="#"><i class="fa fa-binoculars"></i> Add to Watchlist </a>
												</div>
												<div class="pull-right like-action">
													<span class="m-l-5 m-r-5">|</span> <?php// echo $value['post_like_count'] ;?> <i class="fa fa-thumbs-up"></i><span class="m-l-5 m-r-5">|</span>
												</div>
												
												<div class="share-button">
												  
													<div class="social-toggle"><i class="fa fa-share"></i> Share</div>
													<div class="social-networks">
													  <ul>
														<li class="social-twitter">
														  <a href="https://twitter.com/share"><i class="fa fa-twitter fa-lg"></i></a>
														</li>
														<li class="social-facebook">
														<a href="http://www.facebook.com/sharer.php?u=http://<?php// echo get_permalink(); ?>" target="_blank"><i class="fa fa-facebook-square fa-lg"></i></a>
														</li>
														<li class="social-pin">
														<a href="http://pinterest.com/pin/create/link/?url=http://<?php// echo get_permalink(); ?>" target="_blank"><i class="fa fa-pinterest fa-lg"></i></a>
														</li>
													  </ul>
													</div>
												
												</div>
												
											</div>
											-->
										</div>
									</div>
									<hr class="m-t-0 m-b-5">
								   
								   <div class="row">
									
										<div class="col-xs-8">
										   <p><?php echo $value['post_date'];?></p>
										   
										   <p><?php echo $value['excerpt'];?></p>
			 
										</div>

									</div>
								
								</div>	                
							</div>

					<!-- /container -->
				   

									 <!-- end article -->
								
			<?php   
						} //end foreach

					} //end if
			?>
				</div> 

 					<div class="spacer-40"></div>
 					<input type="hidden" name="tracker" id="tracker" value="" / >
			</div> 
			
			<div class="text-center">
					<input type="hidden" name="offset" id="offset" value="0" />
                    <input type="hidden" name="searchids" id="searchids" value="0" />
                    <a href="#" class="btn btn-primary load_more">Load More...</a>
            </div>
            <div class="spacer-40"></div>

			<a id="next" href="<?php echo site_url() ;?>/wp-json/page2/tagposts?tag=trending"></a>
   
				
			<div class="trending">
			</div>

			<div class="spacer-40"></div>


		 <!-- end #content -->

		<?php get_footer(); ?>

<script type="text/javascript">

window.onload = function() {
	jQuery('#tracker').val('listoption');
	
	jQuery('#listoption').children().addClass('text-primary');
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


	
	/*
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
	*/
	
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

	function get_all_posts()
	{

		posts_per_page = 12;
		offset = jQuery('#offset').val();
		
		// data = 'genre='+genre+'&language='+language+'&posts_per_page='+posts_per_page+'&offset='+offset+'&exclude='+jQuery('#searchids').val();
		
		data = '&posts_per_page='+posts_per_page+'&offset='+offset;

		//????????????????????????????????????????????? url?
		
		jQuery.ajax({
				type : 'GET',
				//url : SITEURL+'/wp-json/videos',
				url : SITEURL+'/wp-json/articles',
				data : data,
				success:function(response)
				{
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

	function generate_grid_reponse(response)
	{

		
		var grid ={};
		var multiple = [6,6];
		var k = 0 ;
		grid[k] = {};
		var j = 0;	
		var image  = SITEURL+'wp-content/themes/short-film/assets/img/placeholder.jpg';
		for (var i= 0; i < multiple[k]; i++) { 

			if(response[j] == undefined){
				grid[k][i] = {
                    'id'            : "",
					'slug'			: "",
					'title'			: "",
					//'type'			: "",
					//'tagline'		: "",
					//'videourl'  	: "",
					'excerpt'		: "",
					'director'		: "",
					'next_post'		: "",
					'prev_post'		: "",
					'comments'		: "",
					//'categories'	: [],
					//'duration'		: 0,
					//'region'		: [],
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

/* --
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
-- */
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

                                    
                            });
                            
  ////////////////////////////// deleted html data created here


                        });

            
            jQuery.each(response,function(index,value)
			{
                html += '<div class="row listlayout">'
                     +'<div class="col-md-5">'
                          +'<img src="'+value.featured_image+'" class="img-responsive width-full">'
                     +'</div>'
                     +'<div class="col-md-7">'
                        +'<div class="row">'
                            +'<div class="col-md-8">'
                                +'<h4 class="m-t-0"><a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value.slug+'">'+value.title+'</a></h4>'
                            +'</div>'
                            +'<div class="col-md-4">'
                                 //+'<div class="social-strip">'
										
								 //+'</div>'
								 
                                    // +'<div class="pull-right watchlist-add">' 
                                        // +'<a href="#"><i class="fa fa-binoculars"></i> Add to Watchlist </a>'
                                    // +'</div>'
                                    // +'<div class="pull-right like-action">'
                                        // +'<span class="m-l-5 m-r-5">|</span> '+value.post_like_count+' <i class="fa fa-thumbs-up"></i><span class="m-l-5 m-r-5">|</span>'
                                    // +'</div>'
                                    // +'<div class="share-button">'
                                        // +'<div class="social-toggle"><i class="fa fa-share"></i> Share</div>'
                                        // +'<div class="social-networks">'
                                          // +'<ul>'
                                            // +'<li class="social-twitter">'
                                              // +'<a href="https://twitter.com/share"><i class="fa fa-twitter fa-lg"></i></a>'
                                            // +'</li>'
                                            // +'<li class="social-facebook">'
                                            // +'<a href="http://www.facebook.com/sharer.php?u=http://<?php echo get_permalink(); ?>" target="_blank"><i class="fa fa-facebook-square fa-lg"></i></a>'
                                            // +'</li>'
                                            // +'<li class="social-pin">'
                                            // +'<a href="http://pinterest.com/pin/create/link/?url=http://<?php echo get_permalink(); ?>" target="_blank"><i class="fa fa-pinterest fa-lg"></i></a>'
                                            // +'</li>'
                                          // +'</ul>'
                                        // +'</div>'
                                    // +'</div>'
                                // +'</div>'
                            +'</div>'
                        +'</div>'
                         +'<hr class="m-t-0 m-b-5">'
                         +'<div class="row">'
                             +'<div class="col-xs-8">'
                                 +'<p>'+value.excerpt+'</p>'
                             +'</div>'
                             // +'<div class="col-xs-4 text-right">'
                                 // +'<div class="small m-t-20">'+value.no_of_views+' <i class="fa fa-eye"></i></div>'
                             // +'</div>'
                         +'</div>'
                     +'</div>'
                 +'</div>';

				 ///////////////////////deleted html for couchdata here
				 
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