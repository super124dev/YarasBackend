const OrderData = require("../models/OrderList");

const createOne = async (req, res) => {
    try {
        let orderData = req.body;
        console.log(orderData);
        let addData = await OrderData.create(orderData);
        res.json({
            success: true, 
        })
    } catch {

    }
}

const deleteOne = async (req, res) => {
    try {
        // let deleteOne = await OrderData.deleteOne()
        let email = req.body.email;
        let deleteOne = await OrderData.deleteOne({fromUser: email});
        console.log(deleteOne);
        let getAll = await OrderData.find();
        console.log(getAll);
        if(deleteOne) {
            res.json({
                success: true,
                data: getAll
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

const getAll = async (req, res) => {
    try {
        let findAll = await OrderData.find();
        console.log(findAll);
        if(findAll) {
            res.json({
                success: true,
                data: findAll
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
    createOne,
    getAll,
    deleteOne
}