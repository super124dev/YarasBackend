const PharmaData = require("../models/Pharma");

const createOne = async (req, res) => {
    try {
        let orderData = req.body;
        console.log(orderData);
        let addData = await PharmaData.create(orderData);
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

const getTypePharma = async (req, res) => {
    try {
        let getAll;
        if(req.body.type === 'Popular') {
            getAll = await PharmaData.find({Popular: true});
        } else if(req.body.type === 'NearBy') {
            getAll = await PharmaData.find({City: "Cabinda"});
        } else if(req.body.type === 'Healthy') {
            getAll = await PharmaData.find({City: "Boma"});
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
    getTypePharma
}