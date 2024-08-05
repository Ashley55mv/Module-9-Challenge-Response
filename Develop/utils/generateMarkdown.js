// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
switch (license) {
  case 'MIT':
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  case 'GNU':
    return `[![License: GNU](https://img.shields.io/badge/License-GNU-blue.svg)](https://opensource.org/licenses/GPL-3.0)`;
  case 'Apache':
    return `[![License: Apache](https://img.shields.io/badge/License-Apache-red.svg)](https://opensource.org/licenses/Apache-2.0)`;
  case 'ISC':
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)`;
  default:
    return '';
}

console.log(renderLicenseBadge('MIT'));
console.log(renderLicenseBadge('GNU'));
console.log(renderLicenseBadge('Apache'));



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Function to return the license link based on the license passed in
function renderLicenseLink(license) {
  switch (license) {
      case 'MIT':
          return 'https://opensource.org/licenses/MIT';
      case 'GPLv3':
          return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'Apache 2.0':
          return 'https://opensource.org/licenses/Apache-2.0';
      case 'BSD 3-Clause':
          return 'https://opensource.org/licenses/BSD-3-Clause';
      // Add more licenses as needed
      default:
          return '';
  }
}

// Example usage
console.log(renderLicenseLink('MIT')); // Outputs: https://opensource.org/licenses/MIT
console.log(renderLicenseLink('GPLv3')); // Outputs: https://www.gnu.org/licenses/gpl-3.0
console.log(renderLicenseLink('')); // Outputs: (empty string)

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Function to return the license section of README based on the license passed in
function renderLicenseSection(license) {
  if (!license) {
      return '';
  }

  let licenseLink = '';

  switch (license) {
      case 'MIT':
          licenseLink = 'https://opensource.org/licenses/MIT';
          break;
      case 'GPLv3':
          licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
          break;
      case 'Apache 2.0':
          licenseLink = 'https://opensource.org/licenses/Apache-2.0';
          break;
      case 'BSD 3-Clause':
          licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
          break;
      // Add more licenses as needed
      default:
          return '';
  }

  return `## License

This project is licensed under the [${license}](${licenseLink}) license.`;
}

// Example usage
console.log(renderLicenseSection('MIT'));
// Outputs:
// ## License
//
// This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

console.log(renderLicenseSection('GPLv3'));
// Outputs:
// ## License
//
// This project is licensed under the [GPLv3](https://www.gnu.org/licenses/gpl-3.0) license.

console.log(renderLicenseSection(''));
// Outputs: (empty string)

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## License
  ${data.license}
  ## Badges
  ${data.badges}
  ## Features
  ${data.features}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions
  }
  ## License
  ${data.license}

`;
}

module.exports = generateMarkdown;
