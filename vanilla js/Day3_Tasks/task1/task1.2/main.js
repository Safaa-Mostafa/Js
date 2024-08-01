let userMsg;
do {
    userMsg = prompt("please enter your massage");
} while (!userMsg)
function countChar(msg, letter) {
    if (arguments.length != 2) {
        throw "argument must be 2 ";
    }
    let sum = 0;
    for (let i = 0; i < msg.length; i++) {
        if (msg[i] == letter) {
            sum++;
        }
    }
    return sum;
}
document.write('<h1>your massage is '+userMsg+' have '+countChar(userMsg,'e')+' letter e</h1>')

