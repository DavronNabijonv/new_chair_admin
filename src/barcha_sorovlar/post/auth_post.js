import axios from "axios";

export async function create_Admin(url, info) {
    try {
        const response = await axios.post(url, info);
        return { response, success: true };  // Return an object with response and success flag
    } catch (error) {
        return {
            response: error.response || { data: { message: "Unknown error occurred" } },
            success: false,
        };
    }
}
