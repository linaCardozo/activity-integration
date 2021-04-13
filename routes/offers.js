var express = require('express');
const { func } = require('joi');
var router = express.Router();
const Mongolib = require("../db/Mongolib");

/* GET home page. */
router.get('/', function (req, res, next) {
    Mongolib.getDatabase(db => {
        Mongolib.findDocuments(db, docs => {
            res.send(docs);
        })
    })
});

/*
router.post('/', function (req, res) {
    Mongolib.getDatabase(db => {
        Mongolib.postDocument(db, )
    })
})
*/

module.exports = router;