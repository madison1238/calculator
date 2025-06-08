const equationDisplay = document.querySelector('.display #equation' )
const resultDisplay = document.querySelector('.display #result')
const equals = document.querySelector('.symbol#equals')


//change to undefined for input
let num1 = 1
let num2 = 2
let operator = '+'

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
    resultDisplay.textContent = `${operate(n1, n2, sign)}`;
    num1 = operate(n1, n2, sign);
    operator = undefined;
    num2 = undefined;
    }

equals.addEventListener('click', () => {
    if (num1 && num2 && operator){
        run_calculation(num1, num2, operator);
    }
})