var express = require('express'),
    router  = express.Router();

router.route('/')
  .get((req, res)=> {
    res.render('index/index');
  });

module.exports = router;
