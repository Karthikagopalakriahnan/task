function validateForm() {
  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;
  var repeatPassword = document.getElementById("repeat-pass").value;
  var email = document.getElementById("email").value;
  if (username == "" || password == "" || repeatPassword == "" || email == "") {
    alert("Please fill in all required fields.");
    return false;
  } else if (password != repeatPassword) {
    alert("The passwords do not match.");
    return false;
  } else {
    return true;
  }
}