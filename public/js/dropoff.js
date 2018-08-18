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
  var coll = document.getElementsByClassName("collapsible");
  console.log("Im clicked", coll);
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "flex") {
        content.style.display = "none";
      } else {
        content.style.display = "flex";
      }
    });
  }
});

//can only update orgname, post code, address
function updateRequest(locationId) {
  var orgDefault = document.getElementById(`organisation-${locationId}`).innerHTML
  var postalDefault = document.getElementById(`postalCode-${locationId}`).innerHTML
  var addressDefault = document.getElementById(`thoroughFare-${locationId}`).innerHTML
  document.getElementById(`organisation-${locationId}`).innerHTML = `<input type="text" id="orgInput-${locationId}" value="${orgDefault}">`;
  document.getElementById(`postalCode-${locationId}`).innerHTML = `<input type="text" id="postalCodeInput-${locationId}" value="${postalDefault}">`;
  document.getElementById(`thoroughFare-${locationId}`).innerHTML = `<input type="text" id="addressInput-${locationId}" value="${addressDefault}">`;
  document.getElementById(locationId).addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
      console.log("you just pressed enter dude")
      var newOrgValue = document.getElementById(`orgInput-${locationId}`).value;
      var newPostalValue = document.getElementById(`postalCodeInput-${locationId}`).value;
      var newAddressValue = document.getElementById(`addressInput-${locationId}`).value;
      console.log(newOrgValue, "---", newPostalValue, "---", newAddressValue);
      e.stopPropagation();
      if (newOrgValue && newPostalValue && newAddressValue) {
        console.log("values seem right");
        $.ajax({
          type: "PUT",
          url: "/api/dropoff/update",
          data: {
            locationId: locationId,
            organisation: newOrgValue,
            postalCode: newPostalValue,
            thoroughFare: newAddressValue
          }
        });
        setTimeout(function(){ location.reload(); }, 50);
      } else {
        alert("cannot have blank fields")
      }
    }
  });
};
function deleteRequest(locationId) {
  console.log("pressed buttonnnnnnn")
  document.getElementById(locationId).remove()
  $.ajax({
    type: "DELETE",
    url: "/api/dropoff/delete",
    data: {locationId: locationId}
  });
};
