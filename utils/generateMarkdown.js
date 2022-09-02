const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/license-%24license-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  if (license === 'GPL') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  }
  if (license === 'CC Attribution 4') {
    return `https://creativecommons.org/licenses/by/4.0/legalcode`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. Click the license link above if you want to learn more.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projecttitle}

  ${renderLicenseBadge(data.licenses)}

  ## Tables of Contents
  * Description
  * Installation
  * Usage
  * Licenses
  * Contribute
  * Tests
  * Credits
  * Contact

  ## Description
  ${data.projectdescription}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.licenses)}

  ## Contribute
  ${data.contributions}

  ## Tests
  ${data.testing}

  ## Credits
  ${data.name}

  ## Contact
  Contact me!
  Email: ${data.email}
  Github: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
