// When li's clicked, strikethrough them
$("li").click(function(){
	// If li is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
		// turn it black and remove strikethrough
		$(this).css("color", "black");
		$(this).css("text-decoration", "none");

	} else {
		// turn it gray
		$(this).css({
			// NOTE: Any CSS that has a "-", use camelCase instead
			color: "gray",
			textDecoration: "line-through" // camelCase
		});		
	}
})