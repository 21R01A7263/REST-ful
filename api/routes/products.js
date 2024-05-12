const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'this is a GET request to /products'
    });
});

router.post('/', (req, res, next) => {        
    res.status(201).json({
        message: 'this is a POST request to /products'
    });
});

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'PATCH-ed the product'
    });
});

router.delete('/', (req, res, next) => {    
    res.status(200).json({
        message: 'DELETE-d the product'
    });
});
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special') {
        res.status(200).json({
            message: 'you discovered the special ID',
        });
    } 
    else {    
    res.status(200).json({
        message: 'you are searching for ' + id
    });
}});
module.exports = router;