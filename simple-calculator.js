// let a,b,c,d,e,f;
// a=10;
// b=3;
// c=a+b;
// d=a*b;
// e=a-b;
// f=a/b;
// console.log("First Number + Second Number = " + "  "+ c);
// console.log("First Number * Second Number = " + "  "+ d);
// console.log("First Number - Second Number = " + "  "+ e);
// console.log("First Number / Second Number = " + "  "+ f);

function addition(firstnum,secnum){
    return firstnum + secnum;
}

function subtract(firstnum,secnum){
    return firstnum - secnum;
}
function multiply(firstnum,secnum){
    return firstnum * secnum;
}
function division(firstnum,secnum){
    return firstnum / secnum;
}


function operation(){
    let firstnum = parseFloat(prompt("Enter first number"));
    let secnum = parseFloat(prompt("Enter second number"));
    let operator = prompt("Enter Operator '+' for additon, '-' for subtraction, '*' for multiplication and '/' for division");
    let result = 0;

    if (operator === "+"){
        result = addition(firstnum,secnum);
    }
    else if (operator === "-"){
        result = subtract(firstnum,secnum);
    }
    else if (operator === "*"){
        result = multiply(firstnum,secnum);
    }
    else if (operator === "/"){
        result = division(firstnum,secnum);
    }
    else {
        alert("Please enter a valid operator")
    }
    alert(result)
}
operation();