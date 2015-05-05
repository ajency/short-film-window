<?php get_header(); ?>
			
	<div id="content">
			
		<div id="main">
				
			<?php
				
				$queried_object = get_queried_object();
				
				//print_r($queried_object);
				
				
				$author_id	= $queried_object->ID;
					
									
				$response_posts = get_posts_by_author($author_id);
				
				//print_r($response_posts);
					
								
				$author_info = get_author_info($author_id);
				
				//print_r($author_info);
			?>
				
				
			<div class="page-header">
				
				
				<div class="row">
					<div class="col-md-2">
							<!-- <img src="<?php echo get_avatar( get_the_author_meta('ID'), 60); ?>">  //60 is size is image -->
						
						<!--<img src="<?php echo get_avatar($author_id, 60); ?>">-->
					</div>
					
					<div class="col-md-10">
						
						<div class="row">
							
							<div class="col-md-12">
								<h4 class="m-t-0">
									<?php echo $author_info['author_name']; ?>
								</h4>
							</div>

						</div>
						
						<hr class="m-t-0 m-b-5">
						
						<div class="row">
						   
							<div class="col-xs-8 cont">
								
								<p><?php echo $author_info['author_description'];?></p>
															
							</div>
													
							<!--<div class="col-xs-4 text-right list-info-btns">-->
							<div class="col-xs-2 text-right list-info-btns">
								   
								<div class="soc-ico nh">
									   
									   <?php// echo do_shortcode('[ssba url="' . get_permalink($author_id) . '" title="' . $author_info['author_name'] . '"]'); ?>
									   
									   <?php echo do_shortcode('[ssba]'); ?>
								</div>
								
								
								<div class="lico_c">
									<!--<div class="lico small"><?php echo $value['no_of_views'];?> <i class="fa fa-eye"></i></div> -->
									
									<div class="lico like-action">

										<?php echo $author_info['post_user_like'] ;?> <i class="fa fa-thumbs-up"></i>
	
									</div>
								
								</div>
								
							</div>
						
							<!--</div>-->
						
						
						</div> 
					</div>	
				</div> <!-- end row -->
				
			</div> <!-- end #page-header -->
	

<hr>
			<div class="container header-space">
				
				<div class="all_posts">
				
											
					<?php
						
						foreach ($response_posts as $key => $value)
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
										
										<div class="col-md-12">
											<h4 class="m-t-0">
												<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">
													<?php echo $value['title'];?>
												</a>
												 <small><em> By <?php echo ucfirst($value['director']);?></em></small> 
											</h4>
										</div>

									</div>
									
									<hr class="m-t-0 m-b-5">
									
									<div class="row">
									   
										<div class="col-xs-8 cont">
										
											<p><?php echo $value['excerpt'];?></p>
																		
											<h6 class="m-t-30 m-b-0"><?php echo implode(', ',$value['categories']);?></h6>
																				
											<h6 class="m-t-0 m-b-0"><?php echo implode(', ',$value['region']);?></h6>
											
											<h6 class="m-t-0 m-b-0"><?php echo $value['duration'];?> Minutes</h6>
											
											<h6 class="m-t-0 m-b-0">Dir: <?php echo ucfirst($value['director']);?></h6>

										</div>
															
										<div class="col-xs-4 text-right list-info-btns">
											   
											<div class="soc-ico nh">
												   
												   <?php echo do_shortcode('[ssba url="' . get_permalink($value['id']) . '" title="' . get_the_title($value['id']) . '"]'); ?>
											</div>
											
											
											<div class="lico_c">
												<div class="lico small">
													
													<?php echo $value['no_of_views'];?> <i class="fa fa-eye"></i>
												
												</div>
												
												<div class="lico like-action">
				
													<!--<?php// echo $value['post_like_count'] ;?> <i class="fa fa-thumbs-up"></i> -->
														<?php echo getPostLikeLink($value['id']) ; ?>
												</div>
												
											</div>
											
										</div>
									
									</div>
									
									
								</div> 
														
								
							</div>
								
								
				<?php 
						} //end foreach
				?>

					</div> 
			</div>

		
		</div> <!-- end #main -->
		
		<div class="text-center">
			<input type="hidden" name="offset" id="offset" value="0" />
			<a href="#" class="btn btn-primary load_more">Load More...</a>
        </div>
   
	</div> <!-- end #content -->

<?php get_footer(); ?>



