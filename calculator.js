let inputString = '';
let number1;
let number2;
let operation;

function removeError(){
    if (inputString === 'ERROR') inputString = '';
}

function updateTextInput(){
    document.querySelector('.inputString').value=inputString;
}

const deleteString = document.querySelector('.delete');
deleteString.addEventListener("click",function(){inputString='';updateTextInput()});

const numbers = document.querySelectorAll('.numbers');
console.log(numbers);
for (let i=0; i< numbers.length; i += 1){
    numbers[i].addEventListener('click', (event) => {
        //inputString += event.target.id;
        inputString += event.target.textContent;
        updateTextInput();
        //console.log('Clicked', i);
    })
}

function count(){
    number1 = String({ 
        if (operation = '+') {parseFloat(number1) + parseFloat(number2)},
        if (operation = '-') {parseFloat(number1) - parseFloat(number2)},
        if (operation = '*') {parseFloat(number1) * parseFloat(number2)},
        if (operation = '/') {parseFloat(number1) / parseFloat(number2)}
            });
    number2 = '';
    operation = '';
    inputString=number1;
}

function calculate(str){
    if (str==='') return '';
    if (str.startsWith('ERROR')) return '';
    console.log(str);
    if (parseFloat(str)===NaN) {str = 'ERROR'; return str};
    let num1 = parseFloat(str);
    str = str.replace(String(num1),"");
    if (str==='') return String(num1); 
    let operation = str.charAt(0);
    str = str.substring(1);
    let num2 = parseFloat(str);
    str = str.replace(String(num2),"");
    console.log(num1);
    console.log(operation);
    console.log(num2);
    let result; 
    if (operation === '+') {result = String(parseFloat(num1) + parseFloat(num2))};
    if (operation === '-') {result = String(parseFloat(num1) - parseFloat(num2))};
    if (operation === '*') {result = String(parseFloat(num1) * parseFloat(num2))};
    if (operation === '/') {result = String(parseFloat(num1) / parseFloat(num2))};
    console.log(result);
    if (str==='') return result;
    return calculate(result + str);
}

const sum = document.querySelector('.sum');
sum.addEventListener("click",
    (event)=>{
        if(inputString.endsWith('+') || inputString.endsWith('-') || inputString.endsWith('*') || inputString.endsWith('/'))
            inputString='ERROR';
        else inputString += event.target.textContent;
            updateTextInput()});

const sub = document.querySelector('.sub');
sub.addEventListener("click",
    (event)=>{
        if(inputString.endsWith('+') || inputString.endsWith('-') || inputString.endsWith('*') || inputString.endsWith('/'))
            inputString='ERROR';
        else inputString += event.target.textContent;
            updateTextInput()});

const mult = document.querySelector('.mult');
mult.addEventListener("click",
    (event)=>{
        if(inputString.endsWith('+') || inputString.endsWith('-') || inputString.endsWith('*') || inputString.endsWith('/'))
            inputString='ERROR';
        else inputString += '*';
            updateTextInput()});

const mod = document.querySelector('.mod');
mod.addEventListener("click",
    (event)=>{
        if(inputString.endsWith('+') || inputString.endsWith('-') || inputString.endsWith('*') || inputString.endsWith('/'))
            inputString='ERROR';
        else inputString += event.target.textContent;
            updateTextInput()});

const equal = document.querySelector('.equal');
equal.addEventListener("click",
    (event)=>{
        if(inputString.endsWith('+') || inputString.endsWith('-') || inputString.endsWith('*') || inputString.endsWith('/'))
            inputString='ERROR';
        else inputString = calculate(inputString);
            updateTextInput()});