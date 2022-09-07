import axios from 'axios';

// get session token
const accessToken: string = '';

export default axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/`,
    headers: {
        'Content-type': 'application/json',
        'x-access-token': accessToken,
    },
});
