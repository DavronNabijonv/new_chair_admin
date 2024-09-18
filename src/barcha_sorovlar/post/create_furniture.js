import axios from "axios";

export async function createFruniture(furniture_info, ac_token) {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const url = `${apiUrl}/products/add`;

  try {
    // Create a FormData object
    const formData = new FormData();
    
    // Append the furniture information to the formData (except the image first)
    Object.keys(furniture_info).forEach((key) => {
      formData.append(key, furniture_info[key]);
    });

    // // Append the image file itself
    // formData.append("photo", furniture_info.photo); // Assuming `photo` is the File object from <input type="file">

    const response = await axios.post(url, formData, {
      headers: {
        Authorization: `Bearer ${ac_token}`,
        "Content-Type": "multipart/form-data", // Required for file uploads
      },
    });

    return { response, success: true };
  } catch (error) {
    console.error("Error creating furniture with image:", error);

    return {
      response: { message: "Unknown error occurred" },
      success: false,
    };
  }
}
