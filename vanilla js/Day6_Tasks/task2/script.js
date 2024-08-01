var answerField = document.getElementById("Answer");
function EnterNumber(val) {
  answerField.value += val;
}
function EnterOperator(val) {
  answerField.value += " " + val + " "; 
}
function EnterClear() {
  answerField.value = "";
}
function EnterEqual() {
  try {
    answerField.value = eval(answerField.value);
    if (answerField.value === "Infinity") {
      answerField.value = "Error";
    }
  } catch (e) {
    answerField.value = "Error";
  }
}
