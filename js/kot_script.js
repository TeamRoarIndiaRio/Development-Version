$( document ).ready(function(){
	//load header and footer
	$( "header#header" ).load( "https://cdn.rawgit.com/TeamRoarIndiaRio/rio/gh-pages/templates/header.html" );
	$( "footer#footer" ).load( "https://cdn.rawgit.com/TeamRoarIndiaRio/rio/gh-pages/templates/footer.html" );
	$(".kot-member").flip({
		"trigger": "hover"

	});
	// $(".member-pic").click(function(){
	// 	$(this).flip();
	// 	// $(this).find(".member-details").addClass("show");
	// }, function(){
	// 	$(this).flip(false);
	// 	// $(this).find(".member-details").removeClass("show");
	// });
})