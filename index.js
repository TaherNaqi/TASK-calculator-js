/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */
let num1;
let num2;
let operation;
let result;
let history = [];
function buttonClick(text) {
  console.log("Clicking", text);
  // Write your code here
  if (text == "+" || text == "-" || text == "÷" || text == "x") {
    operation = text;
  } else if (text === "AC") {
    printOnConsole(0);
    num1 = 0;
    num2 = 0;
  } else if (!isNaN(text)) {
    printOnConsole(text);
    if (!num1) num1 = parseInt(text);
    else if (operation) num2 = parseInt(text);
  } else if (text == "=") {
    result = calculate(operation, num1, num2);
    printOnConsole(result);
    history.push(`${num1} ${operation} ${num2} = ${result}`);
    updateHistory(history);
  }
}
//updateHistory([`${num1} ${operation} ${num2} = ${result}`]);

function calculate(operation, num1, num2) {
  if (operation == "+") {
    return num1 + num2;
  } else if (operation == "-") {
    return num1 - num2;
  } else if (operation == "÷") {
    return num1 / num2;
  } else if (operation == "x") {
    return num1 * num2;
  }
}

/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
// printOnConsole("123");
