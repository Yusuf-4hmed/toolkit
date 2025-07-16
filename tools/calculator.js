const calculatorScreen = document.getElementById("calculator-screen");
const screenText = document.getElementById("screen-text")

const backButton = document.getElementById("back-button");
const oneButton = document.getElementById("1-button");
const twoButton = document.getElementById("2-button");
const threeButton = document.getElementById("3-button");
const fourButton = document.getElementById("4-button");
const fiveButton = document.getElementById("5-button");
const sixButton = document.getElementById("6-button");
const sevenButton = document.getElementById("7-button");
const eightButton = document.getElementById("8-button");
const nineButton = document.getElementById("9-button");
const zeroButton = document.getElementById("0-button");
const decimalButton = document.getElementById("decimal-button");

const divideButton = document.getElementById("divide-button");
const multiplyButton = document.getElementById("multiply-button");
const subtractButton = document.getElementById("subtract-button");
const addButton = document.getElementById("add-button");
const equalsButton = document.getElementById("equals-button");

const calculatorHistoryContainer = document.getElementById('calculator-history-container');


let screenArray = [];

const addToScreen = (value) => {
    screenArray.push(value);
    updateScreen();
}
const updateScreen = () => {
    screenText.innerText = screenArray.join('');
}
const calculate = () => {
    screenText.innerText = eval(screenText.innerText)
    saveInstance();
}
const remove = () => {
    screenArray.pop();
    screenText.innerText = screenArray.join('')
}

const saveCalculationHistory = () => {
    localStorage.setItem('calculationHistory', calculatorHistoryContainer.innerHTML)
}

const loadCalculationHistory = () => {
   calculatorHistoryContainer.innerHTML = localStorage.getItem('calculationHistory')
}

const saveInstance = () => {
    if (calculatorHistoryContainer.children.length >= 10) {
        calculatorHistoryContainer.removeChild(calculatorHistoryContainer.firstElementChild);
        calculatorHistoryContainer.innerHTML += `<li class="calculator-history">${screenArray.join('').replace(/([\+\-\*\/])/, ' $1 ')+ ' ' + '=' + ' ' +  Number(screenText.innerText)}</li>`;
    } else {
        calculatorHistoryContainer.innerHTML += `<li class="calculator-history">${screenArray.join('').replace(/([\+\-\*\/])/, ' $1 ')+ ' ' + '=' + ' ' +  Number(screenText.innerText)}</li>`;
    }
    saveCalculationHistory()
}

loadCalculationHistory()

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        addToScreen(button.dataset.value);
    })
})

equalsButton.addEventListener("click", () => {
    calculate();
})

backButton.addEventListener("click", () => {
    remove()
})

// })
// backButton.addEventListener("click", () => {
//     screenArray.pop()
//     screenText.innerText = screenArray.join('')
// })

document.addEventListener("keydown", (e) => {
    if (!calculatorDisabled) {
        if (e.key === "1") {
      screenArray.push(1);
      screenText.innerText = screenArray.join('');
      oneButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "2") {
      screenArray.push(2);
      screenText.innerText = screenArray.join(''); 
      twoButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "3") {
        screenArray.push(3);
        screenText.innerText = screenArray.join('');  
        threeButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "4") {
        screenArray.push(4);
        screenText.innerText = screenArray.join('');  
        fourButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "5") {
        screenArray.push(5);
        screenText.innerText = screenArray.join('');  
        fiveButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "6") {
        screenArray.push(6);
        screenText.innerText = screenArray.join('');  
        sixButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "7") {
        screenArray.push(7);
        screenText.innerText = screenArray.join(''); 
        sevenButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "8") {
        screenArray.push(8);
        screenText.innerText = screenArray.join('');  
        eightButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "9") {
        screenArray.push(9);
        screenText.innerText = screenArray.join('');  
        nineButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "0") {
        screenArray.push(0);
        screenText.innerText = screenArray.join('');  
        zeroButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "Backspace") {
        screenArray.pop()
        screenText.innerText = screenArray.join('')
        backButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "+") {
        screenArray.push("+");
        screenText.innerText = screenArray.join('')
        addButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "=") {
        screenText.innerText = eval(screenText.innerText);
        screenArray = [];
        screenArray.push(screenText.innerText)
        equalsButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "Enter") {
        calculate();
        screenArray = [];
        screenArray.push(screenText.innerText);
        equalsButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "*") {
        screenArray.push("*");
        screenText.innerText = screenArray.join('');  
        multiplyButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "/") {
        screenArray.push("/");
        screenText.innerText = screenArray.join('');  
        divideButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === "-") {
        screenArray.push("-");
        screenText.innerText = screenArray.join('');  
        subtractButton.style.backgroundColor = `var(--button-color-hover)`
    } else if (e.key === ".") {
        screenArray.push(".");
        screenText.innerText = screenArray.join('');  
        decimalButton.style.backgroundColor = `var(--button-color-hover)`
    }
    }
    
})

document.addEventListener("keyup", (e) => {
    if (!calculatorDisabled) {
        if (e.key === "1") {

      oneButton.style.backgroundColor = ``
    } else if (e.key === "2") {

      twoButton.style.backgroundColor = ``
    } else if (e.key === "3") {
 
        threeButton.style.backgroundColor = ``
    } else if (e.key === "4") {

        fourButton.style.backgroundColor = ``
    } else if (e.key === "5") {

        fiveButton.style.backgroundColor = ``
    } else if (e.key === "6") {
 
        sixButton.style.backgroundColor = ``
    } else if (e.key === "7") {

        sevenButton.style.backgroundColor = ``
    } else if (e.key === "8") {

        eightButton.style.backgroundColor = ``
    } else if (e.key === "9") {

        nineButton.style.backgroundColor = ``
    } else if (e.key === "0") {

        zeroButton.style.backgroundColor = ``
    } else if (e.key === "Backspace") {

        backButton.style.backgroundColor = ``
    } else if (e.key === "+") {

        addButton.style.backgroundColor = ``
    } else if (e.key === "=") {
 
        equalsButton.style.backgroundColor = ``
    } else if (e.key === "Enter") {

        equalsButton.style.backgroundColor = ``
    } else if (e.key === "*") {

        multiplyButton.style.backgroundColor = ``
    } else if (e.key === "/") {

        divideButton.style.backgroundColor = ``
    } else if (e.key === "-") {

        subtractButton.style.backgroundColor = ``
    } else if (e.key === ".") {

        decimalButton.style.backgroundColor = ``
    }
    }
    
})


