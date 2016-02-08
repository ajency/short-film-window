
jQuery(document).ready(function(){




jQuery('.aal-like').live('click',function(e){
	var author_id = jQuery(this).attr("data-author");
	
	var data = {
		'action': 'aal_like',
		'author_id': author_id
	};

	jQuery.post(aal.ajaxurl, data, function(response) {

	jQuery(".author-like-count").empty();
	
	jQuery(".author-like-count").html(response);
		
	});
});




    
});