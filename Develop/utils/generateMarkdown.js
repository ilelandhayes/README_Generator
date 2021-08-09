// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) { 

  let markdown = `
  # ${data.projectTitle}
  
  ${data.description}
  
  ## Table of Contents
  
    * [Installation](#Installation)
    * [Usage Of](#Usage-Of)
    * [How to Contribute](#How-to-Contribute)
    * [Testing](#Testing)
    * [License](#License)
    * [Questions](#Questions)
  
  ## Installation
  
    ${data.installation}
  
  ## Usage Of
  
    ${data.usageOf}
  
  ## How to Contribute
  
    ${data.contribution}
  
  ## Testing
  
    ${data.test}  
  
  ## License
  
    This repository is released under the license of: [${data.license}](https://opensource.org/licenses/${data.license})

  ## Questions

    If have any questions about this application feel free to contact me:

    Github: [${data.github}](https://github.com/${data.github})
    Email: ${data.email}

  `;

  return markdown;
} 


module.exports = generateMarkdown;
