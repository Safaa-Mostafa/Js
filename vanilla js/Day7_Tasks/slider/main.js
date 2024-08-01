let btns = document.querySelectorAll("button");
let img = document.querySelector("img");
var arr = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
];
var x = 0;
btns[0].addEventListener("click", () => {
  if (x < arr.length - 1) {
    x++;
    img.setAttribute("src", arr[x]);
  }
});
btns[1].addEventListener("click", () => {
  if (x <= arr.length - 1 && x > 0) {
    x--;
    img.setAttribute("src", arr[x]);
  }
});
let interval;

btns[2].addEventListener("click", () => {
  var d = 0;
  interval = setInterval(function () {
    img.setAttribute("src", arr[d]);
    d++;
    if (d == 4) {
      d = 0;
    }
  }, 1000);
});

btns[3].addEventListener("click", () => {
  clearInterval(interval);
});
