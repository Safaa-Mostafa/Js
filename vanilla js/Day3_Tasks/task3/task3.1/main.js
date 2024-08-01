// apply each of the following mathematical operations on it (+, *, /). Format the output as shown in Fig


let numbers =[];
let userInput;
let sum =0;
let multiply=1;
let divide =1;

for(let i =0;i<3;i++){
do{
    userInput=  prompt("please enter your number");
    
}while(!userInput || userInput == 0)
  
  
  
    numbers.push(Number(userInput));
    sum += Number(numbers[i]);
    multiply *= Number(numbers[i]);
    divide /= Number(numbers[i]);
}



document.write("<h1>Adding -- Multiplying -- and dividing 3 values</h1>_______________________________________________________________________________");
document.write("<p style=color:red;font-size:20px;>sum of the values </p>"+"<p style=font-size:16px;>"+numbers[0]+"+"+numbers[1]+"+"+numbers[2] +" = " +sum+"</p>");
document.write("<p style=color:red;font-size:20px;>multiplication of the values</p> "+"<p style=font-size:16px;>"+numbers[0]+"*"+numbers[1]+"*"+numbers[2] +" = " +multiply+"</h3>");
document.write("<h3 style=color:red;font-size:20px;>division of the values </h3>"+"<p style=font-size:16px;>"+numbers[0]+"/"+numbers[1]+"/"+numbers[2] +" = " +divide+"</h3>");

