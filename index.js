const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    'What is the title of your Project?',
    'Enter a Table of Contents Seperated by Spaces.',
    'Please Describe the installation process.',
    'Please Describe the usage of the app.',
    'Please Describe how others can contribute.',
    'Describe any Tests',
    'Please describe where users can look for FAQs',
    'Please choose a license.'
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
