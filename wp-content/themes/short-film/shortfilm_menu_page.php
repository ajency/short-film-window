<h3><?php esc_attr_e( 'Shortfilm Settings', 'wp_admin_style' ); ?></h3>
<h2 class="nav-tab-wrapper">
	<a href="#" class="nav-tab nav-tab-active">Home page video</a>
</h2>
<br/><br/>


<?php
	
	$args = array(
	  'orderby' => 'name',
	  'order' => 'ASC'
	);	
	
	$categories = get_categories($args); 
	
	
?>

	<div class="update_message"></div>

	<label for="categories">Categories</label>

	<select id="catSelect" name ="catSelect" >
		<option value=''> Choose category </option>
		<?php
			foreach($categories as $category)
			{
				$cat_ID = $category->cat_ID;
				$cat_name = $category->cat_name;

				echo "<option value='".$cat_ID."'>".$cat_name."</option>";
			
			}
		?>
			
	</select>


	<label for="posts">Posts</label>

	<select id='postSelect' name='postSelect' disabled='true'>
	</select>
 
  <input type="button" value="Save" id='save-homepage-video-btn' disabled='true'> 



<script type="text/javascript">

jQuery(document).ready(function($) {
	
	$('#catSelect').change(function(){
		// get cat id
		var cat_id = $(this).val();
		
		$('#postSelect').empty();
		
		// make ajax request
		$.ajax({
			url : ajaxurl,
			type : 'GET',
			//type : 'POST',
			data:{
				action : 'populate_posts',
				cat_id : cat_id
			},
			success : function(response){
				$('#postSelect').removeAttr('disabled').append(response);
				$('#save-homepage-video-btn').removeAttr('disabled').append(response);
			}
		});
		
	});
	
	$('#save-homepage-video-btn').click(function(){
	
		var cat_id = $('#catSelect').val();
		var post_id = $('#postSelect').val();
	
		// make ajax request
		$.ajax({
			url : ajaxurl,
			type : 'POST',
			data:{
				action : 'save_homepage_video',
				cat_id : cat_id,
				post_id : post_id
			},
			success : function(response){
				$( "div.update_message" ).html( "<p>"+response+"</p>" );
			}
		});
		
	});

});

</script>










<!-- ================================================== -->

<script type="text/javascript">

function submitpick() 
{
     alert("hiii");
	
	alert(document.getElementById('catSelect').value);
	 alert(document.getElementById('postSelect').value);
	
	// alert($_POST['cat_ID']);
	// alert($_POST['postid']);
		
}
</script>























