var username = document.forms["vform"]["username"];
var password = document.forms["vform"]["password"];
var passwordConfimation = document.forms["vform"]["passwordConfimation"];

var name_error = document.getElementById("name_error");
var passwordError = document.getElementById("passwordError");
var passwordCError = document.getElementById("passwordCError");


username.addEventListener("blur", nameVerify, true);
password.addEventListener("blur", passwordVerify, true);
passwordConfimation.addEventListener("blur", passwordCVerify, true);


function Validate() {
  if (username.value == "") {
    username.style.border = "1px solid red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  if (password.value == "") {
    password.style.border = "1px solid red";
    passwordError.textContent = "Password is required";
    password.focus();
    return false;
  }
  if (passwordConfimation.value == "") {
    passwordConfimation.style.border = "1px solid red";
    passwordCError.textContent = "Password Confirmation is required";
    passwordConfimation.focus();
    return false;
  }
  if (password.value !=passwordConfimation.value) {
    password.style.border = "1px solid red";
    passwordConfimation.style.border = "1px solid red";
    passwordCError.innerHTML = "Passwords doesnt match"
    return false;
  }
  else {
    alert("You registered succesfully!")
  }
}

function nameVerify() {
  if (username.value != "") {
    name_error.innerHTML = "";
    return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
    passwordError.innerHTML = "";
    return true;
  }
}
function passwordCVerify() {
  if (password.value != "") {
    passwordError.innerHTML = "";
    return true;
  }
}

let button = document.querySelector(".btn");
button.disabled = true;
username.addEventListener("change", stateHandle);
password.addEventListener("change", stateHandle);
passwordConfimation.addEventListener("change", stateHandle);

function stateHandle() {
    if ((document.querySelector(".uname").value === "")
     (document.querySelector(".passwd").value === "")  
    (document.querySelector(".cpasswd").value === "")) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }

}
