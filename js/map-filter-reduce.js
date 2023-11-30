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

const speak = users.filter ( speak => {
    return speak.languages >=3;
});

console.log(speak);

// Question 2 Map

const webmail = users.map (user => {
    return user.email;
});

console.log(webmail);

// Question 3 -5 .reduce
const totalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

// Question 4

const longEmail = users.reduce((acc, user) => {
    if (user.email.length > acc.email.length) {
        return user;
    } else {
        return acc;
    }
}, users[0]);

console.log(longEmail.email); // Output the longest email

// Question 5

const singleString = users.reduce((acc, user, index) => {
    if (index === users.length - 1) {
        return acc + user.name + ', '; // Add the user's name followed by a comma and space
    }
}, 'Your instructors are: ');

console.log(singleString);