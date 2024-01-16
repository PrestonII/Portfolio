const fs = require('fs');
const path = require('path');

// set the path to the output directory of the build
const path_output_ibm = path.join(process.cwd(), 'ibm');

// set the path to the public directory of the build
const path_public_ibm = path.join(process.cwd(), 'public', 'ibm');

// get the files in the output directory
const files = fs.readdirSync(path_output_ibm);

// find the ibm bundle file
const ibmBundleFile = files.find((name) => /^ibmWebComponents/.test(name));

// remove any previous ibm files in the public directory
fs.rmSync(path_public_ibm, { force: true, recursive: true });

// create the ibm directory within the public directory if it doesn't exist

// move the ibm bundle file to the public directory
fs.mkdirSync(path_public_ibm, { recursive: true });
fs.renameSync(
  path.join(path_output_ibm, ibmBundleFile),
  path.join(path_public_ibm, ibmBundleFile),
);

// remove the output directory
fs.rmSync(path_output_ibm, { force: true, recursive: true });

// create a file in the util directory with the path to the ibm bundle file
fs.writeFileSync(
  path.join(process.cwd(), 'utils', 'ibm-bundle-info.js'),
  `export const path_ibm = "/ibm/${ibmBundleFile}";`,
);
