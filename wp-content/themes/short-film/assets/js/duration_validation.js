/*
	jQuery(document).ready(function() {
     jQuery("#duration").live("keyup", function () {
	   
	   if (isNaN(parseInt(jQuery(this).val()))) 
		{
			jQuery(this).next().html("Not valid numeric value");
		}
		
	});
});
*/			
	

jQuery(document).ready(function () { 

	jQuery('#duration').keyup(function() {
		   var $th = jQuery(this);
		$th.val( $th.val().replace(/[^0-9]/g, function(){ 
		alert("Enter only numeric values for duration");
		return ''; }) );
		   
	   });

});