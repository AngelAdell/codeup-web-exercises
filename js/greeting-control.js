const { getRandomGreeting } = require('./greeting-logic');

// Function to handle form submission and display greeting
function submitForm() {
    var userName = document.getElementById("name").value;
    var randomGreeting = getRandomGreeting();

    document.getElementById("greetingDisplay").innerHTML = "<p>" + randomGreeting + ", " + userName + "!</p>";
}

document.getElementById("greetingForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    submitForm();
});