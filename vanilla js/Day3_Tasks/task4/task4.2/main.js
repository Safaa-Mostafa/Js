function numbers() {
  var arr = [];

  for (let i = 0; i < arguments.length; i++) {
    if (typeof Array.from(arguments)[i] != "number") {
      throw "using only number types";
    }
  }
}

console.log(numbers(2, 4, 5, 6, 7));
