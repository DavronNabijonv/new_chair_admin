import axios from 'axios';

export async function create_Admin(info) {
  const proxyUrl = '/api/proxy';  // Proxy function hosted on Vercel

  try {
    const response = await axios.post(proxyUrl, {
      url: 'http://194.226.49.125:8000/v1/api/auth/login',  // Your backend API URL
      info,  // Request body (login/register details)
    });

    return { response, success: true };  // Return response if successful
  } catch (error) {
    return {
      response: error.response || { data: { message: "Unknown error occurred" } },
      success: false,
    };
  }
}
