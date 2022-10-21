
const express = require('express');
const { Pool } = require('pg');
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

router.post('/', (req,res) =>{
    const newCart = [req.body.item,req.body.quantity,req.body.unit]

    const sqlText = ` INSERT INTO shopping_cart
                    ("item","quantity","unit")
                    VALUES ($1,$2,$3);`
pool.query(sqlText,newCart)
    .then((result) =>{
        res.sendStatus(201)
    })
    .catch((error) =>{
        console.log('Error in POST',error)
        res.sendStatus(500)
    });
});

module.exports = router;