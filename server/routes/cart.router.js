
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