const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Question 1


// Question 1:
const speak = users.filter(user => user.languages.length >= 3);

console.log(speak);

// Question 2:
const webmail = users.map(user => user.email);

console.log(webmail);

// Question 3-5:
const totalYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);

const longEmail = users.reduce((acc, user) => (user.email.length > acc.email.length ? user : acc), users[0]);

const singleString = users.reduce((acc, user, index) => {
    if (index === users.length - 1) {
        return acc + user.name + '.';
        return acc + user.name + ', ';
    }
}, 'Your instructors are: ');

console.log(totalYears);
console.log(longEmail.email);
console.log(singleString);