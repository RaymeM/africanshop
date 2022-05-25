const express = require('express');
const shopsRouter = express.Router()
const {
  getShops, getShop, createShop, updateShop, deleteShop
} = require('../controllers/shops')

shopsRouter.route("/").get(getShops).post(createShop)
shopsRouter.route("/:id").get(getShop).put(updateShop).delete(deleteShop);


module.exports = shopsRouter;




