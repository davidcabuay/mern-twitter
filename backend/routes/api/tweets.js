var express = require('express');
var router = express.Router();

/* GET tweets listing. */
router.get('/', function(req, res, next) {
  // res.send('bye please respond with a resource');
  res.json({
    message: "GET api/tweets"
  })
});

module.exports = router;
