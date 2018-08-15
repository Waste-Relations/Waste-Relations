$(document).ready(function() {
  function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(" ");
  }
  //grab user input from form
  $("#submit").on("click", function(e) {
    e.preventDefault();
    var $itemname = $("#name")
      .val()
      .trim();
    var $itemCategory = $("#where")
      .val()
      .trim();
    var $itemSubCat = $("#how")
      .val()
      .trim();

    //let's create an object containing our form info
    var newTrash = {
      name: $itemname.toUpperCase(),
      category: titleCase($itemCategory),
      subCategory: $itemSubCat.toLowerCase()
    };
    $.post("/api/items", newTrash);
  });
});
