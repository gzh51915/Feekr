
export const apiurl = 'https://wapi.feekr.com/shop/home/';

const get = async (url, data, params = {}) => {
    let query = ''
    // console.log(data)
    for (let key in data) {// {} => key=val&key=val
        query += `${key}=${data[key]}&`
    }
    // console.log(query)
    query = query.slice(0, -1);
    if (query.length > 0) {
        url += '?' + query;
    }
    const res = await fetch(apiurl + url, {
        ...params
    });
    // console.log(res)
    return res.json();
}


export default {
    get
}