function renderLicenseSection(license) {

  let badge;
  switch(badge){
    case license == 'Eeny':
      !['License:Eeny']('https://img.shields.io/badge/License-Eeny-green.svg');
      break;

    case license == 'Meeny':
      !['License:Apache']('https://img.shields.io/badge/License-Meeny-yellow.svg');
      break;

    case license == 'Miny':
      !['License:Miny']('https://img.shields.io/badge/License-Miny-orange.svg');
      break;

    case license == 'Moe':
      !['License:Moe']('https://img.shields.io/badge/License-Moe-red.svg');
      break;

    default:
      console.log(`No license selected`);
  }
}

function generateMarkdown(data){

  let licenseInfo = renderLicenseSection(data.license);

  return `This project is covered under ${licenseInfo}

  # Title: 
  ${data.title}

  ## Description: 
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage: 
  ${data.usage}

  ## Contribution Guidelines: 
  ${data.contributing}

  ## Testing: 
  ${data.tests}

  ## For questions please contact: 
  ${data.questions}`;
}

module.exports = generateMarkdown;
