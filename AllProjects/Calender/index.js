const monthEle = document.getElementById("month");
const dayEle = document.getElementById("day");
const dateEle = document.getElementById("date");
const yearEle = document.getElementById("year");

const date = new Date;

monthEle.innerHTML = date.toLocaleString("en",{
    month:"long"
});

dayEle.innerHTML = date.toLocaleString("en",{
    weekday:"long"
});

dateEle.innerHTML = date.getDate();

yearEle.innerHTML = date.getFullYear();
