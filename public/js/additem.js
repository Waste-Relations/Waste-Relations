$(document).ready(function() {
  $("#submit").on("click", function(e) {
    e.preventDefault();
    var $itemname = $("#name")
      .val()
      .trim();
    var $itemCategory = $("#where").val();
    var $itemSubCat = $("#how")
      .val()
      .trim();

    //let's create an object containing our form info
    if ($itemname !== "" && $itemSubCat !== "") {
      var newTrash = {
        name: $itemname.toUpperCase(),
        category: $itemCategory,
        subCategory: $itemSubCat.toLowerCase()
      };
      $.post("/api/items", newTrash);
    } else {
      alert("no blanks pls");
    }
  });
});
