import uploadPhoto from './100-photo';
import createUser from './100-user';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    console.error(error); // Log the error
    return {
      photo: null,
      user: null
    };
  }
}

export default asyncUploadUser;
