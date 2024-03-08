import uploadPhoto from './uploadPhoto.js';
import createUser from './createUser.js';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto("photo.jpg");
    const userPromise = createUser();

    const [photoResponse, userResponse] = await Promise.allSettled([photoPromise, userPromise]);

    const photo = photoResponse.status === 'fulfilled' ? photoResponse.value : null;
    const user = userResponse.status === 'fulfilled' ? userResponse.value : null;

    return { photo, user };
  } catch (error) {
    console.error("An error occurred:", error);
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
