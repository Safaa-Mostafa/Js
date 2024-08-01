// for(let i =0;i<5;i++){
// let img = document.createElement("img");
// document.body.appendChild(img);
// img.setAttribute("src" , "./marble1.jpg");
// setInterval(()=>{
//     img.setAttribute("src" , "./marble2.jpg");
// },i*500)
// setInterval(()=>{
//     img.setAttribute("src" , "./marble1.jpg");
// },i*600)
// }

const images=document.querySelectorAll("img");

images.forEach((el,i)=>{
    setInterval(()=>{
    el.setAttribute("src" , "./marble2.jpg");
    images[i-1].setAttribute("src" , "./marble1.jpg");

    },i*500)
})