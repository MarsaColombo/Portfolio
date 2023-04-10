// Path: Assets/JS/script.js

//Define variables for the form inputs
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var submit = document.getElementById("submit");
// Define the function that will run when the form is submitted
function validateForm() {
  // Check if the first name is empty
  if (firstName.value == "") {
    // Display an error message
    document.getElementById("firstNameError").innerHTML =
      "Please enter your first name";

    return false;
  }

  if (lastName.value == "") {
    // Display an error message
    document.getElementById("lastNameError").innerHTML =
      "Please enter your last name";

    return false;
  }
  if (email.value == "") {
    // Display an error message
    document.getElementById("emailError").innerHTML = "Please enter your email";

    return false;
  }
  if (password.value == "") {
    // Display an error message
    document.getElementById("passwordError").innerHTML =
      "Please enter your password";

    return false;
  }
  if (confirmPassword.value == "") {
    // Display an error message
    document.getElementById("confirmPasswordError").innerHTML =
      "Please confirm your password";

    return false;
  }
  // Check if the password and confirm password match
  if (password.value != confirmPassword.value) {
    document.getElementById("confirmPasswordError").innerHTML =
      "Passwords do not match";

    return false;
  }
  // Display a success message
  document.getElementById("successMessage").innerHTML =
    "Form submitted successfully";

  return false;
}
// Call the validateForm function when the form is submitted
submit.onclick = validateForm;
