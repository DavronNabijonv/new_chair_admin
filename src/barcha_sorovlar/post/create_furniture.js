import axios from "axios";

export async function createFruniture(furniture_info) {
    const ur = 'http://194.226.49.125:8000/v1/api/products/add';

    const request = await axios.post(url,furniture_info);
    return request;
} 