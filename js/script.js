$(document).ready(function(){
  $("#menuButton").click(function(){
    $("#menuButton").hide();
    $("#closeButton").show("fast");
    $("#navS").fadeTo("fast", 1);
  });
  $("#closeButton").click(function(){
    $(this).hide("fast");
    $("#menuButton").show();
    $("#navS").fadeTo("fast", 0);
    $("#navS").hide("fast");
  });
  $(".button").click(function(){
    $("#closeButton").hide("fast");
    $("#menuButton").show();
    $("#navS").fadeTo("fast", 0);
    $("#navS").hide("fast");
  });
});