import axios from 'axios';

export async  function get_all_furniture () {
    const url = 'http://194.226.49.125:8000/v1/api/products';

    const response = await axios.get(url);
    return response;
}