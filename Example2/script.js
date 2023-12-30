$(document).ready(function(){
    console.log($("#width").val())
  $("#width").keyup(function(){
      $("#imglink").text("Image Link: https://placehold.co/" + $("#width").val() + "x" + $("#height").val() + "?font=lora")
  });
  $("#height").keyup(function(){
      $("#imglink").text("Image Link: https://placehold.co/" + $("#width").val() + "x" + $("#height").val() + "?font=lora")
  });
});
