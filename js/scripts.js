$(document).ready(function() {
  $("#age-form").submit(function() {
    //alert("js function called");


    var inputAge = $("input#age").val();
    var inputAge = parseInt(inputAge);

    if (inputAge >= 18) {
      $('#old-enough').show();
      $("#too-young").hide();
    } else {
      $('#too-young').show();
      $("#old-enough").hide();
    }




    event.preventDefault();

  });
});
