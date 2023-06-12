//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please a description of your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What License does your project use?',
        choices: ['None', 'MIT', 'APACHE 2.0, GPL 3.0, BSD 3'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'how do you test your project?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'use',
        message: 'how do you use your project?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'how can others contribute to your project?',
    },
];

// Function to write README file
function writeToFile(markdown) {
    fs.writeFile('readme.md', markdown, (err) =>
        err ? console.log(err) : console.log('Readme file created successfully!')
    );    
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile(markdown);
    });
}

// Function call to initialize app
init();