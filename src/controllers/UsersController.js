const bcrypt = require("bcrypt");
const User = require("../models/User");
const Nylas = require('nylas');

const login = async (req, res) => {
    try {
        let userData = req.body;
        // let salt = bcrypt.genSaltSync(10);
        // userData.password = bcrypt.hashSync(userData.password, salt);
        let userEmailAccount = await User.findOne({ userEmail: userData.userEmail });
        console.log(userEmailAccount);
        console.log(userData.userPassword)
        if(userEmailAccount && userEmailAccount.userPassword === userData.userPassword) {
            if(userEmailAccount.userStatus === false) {
                res.json({
                    success: false,
                    msg: "Not Verified",
                })
            } else {
                res.json({
                    success: true,
                    msg: "Login Successful",
                    userInfo: userEmailAccount
                })
            }
        }
        if(userEmailAccount && userEmailAccount.userPassword !== userData.userPassword) {
            res.json({
                success: false,
                msg: "Password incorrect."
            });
        }
        if(!userEmailAccount) {
            res.json({
                success: false,
                msg: "No account yet. Register now."
            })
        }
    } catch(err) {
        res.json({
            success: false,
            msg: err.message
        });
    }
}

const register = async (req, res) => {
    let temp = "";
    for (let i = 0; i < 6; i ++) {
        temp += Math.floor(Math.random() * 10).toString();
    }
    try {
        let userData = req.body;
        // let salt = bcrypt.genSaltSync(10);
        // userData.password = bcrypt.hashSync(userData.password, salt);
        let user = await User.findOne({ userEmail: userData.userEmail });
        if (user && user.userStatus === true) {
            res.json({
                success: false,
                msg: "The email already exists."
            });
        } else {
            Nylas.config({
                clientId: "77iq8k6js0iltlb6blkbymgkn",
                clientSecret: "5fkoq8n4jkk67fwl4dt2nutry",
            });

            const nylas = Nylas.with("FWjzhHyREXG5f1Ff6yGrZWBMGeadxY");

            const draft = nylas.drafts.build({
                subject: 'Welcome To Yaras',
                to: [{ name: "", email: userData.userEmail }],
                body: "<h1 style='text-align: center; margin-top: 200px; margin-bottom: 200px'>Verification Code</h1><h1 style='text-align: center;'>" + temp + "</h1>"
            });

            let message = await draft.send();

            let addData = await User.create(userData);
            res.json({
                success: true,
                msg: "Successfully registered, Please check your email.",
                verifyCode: temp
            });
        }
    } catch (err) {
        res.json({
            success: false,
            msg: err.message
        });
    }
}

const getLanguage = async (req, res) => {
    try {
        let data = await User.findOne({userEmail: req.body.userEmail});
        console.log(data);
        if(data) {
            res.json({
                success: true,
                msg: data.userLanguage
            })
        } else {
            res.json({
                success: false,
            })
        }
    } catch(err) {
        res.json({
            success: false,
        })
    }
}

const updateStatus = async (req, res) => {
    try {
        let userData = req.body;
        // let salt = bcrypt.genSaltSync(10);
        // userData.password = bcrypt.hashSync(userData.password, salt);
        let data = await User.updateOne({userEmail: userData.userEmail}, {userStatus: true});
        console.log(data);
        if(data) {
            res.json({
                success: true
            })
        } else {
            res.json({
                success: false
            })
        }

    } catch(err) {
        res.json({
            success: false,
        });
    }
}

module.exports = {
    register,
    login,
    updateStatus,
    getLanguage
}