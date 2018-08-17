$(document).ready(function () {
    $("#about").on("click", function(e) {
        console.log("got cliked");
       $("#about").attr("href","/search");
    });
});