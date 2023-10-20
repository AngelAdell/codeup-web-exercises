function showMultiplicationTable (number){
for (let i = 1; i <= 10; i++) {
    console.log (number * i )
}
}

for (let i = 0; i < 10 ; i++) {
    const randomNumber = Math.floor(Math.random() * (200-20))
    if (randomNumber % 2 == 0) {
        console.log ('Here is an even number ' + randomNumber);
    } else if (randomNumber % 2 !== 0) {
        console.log ('Here is an odd number ' + randomNumber);
    }
}

for (let i = 1; i < 10 ; i++) {
    var incrementNumber = '';
    incrementNumber += i;
    console.log (incrementNumber)
}

var numberToStopAt = 5
for (let i = 100; i > 0 ; i-=5) {
    console.log (i)
    if (i === numberToStopAt) {
        break;
        console.log('We have completed the sequence.')
    }
}

