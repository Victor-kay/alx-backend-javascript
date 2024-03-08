function signUpUser(firstName, lastName) {
    return new Promise((resolve, reject) => {
        const user = { firstName, lastName };
        resolve(user);
    });
}

export default signUpUser;
