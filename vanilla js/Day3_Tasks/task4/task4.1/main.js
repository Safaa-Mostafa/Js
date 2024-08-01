function sum(num1,num2){
    if(arguments.length !=2){
        throw "the number of parameters either less than or exceeds 2 parameters";
    }
}
console.log(sum(13,3));
console.log(sum(2,1,4));