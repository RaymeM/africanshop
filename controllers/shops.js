const shopsModel = require("../models/shops");

const getShops = async (req, res, next) => {
  try {
    const shops = await shopsModel.find({});
    res.json(shops);
  } catch (err) {
    next(err);
  }
};

const getShop = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const shop = await shopsModel.findById(id);
    res.json(shop);
  } catch (err) {}
};

const createShop = async (req, res, next) => {
  try {
    const {
      body: { name, owner, description, email, telephoneNumber, location },
    } = req;
    const newShop = await shopsModel.create({
      name,
      owner,
      description,
      email,
      telephoneNumber,
      location,
    });
    res.json(newShop);
  } catch (err) {
    next(err);
  }
};

const updateShop = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const { body } = req;

    const updatedShop = await shopsModel.findByIdAndUpdate(id, body);
    res.json(updatedShop);
  } catch (err) {
    next(err);
  }
};

const deleteShop = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const deletedShop = await shopsModel.findByIdAndDelete(id);
    res.json(deletedShop);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getShop,
  getShops,
  createShop,
  updateShop,
  deleteShop,
};
