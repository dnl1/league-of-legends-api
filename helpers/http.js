let axios = require('axios');

class Http {
    constructor() {
        this.defaultHeaders = {
            'Content-Type': 'application/json; charset=utf-8',
            'X-Riot-Token': 'RGAPI-07dcb80d-088c-4674-aae7-77037317cece'
        };

        this._instance = axios.create({
            baseURL: 'https://br1.api.riotgames.com',
            timeout: 10000
        })
    }

    post(url, data, headers) {
        return this._instance.post(url, data, {
            headers: { ...headers,
                ...this.defaultHeaders
            }
        });
    }

    get(url, headers) {
        return this._instance.get(url, {
            headers: { ...headers,
                ...this.defaultHeaders
            }
        });
    }
}

module.exports = new Http();