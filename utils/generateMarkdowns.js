// function to generate markdown for README

function generateMarkdowns(data) {
    return `# ${data.title}
  
    License covered under ${data.license}
  
    ## Table of Contents
    1. [Description] (#description)
    2. [Installation] (#install)
    3. [License] (#license)
    4. [Contributing] (#contributing)
    5. [Questions] (#question)
  
    ##Description
    ${data.description}
  
    ##Installation
    ${data.install}
  
    ##License
    ${data.license}
  
    ##Contributing
    ${data.contributing}
  
    ##Questions
    ${data.question}
    -Github Repo: 
    -Email : ${data.email} 
  `;
  };
  
  module.exports = generateMarkdowns;