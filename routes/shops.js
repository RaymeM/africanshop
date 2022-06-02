const express = require("express");

const {
    getShops,
    getShop,
    createShop,
    updateShop,
    deleteShop,
} = require("../controllers/shops")

const postsRouter = express.Router();

postsRouter.route("/").get(getShops).post (createShop);


postsRouter
.route("/:id")
.get( getShop)
.put( updateShop)
.delete( deleteShop);



module.exports = postsRouter;