
function calcArea(radius) {
  return Math.PI * radius * radius;
}



var radius;
do {
  radius = prompt("Enter the value of a circle’s radius");
} while (!radius);

document.write("<h1>Area of the circle is " + calcArea(radius) + "</h1>");
