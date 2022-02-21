const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

const query = `
    SET @itemId = ?;
    SET @description = ?;
    SET @completed = ?;
    SET @folderId = ?;
    CALL itemsAddOrEdit(@itemId, @description, @completed, @folderId);
`;


router.get('/', (req,res) => {
    mysqlConnection.query('SELECT * FROM todoitems', (err,  rows) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

// router.get('/:itemId', (req,res) => {
//     const { itemId } = req.params;
//     mysqlConnection.query('SELECT * FROM todoitems WHERE itemId = ?', [itemId], (err,  rows, fields) => {
//         if(!err){
//             res.json(rows);
//         }else{
//             console.log(err);
//         }
//     })
// });

// router.post('/', (req,res) => {
//     const { itemId, description, completed, folderId} = req.body;
//     req.body
//     mysqlConnection.query(query, [itemId, description, completed, folderId], (error) => {
//         if(!error){
//             res.json({Status: 'Item saved successfully!'});
//         }else{
//             console.log(error);
//         }
//     })
// });

// router.put('/:id', (req,res) => {
//     const { description, completed, folderId } = req.body;
//     const { itemId } = req.params;
//     mysqlConnection.query(query, [itemId, description, completed, folderId], (error) => {
//         if(!error){
//             res.json({Status: 'Item updated successfully!'});
//         }else{
//             console.log(error);
//         }
//     })
// });

// router.delete('/:id', (req,res) => {
//     const { itemId } = req.params;
//     mysqlConnection.query('DELETE FROM items WHERE id = ?' , [itemId], (error) => {
//         if(!error){
//             res.json({Status: 'Item deleted successfully!'});
//         }else{
//             console.log(error);
//         }
//     })
// });


module.exports = router;