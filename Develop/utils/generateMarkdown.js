function renderLicenseSection(license) {

  let badge = license;
  console.log(license)
  switch(badge){
    case 'Eeny':
      "!['License:Eeny']('https://img.shields.io/badge/License-Eeny-green.svg')";
      break;

    case 'Meeny':
      "!['License:Apache']('https://img.shields.io/badge/License-Meeny-yellow.svg')";
      break;

    case 'Miny':
      "!['License:Miny']('https://img.shields.io/badge/License-Miny-orange.svg')";
      break;

    case 'Moe':
      "!['License:Moe']('https://img.shields.io/badge/License-Moe-red.svg')";
      break;

    default:
      console.log(`No license selected`);
  }
}

function generateMarkdown(data){

  // console.log(data)

  let licenseChoice = data.license.toString();
  console.log(licenseChoice)

  let licenseInfo = renderLicenseSection(licenseChoice);

  console.log(licenseInfo)

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
