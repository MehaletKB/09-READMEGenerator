function renderLicenseSection(license) {

  let badge = license;

  switch(badge){
    case 'Eeny':
      return "!['License:Eeny']('https://img.shields.io/badge/License-Eeny-brightgreen.svg')";
      break;

    case 'Meeny':
      return "!['License:Meeny']('https://img.shields.io/badge/License-Meeny-yellow.svg')";
      break;

    case 'Miny':
      return "!['License:Miny']('https://img.shields.io/badge/License-Miny-orange.svg')";
      break;

    case 'Moe':
      return "!['License:Moe']('https://img.shields.io/badge/License-Moe-red.svg')";
      break;

    default:
      console.log(`No license selected`);
  }
}

function generateMarkdown(data){

  // console.log(data)

  let licenseChoice = data.license.toString();

  let licenseInfo = renderLicenseSection(licenseChoice);

  return `This project is covered under ${licenseInfo}

  # Title: 
  ${data.title}

  ## Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Testing](#tests)
  * [Contact](#questions)

  ## Description: 
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage: 
  ${data.usage}

  ## Contribution Guidelines: 
  ${data.contribution}

  ## Testing: 
  ${data.tests}

  ## For questions please contact: 
  ${data.questions}`;
}

module.exports = generateMarkdown;
