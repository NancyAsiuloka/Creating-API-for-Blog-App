const Post = require('../models/Post.js');
const User = require('../models/User.js');

// CREATE
const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath} = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        })
        await newPost.save();

        const post = await Post.find();

    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}