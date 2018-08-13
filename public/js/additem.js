$(document).ready(function() {    
    //grab user input from form    
    $('#submit').on("click", function(e) {
        event.preventDefault();
        var $itemname = $('#name').val().trim();
        var $itemCategory = $('#where').val().trim();
        var $itemSubCat = $("#how").val().trim()
        
        //let's create an object containing our form info
        var newTrash = {
            name: $itemname,
            category: $itemCategory,
            subCategory: $itemSubCat,
        }
        $.post("/api/additem", newTrash).then(function() { 
        })
    })
});