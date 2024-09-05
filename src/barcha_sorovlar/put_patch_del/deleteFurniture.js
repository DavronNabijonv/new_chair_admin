import axios from "axios";

export async function delete_furniture(furniture_id, del_token) {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const url = `${apiUrl}/products/${furniture_id}`; // Use furniture_id in the URL

  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${del_token}`, // Use del_token here
      },
    });

    return { response, success: true };
  } catch (error) {
    return { error, success: false };
  }
}
