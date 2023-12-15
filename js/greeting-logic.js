const { generateRandomNumber } = require('./number-utils');

// Array of greetings
const greetings = [
    "Hello",
    "Hi",
    "Hey there",
    "Greetings",
    "Salutations",
    "Howdy",
    "Yo",
    "Bonjour",
    "Hola",
    "Ciao",
    "Namaste",
    "G'day",
    "What's up",
    "Sup",
    "How's it going",
    "Nice to meet you",
    "Welcome",
    "Hey",
    "How are you",
    "Pleased to meet you"
];

// Function to return a random greeting
function getRandomGreeting() {
    const randomIndex = generateRandomNumber(0, greetings.length - 1);
    return greetings[randomIndex];
}

// Export the necessary functions/variables
module.exports = {
    getRandomGreeting: getRandomGreeting
};

// Import the getRandomGreeting function from greeting-logic
const { getRandomGreeting } = require('./greeting-logic');
const randomGreeting = getRandomGreeting();

console.log('Random Greeting:', randomGreeting);