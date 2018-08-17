$(document).ready(function() {
  $("#submit").on("click", function(e) {
    e.preventDefault();
    var $organisation = $("#organisation")
      .val()
      .trim()
      .toUpperCase();
    var $administrativeArea = $("#selectProvince")
      .val()
      .trim();
    var $locality = $("#selectCity")
      .val()
      .trim();
    var $postalCode = $("#postalCode")
      .val()
      .trim()
      .toUpperCase();
    var $thoroughFare = $("#thoroughFare")
      .val()
      .trim();
    const postalCodeStatus =
      /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/.test(
        $postalCode
      ) ||
      /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/.test(
        $postalCode
      );
    console.log($postalCode, "------->", postalCodeStatus);
    if (
      postalCodeStatus === true &&
      $thoroughFare !== "" &&
      $organisation !== ""
    ) {
      var newDropOff = {
        organisation: $organisation,
        administrativeArea: $administrativeArea,
        locality: $locality,
        postalCode: $postalCode.replace(/\s/g, ""),
        thoroughFare: $thoroughFare
      };
      console.log(newDropOff);
      $.post("/api/dropoff", newDropOff).then(result => {
        console.log(result);
        location.reload();
      });
    } else if (postalCodeStatus === false) {
      alert("Postal code is invalid");
    } else if ($thoroughFare === "" || $organisation === "") {
      alert("verify organisation and address are not left blank");
    }
  });
  //$("#myDiv")[0] === document.getElementById("myDiv");
  // $(".delete").click(result => {
  //   console.log($("#theader")[0]); 
  //   console.log($("#theader"));
  //   console.log($("#theader")[0].baseURI);
  //   console.log($("#theader")[0].getAttribute("id"));
  //   console.log($(".delete")[0].getAttribute("data-value"));
  // });
});
