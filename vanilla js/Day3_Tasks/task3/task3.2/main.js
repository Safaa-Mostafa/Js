let numbers = [];
for (let i = 0; i < 5; i++) {
  do {
    userInput = prompt("please enter your number");
  } while (!userInput || !isFinite(userInput));
  numbers.push(Number(userInput));
}

function ordered(arr, type) {
  if (arguments.length != 2) {
    throw "you must send two arguments";
  }
  if (type == "desc") {
    return arr.sort((a,b)=>b-a);
  } else if (type == "asc") {
    return arr.sort((a,b)=>a-b);
  } else {
    throw "you must send type of sorting";
  }
}

document.write("<h1>Sorting</h1>________________________________________________________________________________");
document.write("<h3 style=color:red;>u've enter the values of </h3>"+"<p style=font-size:16px;>"+numbers[0]+","+numbers[1]+","+numbers[2]+","+numbers[3] +","+numbers[4]+"</p>");
document.write("<h3 style=color:red;>ur values after being sorted descending </h3> "+"<p style=font-size:16px;>"
+ordered(numbers, "desc")[0]+","+ordered(numbers, "desc")[1]+","+ordered(numbers, "desc")[2]+","+ordered(numbers, "desc")[3] +","+ ordered(numbers, "desc")[4]+"</h3>");
document.write("<h3 style=color:red;>ur values after being sorted ascending  </h3>"+"<p style=font-size:16px;>"+ordered(numbers, "asc")[0]+","+ordered(numbers, "asc")[1]+","+ordered(numbers, "asc")[2]+","+ordered(numbers, "asc")[3] +","+ ordered(numbers, "asc")[4]+"</h3>");
