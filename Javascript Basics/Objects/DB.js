var movies = [ {
	title: "Harry Potter",
	rating: 10,
	hasWatched: true},
	{
	title: "Les Mes",
	rating: 9,
	hasWatched: false
	}
];

movies.forEach(function(elem){
	if (elem.hasWatched == true) {
		console.log("You have watched " + elem.title +
		 " - " + elem.rating + " stars");
	} else {
		console.log("You have not watched " + elem.title +
		 " - " + elem.rating + " stars");		
	}
});