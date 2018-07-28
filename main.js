// Angle calculator

const printScreen = document.querySelector('.h1');
const form = document.querySelector('.formForm');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const resultPrintOut = document.querySelector('.answerPrintOut');
const results =

    form.addEventListener('submit', getAngle);


function getAngle(e) {

    let y = Math.round(Math.atan(input1.value / input2.value) * 180 / Math.PI);
    resultPrintOut.innerHTML = y + "&deg";

    e.preventDefault();
};


// Regular Calculator

const butt = document.querySelector('.butt').addEventListener('click', calc);


function calc() {
    var in3 = parseFloat(document.querySelector('.input3').value);
    var in4 = parseFloat(document.querySelector('.input4').value);
    var oper = document.querySelector('#operators').value;

    if (oper === '+') {
        document.querySelector('.result').value = in3 + in4;
    }

    if (oper === '-') {
        document.querySelector('.result').value = in3 - in4;
    }

    if (oper === '/') {
        document.querySelector('.result').value = in3 / in4;
    }

    if (oper === '*') {
        document.querySelector('.result').value = in3 * in4;
    }
};







