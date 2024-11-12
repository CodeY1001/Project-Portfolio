const inputSlider = document.querySelector("[data-lengthSlider]");  //here syntax for using custom attributes is [].
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]")
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~!@#$%^&*()_<>?/';



let password = "";
let passwordLength = 10;
let checkCount = 0;

handleSlider();
//TODO - set strength circle color to grey.
setIndicator("#ccc");


//* set password length
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerHTML = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength-min)*100/(max-min))+ "% 100%";
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0, 9);
}

function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase() {
    return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol() {
    const randomIndex = getRndInteger(0, symbols.length)
    return symbols.charAt(randomIndex);
}

function calStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (symbolsCheck.checked) hasSym = true;
    if (numberCheck.checked) hasNum = true;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    }
    else if (hasUpper || hasLower && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicator("#ff0");
    }
    else {
        setIndicator("#f00");
    }

}



function shufflePassword(array) {
    //*Fisher yates method
    for(let i = array.length - 1;i>0;i--)
    {
        const j = Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((ele) => (str += ele));
    return str; 

}



//note : 

async function copyContent() {

    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied!";
    } catch (e) {
        copyMsg.innerText = "Failed";
    }

    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);


}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked) {
            checkCount++;
        }
    });

    //note- special condition
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
});





inputSlider.addEventListener("input", (e) => {
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener("click", () => {
    if (passwordDisplay.value) {
        copyContent();
    }
})




generateBtn.addEventListener('click',()=>{
    //* none of the checkboxes are selected
    if (checkCount<=0) {
        return;
    }


    if (passwordLength< checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    //* Generate password...

    //TODO: remove old password
    password = "";

    //TODO to put the stuff from checkboxes

    // if(uppercaseCheck.checked)
    // {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked)
    // {
    //     password += generateLowerCase();
    // }
    // if(numberCheck.checked)
    // {
    //     password += generateRandomNumber();
    // }
    // if(symbolsCheck.checked)
    // {
    //     password += generateSymbol();
    // }

    let funArr = [];

    if(uppercaseCheck.checked) {
        funArr.push(generateUpperCase);
    }
    if(lowercaseCheck.checked) {
        funArr.push(generateLowerCase);
    }
    if(numberCheck.checked) {
        funArr.push(generateRandomNumber);
    }
    if(symbolsCheck.checked) {
        funArr.push(generateSymbol);
    }

    //? The functions that should be added compulsory

    for (let i = 0; i < funArr.length; i++) {
        password += funArr[i]();
        
    }

    //?remaining addition of functions
    for(let i=0; i<passwordLength-funArr.length;i++)
    {
        let randomIndex = getRndInteger(0,funArr.length);
        password += funArr[randomIndex]();
    }
    

    //? shuffle the password
    password = shufflePassword(Array.from(password));

    //? Display the password

    passwordDisplay.value = password;

    //?Strength function

    calStrength();
});
