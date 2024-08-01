alert("Welcome to my site");

do{
  var userName = prompt("please enter your name");
}while(isFinite(userName))
 
do{
    var color = prompt("please choose either red, green or blue") ;
}while(isFinite(color))
     
if(userName){
    switch(color){
        case 'red':
            color="red";
                break;
        case 'green':
            color="green";
                break;
        case 'blue':
            color="blue";
            break;
        default:
            color="yellow";               
    
            }
document.write("<h1 style = color:"+color+";> Welcome "+userName+"</h1>");

}else if(!userName){
    userName = "userName";
}
