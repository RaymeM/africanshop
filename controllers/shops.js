const { get } = require("express/lib/response")
const { request } = require("https")

const getShops = (req, res) => {
    res.send("this is the get shops controller")
}
//NEEDS AN ID
// GET REQUEST ("http://localhost:3000/shops/:id")

const getShop = (req, res) => {
    const { id } = req.params
    res.send(id)
}

//NEEDS no ID
// POST REQUEST ("http://localhost:3000/shops")
const createShop = (req, res) => {
    res.send("this to create shop")
}

//NEEDS AN ID
// PUT REQUEST ("http://localhost:3000/shops/:id")
const updateShop = (req, res) => {
    res.send("update shop")
}

//NEEDS AN ID
// DELETE REQUEST ("http://localhost:3000/shops/:id")
const deleteShop = (req, res) => {
    res.send("delete shop")
}



module.exports = {
    getShops, getShop, createShop, updateShop, deleteShop,
};