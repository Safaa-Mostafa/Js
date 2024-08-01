const input = document.querySelector(".input");
const controlKeys = [
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Tab",
  "Enter",
];
input.addEventListener("keydown", (e) => {
 console.log();
    if( isFinite(e.key) || controlKeys.includes(e.key)){
        return;
  }else{
    e.preventDefault();
  }
});
