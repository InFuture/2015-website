$(document).ready(function(){
  $("#menuButton").click(function(event){
    $("#menuButton").hide();
    $("#closeButton").show("fast");
    $("#navS").fadeTo("fast", 1);
    event.stopPropagation();
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
  $("#navS").click(function(event){
    event.stopPropagation();
  });
  $("html").click(function(){
    $("#closeButton").hide("fast");
    $("#menuButton").show();
    $("#navS").fadeTo("fast", 0);
    $("#navS").hide("fast");
  });
});