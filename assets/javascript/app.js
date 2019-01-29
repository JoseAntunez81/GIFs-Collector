$(document).ready(function(){

//Initial array of cars
var topics =["BMW","Porsche", "McLaren","Lamborghini","Bugatti", "Bentley", "Viper","Ferrari","Koenigsegg","Mercedez-AMG","AudiR8","Tesla"]
 function renderButtons() {

  $("#btn_view").empty();

  for (var j = 0; j < topics.length; j++) {
      var carBtn = $("<button>").addClass("btn btn-outline-dark");
     carBtn.addClass("car").attr("data-car", topics[j]).text(topics[j]);
     $("#btn_view").append(carBtn);
  }
};
renderButtons();

// Here  create a function that add the car when button is clicked
$("#add_car").on("click", function(){
  event.preventDefault(); 
  var car = $("#cars_input").val().trim();
   topics.push(car);
   renderButtons();


 });

$(document).on("click","button", function(){
  var exoticCar = $(this).attr("data-car");


var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + exoticCar+ "&api_key=CQ7M95NVYxyXGjGMd4SL8MepEkmSjB7k&limit=10";

$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      
      
    
    var results = response.data;
      console.log(results);
    // for loop to go throug each result item
     for (var i = 0; i < results.length; i++){
       var carDiv = $("<div>");
       var rating = $("<p>").text("Rating: " + results[i].rating);  
       var carImage = $("<img>");
       carImage.attr("src", results[i].images.fixed_height.url);
       
       carDiv.append(carImage);
       carDiv.append(rating);
       $("#gifs-view").prepend(carDiv);

       }
    
     });

 }); //this is the end of button click funtion

 // Clcik function to set the state of the images from still to animate
 $("<img>").on("click", function() {
    var state = $(this).attr("data-state", "src",results[i].images.fixed_height_still.url);
    
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });


});//end of document