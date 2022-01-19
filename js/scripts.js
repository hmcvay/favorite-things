//blah blah get html Input and assign it
$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    let results = [] // start with an empty array

    let animal = $("#fav-animal").val();
    let drink = $("#fav-drink").val();
    let color = $("#fav-color").val();

    results.push(animal); // either manually or with a loop add each input to the array
    results.push(drink);
    results.push(color);

    console.log(results);

    // For loop to print results
    // for (i=0; i<results.length; i++) {
    //   $(".array-results").append("<li>" + results[i] + "</li>");
    // }

    // forEach loop to print results
    results.forEach(function(result) {
      $(".array-results").append("<li>" + result + "</li>");
    });
  });
});
