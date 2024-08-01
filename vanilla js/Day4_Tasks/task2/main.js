date = "23-02-2001";
if (validDate(date)) {
  DayName(date);
}
function DayName(date) {
  if (arguments.length != 1) {
    throw "you must send one parameter";
  }
  newDate = `${date.split("")[2]}-${date.split("")[1]}-${date.split("")[0]}`;
  const day = new Date(newDate).getDay();
  switch (day) {
    case 0:
      console.log("sunday");
      break;
    case 1:
      console.log("monday");
      break;
    case 2:
      console.log("tue");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log("not a valid");
  }
  return day;
}
function validDate(date) {
  if (arguments.length != 1) throw "must be one parameter";
  let dateSplitted = date.split("-");
  let isValid = true;
 
  if (
    date[2] != '-'||
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

