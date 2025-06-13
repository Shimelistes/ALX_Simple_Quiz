// Define the checkAnswer function
function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4";

    // Retrieve the User’s Answer
    // Use document.querySelector to select the checked radio button by its name attribute
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');

    let userAnswer = "";
    if (selectedChoice) { // Check if a radio button is actually selected
        userAnswer = selectedChoice.value;
    }

    // Compare the User’s Answer with the Correct Answer
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green"; // Optional: Add some styling for feedback
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red"; // Optional: Add some styling for feedback
    }
}

// Add an Event Listener to the Submit Button
// Use document.getElementById to select the “Submit Answer” button
const submitButton = document.getElementById('submit-answer');

// Add a click event listener, passing checkAnswer function as the callback
submitButton.addEventListener('click', checkAnswer);