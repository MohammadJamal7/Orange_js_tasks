

//Part one
let firstName = "Mohammad";
let lastName = "Apo Erra";
let age = 21;
console.log(`firstName: ${firstName} LastName: ${lastName}`);




//Part two
let firstNum = "10";
let secondNum = 5;

let thirdNum = Number(firstNum + secondNum);
console.log(thirdNum);


secondNum = String(+"S" + firstNum + secondNum + "H");
console.log(secondNum);


//Part 3
let operation = prompt("Enter operation (+, -, *, /)");
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let final;

if (operation == "+") {
    final = Number(num1) + Number(num2);
} else if (operation == "-") {
    final = Number(num1) - Number(num2);
} else if (operation == "*") {
    final = Number(num1) * Number(num2);
} else if (operation == "/") {
    final = Number(num1) / Number(num2);  
} else {
    final = "Invalid Operation";
}

// Display the results in the HTML
document.getElementById("result").innerHTML = final;
document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;
document.getElementById("op").innerHTML =operation;









