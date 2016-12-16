// JavaScript File
var button = document.getElementById("submitButton");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var display = document.getElementById("display");
var dropdown = document.getElementById("dropdown");
var answer;

button.addEventListener("click", doMath);

function doMath(){
    if (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }else if(dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }else if(dropdown.value == "*"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }else if(dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer; 
    }
}