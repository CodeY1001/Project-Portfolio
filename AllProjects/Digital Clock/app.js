const HourEle = document.getElementById("hour");
const MinEle = document.getElementById("min");
const SecEle = document.getElementById("sec");
const AmpmEle = document.getElementById("ampm");


function updateClock() {
    let now = new Date();

    let hrs = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();
    let ampm = "AM";

    if (hrs > 12) {
        hrs = hrs - 12;
        ampm = "PM";
    }

    hrs = hrs<10?"0"+hrs:hrs;
    mins = mins<10?"0"+mins:mins;
    secs = secs<10?"0"+secs:secs;

    HourEle.innerText = hrs;
    MinEle.innerText = mins;
    SecEle.innerText = secs;
    AmpmEle.innerText = ampm

    setTimeout(() => {
        updateClock();
    }, 1000);
    
    
}

updateClock()





