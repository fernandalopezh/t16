$(document).ready(function(){

  $("#hidden1").hide();
  $("#hidden2").hide();
  $("#hidden3").hide();


$("#button1").click(function(){
$("#hidden1")
 .show("fast");
 $("#button1").hide();


});

$("#button2").click(function(){
$("#hidden2")
 .show("fast");
 $("#button2").hide();


});

$("#button3").click(function(){
$("#hidden3")
 .show("fast");
$("#button3").hide();

});

});