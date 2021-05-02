const express = require('express');
const router = express.Router();
const IndexController = require('../Controllers/_IndexController')
const UserController = require('../Controllers/_UserController')
const ProductController = require('../Controllers/_ProductController')
const AuthController = require('../Controllers/_AuthController')




router.get("/users",UserController.Users)
router.get("/users/profile/:userId",UserController.Profile)
router.get("/users/profile/",UserController.Profile)
router.get("/users/add",UserController.AddUser)

router.get("/products",ProductController.Index)
router.get("/products/add",ProductController.AddProduct)
router.post("/products/getSubcategory/:sub_id",ProductController.getSub)
router.post("/products/addProduct",ProductController.PostAddProduct)


router.post("/users/add",UserController.PostAddUser)


router.post("/login",AuthController.PostLogin)
router.get("/login",AuthController.Index)
router.get("/",IndexController.Index)

module.exports = router;

