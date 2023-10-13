alert("Welcome to my Website!");

let useranswer = prompt('What is your favorite color?');
console.log(`My favorite color is: ${useranswer} + too`);

alert(`Wow, ${useranswer} is my favorite color too!`)

alert ('You want to rent some movies for your kids, but how much will it cost you?')

let LittleMermaid = parseInt(prompt('How many days will you rent the Little Mermaid?'));
console.log(typeof LittleMermaid);

alert (`You rented the Little Mermaid for ${LittleMermaid} days`)

let BrotherBear = parseInt(prompt('How many days will you rent Brother Bear?'));
console.log(BrotherBear);

alert (`You rented Brother Bear for ${BrotherBear} days`)

let Hercules = parseInt(prompt('How many days will you rent Hercules?'));
console.log(`${Hercules}`);

alert (`You rented Hercules for ${Hercules} days`)

let MPD = parseInt(prompt('What was the price of rental per day?'));
console.log(`${MPD}`);

alert (`The daily rental cost is ${MPD} per day`)

let Total = (LittleMermaid + BrotherBear + Hercules) * MPD;
console.log(Total);

alert('You spent ' + Total)

alert('Now calculate your pay from last week.')

let Google = parseInt(prompt('How much do you make per an hour at Google?'));
console.log(`${Google}`);

alert(`You make ${Google}  per an hour. Good Job!`)

let googleHours = parseInt(prompt('How many hours did you work at Google?'));
console.log(`${googleHours}`);

alert(`You worked ${googleHours} hours. Good Job!`)

let Amazon = parseInt(prompt('How much do you make per an hour at Amazon?'));
console.log(`${Amazon}`);

alert(`You make ${Amazon}  per an hour. You are making MONEY, MONEY!`)

let amazonHours = parseInt(prompt('How many hours did you work at Amazon?'));
console.log(`${amazonHours}`);

alert(`You worked ${amazonHours} hours. Good Job!`)

let Facebook = parseInt(prompt('How much do you make per an hour at Facebook?'));
console.log(`${Facebook}`);

alert(`You make ${Facebook}  per an hour. You are paid!`)

let facebookHours = parseInt(prompt('How many hours did you work at Facebook?'));
console.log(`${facebookHours}`);

alert(`You worked ${facebookHours} hours. Good Job!`)

let weekspay = ((Google * googleHours) + (Amazon * amazonHours) + (Facebook * facebookHours));

alert(` You made  ${weekspay}`);
