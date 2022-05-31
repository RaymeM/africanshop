const res = require('express/lib/response');
const postsModel = require('../models/posts');

const getPosts = async (req, res, next) => {
try {
    const users = await postsModel.find({});
    res.jon(users);
} catch (err) {res.status(500).send(err.message)};
};

const getPost = (req, res, next) => {
    res.send("one post");
};

const createPost = (req, res, next) => {
    res.send("create post");
};

const updatePost = (req, res, next) => {
    res.send("update post");
};

const deletePost = (req, res, next) => {
    res.send("delete post");
};



module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
};