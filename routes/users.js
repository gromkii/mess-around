var express   = require('express'),
    router    = express.Router();

router.route('/')
  .get((req, res)=> {
    res.render('users/index');
  });

router.route('/:id')
  .get((req, res) => {
    res.render('users/show')
  });

module.exports = router;
