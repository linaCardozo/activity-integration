const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = process.env.mongourl;
//console.log(url);

const dbName = 'job';

const client = new MongoClient(url, { useUnifiedTopology: true });

const getDatabase = (callback) => {
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        callback(db, client);
    });
}

const findDocuments = function (db, callback) {
    const collection = db.collection('offers');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
}

const postDocument = function (db, callback) {
    const collection = db.collection('offers');
    collection.postDocument(db, callback);
}

exports.getDatabase = getDatabase;
exports.findDocuments = findDocuments;
exports.postDocument = postDocument;