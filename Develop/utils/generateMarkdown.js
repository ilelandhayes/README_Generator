// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) { 

  let markdown = `
  # ${data.projectTitle}
  
  ${data.description}
  
  ## Table of Contents
  
  *[Installation](#Installation)
  *[Usage Of](#usageOf)
  *[How to Contribution](#contribution)
  *[Testing](#test)
  *[Contact](#email)(#github)
  *[License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage Of
  
  ${data.usageOf}
  
  ## How to Contribution
  
  ${data.contribution}
  
  ## Testing
  
  ${data.test}

  ## Contact 

  ${data.email} + ${data.github}
  
  ## License
  
  ${data.license}`;

  return markdown;
} 


module.exports = generateMarkdown;
