var myDiv = document.querySelector(".bgRed");
var myContainer = document.querySelector(".container");
myDiv.addEventListener("click",()=>{
 let cloneDiv = document.createElement("div");
 cloneDiv.classList.add("bgRed");
 cloneDiv.innerText = myDiv.innerText;
 myContainer.appendChild(cloneDiv);
 cloneDiv.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
 
})