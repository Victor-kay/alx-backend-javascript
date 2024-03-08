export default function handleResponseFromAPI(promise) {
    return promise
        .then(() => {
            console.log("Got a response from the API");
            return { status: 200, body: 'success' };
        })
        .catch(() => {
            console.error("Error: Empty response from API");
            return new Error();
        });
}
