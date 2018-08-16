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
    let currentURL = window.location.origin;
    let endPoint = "/search/";
    let fullURL = currentURL + endPoint + userSearch;
    console.log(fullURL);
    window.location.href = fullURL;
    // $.post(fullURL);
  }
});
