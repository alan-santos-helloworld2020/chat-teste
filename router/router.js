var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static(path.join(__dirname, "../", 'public')));
router.use(express.static(path.join(__dirname, "../", 'views')));
router.get('/', (req, res) => {
    res.sendFile('index.html');


});

module.exports = router;