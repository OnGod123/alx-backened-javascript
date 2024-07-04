// your-dev-script.js

// This script can be used to execute another script (0-main.js in this case)

// Example:
const scriptToRun = process.argv[2]; // Get the script filename from command line argument

if (!scriptToRun) {
  console.error('No script provided to run.');
  process.exit(1); // Exit with error code
}

// Execute the script using Node.js child_process module
const { exec } = require('child_process');
exec(`node ${scriptToRun}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing ${scriptToRun}: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

