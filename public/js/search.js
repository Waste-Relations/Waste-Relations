// something here
$(document).keypress(e => {
  if (e.which === 13) {
    const userSearch = $("#searchBox")
      .val()
      .trim();
    // alert("You pressed enter!");
    console.log("You enpmntered ", userSearch);
    $.post("/api/search", userSearch).then(function() {
      console.log("something");
    });
  }
});
