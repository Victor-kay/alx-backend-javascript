export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      resolve("Mock API response"); // Resolve the promise with a mock response
    }, 1000); // Simulating a delay of 1 second
  });
}
