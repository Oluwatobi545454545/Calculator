let display = document.getElementById("input2");
let show = document.getElementById("input1");
let num1 = '';
let num2 = '';
let operation = '';
function showNumber(number) {
    display.value += number;
    show.value += number;
}
function Clearall(number) {
    display.value = ""
}
function clearall(number) {
    display.value = ""
    show.value = ""
}
function operator(number) {
    num1 = display.value;
 
    operation = number;

    display.value = '';//reset variable

    if (number == 'minus'){
        number = '-';
    }
    
    show.value += number;
}
function equal(number) {
    // let res = '';

    num2 = display.value;

    // console.log(operation);

    if (operation == '+') {
        res = (Number)(num1) + (Number)(num2);
    }
    else if (operation == 'minus'){
        res = (Number)(num1) - (Number)(num2);
    }
    else if (operation == 'x'){
        res = (Number)(num1) * (Number)(num2);
    }
    else if (operation == '÷'){
        res = (Number)(num1) / (Number)(num2);
    }
    else if (operation == '%'){
        res = (Number)(num1) % (Number)(num2);
    }
    else if (operation == '²'){
        res = (Number)(num1) * (Number)(num2);
    }

    show.value += ' = ';

    display.value = res;
}
function cancel(number) {
    display.value = display.value.slice(0, -1)
    
}

