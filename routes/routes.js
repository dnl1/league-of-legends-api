const http = require("../helpers/http");
const CircularJSON = require('circular-json');

const config = {
    baseUrl: 'https://br1.api.riotgames.com/',
    token: 'RGAPI-07dcb80d-088c-4674-aae7-77037317cece'
}

var appRouter = function (app) {
    app.get("/", function (req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    app.get('/champions', function (req, res) {
        http.get('/lol/static-data/v3/champions').then((response) => {
                res.status(200).send(response.data);
            })
            .catch((err) => {
                console.log('err', err);
                if (err.response.status == 429) {
                    res.status(304).send(require('../mocks/mockChampions'));
                }
                res.status(500).send(err);
            })
    })
}

module.exports = appRouter;