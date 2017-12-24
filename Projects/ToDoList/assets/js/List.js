


/////////////////Inefficient Way!!!////////////////////
//            For learning purposes!!!

// When li's clicked, strikethrough them
// Also depicts two different ways to use $().css
// $("li").click(function(){
	// If li is gray
	// if($(this).css("color") === "rgb(128, 128, 128)"){
		// turn it black and remove strikethrough
		// $(this).css("color", "black");
		// $(this).css("text-decoration", "none");

	// } else {
		// turn it gray and add strikethrough
		// $(this).css({
			// NOTE: Any CSS that has a "-",
			// use camelCase instead
// 			color: "gray",
// 			textDecoration: "line-through" // camelCase
// 		});		
// 	}
// })

//////////////////////////////////////////////////////

/////////////////////Efficient Way////////////////////

// When li is clicked, gray and strikethrough
// EXPLANATION: Can only add a listener using JQuery
// to elements that exist when code is run the first
// time. So add a listener to parent ul, but then specify 
// second argument "li" which listens for all li's inside
// this ul, and this would also account for future li's
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delte Todo
$("ul").on("click", "span" ,function(e){
	// Remove parent of Span from HTML
	$(this).parent().fadeOut(500, function(){
		// refers to $(this).parent()
		$(this).remove();
	});

	// This method is used to stop the bubbling up
	// that happens when you click on "X". When you click
	// "X", you still are clicking on "li" thus it turns
	// gray, this method stops that from happening!
	e.stopPropagation();

});


// Creation of new todos
$("input[type= 'text']").keypress(function(e){
	if (e.which === 13){
		// Make new Li
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class= 'fa fa-trash'></i></span>" +" " + todoText + "</li>");
	}
});

// If clicked plus, add new ToDo
$(".fa-plus").on("click", function(){
	$("input[type= 'text']").fadeToggle();
});
