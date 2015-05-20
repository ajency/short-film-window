<?php
/*
Template Name: List of Playlists
*/
?>

<?php get_header(); ?>

<?php
	
	$image_size = 'thumbnail';
	$offset = 0;
		
	//$all_playlists = get_all_playlists($image_size);
	
	// $no_of_playlists = 9;
	 $playlists_per_page = 9;
	
	$playlists = get_playlists($image_size, $playlists_per_page, $offset);
	
	// print_r($playlists);
	// exit;

?>

	<!--Content-->
    <div class="container header-space playlist_list">
        <div class="content-wrapper">
			<div class="row posrel">
				<div class="col-md-12 posata"> <!-- <div class="col-md-8"> -->

					<div class="row">

						<div class="col-md-8">
							<h2 class="auth_name">
								PLAYLISTS
							</h2>
						</div>
						<div class="col-md-4 m-t-20">
							<div class="form-group row form-horizontal">
								<label for="" class="col-md-3 control-label"><em>Sort by:</em> </label>
		                        <div class="col-md-9">
		                            <select class="" name="sort" id="sort">
		                                <option value="1">Freshness</option>
		                                <option value="2">Popularity</option>
		                                <option value="3">Length</option>
		                            </select>
		                        </div>
	                        </div>
						</div>

					</div>

					<hr class="m-t-0">

				</div>
			</div> <!-- end row -->
			<div class="spacer-40"></div>

			<!-- Playlist Grid -->
	
	<div class="all_playlists">
	
	<?php
		if(count($playlists) > 0)
		{
		
			$play_gridreponse = generate_play_grid_response($playlists);

			foreach ($play_gridreponse as $key => $value)
			{
				
	?>
			<div class="playlist-grid">
				
				<div class="row pushin">
								
					
					<div class="col-md-4 col-sm-6">				
						<div class="p-grid-c">														
							
							<span class="p-img-c">										
									<img src="<?php echo $value[0]['playlist_image_url']; ?>" alt="">								
							</span>
						
							<div class="p-text">
								<h4 class="p-head"><?php echo $value[0]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[0]['playlist_description']; ?></p>

								<div class="p-btm">
								
									<!--
									<div class="iconexp_sp pull-left">
										<div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
										<div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
											<i class="fa fa-thumbs-up"></i>
										</div>
									</div>
									-->

									<div class="pull-right p-count">
										<p><?php echo $value[0]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>																
							<a href="<?php echo $value[0]['playlist_link']; ?>" class="p-g-all-link"> </a>
							
						</div>
					</div>
					
					<div class="col-md-4 col-sm-6">				
						<div class="p-grid-c">														
							
							<span class="p-img-c">										
									<img src="<?php echo $value[1]['playlist_image_url']; ?>" alt="">								
							</span>
						
							<div class="p-text">
								<h4 class="p-head"><?php echo $value[1]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[1]['playlist_description']; ?></p>

								<div class="p-btm">
								
									<!--
									<div class="iconexp_sp pull-left">
										<div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
										<div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
											<i class="fa fa-thumbs-up"></i>
										</div>
									</div>
									-->

									<div class="pull-right p-count">
										<p><?php echo $value[1]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>																
							<a href="<?php echo $value[1]['playlist_link']; ?>" class="p-g-all-link"> </a>
							
						</div>
					</div>

					<div class="col-md-4 col-sm-6">				
						<div class="p-grid-c">														
							
							<span class="p-img-c">										
									<img src="<?php echo $value[2]['playlist_image_url']; ?>" alt="">								
							</span>
						
							<div class="p-text">
								<h4 class="p-head"><?php echo $value[2]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[2]['playlist_description']; ?></p>

								<div class="p-btm">
								
									<!--
									<div class="iconexp_sp pull-left">
										<div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
										<div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
											<i class="fa fa-thumbs-up"></i>
										</div>
									</div>
									-->

									<div class="pull-right p-count">
										<p><?php echo $value[2]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>																
							<a href="<?php echo $value[2]['playlist_link']; ?>" class="p-g-all-link"> </a>
							
						</div>
					</div>
					
					<div class="col-md-4 col-sm-6">				
						<div class="p-grid-c">														
							
							<span class="p-img-c">										
									<img src="<?php echo $value[3]['playlist_image_url']; ?>" alt="">								
							</span>
						
							<div class="p-text">
								<h4 class="p-head"><?php echo $value[3]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[3]['playlist_description']; ?></p>

								<div class="p-btm">
								
									<!--
									<div class="iconexp_sp pull-left">
										<div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
										<div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
											<i class="fa fa-thumbs-up"></i>
										</div>
									</div>
									-->

									<div class="pull-right p-count">
										<p><?php echo $value[3]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>																
							<a href="<?php echo $value[3]['playlist_link']; ?>" class="p-g-all-link"> </a>
							
						</div>
					</div>					

					<div class="col-md-4 col-sm-6">				
						<div class="p-grid-c">														
							
							<span class="p-img-c">										
									<img src="<?php echo $value[4]['playlist_image_url']; ?>" alt="">								
							</span>
						
							<div class="p-text">
								<h4 class="p-head"><?php echo $value[4]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[4]['playlist_description']; ?></p>

								<div class="p-btm">
								
									<!--
									<div class="iconexp_sp pull-left">
										<div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
										<div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
											<i class="fa fa-thumbs-up"></i>
										</div>
									</div>
									-->

									<div class="pull-right p-count">
										<p><?php echo $value[4]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>																
							<a href="<?php echo $value[4]['playlist_link']; ?>" class="p-g-all-link"> </a>
							
						</div>
					</div>	

					<div class="col-md-4 col-sm-6">				
						<div class="p-grid-c">														
							
							<span class="p-img-c">										
									<img src="<?php echo $value[5]['playlist_image_url']; ?>" alt="">								
							</span>
						
							<div class="p-text">
								<h4 class="p-head"><?php echo $value[5]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[5]['playlist_description']; ?></p>

								<div class="p-btm">
								
									<!--
									<div class="iconexp_sp pull-left">
										<div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
										<div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
											<i class="fa fa-thumbs-up"></i>
										</div>
									</div>
									-->

									<div class="pull-right p-count">
										<p><?php echo $value[5]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>																
							<a href="<?php echo $value[5]['playlist_link']; ?>" class="p-g-all-link"> </a>
							
						</div>
					</div>	
					
					<div class="col-md-4 col-sm-6">				
						<div class="p-grid-c">														
							
							<span class="p-img-c">										
									<img src="<?php echo $value[6]['playlist_image_url']; ?>" alt="">								
							</span>
						
							<div class="p-text">
								<h4 class="p-head"><?php echo $value[6]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[6]['playlist_description']; ?></p>

								<div class="p-btm">
								
									<!--
									<div class="iconexp_sp pull-left">
										<div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
										<div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
											<i class="fa fa-thumbs-up"></i>
										</div>
									</div>
									-->

									<div class="pull-right p-count">
										<p><?php echo $value[6]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>																
							<a href="<?php echo $value[6]['playlist_link']; ?>" class="p-g-all-link"> </a>
							
						</div>
					</div>	

					<div class="col-md-4 col-sm-6">				
						<div class="p-grid-c">														
							
							<span class="p-img-c">										
									<img src="<?php echo $value[7]['playlist_image_url']; ?>" alt="">								
							</span>
						
							<div class="p-text">
								<h4 class="p-head"><?php echo $value[7]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[7]['playlist_description']; ?></p>

								<div class="p-btm">
								
									<!--
									<div class="iconexp_sp pull-left">
										<div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
										<div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
											<i class="fa fa-thumbs-up"></i>
										</div>
									</div>
									-->

									<div class="pull-right p-count">
										<p><?php echo $value[7]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>																
							<a href="<?php echo $value[7]['playlist_link']; ?>" class="p-g-all-link"> </a>
							
						</div>
					</div>	

					<div class="col-md-4 col-sm-6">				
						<div class="p-grid-c">														
							
							<span class="p-img-c">										
									<img src="<?php echo $value[8]['playlist_image_url']; ?>" alt="">								
							</span>
						
							<div class="p-text">
								<h4 class="p-head"><?php echo $value[8]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[8]['playlist_description']; ?></p>

								<div class="p-btm">
								
									<!--
									<div class="iconexp_sp pull-left">
										<div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
										<div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
											<i class="fa fa-thumbs-up"></i>
										</div>
									</div>
									-->

									<div class="pull-right p-count">
										<p><?php echo $value[8]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>																
							<a href="<?php echo $value[8]['playlist_link']; ?>" class="p-g-all-link"> </a>
							
						</div>
					</div>	
					
					
				</div>  <!-- end row pushin -->
				
			</div> <!-- end playlist-grid -->
	
	<?php
			} //end foreach
			
		} //end if
	?>
	
	</div> <!-- all_playlists -->
	
			<!-- Load More btn -->
            <div class="row pushin">
            	<div class="col-md-12">
            		<div class="text-center">
						<input type="hidden" name="offset" id="offset" value="0" />
						<a href="#" class="btn btn-primary load_more">Load More </a>
					</div>
            	</div>
            </div>

			<div class="recent-movies pushin">

				<div class="row">
					<div class="col-md-12">
						<h4>New and Noteworthy</h4>
					</div>
	            </div>

				<hr class="m-t-0">

				<div class="row sim_mov">

					<?php

						$recentvideos = get_recent_videos();

						foreach ($recentvideos as $recentvideo)
						{


					?>
							<div class="col-xs-4">
								<div class="grid-box grid-full content-align-bottom">

									<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $recentvideo['slug'];?>">

										<div class="grid-image">
											<img src="<?php echo $recentvideo['featured_image'];?>">
										</div>

										<div class="grid-text-wrap">

											<div class="grid-title"><?php echo $recentvideo['title'];?></div>

										   <div class="grid-meta"><?php echo implode(',',$recentvideo['region']);?>/<?php echo $recentvideo['duration'];?> MIN</div>

											<div class="grid-meta"><?php echo implode(',',$recentvideo['categories']);?></div>

											<div class="grid-meta">DIR. <?php echo  ucfirst($recentvideo['director']);?></div>

										</div>

										<div class="grid-text-wrap hover-text">
											<div class="grid-title"><?php echo $recentvideo['title'];?></div>
											<div class="grid-meta">
												<div class="row">
													<div class="col-xs-4">

														<div class="pull-left p-l-10 m-t-10">
															<div>
																<?php echo $recentvideo['no_of_views'];?>
																<i class="fa fa-eye"></i>
															</div>
															<div>
																<?php echo $recentvideo['post_like_count'];?>
																<i class="fa fa-thumbs-up"></i>
															</div>
														</div>
													</div>
													<div class="col-xs-8">
														<div class="pull-right text-right m-t-10">
														   <?php echo $recentvideo['excerpt'];?>
														</div>
													</div>
												</div>
											</div>
										</div>

											<!--
											<div>
												<a class="content-bottom" target="_blank" href="<?php echo site_url();?>/<?php echo $recentvideo['slug'];?>">
													<h6><?php echo $recentvideo['title']; ?></h6>
												</a>

												<p class="pop_auth"><small><em> by <?php echo $recentvideo['director']; ?></em></small></p>

												<p>	<?php echo $recentvideo['excerpt']; ?>	</p>
												<div>
													<p class="pull-left"><small><?php echo $recentvideo['post_date'];?></small></p>
													<p class="pull-right">
														<span><i class="fa fa-thumbs-up"></i> <?php echo $recentvideo['post_like_count'];?> </span>

														<span><i class="fa fa-eye"></i> <?php echo $recentvideo['no_of_views'];?> </span>

													</p>
												</div>

												<div class="clearfix"></div>

												<hr class="m-t-0">

											</div>
											-->
										<div class="overlay-vertical"></div>
									</a>
								</div>

							</div>

					<?php

						} //end foreach
					?>

				</div>

			</div> <!--movies end-->

		</div> <!-- end content-wrapper -->
    </div> <!-- end container header-space -->

