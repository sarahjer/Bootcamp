var movies =[{
	title: "Frozen",
	rating: 5,
	hasWatched: false
},
{
	title: "Mad Max Fury Road",
	rating: 3.5,
	hasWatched: false
},
{
	title: "Les Miserables",
	rating: 3.5,
	hasWatched: false
},
{
	title: "In Bruges",
	rating: 4,
	hasWatched: true
}];

movies.forEach(function(movie) {
	if(movie.hasWatched) {
		console.log("You have seen " + movie.title + " - " + movie.rating + " stars");
	}
	else {
		console.log("You have not seen " + movie.title + " - " + movie.rating + " stars");
	}
});