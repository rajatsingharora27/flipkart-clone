const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const router = express.Router();
// const { addCategory, getCategory } = require('../controller/category');
const Product=require('../models/product');



//Admin required to add a product
router.post('/product/create', requireSignin,adminMiddleware,(req,res)=>{
    res.status(200).json({
        message:'Hello'
    })
});

// router.get('/category/getCategory',getCategory)

module.exports = router;