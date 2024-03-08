function handleResponseFromAPI(promise) {
    return promise
        .then((response) => {
            console.log("Got a response from the API");
            return { status: 200, body: 'success' };
        })
        .catch(() => {
            console.error("Error: Empty response from API");
            return new Error();
        })
        .finally(() => {
            console.log("Got a response from the API");
        });
}
