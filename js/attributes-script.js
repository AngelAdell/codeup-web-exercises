/*Now, let's use JavaScript to manipulate these elements:

Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
Four seconds after the page loads, use innerHTML to change the name in "profile-name".
Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.
Use setTimout to create these behaviors.
Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.
Bonus
Encapsulate all your timers in a single function.
Instead of toggling the background color every two seconds for the "profile-card", create an array of colors and programmatically change the background color every two seconds.
Hint: You will have to choose a RANDOM index from the array of colors.

After all of your timeouts have expired, bring up a prompt that will change "profile-name" text to whatever the user inputs.

 */


const profilePic = document.getElementById("profile-pic");
const count =0;
const delay= 2000;
let interval = 1000;
const colors= ['rose-gold', "gold", 'cream', 'light-brown'];
const timers = [ ' bckgdTimer', 'profileNameTimer', 'profileDescTimer','intervalColors' ]

/*Profile pic change.*/

// Function to change the profile picture src attribute
function changeProfilePicture() {
    profilePic.src = "img/pexels-jade-garon-18983851.jpg";
}

window.addEventListener('load', function() {
    setTimeout(changeProfilePicture, delay);
});



/*timer for background 2 seconds*/
const element = document.querySelector('#profile-card');
let toggleBackgroundColor = true

// Function that toggles the background color
// function bckgdTimer() {
//     if (toggleBackgroundColor) {
//         element.style.backgroundColor = 'rose-gold';
//         toggleBackgroundColor = false;
//     } else {
//         element.style.backgroundColor = 'gold';
//         toggleBackgroundColor = true;
//     }
// }
// // Initialize the timer using setInterval
// setInterval(bckgdTimer, 2000);


/* timer for profile_name */
const profileName = document.getElementById('profile-name');
let name = true
function changeProfileName() {
    if (name) {
        profileName.innerHTML = 'Jane Doe';
        name = false;
    } else {
        profileName.innerHTML = 'Jo Doe';
        name = true;
    }
}
window.addEventListener('load', function() {
    setTimeout(changeProfileName, 4000);
});
/* still need it to change back to John Doe*/

// Set a timer for sic seconds after the page loads
function changeProfileDescription() {
    const profileDesc = document.getElementById('profile-desc');
    profileDesc.style.color = 'blue';
}
window.addEventListener('load', function() {
    setTimeout(changeProfileDescription, 6000);
});



/* timer for profile card background using the colors[]*/
for (var i = 0; i < colors.length; i++) {
    delays(i);
}

function delays(i) {
    setTimeout(() => {
        document.getElementById('profile-card').style.backgroundColor = colors[i];
        // Additional code or actions you want to perform
    }, 1000 * (i + 1));
}


/* join all the timers together*/
//
// setTimeout(function() {
//     console.log("First timeout");
//     setTimeout(function() {
//         console.log("Second timeout");
//         setTimeout(function() {
//             console.log("Third timeout");
//         }, 2000);
//     }, 2000);
// }, 2000);


/* Toggle background colors */


/* profile username prompt*/
// const button = document.querySelector('button');
//
// // Add an event listener to the button that listens for the click event
// button.addEventListener('click', function() {
//     // Display the prompt when the button is clicked
//     const userInput = prompt('Please enter your name:');
//     le
//     function userprompt () {
//         if (userInput)
//     }
// });
// Get the button element
// const button = document.querySelector('button');
//
// // Add an event listener to the button that listens for the click event
// button.addEventListener('click', function() {
//     // Display the prompt when the button is clicked
//     const userInput = prompt('Please enter your name:');
//     console.log(userInput);
// });
