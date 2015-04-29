<?php
/*
Template Name: articles_template
*/
?>


<?php get_header(); ?>


      
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
                               <!--
							   <a href="#" id="listoption"  class="option"title="List">
									 <i class="fa fa-th-list fa-3x"></i>  
							   </a>
							   -->
                            </div>

                        </div>
					
                    </div>
					
                </div>
				
                <div class="spacer-40"></div><div class="loader"></div>
				<div class="all_posts">
				
				<?php 
								
					$args = array(
								'orderby'           => 'post_date',
								'order'             => 'DESC',
								'posts_per_page'   	=> 12,
								'offset'           	=> 0,

					);
				
					$response = Article_post\Article::get_many_articles($args);
					
					
			
					if(count($response) > 0)
					{ 										
						foreach ($response as $key => $value)
						{		
							// echo $value['id'];	
							// echo "***";	
				?>			
							<div class="row listlayout article_row">
								
								<div class="col-md-5">
								
									<a class="content-bottom article_fi" target="_blank" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
									
										<img src="<?php echo $value['featured_image'];?>" class="img-responsive width-full">
								
									</a>
								
								</div>
								
								<div class="col-md-7">
									<div class="row">
										
										<!--when hadding share icons change this to col-md-8 and remove class 'hidden' from col-md-4-->
										<div class="col-md-8">
											<h4 class="m-t-0">
												
												<a class="content-bottom article_title" target="_blank" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
													
													<?php echo $value['title']; ?>
												
												</a>
												
												
<!--												<small><em>By </em></small>-->
												
											</h4>
										</div>
										
										<div class="col-md-4">
											
											
											<div class="social-strip">
											
												<?php// echo do_shortcode("[ssba]"); ?>
												
												<?php// echo do_shortcode("[ssba_post post_id='".$value['id']."']"); ?>
												
												<?php echo do_shortcode('[ssba url="' . get_permalink($value['id']) . '" title="' . get_the_title($value['id']) . '"]'); ?>
												
												
											
											</div>
											
										
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
									
										<div class="col-xs-12">
										   <p class="article_meta">
										       
											   <span class="date"><i class="fa fa-clock-o"></i> <?php echo $value['post_date'];?></span>
										       
											   <span class="author"><i class="fa fa-user"></i> <?php echo ucfirst($value['director']);?></span>		
												
												<!--
												<span><i class="fa fa-thumbs-up"></i> <?php echo $value['post_like_count'];?> </span>
											   -->
										   </p>
										   
										   <p class="article_cont">
										       <?php echo $value['excerpt'];?>
										   </p>
			 
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

			<div class="popular">
			
				<div class="row">
                    <div class="col-md-6">
                        <h2>POPULAR ARTICLES</h2>
                    </div>	
                </div>
			
				<hr class="m-t-0">
				
				<div class="row">
					
					<div class="col-md-12">
					
						<?php

							$args = array(
										'posts_per_page'    => 3,
										'order'             => 'DESC',
										'orderby'           => 'meta_value_num',
										'meta_key'          => '_post_like_count',
										'post_type'         => 'article'
									);
		

							$populararticles = get_popular_articles($args);
						
							
							foreach ($populararticles as $populararticle)
							{									
						?>									
								<div class="col-sm-4">									
									<div class="pop_posts">
										<div class="focus-img">
											<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $populararticle['slug'];?>">
												<img src="<?php echo $populararticle['featured_image'];?>">
											</a>
										</div>
										
										<div>
											<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $populararticle['slug'];?>">
								                <h6><?php echo $populararticle['title']; ?></h6>
											</a>
											<p>	<?php echo $populararticle['excerpt']; ?>	</p>
											<div>
												<p class="pull-left"><small><?php echo $populararticle['post_date'];?></small></p>
												<p class="pull-right">
													<span><i class="fa fa-thumbs-up"></i> <?php echo $populararticle['post_like_count'];?> </span>
													<!--
													<span><i class="fa fa-eye"></i> <?php echo $populararticle['no_of_views'];?> </span>
													-->
												</p>
											</div>
											
											<div class="clearfix"></div>
											
											<hr class="m-t-0">
										
										</div>
									
									</div>
																	
								</div>
								
						<?php
									
							} //end foreach							
						?>

					</div>
				
				</div>
			
			</div>			
			
			
			<div class="spacer-40 hidden"></div>		
			<a id="next" href="<?php echo site_url() ;?>/wp-json/page2/tagposts?tag=trending"></a>
   
				
			<div class="trending hidden">
			</div>

			<div class="spacer-40 hidden"></div>


		 <!-- end #content -->

		<?php get_footer(); ?>

<script type="text/javascript">

window.onload = function() {
        function setlesshe() {
            jQuery('.article_row').each(function() {
                //console.log($(this).find('.col-md-7').height());
                if (jQuery(window).width() < 992) {
                    jQuery(this).find('.col-md-5 .article_fi').css('height', '300px');
                    //jQuery(this).find('.col-md-5 .article_fi img').css('height', '300px').css('width', 'auto');
                } else {
                    jQuery(this).find('.col-md-5 .article_fi').css('height', jQuery(this).find('.col-md-7').height());
                    //jQuery(this).find('.col-md-5 .article_fi img').css('height', 'auto').css('width', '100%');
                }
            });
        }
	jQuery('#tracker').val('listoption');
	
	jQuery('#listoption').children().addClass('text-primary');
    count = parseInt(jQuery('#offset').val()) + parseInt("<?php echo count($response) ;?>");
	count=count-1;
    jQuery('#offset').val(count);
	


	jQuery('.load_more').live('click',function(e){

		jQuery('.loader').text("Loading data...")

		e.preventDefault();
		get_all_posts();
		
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
        setlesshe();
	}

	function get_all_posts()
	{
		console.log(" inside get_all_posts ");
		
		posts_per_page = 12;
		offset = jQuery('#offset').val();
		
		// data = 'genre='+genre+'&language='+language+'&posts_per_page='+posts_per_page+'&offset='+offset+'&exclude='+jQuery('#searchids').val();
		
		data = '&posts_per_page='+posts_per_page+'&offset='+offset;

		
		jQuery.ajax({
				type : 'GET',
				//url : SITEURL+'/wp-json/videos',
				url : SITEURL+'/wp-json/articles',
				data : data,
				success:function(response)
				{
                    generate_data(response);
					
					console.log(" inside get_all_posts success ");
					console.log(response);
					
					count = parseInt(jQuery('#offset').val()) + parseInt(response.length);
                    jQuery('#offset').val(count);
	
				},
				error:function(error){
					jQuery('.loader').text("")
					jQuery('.all_posts').html('No Posts found');
					console.log(" inside get_all_posts error ");
					
				} 
			})
	}
	showLayout();


		
/* 
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
 */
    function generate_data(response)
	{

        jQuery('.loader').text("")
        html = jQuery('.all_posts').html()

        if(response.length>0)
        {
					//// deleted html data created here
									
            jQuery.each(response,function(index,value)
			{
                html += '<div class="row listlayout article_row">'
                     +'<div class="col-md-5">'
						+'<a class="content-bottom article_fi" target="_blank" href="'+SITEURL+'/'+value.slug+'">'
							+'<img src="'+value.featured_image+'" class="img-responsive width-full">'
						+'</a>'
					 +'</div>'
                     +'<div class="col-md-7">'
                        +'<div class="row">'
                            +'<div class="col-md-8">'
                                +'<h4 class="m-t-0">'
									
									+'<a class="content-bottom article_title" target="_blank" href="'+SITEURL+'/'+value.slug+'">'+value.title+'</a>'
								
									//+'<small><em> By '+value.director+'</em></small>'
								
								+'</h4>'
                            +'</div>'
                            +'<div class="col-md-4">'
								
								+'<div class="social-strip">'
																		
									//+'<p>'+value.id+'</p>'
											
										+'<div class="ssba"><div style="text-align:right"><a class="ssba_facebook_share" href="http://www.facebook.com/sharer.php?u='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/facebook.png" title="Facebook" class="ssba" alt="Share on Facebook"></a><a href="http://pinterest.com/pin/create/bookmarklet/?is_video=false&amp;url='+SITEURL+'/'+value.slug+'/&amp;media='+value.featured_image+'&amp;description='+value.title+'" class="ssba_pinterest_share ssba_share_link" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/pinterest.png" title="Pinterest" class="ssba" alt="Pin on Pinterest"></a><a class="ssba_twitter_share" href="http://twitter.com/share?url='+SITEURL+'/'+value.slug+'/&amp;text='+value.title+'+" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/twitter.png" title="Twitter" class="ssba" alt="Tweet about this on Twitter"></a><a class="ssba_google_share" href="https://plus.google.com/share?url='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/google.png" title="Google+" class="ssba" alt="Share on Google+"></a></div></div>'
										
										//+'<div class="ssba"><div style="text-align:right"><a class="ssba_facebook_share" href="http://www.facebook.com/sharer.php?u='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/facebook.png" title="Facebook" class="ssba" alt="Share on Facebook"></a><a href="http://pinterest.com/pin/create/bookmarklet/?is_video=false&amp;url='+SITEURL+'/'+value.slug+'" class="ssba_pinterest_share ssba_share_link" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/pinterest.png" title="Pinterest" class="ssba" alt="Pin on Pinterest"></a><a class="ssba_twitter_share" href="http://twitter.com/share?url='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/twitter.png" title="Twitter" class="ssba" alt="Tweet about this on Twitter"></a><a class="ssba_google_share" href="https://plus.google.com/share?url='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/google.png" title="Google+" class="ssba" alt="Share on Google+"></a></div></div>'
										
										
										
										//	<?php// echo do_shortcode('[ssba url="'+link +'"]'); ?>
											
											
											//<?php // echo do_shortcode('[ssba url="' . get_permalink($value['id']) . '" title="' . get_the_title($value['id']) . '"]'); ?>
								
										
											//<?php echo do_shortcode("[ssba_post post_id='".$value['id']."']"); ?>
											
											//<?php echo do_shortcode("[ssba_post post_id='220']"); ?>
											
										
											
								+'</div>'
							
							/*
                                 +'<div class="social-strip">'
																		 								 
                                    +'<div class="pull-right watchlist-add">' 
                                        +'<a href="#"><i class="fa fa-binoculars"></i> Add to Watchlist </a>'
                                    +'</div>'
                                    +'<div class="pull-right like-action">'
                                        +'<span class="m-l-5 m-r-5">|</span> '+value.post_like_count+' <i class="fa fa-thumbs-up"></i><span class="m-l-5 m-r-5">|</span>'
                                    +'</div>'
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
                                +'</div>'
							*/
                            
							+'</div>'
                        +'</div>'
                         +'<hr class="m-t-0 m-b-5">'
                         +'<div class="row">'
                             +'<div class="col-xs-12">'
									+'<p class="article_meta">'
                                        +'<span class="date"><i class="fa fa-clock-o"></i> '+value.post_date+'</span>'
								        +'<span class="author"><i class="fa fa-user"></i> '+value.director+'</span>'
										//+'<span><i class="fa fa-thumbs-up"></i>'+value.post_like_count+'</span>'
                                    +'</p>'
                                    +'<p class="article_cont">'
                                        +value.excerpt
                                    +'</p>'
                             +'</div>'
                             // +'<div class="col-xs-4 text-right">'
                                 // +'<div class="small m-t-20">'+value.no_of_views+' <i class="fa fa-eye"></i></div>'
                             // +'</div>'
                         +'</div>'
                     +'</div>'
                 +'</div>';
				 
				//jQuery('.all_posts').find(".social-strip").html("<?php echo addslashes (do_shortcode("[ssba_post post_id='".$value['id']."']")); ?>"); 

				 ////deleted html for couchdata here
				 
            });
                    jQuery('.all_posts').html(html);
					
					
					///// displays share icons on load more bot url is wrong it shares id of last article only
					
					//jQuery('.all_posts').find(".social-strip").html("<?php echo addslashes (do_shortcode("[ssba_post post_id='".$value['id']."']")); ?>");
					
                        showLayout();
                        
    
	}
                    else
                    {
                        jQuery('.all_posts').html("");
                        html += "<div>No posts found.</div>";
                        jQuery('.all_posts').html(html);
                    }
                    

    }
	
   /*	
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
   */	
	
}

</script>