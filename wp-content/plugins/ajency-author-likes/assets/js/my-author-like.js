jQuery(document).ready(function() {
	jQuery('body').on('click','.jm_author_like',function(event){
		event.preventDefault();
		heart = jQuery(this);
		author_id = heart.data("author_id");
		heart.html("<i id='icon-like' class='icon-like'></i><i id='icon-gear' class='icon-gear'></i>");
		
		jQuery.ajax({
			type: "post",
			url: ajax_var.url,
			data: "action=jm_author_like&nonce="+ajax_var.nonce+"&jm_author_like=&author_id="+author_id,
			success: function(count){
				if( count.indexOf( "already" ) !== -1 )
				{
					var lecount = count.replace("already","");
					if (lecount === "0")
					{
						lecount = "Like";
					}
					heart.prop('title', 'Like');
					heart.removeClass("liked");
					heart.html("<i id='icon-unlike' class='icon-unlike'></i>&nbsp;"+lecount);
				}
				else
				{
					heart.prop('title', 'Unlike');
					heart.addClass("liked");
					heart.html("<i id='icon-like' class='icon-like'></i>&nbsp;"+count);
				}
			}
		});
	});
});
