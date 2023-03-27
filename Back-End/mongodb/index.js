const mongoose = require('mongoose');
const Cat = require('./models/Cat');
const Comment = require('./models/Comment');
const Person = require('./models/Person');
const Post = require('./models/Post');

start();

async function start() {
    // const uri = 'mongodb+srv://retimid:password@ddgtest.w6g8wni.mongodb.net/test'
    const uri = 'mongodb://127.0.0.1:27017/testdb';

    const client = mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connected to the database - Successful !');

    // const data = await Person.find({ firstName: 'Peter' });

    /*
    const data = await Person.find({ _id: '6415e6372c310cc411d1dddb' });
    console.log(data);
    */

    // try {
    //     const comeCat = new Cat({
    //         name: 'Fluffy',
    //         color: 'White'
    //     });
    //     await someCat.save();
    // } catch (error) {
    //     console.log(error.message);
    // }

    // post 
    /*
    const person = await Person.findOne({});

    const post = new Post({
        author: person,
        title: 'NewPost',
        content: 'This is post content',
    });

    await post.save();
    */
    //populate
    /*
    const post = await Person.findOne({}).populate({
        path: 'comments',
        populate: 'author'
    });
    const comment = new Comment({
        author: post.author,
        content: 'First Comment,
        post
    });
    await comment.save();

    post.comments.push(comment);
    await post.save();
    console.log(post);
    */
}
