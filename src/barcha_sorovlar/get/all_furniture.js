import axios from 'axios';

export async  function get_all_furniture () {
    const url = 'http://194.226.49.125:8000/v1/api/products';

    await axios.get(url)
    .then(res=>{
        console.log(res.data.products)
        return res.data.products});
    
}