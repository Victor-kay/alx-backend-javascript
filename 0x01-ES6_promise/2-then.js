export default function handleResponseFromAPI(promise) {
    promise
        .then((response) => {
            console.log("Got a response from the API");
            return Promise.resolve({ status: 200, body: 'success' });
        })
        .catch((error) => {
            console.error("Error:", error);
            return Promise.reject(new Error());
        });
}
