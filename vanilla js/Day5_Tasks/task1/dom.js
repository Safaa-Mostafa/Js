const navigate = document.getElementById("navigation");
const header = document.getElementById("header");
const div = document.createElement("div");
const img = document.createElement("img");
const li = document.querySelectorAll("li");

li.forEach(el=>el.style.listStyle ="circle")
document.body.appendChild(div);
div.appendChild(img);
img.src ="./dom.jpg";
navigate.style.display = "flex";
navigate.style.justifyContent = "center";
navigate.style.alignItems = "center";

header.style.display = "flex";
header.style.justifyContent = "end";
