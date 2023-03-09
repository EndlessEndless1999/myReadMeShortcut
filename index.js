const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt([
        {   type: 'input',
            message: 'What is the title of your Project?',
            name: '1'},
        {   type: 'input',
            message: 'Enter a Table of Contents Seperated by Spaces.',
            name: '2'},
        {   type: 'input',
            message: 'Please Describe the installation process.',
            name: '3'},
        {   type: 'input',
            message: 'Please Describe the usage of the app.',
            name: '4'},
        {   type: 'input',
            message: 'Please Describe how others can contribute.',
            name: '5'},
        {   type: 'input',
            message: 'Describe any Tests',
            name: '6'},
        {   type: 'input',
            message: 'Please describe where users can look for FAQs',
            name: '7'},
        {   type: 'input',
            message: 'Please choose a license.',
            name: '8'}
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
    });
}


// function call to initialize program
init();
