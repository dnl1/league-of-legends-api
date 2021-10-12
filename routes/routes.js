const http = require("../helpers/http");
const CircularJSON = require('circular-json');

const config = {
    baseUrl: 'https://br1.api.riotgames.com/',
    token: 'RGAPI-07dcb80d-088c-4674-aae7-77037317cece'
}

var cache = {};

var appRouter = function (app) {
    app.get("/", function (req, res) {
        res.status(200).send("Welcome to our restful API 2021-10-12");
    });

    app.get('/champions', function (req, res) {
        http.get('/champion.json').then((response) => {
            cache = response.data;
            res.status(200).send(cache);
        })
            .catch((err) => {
                console.log('err', err);
                if (cache != {}) {
                    res.status(200).send(cache);
                }
                else {
                    if (err.response.status == 429) {
                        let mock = require('../mocks/mockChampions');
                        console.log('mock', mock);
                        res.status(304).send(mock);
                    }

                    res.status(500).send(err);
                }
            })

        /*let mock = require('../mocks/mockChampions');
        console.log('mock', mock);
        res.status(200).send(mock);*/
    })
}

module.exports = appRouter;