import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

    const userStatus = userResult.status === 'fulfilled' ? 'success' : 'failure';
    const photoStatus = photoResult.status === 'fulfilled' ? 'success' : 'failure';

    return [
      { status: userStatus, value: userResult.status === 'fulfilled' ? userResult.value : userResult.reason },
      { status: photoStatus, value: photoResult.status === 'fulfilled' ? photoResult.value : photoResult.reason }
    ];
  } catch (error) {
    throw new Error(error);
  }
}
