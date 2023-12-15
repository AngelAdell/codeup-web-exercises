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
const profileName = document.getElementById('profile-name');
const profileDesc = document.getElementById('profile-desc');
const profileCard = document.getElementById('profile-card');
const colors = ['rose-gold', 'cream', 'light-brown'];

/*Profile pic change.*/

// Function to change the profile picture src attribute
function changeProfilePicture() {
    profilePic.src = "img/pexels-jade-garon-18983851.jpg";
}

// window.addEventListener('load', function () {
//     setTimeout(changeProfilePicture, delay);
// });


/*timer for background 2 seconds*/
function toggleBackgroundColor() {
    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        profileCard.style.backgroundColor = randomColor;
    }, 2000);
}
window.addEventListener('load', function () {
    setTimeout(toggleBackgroundColor, delay);
});


/* timer for profile_name */
function changeProfileName() {
    profileName.innerHTML = 'Jane Doe';
}

// window.addEventListener('load', function () {
//     setTimeout(changeProfileName, 4000);
// });


// Set a timer for six seconds after the page loads
function changeProfileDescription() {
    profileDesc.style.color = 'blue';
}
// window.addEventListener('load', function() {
//     setTimeout(changeProfileDescription, 6000);
// });

/* timer for profile card background using the colors[]*/
function runTimers() {
    setTimeout(changeProfilePicture, 2000);
    setTimeout(changeProfileName, 4000);
    setTimeout(changeProfileDescription, 6000);
    setTimeout(promptForProfileName, 8000);
}


/* profile username prompt*/
function promptForProfileName() {
    const userInput = prompt('Please enter your name:');
    if (userInput !== null) {
        profileName.innerHTML = userInput;
    }
}

window.addEventListener('load', runTimers);
