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

/* POST a job offer */
router.post('/', function (req, res) {
    Mongolib.getDatabase(db => {
        Mongolib.postDocument(db, req.body);
    })
})


module.exports = router;