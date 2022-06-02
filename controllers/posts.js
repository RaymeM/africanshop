const postsModel = require("../models/posts");


const getPost = (req, res) => {
    res.send("this is the get Post controller");
};

const getPosts = (req, res) => {
    const { id } = req.params
    res.send(id)
};


const createPosts = (req, res) => {
    res.send("this to create shop");
};

//NEEDS AN ID
//PUT REQUEST ("http://localhost:3000/shops/:id")
const updatePost = (req, res) => {
    res.send("update shop");
};

//NEEDS AN ID
//DELETE REQUEST ("http://localhost:3000/shops/:id")
const deletePost = (req, res) => {
    res.send("delete shop");
};




module.exports = {
    getPost, getPosts, createPosts, updatePost, deletePost,
};