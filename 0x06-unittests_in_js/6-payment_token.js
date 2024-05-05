function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // For simplicity, we are not doing anything when success is false
            resolve();
        }
    });
}

module.exports = getPaymentTokenFromAPI;
