<?php
/*
Template Name: articles_template
*/
?>


<?php get_header(); ?>

	<?php
		
		$count_articles = wp_count_posts('article');
		
		$total_no_of_articles = $count_articles->publish;
		
		// echo $total_no_of_articles;

	?>

        <!--Content-->
        <div class="container header-space">
            <div class="content-wrapper">

                <div class="row">
                    <div class="col-md-6">
                        <h2 class="brand">IN FOCUS <small><em>Interviews and Discussions</em></small></h2>
                    </div>
					<div class="col-md-3 col-md-offset-3 col-sm-12">
						<div class="m-t-20 search_menu">
							<div class="form-group">
                                <input type="text" class="form-control search" value="" placeholder="Search"/>
                                <i class="fa fa-search"></i>
                            </div>
                        </div>
					</div>
                </div>


			    <hr class="m-t-0">

                <div class="spacer-40"></div><div class="loader"></div>

				<div class="search-results-message">
				</div>


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
				?>
							<div class="row listlayout article_row">

								<div class="col-md-5">

									<a class="content-bottom article_fi" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">


										<img src="<?php echo $value['medium_image'];?>" class="img-responsive width-full">


									</a>

								</div>

								<div class="col-md-7">
									<div class="row">

										<!--when hadding share icons change this to col-md-8 and remove class 'hidden' from col-md-4-->
										<div class="col-md-12">
											<h4 class="m-t-0">

												<a class="content-bottom article_title" href="<?php echo site_url();?>/<?php echo $value['slug'];?>">

													<?php echo $value['title']; ?>

												</a>

											</h4>
										</div>
									</div>

								   <div class="row">
										<div class="col-xs-9">
                                            <p class="article_meta">
                                            	<span class="date" title="Published Date"><i class="fa fa-clock-o"></i> <?php echo $value['post_date'];?></span>

												<span class="author"><a href="<?php echo get_author_posts_url($value['directorid']); ?>" title="Author"><i class="fa fa-user"></i> <?php echo ucfirst($value['director']);?> </a> </span>

												<span class="art_likes"><?php echo getPostLikeLink($value['id']) ; ?> </span>

												<span class="art_views" title="Likes"><i class="fa fa-eye"></i><?php  echo $value['no_of_views'] ;?></span>

                                            </p>
                                        </div>
                                        <div class="col-xs-3">
                                            <div class="social-strip soc-ico pull-r ight">
												<?php echo do_shortcode('[ssba url="' . get_permalink($value['id']) . '" title="' . get_the_title($value['id']) . '"]'); ?>
											</div>
                                       </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
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
					
					<input type="hidden" name="total_no_of_articles" id="total_no_of_articles" value="<?php echo $total_no_of_articles; ?>" />
					
                    <a href="#" class="btn btn-primary load_more">Load More Articles</a>
            </div>

			<div class="spacer-40"></div>

			<div class="popular">

				<div class="row">
                    <div class="col-md-6">
                        <h3 class="brand">POPULAR ARTICLES</h3>
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
									<div class="pop_posts posrel">
										<div class="focus-img">
											<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $populararticle['slug'];?>">
												<img src="<?php echo $populararticle['small_image'];?>">
											</a>
										</div>

										<div class="infocus_home">
											<a class="content-bottom" href="<?php echo site_url();?>/<?php echo $populararticle['slug'];?>">
								                <h6><?php echo $populararticle['title']; ?></h6>
											</a>

											<p class="pop_auth"><small><em> by <?php echo $populararticle['director']; ?></em></small></p>

											<p>	<?php echo $populararticle['excerpt']; ?>	</p>
											<div>
												<p class="pull-left"><small><?php echo $populararticle['post_date'];?></small></p>
												<p class="pull-right">
													<span><i class="fa fa-thumbs-up"></i> <?php echo $populararticle['post_like_count'];?> </span>
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

	jQuery('#tracker').val('listoption');

	jQuery('#listoption').children().addClass('text-primary');

    count = parseInt(jQuery('#offset').val()) + parseInt("<?php echo count($response) ;?>");
	count=count-1;

	if(count == 0)
	{
		count=1;
	}

    jQuery('#offset').val(count);



	jQuery('.load_more').live('click',function(e){

		jQuery('.loader').text("Loading data...")

		e.preventDefault();
		get_all_posts();

	});


    jQuery('.search').live('change',function(e){
        e.preventDefault();
        jQuery('#offset').val(0);

		var title = jQuery(e.target).val();

		data = 'title='+jQuery(e.target).val();

		jQuery('.load_more').hide();

		jQuery.ajax({
                type : 'GET',
                url : SITEURL+'/wp-json/articlefilters',
                data : data,
                success:function(response)
				{
                    jQuery('#offset').val(0)
                    jQuery('.loader').text("Loading data...")

					//var clear = '<a href="#" id="clear-search-results-btn">Clear Search Results</a>';
					var clear = '<i class="fa fa-times"></i>';

					jQuery('.search-results-message').html('<h5 class="search_ed">Search Results for <span><a href="#" id="clear-search-results-btn" title="Clear Search Results">'+title+clear+'</a></span></h5>');

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


	jQuery('.fa-search').live('click',function(e){

        e.preventDefault();
        jQuery('#offset').val(0);

		var title = jQuery(this).prev().val();

		data = 'title='+jQuery(this).prev().val();

		jQuery('.load_more').hide();

		jQuery.ajax({
                type : 'GET',
                url : SITEURL+'/wp-json/articlefilters',
                data : data,
                success:function(response)
				{
                    jQuery('#offset').val(0)
                    jQuery('.loader').text("Loading data...")

					//var clear = '<a href="#" id="clear-search-results-btn">Clear Search Results</a>';
					var clear = '<i class="fa fa-times"></i>';

					jQuery('.search-results-message').html('<h5 class="search_ed">Search Results for <span><a href="#" id="clear-search-results-btn" title="Clear Search Results">'+title+clear+'</a></span></h5>');


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

	jQuery('#clear-search-results-btn').live('click',function(e){
		e.preventDefault();
		location.reload();

	});

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
		console.log(" inside get_all_posts ");

		posts_per_page = 12;
				
		offset = jQuery('#offset').val();
		
		var total_no_of_articles = jQuery('#total_no_of_articles').val();
		
		
		if((total_no_of_articles-offset)<posts_per_page)
		{
			posts_per_page = total_no_of_articles-offset;
				
			jQuery('.load_more').hide();		
		}
		
		
		// data = 'genre='+genre+'&language='+language+'&posts_per_page='+posts_per_page+'&offset='+offset+'&exclude='+jQuery('#searchids').val();

		//data = '&posts_per_page='+posts_per_page+'&offset='+offset;
		data = 'posts_per_page='+posts_per_page+'&offset='+offset;

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
					jQuery('.all_posts').html('<p class="noneLeft">No Articles found</p>');
					console.log(" inside get_all_posts error ");

				}
			})
	}
	showLayout();



    function generate_data(response)
	{

        jQuery('.loader').text("")

	    html = jQuery('.all_posts').html()

		//html="";


        if(response.length>0)
        {
					//// deleted html data created here

            jQuery.each(response,function(index,value)
			{
                html += '<div class="row listlayout article_row">'
                     +'<div class="col-md-5">'
						+'<a class="content-bottom article_fi" href="'+SITEURL+'/'+value.slug+'">'
							+'<img src="'+value.medium_image+'" class="img-responsive width-full">'
						+'</a>'
					 +'</div>'
                     +'<div class="col-md-7">'
                        +'<div class="row">'
                            +'<div class="col-md-12">'
                                +'<h4 class="m-t-0">'

									+'<a class="content-bottom article_title" href="'+SITEURL+'/'+value.slug+'">'+value.title+'</a>'

								+'</h4>'
                            +'</div>'
                        +'</div>'
                         +'<div class="row">'
                             +'<div class="col-xs-9">'
									+'<p class="article_meta">'
                                        +'<span class="date" title="Published Date"><i class="fa fa-clock-o"></i> '+value.post_date+'</span>'

										+'<span class="author">'

											+'<a title="Author" href="'+SITEURL+'/author/'+value.director_nicename+'"><i class="fa fa-user"></i>' + value.director + '</a>'

										+'</span>'

										+'<span class="art_likes"><a href="#" class="post-like liked" data-post_id="'+value.id+'" title="Like/Unlike"><i id="icon-like" class="fa fa-thumbs-up"></i>'+value.post_like_count+'</a> </span>'

										+'<span class="art_views" title="Views"><i class="fa fa-eye"></i>'+value.no_of_views+'</span>'

                                    +'</p>'

                             +'</div>'
                             +'<div class="col-xs-3">'
                                +'<div class="social-strip soc-ico">'

									//+'<p>'+value.id+'</p>'

										+'<div class="ssba"><div style="text-align:right"><a class="ssba_facebook_share" href="http://www.facebook.com/sharer.php?u='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/facebook.png" title="Facebook" class="ssba" alt="Share on Facebook"></a><a href="http://pinterest.com/pin/create/bookmarklet/?is_video=false&amp;url='+SITEURL+'/'+value.slug+'/&amp;media='+value.featured_image+'&amp;description='+value.title+'" class="ssba_pinterest_share ssba_share_link" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/pinterest.png" title="Pinterest" class="ssba" alt="Pin on Pinterest"></a><a class="ssba_twitter_share" href="http://twitter.com/share?url='+SITEURL+'/'+value.slug+'/&amp;text='+value.title+'+" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/twitter.png" title="Twitter" class="ssba" alt="Tweet about this on Twitter"></a><a class="ssba_google_share" href="https://plus.google.com/share?url='+SITEURL+'/'+value.slug+'" target="_blank"><img src="'+SITEURL+'/wp-content/plugins/simple-share-buttons-adder/buttons/somacro/google.png" title="Google+" class="ssba" alt="Share on Google+"></a></div></div>'



								+'</div>'
                             +'</div>'
                         +'</div>'
                         +'<div class="row">'
                             +'<div class="col-md-12">'
                                +'<p class="article_cont">'
                                    +value.excerpt
                                +'</p>'
                             +'</div>'
                         +'</div>'
                     +'</div>'
                 +'</div>';


            });

			jQuery('.all_posts').html(html);

				showLayout();


		}
		else
		{
			jQuery('.all_posts').html("");
			html += '<p class="noneLeft">No articles found</p>';
			jQuery('.all_posts').html(html);
			jQuery('.load_more').hide();
		}


    }


} //end onload

</script>