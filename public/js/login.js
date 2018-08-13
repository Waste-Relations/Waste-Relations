$(document).ready(function() {
  console.log("connected to login JS");
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("#email-input");
  var passwordInput = $("#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log("userData: ", userData);
    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    console.log("have user login, clear form");
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the search page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function(data) {
        console.log("talking to api/login");
        window.location.replace(data);
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
