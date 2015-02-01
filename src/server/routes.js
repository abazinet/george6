var express = require('express');
var router = express.Router();

router.route('/vml/assessment').post(function(req, res) {
  console.log('POSTED ');
  console.log(req.body);
  res.send({ message: 'Data received' });
});

module.exports = router;