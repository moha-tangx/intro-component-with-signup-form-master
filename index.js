const form = document.forms[0];
const inputs = form.querySelectorAll("input:not([type='submit'])");
const [firstName, lastName, email, password] = inputs;
const submitBtn = form.querySelector("input[type='submit']");

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function setErr(field, message) {
  const thereIsErr = field.classList.contains("err");
  const p = document.createElement("p");
  const img = document.createElement("img");
  img.className = "err-ico";
  img.src = "./images/icon-error.svg";
  p.textContent = field.name + " " + message;
  p.className = "err-msg";

  if (!thereIsErr) {
    field.parentElement.style.padding = "2%";
    field.parentElement.appendChild(img);
    field.parentElement.appendChild(p);
    field.classList.add("err");
  }
}

function removeErr(field) {
  field.classList.remove("err");
  field.parentElement.querySelector("p").remove();
  field.parentElement.querySelector("img").remove();
  field.parentElement.style.paddingBottom = "5%";
}

function checkEmptyFields() {
  const message = "cannot be empty";
  inputs.forEach((input) => {
    if (input.value.trim() == "") {
      setErr(input, message);
    }
    setTimeout(() => {
      removeErr(input);
    }, 2000);
  });
}

function validateEmail() {
  const message = "looks like is not an email";
  const valid = email.value?.trim() && isEmail(email.value);
  const notEmpty = email.value.trim() !== "";
  if (notEmpty && !valid) {
    setErr(email, message);
    setTimeout(() => {
      removeErr(email);
    }, 2000);
  }
}

function validatePassword() {
  const message = "must be at least 6 characters";
  const valid = password.value?.trim().length > 5;
  const notEmpty = password.value.trim() !== "";
  if (notEmpty && !valid) {
    setErr(password, message);
    setTimeout(() => {
      removeErr(password);
    }, 2000);
  }
}

function validateForm() {
  checkEmptyFields();
  validateEmail();
  validatePassword();
}

function showSubmission() {
  submitBtn.value = "submitted";
  setTimeout(() => {
    inputs.forEach((input) => (input.value = ""));
 },200)
}

submitBtn.addEventListener("click", validateForm);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  showSubmission();
});
