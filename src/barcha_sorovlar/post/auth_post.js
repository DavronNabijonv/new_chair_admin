import axios from 'axios';

export async function create_Admin(url, info) {
  try {
    const response = await axios.post(url, info);
    console.log('Response:', response.data);
    return response;
  } catch (error) {
    console.error('Error:', error);
    if (error.response) {
      console.error('Response Error:', error.response.data);
    }
    return error;
  }
}
