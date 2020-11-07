import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1337';

export const postResponse = (request) => {
    axios.post('/responses', {
        firstName: request.firstName,
        lastName: request.firstName,
        email: request.email,
        agreed: request.agreed,
      })
      .then((response) => {
          console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
}