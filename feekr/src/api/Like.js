import axios from 'axios';

const Like = axios.create({
    baseURL: 'https://wapi.feekr.com/shop/product/'
})

export const get = async (params, config = {}) => {
    let data = await Like.get('detail', {
        ...config,
        params
    })

    return data;
}

export default {
    get,
}