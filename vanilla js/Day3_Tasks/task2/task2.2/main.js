//2.2 Enter another value to calculate its square root and alert the result.


function calcSqrt(number) {
    return Math.sqrt(number);
  }
  let number;
  do {
    number = prompt("please Enter your number ");
  } while (!number || !isFinite(number));
  
alert("sqrt root of your number is " + calcSqrt(number));
  