function validateForm() {
  event.preventDefault(); // oprește trimiterea formularului
  var firstName = document.getElementById("firstName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;

  var error_firstName = "";
  var error_email = "";
  var error_password = "";
  var error_confirm = "";

  if (firstName == "" || firstName == null) {
    error_firstName = "First name is mandatory!";
  }

  if (email == "" || email == null) {
    error_email = "Email is mandatory!";
  }
  if (password == "" || password == null) {
    error_password = "Password is mandatory!";
  }
  if (confirm == "" || confirm == null) {
    error_confirm = "Confirm is mandatory!";
  } else if (confirm !== password) {
    error_confirm = "Confirm password should be the same as password!";
  }

  document.getElementById("error_first_name").innerHTML = error_firstName;
  document.getElementById("error_email").innerHTML = error_email;
  document.getElementById("error_password").innerHTML = error_password;
  document.getElementById("error_confirm").innerHTML = error_confirm;

  // Ascunde mesajul de succes la fiecare validare
  document.getElementById("successMessage").style.display = "none";

  if (
    error_firstName !== "" ||
    error_email !== "" ||
    error_password !== "" ||
    error_confirm !== ""
  ) {
    event.preventDefault();
    return false;
  }
  document.getElementById("successMessage").style.display = "block";
  document.getElementById("form").reset();
  event.preventDefault(); // oprește trimiterea formularului
  return true;
}

//<![CDATA[ /*** Do not change ***/
var AWIN = AWIN || {};
AWIN.Tracking = AWIN.Tracking || {};
AWIN.Tracking.Sale = {};
//]]>
