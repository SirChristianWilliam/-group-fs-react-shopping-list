const express = require('express');
const routes = express.Router();
const pool = require('../modules/pool');

//GET students (Chris work)

routes.get('/', (req,res) => {
    const sqlText = `SELECT * FROM shopping_cart`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('Error in get cart', err);
        res.sendStatus(500);
    });
});

module.exports = routes;