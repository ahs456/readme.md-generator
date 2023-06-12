// Function that returns a license badge based on which license is passed in, returns the license link and that returns the license section of README
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](*license)\n`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `The license for this project is ${license}.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
The installation of this project requires the following:
${data.installation}

## Usage
${data.use}

## Future Contributions
How to Contribute: 
${data.contributors}

## Testing
The tests for this project require the following:
${data.test}

## Questions and Suggestions
Should you have any further questions or suggestions, please contact me via email: ${data.email}. 
Additionally, other projects i have worked on can be found via GitHub: ${data.github}.

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Link to watch video demonstation of this project

`;
}

module.exports = generateMarkdown;
