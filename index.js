// Required packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Questions for user
// Name
// Github username
// Email address
// Project title
// Project description
// Install instructions
// Usage instructions
// Contributions
// Testing
// Licenses
// Credits

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your full name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Github username so that others will know where to find more of your work.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email addresss',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('An email is required so that users have a method to contact you');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projecttitle',
        message: 'Please enter the title of your project',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('All projects  require a title');
            }
        }
    },
    {
        type: 'input',
        name: 'projectdescription',
        message: 'Please enter a description for the project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for the project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please describe how to install the project.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please provide installation instructions so users can run your program correctly.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can others use this program?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions so users can use the program properly.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please enter how others can contribute to this project.',
        validate: contributionsinput => {
            if (contributionsinput) {
                return true;
            } else {
                console.log('Please provide instructions as to how others can contribute to this project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please describe what tests were written for your application and how they can be used.',
        validate: testinginput => {
            if (testinginput) {
                return true;
            } else {
                console.log('Please provide information about any tests written for the project, and how to use them.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'licenseconfirm',
        message: 'Would you like to include any licenses?',
        default: false
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What licenses would you like to include?',
        choices: ['MIT', 'GPL', 'CC Attribution 4.0'],
        when: ({licenseconfirm}) => {
            if (licenseconfirm) {
                return true;
            } else {
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise ((resolve, reject) => {

        fs.writeFile('./new/README.md', data, err => {
            if(err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: console.log('README created! You can find it in the "new" folder.')    
            });
        })
    })
}
    
// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(answers => {
    return generateMarkdown(answers);
})
.then(Readme => {
    return writeToFile(Readme);
})
.catch(err => {
    console.log(err);
})
