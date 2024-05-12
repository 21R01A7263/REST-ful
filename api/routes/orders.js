const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {    
    res.status(200).json({
        message: 'this is a GET request to /orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'this is a POST request to /orders'
    });
});

router.get('/:orderId', (req, res, next) => {    
    res.status(200).json({
        message: 'your order is ' + req.params.orderId
    });
});
router.delete('/:orderId', (req, res, next) => {    
    res.status(200).json({
        message: 'your order ' + req.params.orderId + ' has been deleted'
    });
});

module.exports = router;