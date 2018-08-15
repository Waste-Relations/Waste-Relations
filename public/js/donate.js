$(document).ready(function (){
    console.log("connected to donate.js");
    $("#submit").on("click", function(e) {
        event.preventDefault();
        console.log("clicked")
        var $organisation = $("#organisation").val().trim();
        var $administrativeArea = $("#administrativeArea").val().trim();
        var $locality = $("#locality").val().trim();
        var $postalCode = $("#postalCode").val().trim();
        var $thoroughFare = $("#thoroughFare").val().trim();
        var newDropOff = {
            organisation: $organisation,
            administrativeArea: $administrativeArea,
            locality: $locality,
            postalCode: $postalCode,
            thoroughFare: $thoroughFare
        };
        console.log(newDropOff);
        $.post("/api/dropoff", newDropOff);

        // const postalCodeStatus = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/.test($postalCode);
        // const otherInputsStatus = function() {
        //     if ($organisation.length !== "" && $administrativeArea !== "" && $locality !== "" && $thoroughFare !== "") {
        //         return true;
        //     } else {
        //         return false
        //     }
        // }
        // if ( postalCodeStatus == true && otherInputsStatus == true) {
        //     var newDropOff = {
        //         organisation: $organisation,
        //         administrativeArea: $administrativeArea,
        //         locality: $locality,
        //         postalCode: $postalCode,
        //         thoroughFare: $thoroughFare
        //     };
        //     console.log(newDropOff)
        //     $.post("/api/dropoff", newDropOff)
        //     .then(console.log("posted dropoff location"))
        // } else {
        //     console.log('invalid form input');
        // }
    });
});