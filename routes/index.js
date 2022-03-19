var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let path = __dirname+"/index/index.html"
  res.sendFile(path)
});

router.get('/contactus', function(req, res, next) {
  let path = __dirname+"/Contact/index.html"
  res.sendFile(path)
});

router.get('/aboutus', function(req, res, next) {
  let path = __dirname+"/About/index.html"
  res.sendFile(path)
});

router.get('/dashboard', function(req, res, next) {
  let path = __dirname+"/Dashboard/index.html"
  res.sendFile(path)
});

module.exports = router;
