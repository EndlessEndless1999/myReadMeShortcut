const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");




// function to initialize program
function init() {
    inquirer
    .prompt([
        {   type: 'input',
            message: 'What is the title of your Project?',
            name: 'title'},
        {
            type: 'input',
            message: 'Please provide a description',
            name: 'description'
        },
        {   type: 'input',
            message: 'Please Describe the installation process.',
            name: 'installation'
        },
        {   type: 'input',
            message: 'Please Describe the usage of the app.',
            name: 'usage'
        },
        {   type: 'input',
            message: 'Please Describe how others can contribute.',
            name: 'contribute'
        },
        {   type: 'input',
            message: 'Describe any Tests',
            name: 'tests'
        },
        {   type: 'input',
            message: 'Please describe where users can look for FAQs',
            name: 'question'
        },
        {   type: 'list',
            message: 'Please choose a license.',
            name: 'license',
            choices: ['MIT', 'MPL', 'Perl', 'IPL', 'Apache', 'Boost']
        },
        {
            type: 'input',
            message: 'Please provide your Github username',
            name: 'username'
        }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      const generateContent = generateReadme(answers);
      fs.writeFileSync('./TESTREADME.md', generateContent);
    });
}

function generateReadme(answers) {
    return `
# ${answers.title}
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)



## Description
${answers.description}




## Table of Contents
- [Description]
- [Installation]
- [Usage]
- [License]
- [Contributing]
- [Tests]
- [Questions]




## Installation
${answers.installation}
## Usage
${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
This application is covered by the ${answers.license} license. 
## Contributing
${answers.contribute}
## Tests
${answers.tests}
## Questions
${answers.question}
GitHub: [${answers.username}](https://github.com/${answers.username})`
  }

// function call to initialize program
init();
