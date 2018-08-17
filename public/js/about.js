$(document).ready(function() {
  $("#about").on("click", function() {
    console.log("got cliked");
    $("#about").attr("href", "/search");
  });
});
