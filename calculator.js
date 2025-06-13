// Function to add two numbers
function add(number1, number2) {
    return number1 + number2;
}

// Function to subtract two numbers
function subtract(number1, number2) {
    return number1 - number2;
}

// Function to multiply two numbers
function multiply(number1, number2) {
    return number1 * number2;
}

// Function to divide two numbers
function divide(number1, number2) {
    // Basic check to prevent division by zero, though browser will show Infinity
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Get references to the input fields and result display
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const calculationResultSpan = document.getElementById('calculation-result');

// Get references to the operation buttons
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

// Helper function to get and parse numbers from inputs
function getParsedNumbers() {
    // parseFloat converts the string value to a floating-point number.
    // If the input is empty or cannot be parsed, || 0 ensures it defaults to 0.
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    return { num1, num2 };
}

// Attach Event Listener for the Addition button
addButton.addEventListener('click', function() {
    const { num1, num2 } = getParsedNumbers(); // Get parsed numbers
    const result = add(num1, num2); // Perform addition
    calculationResultSpan.textContent = result; // Display result
});

// Attach Event Listener for the Subtraction button
subtractButton.addEventListener('click', function() {
    const { num1, num2 } = getParsedNumbers(); // Get parsed numbers
    const result = subtract(num1, num2); // Perform subtraction
    calculationResultSpan.textContent = result; // Display result
});

// Attach Event Listener for the Multiplication button
multiplyButton.addEventListener('click', function() {
    const { num1, num2 } = getParsedNumbers(); // Get parsed numbers
    const result = multiply(num1, num2); // Perform multiplication
    calculationResultSpan.textContent = result; // Display result
});

// Attach Event Listener for the Division button
divideButton.addEventListener('click', function() {
    const { num1, num2 } = getParsedNumbers(); // Get parsed numbers
    const result = divide(num1, num2); // Perform division
    calculationResultSpan.textContent = result; // Display result
});
