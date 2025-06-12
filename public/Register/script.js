function validateForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;
  var myTextarea = document.getElementById("myTextarea").value;

  var error_firstName = "";
  var error_lastName = "";
  var error_email = "";
  var error_userName = "";
  var error_password = "";
  var error_confirm = "";
  var error_myTextarea = "";

  if (firstName == "" || firstName == null) {
    error_firstName = "First name is mandatory!";
  }

  if (lastName == "" || lastName == null) {
    error_lastName = "Last name is mandatory!";
  }

  if (email == "" || email == null) {
    error_email = "Email is mandatory!";
  }

  if (username == "" || username == null) {
    error_userName = "Username is mandatory!";
  }
  if (password == "" || password == null) {
    error_password = "Password is mandatory!";
  }
  if (confirm == "" || confirm == null) {
    error_confirm = "Confirm is mandatory!";
  } else if (confirm !== password) {
    error_confirm = "Confirm password should be the same as password!";
  }

  if (myTextarea == "" || myTextarea == null) {
    error_myTextarea = "It is mandatory to add some details about yourself!";
  }

  document.getElementById("error_first_name").innerHTML = error_firstName;
  document.getElementById("error_last_name").innerHTML = error_lastName;
  document.getElementById("error_email").innerHTML = error_email;
  document.getElementById("error_username").innerHTML = error_userName;
  document.getElementById("error_password").innerHTML = error_password;
  document.getElementById("error_confirm").innerHTML = error_confirm;
  document.getElementById("error_myTextarea").innerHTML = error_myTextarea;

  if (
    error_firstName !== "" ||
    error_lastName !== "" ||
    error_email !== "" ||
    error_userName !== "" ||
    error_password !== "" ||
    error_confirm !== "" ||
    error_myTextarea !== ""
  ) {
    document.getElementById("successMessage").style.display = "none";
    return false;
  }
  document.getElementById("successMessage").style.display = "block";
  document.getElementById("form").reset();
  event.preventDefault();
  return true;
}

//<![CDATA[ /*** Do not change ***/
var AWIN = AWIN || {};
AWIN.Tracking = AWIN.Tracking || {};
AWIN.Tracking.Sale = {};
//]]>
