const tableBody = document.querySelector("tbody");
const table = document.querySelector("table");
const div = document.querySelector("div");
function validData(no) {
  var isValid;
  let arr = [];
  for (let i = 0; i < no; i++) {
    var name;
    var age;
    name = prompt("please enter your name");
    
    if (!isNaN(name) || name.length < 3 || name.length > 10 ){
      do {
        name = prompt("please enter valid name");
        isValid = false;
      } while (name.length < 3 || name.length > 10 || !isNaN(name));
    }


    isValid = true;
    age = prompt("please enter your age");
    if (age < 11 || age > 60 || isNaN(age) || !age) {
      do {
        age = prompt("please enter valid age");
        isValid = false;
      } while (age < 11 || age > 60 || isNaN(age));
    }
    isValid = true;
    let userData = {
      name: name,
      age: age,
      isValid: isValid,
    };
    arr.push(userData);
  }
  return arr;
}
do {
  var noPersons = Number(prompt("enter the no. of persons :"));
} while (!noPersons || isNaN(noPersons));
var userValid = validData(noPersons);
if (userValid[0].isValid) {
  div.style.display = "flex";

  for (let i = 0; i < userValid.length; i++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    tr.append(td1);
    tr.append(td2);
    tableBody.appendChild(tr);
    td1.textContent = userValid[i].name;
    td2.textContent = userValid[i].age;
  }
}
