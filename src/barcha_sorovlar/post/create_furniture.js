import axios from "axios";

export async function createFruniture(furniture_info, ac_token) {
  const url = "http://194.226.49.125:8000/v1/api/products/add";

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
