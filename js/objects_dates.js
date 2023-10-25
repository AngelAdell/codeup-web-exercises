'use strict';

// todo:
// Create an array of months for printing dates
let months = ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// todo:
// Create the date corresponding to your birthday using the JavaScript Date object.
let jsBirthday = new Date( "July 06, 1986")


// todo:
// Log your birthday in the format: January 1, 2014 using the JavaScript Date object.
console.log(jsBirthday);
console.log(jsBirthday.getFullYear());
console.log(jsBirthday.getMonth());
console.log(jsBirthday.getDate());
console.log(jsBirthday.getDay());

//I could have created a variable for jsBirthday.getFullYear, jsBirthday.getMonth, and so on prior to logging it in the console. Subsequently, I would have created a date variable that stringed all of the variables (as strings) to create formatted birthday prior to logging.
// See link below for methods needed:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Getter
console.log('Here is my birthday using JavaScript: ', jsBirthday);