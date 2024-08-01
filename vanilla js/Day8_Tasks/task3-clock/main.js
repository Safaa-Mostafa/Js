const startBtn = document.querySelector("button");
const timer = document.querySelector(".timer");
startBtn.addEventListener("click",()=>{
    alert("clock is started");
 let interval;
 interval =    setInterval(()=>{
        timer.innerText =new Date(Date.now()).toTimeString();
    },300)
    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.key === 'w') {
            event.preventDefault();
            alert('clock stopped');
          clearInterval(interval);
        }
    });
})