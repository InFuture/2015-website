function mailchimp(){
  if ($(".input-box").val()) {
    var hipHopMagician = $(".input-box").val();
    $(".input-box").val("");
    $('.input-box').attr('placeholder','Please check your email. :)');
    $('.btnSubscribe').prop("disabled",!this.checked); 
    $('.btnSubscribe').css({'background-color':'#c5c5c5','color':'#707070','border':'2px solid #c5c5c5'});
    $('.btnSubscribe').html('Thanks!')
    $.post("/signup/", { email: hipHopMagician });
  }
  else {
    $(".input-box").val("");
    $('.input-box').attr('placeholder','Please enter an email.');
  }
  return false;
}

$(document).ready(function(){
  $("#menuButton").click(function(event){
    $("#menuButton").fadeTo("fast", 0);
    $("#closeButton").show("fast");
    $("#navS").fadeTo("fast", 1);
    event.stopPropagation(); //doesn't let this element do the same actions as clicking html
  });
  $("#closeButton").click(function(){
    $(this).hide("fast");
    $("#menuButton").fadeTo("fast", 1);
    $("#navS").fadeTo("fast", 0);
    $("#navS").hide();
  });
  $(".button").click(function(){
    $("#closeButton").hide("fast");
    $("#menuButton").fadeTo("fast", 1);
    $("#navS").fadeTo("fast", 0);
    $("#navS").hide();
  });
  $("#navS").click(function(event){
    event.stopPropagation();
  });
  var width = $(window).width();
  if (width >= 480){
    $("html").click(function(event){
      event.stopPropagation();
    });
  }
  else {
    $("html").click(function(){ //hides menu when clicking outside of popout menu
      $("#closeButton").hide("fast");
      $("#menuButton").fadeTo("fast", 1);
      $("#navS").fadeTo("fast", 0);
      $("#navS").hide();
  });
  }
});
