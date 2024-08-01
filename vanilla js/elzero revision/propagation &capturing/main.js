var arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
  ((i)=>{ setTimeout(() => {
            console.log(arr[i]);
        }, 2000)
    })(i)
   
}
let self=this;
if(x=2){
self
}