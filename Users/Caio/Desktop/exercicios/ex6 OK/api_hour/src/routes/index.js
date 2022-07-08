const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    var data = new Date();
    res.status(200).send({
        currentDateTime: data
    });
});
module.exports = router;