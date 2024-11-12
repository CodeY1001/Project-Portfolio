const inputEle = document.querySelector(".input");
const bodyEle = document.querySelector("body");

// inputEle.checked = false;


function mode() {
    if (inputEle.checked) {
        bodyEle.style.background="black";
    }
    else
    {
        bodyEle.style.background="white";
    }
}

inputEle.addEventListener("input",()=>{
    mode();
})
