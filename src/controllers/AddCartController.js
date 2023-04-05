const AddCartData = require("../models/AddCart");

const getAllCart = async (req, res) => {
    try {
        let addData = await AddCartData.find();
        let money = 0;
        for(let i = 0; i < addData.length; i ++) {
            money += addData[i].ProductCount * addData[i].ProductPrice;
        }
        if(addData) {
            res.json({
                success: true, 
                msg: addData,
                totalmoney: money
            })
        } else {
            res.json({
                success: false,
            })
        }
    } catch {
        res.json({
            success: false
        })
    }
}

const addCartCount = async (req, res) => {
    try {
        let addData = req.body;
        let findOneData = await AddCartData.findOne({ProductName: addData.ProductName})
        if(findOneData) {
            console.log(findOneData);
            let addOneData = await AddCartData.updateOne({ProductName: addData.ProductName}, {ProductCount: addData.ProductCount + findOneData.ProductCount})
            console.log(addOneData);
            if(addOneData) {
                res.json({
                    success: true,
                })
            } else {
                res.json({
                    success: false,
                })
            }
        } else {
            let createOne = await AddCartData.create(addData);
            if(createOne) {
                res.json({
                    success: true
                })
            } else {
                res.json({
                    success: false
                })
            }
        }
    } catch {
        res.json({
            success: false
        })
    }
}

const emptyCart = async (req, res) => {
    try {
        let emptyCart = await AddCartData.deleteMany();
        if(emptyCart) {
            res.json({
                success: true
            })
        } else {
            res.json({
                success: false
            })
        }
    } catch {
        res.json({
            success: false
        })
    }
}

const changeProductCountByIndex = async (req, res) => {
    try {
        let reqdata = req.body;
        console.log(reqdata);
        let getProductByName = await AddCartData.findOne({ProductName: reqdata.productName})
        if(getProductByName) {
            let updateProductByName;
            if(reqdata.value !== 0) {
                updateProductByName = await AddCartData.updateOne({ProductName: reqdata.productName}, {ProductCount: reqdata.value});
            } else {
                updateProductByName = await AddCartData.deleteOne({ProductName: reqdata.productName})
            }
            if(updateProductByName) {
                res.json({
                    success: true
                })
            } else {
                res.json({
                    success: false
                })
            }
        } else {
            let createProduct = await AddCartData.create({ProductName: reqdata.productName, ProductCount: reqdata.value, ProductPrice: 100})
            if(createProduct) {
                res.json({
                    success: true,
                })
            } else {
                res.json({
                    success:false,
                })
            }
        }
    } catch {
        res.json({
            success: false
        })
    }
}

const getAllCount = async (req, res) => {
    try {
        let getAllData = await AddCartData.find();
        let countAll = 0;
        for(let i = 0; i < getAllData.length; i ++) {
            countAll += getAllData[i].ProductCount;
        }
        console.log(countAll);
        if(getAllData) {
            res.json({
                success: true,
                countAll: countAll
            })
        } else {
            res.json({
                success: false,
            })
        }
    } catch {
        res.json({
            success: false
        })
    }
}

module.exports = {
    getAllCart,
    getAllCount,
    addCartCount,
    changeProductCountByIndex,
    emptyCart
}