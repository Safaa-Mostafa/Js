function validDate(date) {
  if (arguments.length != 1) throw "must be one parameter";
  let dateSplitted = date.split("-");
  let isValid = true;
  if (
    date[2] != '-' ||
    date[5] != '-' ||
    dateSplitted.length != 3 ||
    Number(dateSplitted[0]) < 1 ||
    Number(dateSplitted[0]) > 31 ||
    Number(dateSplitted[1]) > 12 ||
    isNaN(dateSplitted[0]) ||
    isNaN(dateSplitted[1]) ||
    isNaN(dateSplitted[2]) 
   
  ) {
    alert("Wrong Date Format");
    isValid = false;
  }
  return isValid;
}
function displayDate(date) {
  let splitDate = date.split("-");

  newDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
  alert(new Date(newDate).toString());
}

let input;
do {
  input = prompt(
    "please enter date with format (DD – MM – YYYY) ex. 22–01–1999"
  );
} while (!input);

try{
let date = validDate(input);
if(date){
displayDate(input);
}
}catch(e){
  console.log(e);
}
