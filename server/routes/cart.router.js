
const express = require('express');
const router= express.Router();
const pool = require('../modules/pool');

//GET students (Chris work)

router.get('/', (req,res) => {
    const sqlText = `SELECT * FROM shopping_cart`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log(`Error making database query ${sqlText}`,err)
        res.sendStatus(500);
    });
});

router.put('/reset', (req, res) => {
    const queryText = `
        UPDATE "shopping_cart" 
        SET "purchased" = false;
    `;

    pool.query(queryText)
    .then((results) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('Error in router.put');
        res.sendStatus(500);
    });
});

router.delete('/clear', (req, res) => {
    const sqlQuery = `
        DELETE FROM "shopping_cart"
    `;

    pool.query(sqlQuery)
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('Error in router /clear', err);
        res.sendStatus(500);
    });
});

module.exports = router;