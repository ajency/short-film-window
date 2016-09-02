(function( $ ) {
	
	$(document).on('click', '#uploadForMobile', function(){
		
		tb_show('test', 'media-upload.php?type=image&TB_iframe=1');

		window.send_to_editor = function( html ) 
		{
			var imgurl = $( 'img',html ).attr( 'src' );
			var post_id = $( "#uploadForMobile" ).attr( 'data-post' );

			$.ajax({
				url: mobilecustom.ajax_url,
				type : 'get',
				data : {
					action : 'upload_mobile_image',
					post_id : post_id,
					imgurl: imgurl
				},
				success : function( response ) {

					var new_response = $.parseJSON(response);

					if(new_response.status == 'success'){
						$('.mobile-preview-image').attr('src',imgurl);
						$('.mobile-preview-image').css('display','block');
						$( "#uploadForMobile" ).text('Remove mobile image');
						$( "#uploadForMobile" ).attr('id','removeMobileImage');
					}else{
						if(new_response.reason == 'wrong_size'){
							alert('Please upload image with 2:3 ration only!');
						}else{
							alert('Image not found!');
						}
						
					}

				}
			});
			tb_remove();
		}

		return false;
	});





	$(document).on('click', '#removeMobileImage', function(){

		var post_id = $( "#removeMobileImage" ).attr( 'data-post' );

		$.ajax({
				url: mobilecustom.ajax_url,
				type : 'get',
				data : {
					action : 'remove_mobile_image',
					post_id : post_id
				},
				success : function( response ) {
						$('.mobile-preview-image').attr('src','');
						$('.mobile-preview-image').css('display','none');
						$( "#removeMobileImage" ).text('Set mobile image');
						$( "#removeMobileImage" ).attr('id','uploadForMobile');
				}
			});
		return false;
	});

	


})(jQuery);