<?php get_footer(); ?>



<script type="text/javascript">

window.onload = function() 
{
	//showLayout();
			
	
	//jQuery('#gridoption').children().addClass('text-primary');
	
	count = parseInt(jQuery('#offset').val()) + parseInt("<?php echo count($playlists); ?>");
	
	count=count-1;

	if(count == 0)
	{
		count=1;
	}  
	
	//console.log(count);
	
	jQuery('#offset').val(count);


	jQuery('.load_more').live('click',function(e)
	{
		e.preventDefault();
		
		console.log("inside load_more");
		
		jQuery('.loader').text("Loading data...")

		
		// get_all_posts();
		 get_all_playlists();


	});


	function resizeimgs(tw, obj, i) 
	{
		var ar = obj.width() / obj.height();
		console.log('Number: ' + i + '\n-------------------------');
		console.log('aspectratio ' + ar);
		console.log('cont-resize ' + tw.width() / tw.height());
		console.log('END Number: ' + i + '\n-------------------------');

		if ( (tw.width() / tw.height()) < ar ) {
			obj
				.removeClass()
				.addClass('bgheight');
		} else {
			obj
				.removeClass()
				.addClass('bgwidth');
		}
	}


/*	function showLayout()
	{

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
		jQuery('.grid-box .grid-image').each(function(i) {
			resizeimgs(jQuery(this), jQuery(this).find('img'), i);
		});
	}
*/

/*
	function get_all_posts()
	{
		
		// posts_per_page = 12;
		playlists_per_page = 9;
		offset = jQuery('#offset').val();
		
		image_size = 'thumbnail';

		data = 'playlists_per_page='+playlists_per_page+'&offset='+offset+'&image_size='+image_size;
				
		jQuery.ajax({
				type : 'GET',
				url : SITEURL+'/wp-json/videos',
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
*/
	function get_all_playlists()
	{
		
		// posts_per_page = 12;
		playlists_per_page = 9;
		offset = jQuery('#offset').val();
		
		image_size = 'thumbnail';

		data = 'playlists_per_page='+playlists_per_page+'&offset='+offset+'&image_size='+image_size;
				
		jQuery.ajax({
				type : 'GET',
				url : SITEURL+'/wp-json/playlists',
				data : data,
				success:function(response)
				{
					console.log("in success of get_all_playlists ");
					console.log(response);
					
					generate_data(response);
					count = parseInt(jQuery('#offset').val()) + parseInt(response.length);
					jQuery('#offset').val(count);

				},
				error:function(error)
				{
					console.log("in error of get_all_playlists ");
					jQuery('.loader').text("")
					jQuery('.all_playlists').html('No Playlists found');

				}
			})
	}	
			
	//showLayout();

	function generate_play_grid_response(response)
	{

		var grid ={};
		// var multiple = [6,6];
	    var multiple = [9,9];
		var k = 0 ;
		grid[k] = {};
		var j = 0;
		var image  = SITEURL+'/wp-content/themes/short-film/assets/img/placeholder.jpg';
		for (var i= 0; i < multiple[k]; i++) {

			if(response[j] == undefined){
				grid[k][i] = {
					
				'playlist_id' 			: "",
				'playlist_name' 		: "",
				'playlist_slug' 		: "",
				'playlist_taxonomy' 	: "",
				'playlist_description'  : "",
				'playlist_count' 	    : "",
				'playlist_link' 		: "",
				'playlist_image_url' 	: image

				};

			}
			else
				grid[k][i] = response[j];

			// if(i == 5 && response.length > multiple[k])
			if(i == 8 && response.length > multiple[k])
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


	function generate_data(response)
	{

		jQuery('.loader').text("")
		html = jQuery('.all_playlists').html()

		if(response.length>0)
		{
			// grid = generate_grid_reponse(response);
			grid = generate_play_grid_response(response);

			jQuery.each(grid,function(index,value){


				html+= '<div class="playlist-grid">'
				
							+'<div class="row pushin">'
																			
								+'<div class="col-md-4 col-sm-6">'				
									+'<div class="p-grid-c">'														
										
										+'<span class="p-img-c">'										
												+'<img src="'+value[0]['playlist_image_url']+'" alt="">'
										+'</span>'
									
										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[0]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[0]['playlist_description']+'</p>'

											+'<div class="p-btm">'
																							
												// <div class="iconexp_sp pull-left">
													// <div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
													// <div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
														// <i class="fa fa-thumbs-up"></i>
													// </div>
												// </div>
												
												+'<div class="pull-right p-count">'
													+'<p>'+value[0]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'																
										+'<a href="'+value[0]['playlist_link']+'" class="p-g-all-link"> </a>'
										
									+'</div>'
								+'</div>'
								
								+'<div class="col-md-4 col-sm-6">'
									+'<div class="p-grid-c">'														
										
										+'<span class="p-img-c">'										
												+'<img src="'+value[1]['playlist_image_url']+'" alt="">'								
										+'</span>'
									
										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[1]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[1]['playlist_description']+'</p>'

											+'<div class="p-btm">'
																							
												// <div class="iconexp_sp pull-left">
													// <div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
													// <div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
														// <i class="fa fa-thumbs-up"></i>
													// </div>
												// </div>												

												+'<div class="pull-right p-count">'
													+'<p>'+value[1]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'
										+'<a href="'+value[1]['playlist_link']+'" class="p-g-all-link"> </a>'
										
									+'</div>'
								+'</div>'

								+'<div class="col-md-4 col-sm-6">'
									+'<div class="p-grid-c">'														
										
										+'<span class="p-img-c">'										
												+'<img src="'+value[2]['playlist_image_url']+'" alt="">'								
										+'</span>'
									
										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[2]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[2]['playlist_description']+'</p>'

											+'<div class="p-btm">'
																							
												// <div class="iconexp_sp pull-left">
													// <div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
													// <div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
														// <i class="fa fa-thumbs-up"></i>
													// </div>
												// </div>
												
												+'<div class="pull-right p-count">'
													+'<p>'+value[2]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'
										+'<a href="'+value[2]['playlist_link']+'" class="p-g-all-link"> </a>'
										
									+'</div>'
								+'</div>'
								
								+'<div class="col-md-4 col-sm-6">'
									+'<div class="p-grid-c">'														
										
										+'<span class="p-img-c">'										
												+'<img src="'+value[3]['playlist_image_url']+'" alt="">'								
										+'</span>'
									
										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[3]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[3]['playlist_description']+'</p>'

											+'<div class="p-btm">'
																							
												// <div class="iconexp_sp pull-left">
													// <div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
													// <div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
														// <i class="fa fa-thumbs-up"></i>
													// </div>
												// </div>
												

												+'<div class="pull-right p-count">'
													+'<p>'+value[3]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'																
										+'<a href="'+value[3]['playlist_link']+'" class="p-g-all-link"> </a>'
										
									+'</div>'
								+'</div>'					

								+'<div class="col-md-4 col-sm-6">'				
									+'<div class="p-grid-c">'														
										
										+'<span class="p-img-c">'										
												+'<img src="'+value[4]['playlist_image_url']+'" alt="">'								
										+'</span>'
									
										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[4]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[4]['playlist_description']+'</p>'

											+'<div class="p-btm">'
											
												
												// <div class="iconexp_sp pull-left">
													// <div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
													// <div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
														// <i class="fa fa-thumbs-up"></i>
													// </div>
												// </div>
												

												+'<div class="pull-right p-count">'
													+'<p>'+value[4]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'																
										+'<a href="'+value[4]['playlist_link']+'" class="p-g-all-link"> </a>'
										
									+'</div>'
								+'</div>'	

								+'<div class="col-md-4 col-sm-6">'				
									+'<div class="p-grid-c">'														
										
										+'<span class="p-img-c">'										
												+'<img src="'+value[5]['playlist_image_url']+'" alt="">'								
										+'</span>'
									
										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[5]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[5]['playlist_description']+'</p>'

											+'<div class="p-btm">'
											
												// <div class="iconexp_sp pull-left">
													// <div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
													// <div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
														// <i class="fa fa-thumbs-up"></i>
													// </div>
												// </div>
												

												+'<div class="pull-right p-count">'
													+'<p>'+value[5]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'																
										+'<a href="'+value[5]['playlist_link']+'" class="p-g-all-link"> </a>'
										
									+'</div>'
								+'</div>'	
								
								+'<div class="col-md-4 col-sm-6">'				
									+'<div class="p-grid-c">'														
										
										+'<span class="p-img-c">'										
												+'<img src="'+value[6]['playlist_image_url']+'" alt="">'								
										+'</span>'
									
										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[6]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[6]['playlist_description']+'</p>'

											+'<div class="p-btm">'
											
												
												// <div class="iconexp_sp pull-left">
													// <div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
													// <div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
														// <i class="fa fa-thumbs-up"></i>
													// </div>
												// </div>
												

												+'<div class="pull-right p-count">'
													+'<p>'+value[6]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'																
										+'<a href="'+value[6]['playlist_link']+'" class="p-g-all-link"> </a>'
										
									+'</div>'
								+'</div>'	

								+'<div class="col-md-4 col-sm-6">'				
									+'<div class="p-grid-c">'														
										
										+'<span class="p-img-c">'										
												+'<img src="'+value[7]['playlist_image_url']+'" alt="">'								
										+'</span>'
									
										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[7]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[7]['playlist_description']+'</p>'

											+'<div class="p-btm">'
											
												
												// <div class="iconexp_sp pull-left">
													// <div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
													// <div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
														// <i class="fa fa-thumbs-up"></i>
													// </div>
												// </div>
												

												+'<div class="pull-right p-count">'
													+'<p>'+value[7]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'																
										+'<a href="'+value[7]['playlist_link']+'" class="p-g-all-link"> </a>'
										
									+'</div>'
								+'</div>'	

								+'<div class="col-md-4 col-sm-6">'				
									+'<div class="p-grid-c">'														
										
										+'<span class="p-img-c">'										
												+'<img src="'+value[8]['playlist_image_url']+'" alt="">'								
										+'</span>'
									
										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[8]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[8]['playlist_description']+'</p>'

											+'<div class="p-btm">'
											
												
												// <div class="iconexp_sp pull-left">
													// <div>321<?php ////echo $value[0]['no_of_views'];?><i class="fa fa-eye"></i></div>
													// <div class="<?php// echo $value[0]['class'] ;?>">184<?php ////echo $value[0]['post_like_count'];?>
														// <i class="fa fa-thumbs-up"></i>
													// </div>
												// </div>
												

												+'<div class="pull-right p-count">'
													+'<p>'+value[8]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'																
										+'<a href="'+value[8]['playlist_link']+'" class="p-g-all-link"> </a>'
										
									+'</div>'
								+'</div>'	
																
							+'</div>'  				
						+'</div>' ;


			});

			// jQuery('.all_posts').html(html);
			jQuery('.all_playlists').html(html);
			
			//showLayout();
		}
		else
		{
			// jQuery('.all_posts').html("");
			jQuery('.all_playlists').html("");
			
			html += "<div>No playlists found.</div>";
			
			// jQuery('.all_posts').html(html);
			jQuery('.all_playlists').html(html);
			
			jQuery('.load_more').hide();
		}


	}
			
	function loadslick()
	{
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

} //end onload function


</script>

























