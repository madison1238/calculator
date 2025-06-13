const equationDisplay = document.querySelector('.display #equation' )
const resultDisplay = document.querySelector('.display #result')
const equals = document.querySelector('#equals')
const numberButtons = document.querySelectorAll('button.num')
const symbolButtons = document.querySelectorAll('button.symbol')
const clearButton = document.querySelector('#clear-btn')
const deleteButton = document. querySelector('#delete-button')


let justCalculated = false;
let num1 
let num2 
let operator
let result 

function add(a,b){
    return Number(a)+Number(b);
}

function subtract(a,b){
    return Number(a)-Number(b);
}

function multiply(a,b){
    return Number(a)*Number(b);
}

function divide(a,b){
    if (a==0 && b == 0){
        setNull()
        resultDisplay.textContent = ''
        equationDisplay.textContent = ''
        alert('cant divide by 0')
    }
    return Number(a) / Number(b)
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
    equationDisplay.textContent = `${n1}${sign}${n2}`;
    resultDisplay.textContent = '';
    result = +(operate(n1, n2, sign))
    result = parseFloat(result.toFixed(2))
    String(result).length > 13
        ? tooLongToDisplay()
        :displayResult(result);
    }

function appendNumbers(n1, n2){
    n1 ?fullNum = String(n1) + String(n2) : fullNum = n2
    console.log(fullNum)
    return fullNum;
}

function setNull(){
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
}

function tooLongToDisplay(){
    setNull()
    resultDisplay.textContent = ''
    equationDisplay.textContent= ''
    alert('too long to display')
}

function displayResult(num){
    resultDisplay.textContent = `${num}`;
    num1 = result;
    operator = undefined;
    num2 = undefined;
    justCalculated = true;
}


equals.addEventListener('click', () => {
    if (num1 && num2 && operator){
        run_calculation(num1, num2, operator);
    }
})

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if(justCalculated){
            setNull();
            resultDisplay.textContent = '';
            equationDisplay.textContent = '';
            justCalculated = false
        }
        resultDisplay.textContent += btn.textContent;

        if (resultDisplay.textContent.length > 12){
            alert('too many digits to display');
            resultDisplay.textContent = ''
            equationDisplay.textContent = ''
            setNull();
            return;
        }
        operator
            ? num2 = appendNumbers(num2, btn.textContent)
            : num1 = appendNumbers(num1, btn.textContent)     
    })
} )

symbolButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const symbol = btn.textContent;

        if(justCalculated) justCalculated = false;

        if(num1 && operator && num2) {
            run_calculation(num1,num2,operator);

}
        operator = symbol;
        resultDisplay.textContent += symbol;
        justCalculated = false
    })
})

clearButton.addEventListener('click', ()=> {
    setNull();
    equationDisplay.textContent = '';
    resultDisplay.textContent = '';
})

deleteButton.addEventListener('click', () => {
    resultDisplay.textContent = resultDisplay.textContent.slice(0,-1);

    if(operator && num2 !== undefined){
        num2 = String(num2).slice(0,-1);
        if(num2 === '') num2 = undefined;
    }
    else if(!operator && num1 !== undefined){
        num1 = String(num1).slice(0,-1)
        if(num1 === '') num1 = undefined
    }
    else if(operator && num1 !== undefined){
        operator = undefined
    }
})