const FoodData = require("../models/FoodTable");

const createOne = async (req, res) => {
    try {
        let createData = req.body;
        let addOne = await FoodData.create(createData);
        if(addOne) {
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

const getFoodData = async (req, res) => {
    try {
        let data = await FoodData.find({Category: req.body.Category});
        console.log(data);
        if(data) {
            res.json({
                success: true,
                msg: data
            })
        } else {
            res.json({
                success: false,
                msg: data
            })
        }
    } catch(err) {
        res.json({
            success: false,
            msg: "Failed"
        })  
    }
}

const getRestaurantFood = async (req, res) => {
    console.log(req.body.RestaurantName);
    try {
        let data = await FoodData.find({RestaurantName: req.body.RestaurantName});
        console.log(data);
        if(data) {
            res.json({
                success: true,
                msg: data
            })
        } else {
            res.json({
                success: false,
                msg: data
            })
        }
    } catch(err) {
        res.json({
            success: false,
            msg: "Failed"
        })  
    }
}

module.exports = {
    getFoodData,
    getRestaurantFood,
    createOne
}