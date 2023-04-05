const GroceryData = require("../models/Grocery");

const createOne = async (req, res) => {
    try {
        let orderData = req.body;
        console.log(orderData);
        let addData = await GroceryData.create(orderData);
        if(addData) {
            res.json({
                success: true, 
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

const getTypeGrocery = async (req, res) => {
    try {
        let getAll;
        if(req.body.type === 'Popular') {
            getAll = await GroceryData.find({Popular: true});
        } else if(req.body.type === 'NearBy') {
            getAll = await GroceryData.find({City: "Cabinda"});
        } else if(req.body.type === 'Healthy') {
            getAll = await GroceryData.find({City: "Boma"});
        }
        if(getAll) {
            res.json({
                success: true,
                msg: getAll
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
    getTypeGrocery
}