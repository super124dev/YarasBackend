const express = require("express");
const router = express.Router();
const UserCtrl = require("../controllers/UsersController");
const FoodTableCtrl = require("../controllers/FoodTableController");
const OrderCtrl = require("../controllers/OrderController");
const RestaurantCtrl = require("../controllers/RestaurantController");
const AddCartCtrl = require("../controllers/AddCartController");
const HistoryCtrl = require("../controllers/HistoryController");
const GroceryCtrl = require("../controllers/GroceryController");
const PharmaCtrl = require("../controllers/PharmaController");

router.post("/user/register", UserCtrl.register);
router.post("/user/login", UserCtrl.login);
router.post("/verifyEmail", UserCtrl.updateStatus); 
router.post("/getLanguage", UserCtrl.getLanguage);

router.post("/food/getFoodData", FoodTableCtrl.getFoodData);
router.post("/food/getRestaurantFood", FoodTableCtrl.getRestaurantFood);
router.post("/food/createOne", FoodTableCtrl.createOne);

router.post("/order/createOne", OrderCtrl.createOne);
router.post("/order/getAll", OrderCtrl.getAll);
router.post("/order/deleteOne", OrderCtrl.deleteOne);

router.post("/restaurant/createOne", RestaurantCtrl.createOne);
router.post("/restaurant/getRestaurantName", RestaurantCtrl.getRestaurantName);
router.post("/restaurant/getAllRestaurant", RestaurantCtrl.getAllRestaurant);
router.post("/restaurant/getTypeRestaurant", RestaurantCtrl.getTypeRestaurant);

router.post("/addCart/getAllCart", AddCartCtrl.getAllCart);
router.post("/addCart/getAllCount", AddCartCtrl.getAllCount);
router.post("/addCart/addCartCount", AddCartCtrl.addCartCount);
router.post("/addCart/changeProductCountByIndex", AddCartCtrl.changeProductCountByIndex);
router.post("/addCart/emptyCart", AddCartCtrl.emptyCart);

router.post("/history/createOne", HistoryCtrl.createOne);
router.post("/history/getByType", HistoryCtrl.getByType);

router.post("/grocery/createOne", GroceryCtrl.createOne);
router.post("/grocery/getTypeGrocery", GroceryCtrl.getTypeGrocery);

router.post("/pharma/createOne", PharmaCtrl.createOne);
router.post("/pharma/getTypePharma", PharmaCtrl.getTypePharma);

module.exports = router;    