import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1337';

export const postResponse = async (request) => {
    let success = null;
    await axios.post('/responses', {
        firstName: request.firstName,
        lastName: request.firstName,
        email: request.email,
        agreed: request.agreed,
      })
      .then(() => {
        success = true;
      })
      .catch((error) => {
        console.log(error);
        success = false;
      });
    return success;
}