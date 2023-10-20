var input = parseFloat(prompt('Please enter an odd number between 1 and 50'))
while (true){
    if (input % 2 === 0 || input < 1 || input > 50) {
        input = parseFloat(prompt("Invalid! Please enter an odd number between 1 and 50"))
        console.log(input);
    } else {
        break;
    }
}
for (let i = 1; i < 50; i+=2) {
    if (i === input) {
            console.log ("You skipped this number: " + input);
            continue;
        }
    console.log ("This is an odd number : " + i);
    }

