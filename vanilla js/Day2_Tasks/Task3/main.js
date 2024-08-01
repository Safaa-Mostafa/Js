const userMsg = prompt("please enter your massage ");

if(userMsg){
for(var i=1;i<=6;i++){
    document.write("<h"+i+">"+userMsg+"</h"+i+">");
}
}