const { MongoClient } = require('mongodb');

const connectionStr = 'mongodb://localhost:27017'
const client = new MongoClient(connectionStr, {
    useUnifiedTopology: true
});


client.connect(async (err) => {
    if (err != null) {
        console.log(err + 'Something unexpected happened');
        return;
    }

    console.log('Connected successfully to server');

    const db = client.db('ddgtest');
    const collection = db.collection('cats');
    const data = await collection.find({}).toArray();
    console.log(data);
});