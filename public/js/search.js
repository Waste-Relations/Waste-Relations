/* eslint-disable */
$(document).keypress(e => {
  if (e.which === 13) {
    const userSearch = $("#searchBox")
      .val()
      .trim()
      .toUpperCase();
    var itemSearched = {
      name: userSearch
    }
    console.log("You entered ", userSearch);
    $.post("/api/search", itemSearched).then(function() {
      console.log("posted search");
    });
  }
});
