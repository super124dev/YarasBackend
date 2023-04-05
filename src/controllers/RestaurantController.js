const RestaurantData = require("../models/Restaurant");

const createOne = async (req, res) => {
    try {
        let orderData = req.body;
        console.log(orderData);
        let addData = await RestaurantData.create(orderData);
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

const getAllRestaurant = async (req, res) => {
    try {
        let getAll = await RestaurantData.find();
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

const getTypeRestaurant = async (req, res) => {
    try {
        let getAll;
        if(req.body.type === 'Popular') {
            getAll = await RestaurantData.find({Popular: true});
        } else if(req.body.type === 'NearBy') {
            getAll = await RestaurantData.find({City: "Cabinda"});
        } else if(req.body.type === 'Healthy') {
            getAll = await RestaurantData.find({City: "Boma"});
        } else {
            getAll = await RestaurantData.find({Popular: false});
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

const getRestaurantName = async (req, res) => {
    try {
        let resName = req.body.resName
        let findRestaurantName = await RestaurantData.findOne({Name: resName});
        console.log(findRestaurantName);
        if(findRestaurantName) {
            console.log("yes");
            res.json({
                success: false,
                data: findRestaurantName
            })
        } else {
            console.log("no");
            res.json({
                success: true,
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
    getRestaurantName,
    getAllRestaurant,
    getTypeRestaurant
}