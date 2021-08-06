// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let title = `[${answers.projectTitle}]`; 

  let markdown = `
  # ${title}
  
  ${answers.description}
  
  ## Table of Contents
  
  *[Installation](#Installation)
  *[Usage Of](#usageOf)
  *[How to Contribution](#contribution)
  *[Testing](#test)
  *[Contact](#email)(#github)
  *[License](#license)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage Of
  
  ${answers.usageOf}
  
  ## How to Contribution
  
  ${answers.contribution}
  
  ## Testing
  
  ${answers.test}

  ## Contact 

  ${answers.email} ${answers.github}
  
  ## License
  
  ${answers.license}`;

  return markdown;
} 


module.exports = generateMarkdown;