<script type="text/javascript">

	window.onload = function() 
	{

		count = parseInt(jQuery('#offset').val()) + parseInt("<?php echo count($response_posts) ;?>");
		count=count-1;
		jQuery('#offset').val(count);
		
		jQuery('.load_more').live('click',function(e){

			//jQuery('.loader').text("Loading data...")

			e.preventDefault();
			
			get_all_posts();
		
		});

		function get_all_posts()
		{
			console.log(" inside get_all_posts ");
			
			posts_per_page = 12;
			offset = jQuery('#offset').val();

			
			jQuery.ajax({

					type : 'POST',

					url : ajaxurl,
					
					data:
					{
						offset:offset,
						author_id: <?php echo $author_id; ?>,						
						action : 'fetch_posts_by_author'
				
					},	
					//dataType: 'json',
					
					success:function(response)
					{
						
						console.log(" inside get_all_posts success ");
						//console.log(response);
											
						generate_data(response);
												
						count = parseInt(jQuery('#offset').val()) + parseInt(response.length);
						jQuery('#offset').val(count);
						console.log(count);
		
					},
					error:function(error)
					{
						//jQuery('.loader').text("")
						jQuery('.all_posts').html('No Posts found');
						console.log(" inside get_all_posts error ");
						
					} 
			});
			

			
		}

		
		function generate_data(response)
		{
			console.log(" inside generate_data ");
		
			html = jQuery('.all_posts').html();

			if(response.length>0)
			{
										
				jQuery.each(response,function(index,value)
				{
					console.log(" inside jQuery ");
					html += '<div class="row listlayout">'
								
								+'<div class="col-md-5">'
									+'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value.slug+'">'
										+'<img src="'+value.featured_image+'" class="img-responsive width-full">'
									+'</a>'
								+'</div>'
								
								+'<div class="col-md-7">'
									
									+'<div class="row">'
										
										+'<div class="col-md-12">'
											+'<h4 class="m-t-0">'
												+'<a class="content-bottom" target="_blank" href="'+SITEURL+'/'+value.slug+'">'+value.title+'</a>'
												 +'<small><em> By '+value.director+'</em></small>'
											+'</h4>'
										+'</div>'

									+'</div>'
									
									+'<hr class="m-t-0 m-b-5">'
									
									+'<div class="row">'
									   
										+'<div class="col-xs-8 cont">'
																				
											+'<p>'+value.excerpt+'</p>'																																			
											+ '<h6 class="m-t-30 m-b-0">'+value.categories.join(',')+'</h6>'
											
											+ '<h6 class="m-t-30 m-b-0">'+value.region.join(',')+'</h6>'											
											
											+'<h6 class="m-t-0 m-b-0">'+value.duration+' Minutes</h6>'											
											
											+'<h6 class="m-t-0 m-b-0">Dir: '+value.director+'</h6>'
											
										+'</div>'
															
										+'<div class="col-xs-4 text-right list-info-btns">'
											   
											+'<div class="soc-ico nh">'
												   
												+'<div class="ssba"><div style="text-align:right"><a class="ssba_facebook_share" href="http://www.facebook.com/sharer.php?u='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/facebook.png" title="Facebook" class="ssba" alt="Share on Facebook"></a><a href="http://pinterest.com/pin/create/bookmarklet/?is_video=false&amp;url='+SITEURL+'/'+value.slug+'/&amp;media='+value.featured_image+'&amp;description='+value.title+'" class="ssba_pinterest_share ssba_share_link" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/pinterest.png" title="Pinterest" class="ssba" alt="Pin on Pinterest"></a><a class="ssba_twitter_share" href="http://twitter.com/share?url='+SITEURL+'/'+value.slug+'/&amp;text='+value.title+'+" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/twitter.png" title="Twitter" class="ssba" alt="Tweet about this on Twitter"></a><a class="ssba_google_share" href="https://plus.google.com/share?url='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/google.png" title="Google+" class="ssba" alt="Share on Google+"></a></div></div>'
											
											+'</div>'
											
											
											+'<div class="lico_c">'
												+'<div class="lico small">'+value.no_of_views+'<i class="fa fa-eye"></i></div>'
												+'<div class="lico like-action">'
																													
													+'<a href="#" class="post-like liked" data-post_id="'+value.id+'" title="Like/Unlike"><i id="icon-like" class="fa fa-thumbs-up"></i>'+value.post_like_count+'</a> '
												
												+'</div>'
												
											+'</div>'
											
										+'</div>'
									
									+'</div>'
									
									
								+'</div> '
														
								
							+'</div>;'
					 
				
					 
				});
				
				jQuery('.all_posts').html(html);
	
			} //end if
			
			else
			{
				jQuery('.all_posts').html("");
				html += "<div>No posts found.</div>";
				jQuery('.all_posts').html(html);
				jQuery('.load_more').hide()
			}
		   
		} //end generate_data
			

	} //end onload

</script>

























