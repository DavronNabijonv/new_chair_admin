import axios from "axios";

export async function delete_furniture(furniture_id, del_token) {
  const url = `http://194.226.49.125:8000/v1/api/products/${furniture_id}`; // Use furniture_id in the URL

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
