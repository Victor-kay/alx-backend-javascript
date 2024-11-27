const readline = require('readline');

// Create an interface to read from stdin and write to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the initial prompt to the user
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Using `rl.question` to read input
rl.question('', (name) => {
  // Once the user provides their name, display the output message
  console.log(`Your name is: ${name}`);
  
  // Close the readline interface and exit the program
  rl.close();
});

// Handle the exit event to print the final message
process.on('exit', () => {
  console.log('This important software is now closing');
});

