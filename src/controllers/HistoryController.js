const HistoryData = require("../models/History");

const createOne = async (req, res) => {
    try {
        let orderData = req.body;
        console.log(orderData);
        let findData = await HistoryData.findOne({historyName: orderData.historyName})
        console.log(findData)
        if(!findData) {
            let addData = await HistoryData.create(orderData);
            if(addData) {
                res.json({
                    success: true, 
                })
            } else {
                res.json({
                    success: false,
                })
            }
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

const getByType = async (req, res) => {
    try {
        let reqData = req.body;
        let getAll = await HistoryData.find({historyType: reqData.type})
        if(getAll) {
            res.json({
                data: getAll,
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

module.exports = {
    createOne,
    getByType
}