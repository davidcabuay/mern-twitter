var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('bye please respond with a resource');
});

module.exports = router;
