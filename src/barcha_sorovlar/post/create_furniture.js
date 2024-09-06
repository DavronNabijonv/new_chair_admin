import axios from "axios";

export async function createFruniture(furniture_info, ac_token) {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const url = `${apiUrl}/products/add`;

  try {
    const request = await axios.post(url, furniture_info, {
      headers: {
        Authorization: `Bearer ${ac_token}`, // Include the token in the headers
        "Content-Type": "application/json", // Make sure to set the content type
      },
    });
    return { request, success: true };
  } catch (error) {
    return {
      request: error.response || {
        data: { message: "Unknown error occurred" },
      },
      success: false,
    };
  }
}
