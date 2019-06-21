
   
var movieTitle;

// when user clicks the submit button, we take the input value which is the movies name
$("#submitbtn").click(function(){
    movieTitle=$("#movie-title").val();

// constructing a queryURL variable we will use instead of the literal string inside of the ajax method
    var queryUrl="http://www.omdbapi.com/?t="+movieTitle+"&apikey=trilogy";

// with ajax we get the data from API provided with omdb website
    $.ajax({
    url: queryUrl,
    method: "Get",
    }).then (function(response){
        console.log(queryUrl);
        $("#movie-view").empty();
        var title=$("<div>").addClass("fancy").text("Title:"+""+response.Title);
        var rating=$("<div>").addClass("fancy").text("Rating:"+""+response.Rated);
        var poster=$("<img>").attr("src", response.Poster)
        $("#movie-view").append(title,rating,poster);
    });
});
    
