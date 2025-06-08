const equationDisplay = document.querySelector('.display #equation' )
const resultDisplay = document.querySelector('.display #result')
const equals = document.querySelector('#equals')
const numberButtons = document.querySelectorAll('button.num')
const symbolButtons = document.querySelectorAll('button.symbol')
const clearButton = document.querySelector('#clear-btn')



let num1 
let num2 
let operator 

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if (a===0 && b === 0){
        return 'erroor'
    }
    return a/b
}

function operate(num1, num2, operator){
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1,num2);
        case 'x':
            return multiply(num1,num2)           
        case '÷':
            return divide(num1,num2);
    }
}

function run_calculation(n1, n2, sign){
    equationDisplay.textContent = '';
    equationDisplay.textContent = `${n1}${sign}${n2}= `;
    resultDisplay.textContent = '';
    let answer = operate(n1, n2, sign)
    let roundedAnswer = parseFloat(answer.toFixed(2))
    resultDisplay.textContent = `${roundedAnswer}`;
    num1 = roundedAnswer;
    operator = undefined;
    num2 = undefined;
    }

function appendNumbers(n1, n2){
    n1 ?fullNum = String(n1) + String(n2) : fullNum = n2
    console.log(fullNum)
    return +fullNum;
}

function setNull(){
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
}


equals.addEventListener('click', () => {
    if (num1 && num2 && operator){
        run_calculation(num1, num2, operator);
    }
})

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        resultDisplay.textContent += btn.textContent;
        operator
            ? num2 = appendNumbers(num2, btn.textContent)
            : num1 = appendNumbers(num1, btn.textContent)
    })
} )

symbolButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        resultDisplay.textContent += btn.textContent;
        operator = btn.textContent;
    })
})

clearButton.addEventListener('click', ()=> {
    setNull();
    equationDisplay.textContent = '';
    resultDisplay.textContent = '';
})
