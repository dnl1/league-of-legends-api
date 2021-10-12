let axios = require('axios');

class Http {
    constructor() {
        this.defaultHeaders = {};

        this._instance = axios.create({
            baseURL: 'http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US',
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