import uploadPhoto from './5-photo-reject.js';

uploadPhoto('guillaume.jpg')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error.message);
    });
