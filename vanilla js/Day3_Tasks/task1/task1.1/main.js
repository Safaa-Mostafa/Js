function isPalindrome(word){
 let isConsider =  confirm("do you considering case sensitive");
let start;
let end;
if(isConsider){
start = word.slice(0,Math.floor(word.length/2));
end = word.slice(word.length - Math.floor(word.length/2));
}else{
  start = word.slice(0,Math.floor(word.length/2)).toLowerCase();
  end = word.slice(word.length - Math.floor(word.length/2)).toLowerCase();
}

let flip = end.split("").reverse().join("");
return flip === start;
}

let input;
do{
input = prompt("please enter your string to check palindrome");
}while(!input)
  alert(isPalindrome(input));


















