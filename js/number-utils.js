function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Export the function
module.exports = {
    generateRandomNumber: generateRandomNumber
};
// Import the number-utils module
const numberUtils = require('./number-utils');
const randomNumber = numberUtils.generateRandomNumber(1, 100);

// Print the random number
console.log('Random Number:', randomNumber);