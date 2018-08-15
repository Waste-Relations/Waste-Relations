$(document).ready(function (){
    $("#submit").on("click", function(e) {
        event.preventDefault();
        console.log("clicked")
        var $organisation = $("#organisation").val().trim().toUpperCase();
        var $administrativeArea = $("#selectProvince").val().trim();
        var $locality = $("#selectCity").val().trim();
        var $postalCode = $("#postalCode").val().trim();
        var $thoroughFare = $("#thoroughFare").val().trim();
        const postalCodeStatus = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/.test($postalCode) ||
        /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/.test($postalCode);
        console.log($postalCode ,"------->", postalCodeStatus)
        if (postalCodeStatus == true && $thoroughFare !== "" && $organisation !== "") {
            var newDropOff = {
                organisation: $organisation,
                administrativeArea: $administrativeArea,
                locality: $locality,
                postalCode: $postalCode.replace(/\s/g, ''),
                thoroughFare: $thoroughFare
            };
            console.log(newDropOff);
            $.post("/api/dropoff", newDropOff)
        } else if (postalCodeStatus == false) {
            alert("Postal code is invalid")
        } else if ($thoroughFare == "" || $organisation == "") {
            alert("verify organisation and address are not left blank")
        };
    });
});