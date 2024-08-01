function rev(){
var arr=[];
for(let i=0;i<arguments.length;i++){
    if(typeof arguments[i] != "number"){
    throw "must be number";
}
arr.push(arguments[i]);
}
    return  arr.reverse();
}




console.log(rev(1,2,3,4,5,6));