var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static(path.join(__dirname, "../", 'public')));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views','index.html'));


});

module.exports = router;
