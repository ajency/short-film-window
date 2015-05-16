
	jQuery(document).ready(function() {
     jQuery("#duration").live("keyup", function () {
	   
	   if (isNaN(parseInt(jQuery(this).val()))) 
		{
			jQuery(this).next().html("Not valid numeric value");
		}
		
	});
});
			
	
