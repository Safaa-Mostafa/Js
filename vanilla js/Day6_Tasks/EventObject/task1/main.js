var arr = ["Alt","Shift","Control"]
document.addEventListener('keydown', function(e) {
    console.log(e.key);
    if(arr.includes(e.key)){
        alert(`ASCII code: ${e.key}`);
    }else{
        alert(`ASCII code: ${e.keyCode}`);
    }
});