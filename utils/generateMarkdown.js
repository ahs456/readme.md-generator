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
    return `## License
    The license for this project is ${license}.`;
  }
  return '';
}

//Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}

## Project Title
${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Credits](#credits)
- [License](#license)

## Installation

## Usage

## Future Contributions

## Testing

## Questions and Suggestions


`;
}

module.exports = generateMarkdown;
