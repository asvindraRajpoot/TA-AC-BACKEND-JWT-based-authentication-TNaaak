var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/v1/', (req, res, next)=> {
  res.render('index');
});

module.exports = router;
