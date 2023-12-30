var score = 0;
var questions = $(".Q")
$("#how").click(function() {
    $("#second").css("display", "block")
})
$("#play").click(function() {
    $("#third").css("display", "block")
})
$("#check").click(function() {
    if ($("#Q1").val() === "O3") {
        score++;
    } 
    if ($("#Q2").val() === "O2") {
        score++;
    }
    if ($("#Q3").val() === "O3") {
        score++;
    }
    $("#result").text("You got: " + score + "/" + questions.length)
    $("#fourth").css("display", "block")
    if (score === questions.length) {
        $("#fourth").append("<img src = 'https://cdn.kastatic.org/images/avatars/svg/cs-hopper-jumping.svg' height = '200'>")   
    }
})