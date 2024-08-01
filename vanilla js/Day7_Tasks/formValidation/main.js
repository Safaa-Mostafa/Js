var inputs = document.querySelectorAll("input");
var errorMsg = document.querySelectorAll(".errorMsg");
var btn = document.querySelector(".btn-submit");
var table = document.querySelector("table");
var reset = document.querySelector(".reset");
btn.addEventListener("click", (e) => {
  e.preventDefault();
 let nameData =  nameValidation()
  let ageData = ageValidation()
  let emailData = emailValidation()

if (nameData.isValid && ageData.isValid && emailData.isValid) {
    inputs.forEach(el=>el.value="")
var tr = document.createElement("tr");
var nameTd = document.createElement("td");
var ageTd = document.createElement("td");
var emailTd = document.createElement("td");
nameTd.innerHTML = nameData.inputData;
ageTd.innerHTML = ageData.inputData;
emailTd.innerHTML = emailData.inputData;
table.appendChild(tr);
tr.appendChild(nameTd);
tr.appendChild(ageTd);
tr.appendChild(emailTd);

}
});

function nameValidation() {
  errorMsg[0].style.display = "none";
  if (inputs[0].value === "") {
    errorMsg[0].style.display = "block";
    errorMsg[0].innerText = "this field is required";
    inputs[0].value = "";
    return false;
  } else if (isFinite(inputs[0].value)) {
    errorMsg[0].style.display = "block";
    errorMsg[0].innerText = "you must enter characters only";
    inputs[0].value = "";
    return false;
  } else {
    return {
        isValid:true,
        inputData:inputs[0].value
    };
  }
}

function ageValidation() {
  errorMsg[1].style.display = "none";
  if (inputs[1].value == "") {
    errorMsg[1].style.display = "block";
    errorMsg[1].innerText = "this field is required";
    inputs[1].value = "";
    return false;
  } else if (!isFinite(inputs[1].value)) {
    errorMsg[1].style.display = "block";
    errorMsg[1].innerText = "you must enter numbers only";
    inputs[1].value = "";
    return false;
  } else {
    return {
        isValid:true,
        inputData:inputs[1].value
    };
  }
}
const regex =
  "^[a-zA-Z0-9._%+-]+@[a-z]+.com$";
function emailValidation() {
  errorMsg[2].style.display = "none";
  var valid = inputs[2].value.match(regex);
  if (inputs[2].value === "") {
    errorMsg[2].style.display = "block";
    errorMsg[2].innerText = "this field is required";
    inputs[2].value = "";
    return false;
  } else if (!valid) {
    errorMsg[2].style.display = "block";
    errorMsg[2].innerText = "wrong email format";
    inputs[2].value = "";
    return false;
  } else {
    return {
        isValid:true,
        inputData:inputs[2].value
    };
  }
}
table.style.display = "inline-table";

reset.addEventListener("click",(e)=>{
e.preventDefault();
    inputs.forEach(el=>el.value="")
    table.style.display = "none";
})