import Axios from "axios";

export default class HttpClient {

    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    async getProduct(aProductId, callBack) {

        const response = await Axios.request({
            method: 'get',
            url: `${this.BASE_URL}/products/${aProductId}`
        })
            .then(response => callBack(response.data))
            .catch((reason) => {
                console.log(reason);
            })
    }

    async getProducts(callback) {
        const response = await Axios.request({
            method: 'get',
            url: `${this.BASE_URL}/products/`
        })
            .then((response) => callback(response.data))
            .catch((reason) => {
                console.log(reason)
            });
    }
}