<?php
/*
Template Name: List of Playlists
*/
?>

<?php get_header(); ?>

<?php


	$total_no_of_playlists = wp_count_terms( 'playlist' );

	$image_size = 'thumbnail';
	$offset_value = 0;

	 $playlists_per_page = 9;


	$playlists = get_playlists($image_size, $playlists_per_page, $offset_value);




?>

	<!--Content-->
    <div class="container header-space playlist_list">
        <div class="content-wrapper">
			<div class="row posrel">
				<div class="col-md-12 posata">

					<div class="row">

						<div class="col-md-8">
							<h2 class="brand auth_name">
								PLAYLISTS
							</h2>
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

				  foreach ($value as $k => $val) {
                                $value[$k]['class'] = '';

                                if($val['playlist_link'] == "")
                                {

                                    $value[$k]['class'] = 'hidden';
                                }
                            }

	?>
			<div class="playlist-grid">

				<div class="row pushin">


					<div class="col-md-4 col-sm-6">
						<div class="p-grid-c <?php echo $value[0]['class']; ?>">

							<span class="p-img-c" style="background-image: url(<?php echo $value[0]['playlist_image_url']; ?>);">
								<!-- <img src="<?php echo $value[0]['playlist_image_url']; ?>" alt=""> -->
							</span>

							<div class="p-text">
								<h4 class="p-head"><?php echo $value[0]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[0]['playlist_description']; ?></p>

								<div class="p-btm">


										<div class="pull-right p-count <?php echo $value[0]['class'] ;?>">
											<p><?php echo $value[0]['playlist_count']; ?> films</p>
										</div>

								</div>
							</div>
							<a href="<?php echo $value[0]['playlist_link']; ?>" class="p-g-all-link"> </a>

						</div>
					</div>

					<div class="col-md-4 col-sm-6">
						<div class="p-grid-c <?php echo $value[1]['class']; ?>">

							<span class="p-img-c" style="background-image: url(<?php echo $value[1]['playlist_image_url']; ?>);">
							</span>

							<div class="p-text">
								<h4 class="p-head"><?php echo $value[1]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[1]['playlist_description']; ?></p>

								<div class="p-btm">


									<div class="pull-right p-count <?php echo $value[1]['class'] ;?>">
										<p><?php echo $value[1]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>
							<a href="<?php echo $value[1]['playlist_link']; ?>" class="p-g-all-link"> </a>

						</div>
					</div>

					<div class="col-md-4 col-sm-6">
						<div class="p-grid-c <?php echo $value[2]['class']; ?>">

							<span class="p-img-c" style="background-image: url(<?php echo $value[2]['playlist_image_url']; ?>);">
							</span>

							<div class="p-text">
								<h4 class="p-head"><?php echo $value[2]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[2]['playlist_description']; ?></p>

								<div class="p-btm">


									<div class="pull-right p-count <?php echo $value[2]['class'] ;?>">
										<p><?php echo $value[2]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>
							<a href="<?php echo $value[2]['playlist_link']; ?>" class="p-g-all-link"> </a>

						</div>
					</div>

					<div class="col-md-4 col-sm-6">
						<div class="p-grid-c <?php echo $value[3]['class']; ?>">

							<span class="p-img-c" style="background-image: url(<?php echo $value[3]['playlist_image_url']; ?>);">
							</span>

							<div class="p-text">
								<h4 class="p-head"><?php echo $value[3]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[3]['playlist_description']; ?></p>

								<div class="p-btm">


									<div class="pull-right p-count <?php echo $value[3]['class'] ;?>">
										<p><?php echo $value[3]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>
							<a href="<?php echo $value[3]['playlist_link']; ?>" class="p-g-all-link"> </a>

						</div>
					</div>

					<div class="col-md-4 col-sm-6">
						<div class="p-grid-c <?php echo $value[4]['class']; ?>">

							<span class="p-img-c" style="background-image: url(<?php echo $value[4]['playlist_image_url']; ?>);">
							</span>

							<div class="p-text">
								<h4 class="p-head"><?php echo $value[4]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[4]['playlist_description']; ?></p>

								<div class="p-btm">



									<div class="pull-right p-count <?php echo $value[4]['class'] ;?>">
										<p><?php echo $value[4]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>
							<a href="<?php echo $value[4]['playlist_link']; ?>" class="p-g-all-link"> </a>

						</div>
					</div>

					<div class="col-md-4 col-sm-6">
						<div class="p-grid-c <?php echo $value[5]['class']; ?>">

							<span class="p-img-c" style="background-image: url(<?php echo $value[5]['playlist_image_url']; ?>);">
							</span>

							<div class="p-text">
								<h4 class="p-head"><?php echo $value[5]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[5]['playlist_description']; ?></p>

								<div class="p-btm">


									<div class="pull-right p-count <?php echo $value[5]['class'] ;?>">
										<p><?php echo $value[5]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>
							<a href="<?php echo $value[5]['playlist_link']; ?>" class="p-g-all-link"> </a>

						</div>
					</div>

					<div class="col-md-4 col-sm-6">
						<div class="p-grid-c <?php echo $value[6]['class']; ?>">

							<span class="p-img-c" style="background-image: url(<?php echo $value[6]['playlist_image_url']; ?>);">
							</span>

							<div class="p-text">
								<h4 class="p-head"><?php echo $value[6]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[6]['playlist_description']; ?></p>

								<div class="p-btm">


									<div class="pull-right p-count <?php echo $value[6]['class'] ;?>">
										<p><?php echo $value[6]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>
							<a href="<?php echo $value[6]['playlist_link']; ?>" class="p-g-all-link"> </a>

						</div>
					</div>

					<div class="col-md-4 col-sm-6">
						<div class="p-grid-c <?php echo $value[7]['class']; ?>">

							<span class="p-img-c" style="background-image: url(<?php echo $value[7]['playlist_image_url']; ?>);">
							</span>

							<div class="p-text">
								<h4 class="p-head"><?php echo $value[7]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[7]['playlist_description']; ?></p>

								<div class="p-btm">


									<div class="pull-right p-count <?php echo $value[7]['class'] ;?>">
										<p><?php echo $value[7]['playlist_count']; ?> films</p>
									</div>
								</div>
							</div>
							<a href="<?php echo $value[7]['playlist_link']; ?>" class="p-g-all-link"> </a>

						</div>
					</div>

					<div class="col-md-4 col-sm-6">
						<div class="p-grid-c <?php echo $value[8]['class']; ?>">

							<span class="p-img-c" style="background-image: url(<?php echo $value[8]['playlist_image_url']; ?>);">
							</span>

							<div class="p-text">
								<h4 class="p-head"><?php echo $value[8]['playlist_name']; ?></h4>
								<p class="p-desc"><?php echo $value[8]['playlist_description']; ?></p>

								<div class="p-btm">


									<div class="pull-right p-count <?php echo $value[6]['class'] ;?>">
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
						<input type="hidden" name="total_no_of_playlists" id="total_no_of_playlists" value="<?php echo $total_no_of_playlists; ?>" />
						<a href="#" class="btn btn-primary load_more">Load More </a>
						<div class="loader_more load_dis"></div>
					</div>
            	</div>
            </div>

			<div class="recent-movies pushin">

				<div class="row">
					<div class="col-md-12">
						<h3 class="upp brand">New and Noteworthy</h3>
					</div>
	            </div>

				<hr class="m-t-0">

				<div class="row sim_mov">

					<?php

						$recentvideos = get_recent_videos();

						foreach ($recentvideos as $recentvideo)
						{

					?>
							<div class="col-sm-4">
								<div class="grid-box grid-full content-align-bottom">

									<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $recentvideo['slug'];?>">

										<div class="grid-image" style="background-image: url(<?php echo $recentvideo['small_image'];?>);">
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
													<div class="col-xs-4 vid-meta">

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
													<div class="col-xs-8 vid-desc">
														<div class="pull-right text-right m-t-10">
														   <?php echo $recentvideo['excerpt'];?>
														</div>
													</div>
												</div>
											</div>
										</div>


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

	console.log("onload offset = ");
	console.log(jQuery('#offset').val());

	var count = parseInt(jQuery('#offset').val()) + parseInt("<?php echo count($playlists); ?>");


	count=count-1;

	if(count == 0)
	{
		count=1;
	}

	jQuery('#offset').val(count);

	console.log("after assigning offset = ");
	console.log(jQuery('#offset').val());



	jQuery('.load_more').live('click',function(e)
	{
		e.preventDefault();

		console.log("inside load_more");

		jQuery('.loader').html('<div class="loader_c"><div class="loader_i"></div></div>')


		 get_all_playlists();


	});


	function resizeimgs(tw, obj, i)
	{
		var ar = obj.width() / obj.height();


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



	function get_all_playlists()
	{


		var offset = jQuery('#offset').val();

	console.log("in get_all_playlists offset = ");
	console.log(jQuery('#offset').val());

			var total_no_of_playlists = jQuery('#total_no_of_playlists').val();

		var playlists_per_page = 9;

		if((total_no_of_playlists-offset)<playlists_per_page)
		{
			playlists_per_page = total_no_of_playlists-offset;
		}

		var image_size = 'thumbnail';

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

					var count = parseInt(jQuery('#offset').val()) + parseInt(response.length);

					jQuery('#offset').val(count);


				},
				error:function(error)
				{
					console.log("in error of get_all_playlists ");


					jQuery('.all_playlists').html('No Playlists found');


				}
			})

	}


	function generate_play_grid_response(response)
	{

		var grid ={};

	    var multiple = [9,9];
		var k = 0 ;
		grid[k] = {};
		var j = 0;
		// var image  = SITEURL+'/wp-content/themes/short-film/assets/img/placeholder.jpg';
		var image  = SITEURL+'/wp-content/themes/short-film/assets/img/white.png';
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

			grid = generate_play_grid_response(response);

			jQuery.each(grid,function(index,value){


					jQuery.each(value,function(index,val){
						value[index]['class'] = '';


						if(val['playlist_link'] == "")
						{

							value[index]['class'] = 'hidden';
						}


					});


				html+= '<div class="playlist-grid">'

							+'<div class="row pushin">'

								+'<div class="col-md-4 col-sm-6">'
									+'<div class="p-grid-c '+value[0]['class']+'">'

										+'<span class="p-img-c" style="background-image: url('+value[0]['playlist_image_url']+');">'
										+'</span>'

										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[0]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[0]['playlist_description']+'</p>'

											+'<div class="p-btm">'



												+'<div class="pull-right p-count '+value[0]['class']+'">'
													+'<p>'+value[0]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'
										+'<a href="'+value[0]['playlist_link']+'" class="p-g-all-link"> </a>'

									+'</div>'
								+'</div>'

								+'<div class="col-md-4 col-sm-6">'
									+'<div class="p-grid-c '+value[1]['class']+'">'

										+'<span class="p-img-c" style="background-image: url('+value[1]['playlist_image_url']+');">'
										+'</span>'

										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[1]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[1]['playlist_description']+'</p>'

											+'<div class="p-btm">'



												+'<div class="pull-right p-count '+value[1]['class']+'">'
													+'<p>'+value[1]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'
										+'<a href="'+value[1]['playlist_link']+'" class="p-g-all-link"> </a>'

									+'</div>'
								+'</div>'

								+'<div class="col-md-4 col-sm-6">'
									+'<div class="p-grid-c '+value[2]['class']+'">'

										+'<span class="p-img-c" style="background-image: url('+value[2]['playlist_image_url']+');">'
										+'</span>'

										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[2]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[2]['playlist_description']+'</p>'

											+'<div class="p-btm">'



												+'<div class="pull-right p-count '+value[2]['class']+'">'
													+'<p>'+value[2]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'
										+'<a href="'+value[2]['playlist_link']+'" class="p-g-all-link"> </a>'

									+'</div>'
								+'</div>'

								+'<div class="col-md-4 col-sm-6">'
									+'<div class="p-grid-c '+value[3]['class']+'">'

										+'<span class="p-img-c" style="background-image: url('+value[3]['playlist_image_url']+');">'
										+'</span>'

										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[3]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[3]['playlist_description']+'</p>'

											+'<div class="p-btm">'



												+'<div class="pull-right p-count '+value[3]['class']+'">'
													+'<p>'+value[3]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'
										+'<a href="'+value[3]['playlist_link']+'" class="p-g-all-link"> </a>'

									+'</div>'
								+'</div>'

								+'<div class="col-md-4 col-sm-6">'
									+'<div class="p-grid-c '+value[4]['class']+'">'

										+'<span class="p-img-c" style="background-image: url('+value[4]['playlist_image_url']+');">'
										+'</span>'

										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[4]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[4]['playlist_description']+'</p>'

											+'<div class="p-btm">'

												+'<div class="pull-right p-count '+value[4]['class']+'">'
													+'<p>'+value[4]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'
										+'<a href="'+value[4]['playlist_link']+'" class="p-g-all-link"> </a>'

									+'</div>'
								+'</div>'

								+'<div class="col-md-4 col-sm-6">'
									+'<div class="p-grid-c '+value[5]['class']+'">'

										+'<span class="p-img-c" style="background-image: url('+value[5]['playlist_image_url']+');">'
										+'</span>'

										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[5]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[5]['playlist_description']+'</p>'

											+'<div class="p-btm">'

												+'<div class="pull-right p-count '+value[5]['class']+'">'
													+'<p>'+value[5]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'
										+'<a href="'+value[5]['playlist_link']+'" class="p-g-all-link"> </a>'

									+'</div>'
								+'</div>'

								+'<div class="col-md-4 col-sm-6">'
									+'<div class="p-grid-c '+value[6]['class']+'">'

										+'<span class="p-img-c" style="background-image: url('+value[6]['playlist_image_url']+');">'
										+'</span>'

										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[6]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[6]['playlist_description']+'</p>'

											+'<div class="p-btm">'


												+'<div class="pull-right p-count '+value[6]['class']+'">'
													+'<p>'+value[6]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'
										+'<a href="'+value[6]['playlist_link']+'" class="p-g-all-link"> </a>'

									+'</div>'
								+'</div>'

								+'<div class="col-md-4 col-sm-6">'
									+'<div class="p-grid-c '+value[7]['class']+'">'

										+'<span class="p-img-c" style="background-image: url('+value[7]['playlist_image_url']+');">'
										+'</span>'

										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[7]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[7]['playlist_description']+'</p>'

											+'<div class="p-btm">'


												+'<div class="pull-right p-count '+value[7]['class']+'">'
													+'<p>'+value[7]['playlist_count']+' films</p>'
												+'</div>'
											+'</div>'
										+'</div>'
										+'<a href="'+value[7]['playlist_link']+'" class="p-g-all-link"> </a>'

									+'</div>'
								+'</div>'

								+'<div class="col-md-4 col-sm-6">'
									+'<div class="p-grid-c '+value[8]['class']+'">'

										+'<span class="p-img-c" style="background-image: url('+value[8]['playlist_image_url']+');">'
										+'</span>'

										+'<div class="p-text">'
											+'<h4 class="p-head">'+value[8]['playlist_name']+'</h4>'
											+'<p class="p-desc">'+value[8]['playlist_description']+'</p>'

											+'<div class="p-btm">'

												+'<div class="pull-right p-count '+value[8]['class']+'">'
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

			jQuery('.all_playlists').html(html);

		}
		else
		{

			jQuery('.all_playlists').html("");

			html += '<p class="noneLeft">No playlists found</p>';


			jQuery('.all_playlists').html(html);

			jQuery('.load_more').hide();
		}


	}

	function loadslick()
	{
		jQuery('.slider1').slick({

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

























