import axios from "axios";

export async function patch_furniture(id, data_furniture, edit_token) {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const url = `${apiUrl}/products/${id}`;

  // Create a FormData object if there's a file to upload
  const formData = new FormData();
  Object.keys(data_furniture).forEach((key) => {
    formData.append(key, data_furniture[key]);
  });

  try {
    const response = await axios.patch(url, formData, {
      headers: {
        Authorization: `Bearer ${edit_token}`, // Include the token in the headers
        "Content-Type": "multipart/form-data", // Set the correct content type for file uploads
      },
    });
    console.log(response);
    return { response, success: true };
  } catch (error) {
    console.log(error);
    return { error, success: false };
  }
}
