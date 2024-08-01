let sum=0;
do{
let number = prompt("please enter your number");
if(Number(number) == 0 ){
    break;
}
sum += parseInt(number); 
}while(sum <100)

document.write(sum + "<br>");
