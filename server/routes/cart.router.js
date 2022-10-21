
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
// PUT item
router.put(`/:id`, (req, res) => {
    const boughtitem = req.params.id;
    const sqlText = `UPDATE "shopping_cart"
    SET "purchased" = NOT "purchased"
        WHERE id = $1;
    `
    pool.query(sqlText,[boughtitem])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in PUT bying item', error);
    })
})

router.delete(`/:id`, (req, res) => {
    const deleteditem = req.params.id;
    const sqlText = `DELETE FROM "shopping_cart"
        WHERE id = $1;
    `;
    pool.query(sqlText,[deleteditem])
    .then((result) => {
        res.sendStatus(204);
    })
    .catch((error) => {
        console.log('error in DELETE bying item', error);
    })
})


module.exports = router;