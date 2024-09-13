import axios from "axios";

const apiUrl = process.env.REACT_APP_API_BASE_URL;

export async function create_Admin(endpoint, info) {
    try {
        const response = await axios.post(`${apiUrl}/${endpoint}`, info);
        return { response, success: true };  // Return  oan object with response and success flag
    } catch (error) {
        return {
            response: error.response || { data: { message: "Unknown error occurred" } },
            success: false,
        };
    }
}
