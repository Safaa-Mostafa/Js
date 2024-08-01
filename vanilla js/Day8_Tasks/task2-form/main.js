const inputs = document.querySelectorAll("input");
const submit = document.querySelector("button");
const errorMsg = document.querySelectorAll(".errorMsg");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputs[0].value === "" &&
    inputs[1].value === "" &&
    inputs[2].value === "" &&
    inputs[3].value === "" &&
    inputs[4].checked === false &&
    inputs[5].checked === false
  ) {
    setTimeout(() => {
      window.location.reload();
    }, 30000);
  }

  let nameData = nameValidation();
  let ageData = ageValidation();
  let emailData = emailValidation();
  let addressData = addressValidation();
  let genderValid = genderValidation();

  if (nameData && ageData && emailData && addressData && genderValid) {
    const name = inputs[0].value;
    const age = inputs[1].value;
    const email = inputs[2].value;
    const address = inputs[3].value;
    let gender;
    if (inputs[4].checked) {
      gender = inputs[4].value;
    } else if (inputs[5].checked) {
      gender = inputs[5].value;
    }

    const queryString = `?username=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&email=${encodeURIComponent(email)}&address=${encodeURIComponent(address)}&gender=${encodeURIComponent(gender)}`;

    window.location.href = `index2.html${queryString}`;
  }
});

function genderValidation() {
  errorMsg[4].style.display = "none";
  if (!inputs[4].checked && !inputs[5].checked) {
    errorMsg[4].style.display = "block";
    errorMsg[4].innerText = "This field is required";
    return false;
  } else {
    return true;
  }
}

function nameValidation() {
  errorMsg[0].style.display = "none";
  if (inputs[0].value === "") {
    errorMsg[0].style.display = "block";
    errorMsg[0].innerText = "This field is required";
    inputs[0].value = "";
    return false;
  } else if (isFinite(inputs[0].value)) {
    errorMsg[0].style.display = "block";
    errorMsg[0].innerText = "You must enter characters only";
    inputs[0].value = "";
    return false;
  } else {
    return true;
  }
}

function ageValidation() {
  errorMsg[1].style.display = "none";
  if (inputs[1].value === "") {
    errorMsg[1].style.display = "block";
    errorMsg[1].innerText = "This field is required";
    inputs[1].value = "";
    return false;
  } else if (!isFinite(inputs[1].value)) {
    errorMsg[1].style.display = "block";
    errorMsg[1].innerText = "You must enter numbers only";
    inputs[1].value = "";
    return false;
  } else {
    return true;
  }
}

function emailValidation() {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/;
  errorMsg[2].style.display = "none";
  var valid = inputs[2].value.match(regex);
  if (inputs[2].value === "") {
    errorMsg[2].style.display = "block";
    errorMsg[2].innerText = "This field is required";
    inputs[2].value = "";
    return false;
  } else if (!valid) {
    errorMsg[2].style.display = "block";
    errorMsg[2].innerText = "Wrong email format";
    inputs[2].value = "";
    return false;
  } else {
    return true;
  }
}

function addressValidation() {
  errorMsg[3].style.display = "none";
  if (inputs[3].value === "") {
    errorMsg[3].style.display = "block";
    errorMsg[3].innerText = "This field is required";
    inputs[3].value = "";
    return false;
  } else if (isFinite(inputs[3].value)) {
    errorMsg[3].style.display = "block";
    errorMsg[3].innerText = "You must enter characters only";
    inputs[3].value = "";
    return false;
  } else {
    return true;
  }
}
