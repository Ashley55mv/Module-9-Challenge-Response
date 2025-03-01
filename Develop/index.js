// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'input',
        name: 'videoURL',
        message: 'Provide a URL to a video demonstrating the project:',
    },
    {
        type: 'input',
        name: 'screenshots',
        message: 'Provide URLs to screenshots (comma-separated):',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function to generate markdown for README
function generateMarkdown(data) {
    const screenshots = data.screenshots.split(',').map(url => `![Screenshot](${url.trim()})`).join('\n');

    return `
# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

### Video
[Watch the video demonstration](${data.videoURL})

### Screenshots
${screenshots}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${data.license !== 'None' ? `This project is licensed under the ${data.license} license.` : ''}

## Questions
If you have any questions, you can contact me at [${data.email}](mailto:${data.email}). You can also find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

// Function call to initialize app
init();