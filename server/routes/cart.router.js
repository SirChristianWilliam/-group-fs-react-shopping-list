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

module.exports = router;