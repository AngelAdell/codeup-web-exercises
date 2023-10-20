"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
let color = "pink"
function analyzeColor(color)  {
    if (color === "blue") {
        return "That's the color of the ocean!";
    } else if (color === "red") {
        return "Ewww! That's the color of blood";
    } else if (color === "purple") {
        return "I love that color, but it is not the color we are analyzing.";
    }else if (color === "pink") {
        return "We are analyzing the color pink in honor of breast cancer awareness month.";
    }
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("purple"));
console.log(analyzeColor("pink"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// function analyzeColors(randomColor)  {
//     if (randomColor != "pink") {
//         return "Cute color, but that is not the color for October.";
//     } else if (randomColor === "pink") {
//         return "Aww! The most beautiful color!";
//     }
// }
// console.log(analyzeColors(randomColor));
//
// correct answer
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


switch (randomColor) {
    case ("blue"):
        console.log("That's the color of the ocean!");
        break;
    case ('red'):
        console.log("Ewww! That's the color of blood");
        break;
    case ('orange'):
        console.log("Pumpkin Color!");
        break;
    case ('yellow'):
        console.log("Cute color, but it is too b right for October.");
        break;
    case ('green'):
        console.log("This is the color of lush grass");
        break;
    case ('indigo'):
        console.log("I love that color, but it is not the color we are analyzing.");
        break;
    case ('violet'):
        console.log("Aww, the color for October.");
        break;
    case ('pink'):
        console.log("Cute color, but that is not the color for October.");
        break;
    default:
        console.log("I have no clue!.");
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let colorPrompt = prompt("What is the color of October?");

console.log (colorPrompt)

    if (colorPrompt != "pink") {
       alert("Cute color, but that is not the color for October.");
    } else if (colorPrompt === "pink") {
        alert("Aww! The most beautiful color!");
    }

console.log(analyzeColor("pink"));
console.log(analyzeColor("pink"));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
const random = Math.floor((Math.random() * 5));
let randomTotal = parseFloat(prompt("What is the total of your bill?"));
console.log (randomTotal)
let luckyNumber= random;
console.log (luckyNumber)

alert (`You received the number ${random}`);

function calculateTotal(randomTotal,random) {

switch (luckyNumber) {
    case ('1'):
        return randomTotal * 0.1;
        alert("10% something is better than nothing!");
        break;
    case ('2'):
        return randomTotal * 0.25;
        alert("25% This should help!");
        break;
    case ("3"):
        return randomTotal * 0.35;
        alert("35% is better than 25%.");
        break;
    case ("4"):
        return randomTotal * 0.5;
        alert("50% off is real savings!");
        break;
    case ("5"):
        return randomTotal * 1.0;
        alert(" 100% Sweet! You received everything for free!");
        break;
    default:
        return randomTotal * 0;
        alert("You received no discount");

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
