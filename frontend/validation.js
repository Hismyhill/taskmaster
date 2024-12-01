const registerForm = document.getElementById("reisterForm");

const loginForm = document.getElementById("loginForm");

const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

function getSignupFormErrors(fullname, email, password) {
  let errors = [];

  if (fullname === "" || fullname == null) {
    errors.push("Full name is required");

    fullnameInput.parentElement.classList.add("incorrect");
  }

  if (email === "" || email == null) {
    errors.push("Email is required");
    emailInput.parentElement.classList.add("incorrect");
  }

  if (password === "" || password == null) {
    errors.push("Password is required");
    passwordInput.parentElement.classList.add("incorrect");
  }

  return errors;
}

function getLoginFormErrors(email, password) {
  let errors = [];

  if (email === "" || email == null) {
    errors.push("Email is required");
    emailInput.parentElement.classList.add("incorrect");
  }

  if (password === "" || password == null) {
    errors.push("Password is required");
    passwordInput.parentElement.classList.add("incorrect");
  }

  return errors;
}

registerForm.addEventListener("submit", (e) => {
  // e.preventDefault();
  let errors = [];

  errors = getSignupFormErrors(
    fullnameInput.value,
    emailInput.value,
    passwordInput.value
  );

  if (errors.length > 0) {
    e.preventDefault();
  }
});

loginForm.addEventListener("submit", (e) => {
  // e.preventDefault();
  let errors = [];

  errors = getLoginFormErrors(emailInput.value, passwordInput.value);

  if (errors.length > 0) {
    e.preventDefault();
  }
});
