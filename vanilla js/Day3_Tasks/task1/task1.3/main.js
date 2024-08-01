function validatePrompt(massage, type) {
  let regName = /^[a-zA-Z]+$/;
  let regPhone = /^\d{8}$/;
  let regMobile = /^(010|011|012)\d{8}$/;
  let regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let input;
  let regInput;
  if (arguments.length != 2) {
    throw "you must send 2 argument";
  }
  do {
    input = prompt(massage);
    if (type == "name") {
    }
    switch (type) {
      case "name":
        regInput = regName.test(input);
        break;
      case "phone":
        regInput = regPhone.test(input);
        break;
      case "mobile":
        regInput = regMobile.test(input);
        break;
      case "email":
        regInput = regEmail.test(input.toLowerCase());
        break;
      default:
        throw "you must send type of operation";
    }
  } while (!input || !regInput);
  return input;
}
let name = validatePrompt("please enter your name", "name");
let phoneNumber = validatePrompt("please enter your phone number", "phone");
let mobileNumber = validatePrompt("please enter your mobile number", "mobile");
let email = validatePrompt("please enter your email", "email");
console.log(name,phoneNumber,mobileNumber,email);


document.write("<h1>Welcome"+name+" <br> your phone number is "+phoneNumber+" <br> your mobile number is "+mobileNumber+"<br> your email is "+email+"</h1>");