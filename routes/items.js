var express = require('express');
var router = express.Router();
var passport = require('passport');
var Item = require('../models/Item')

/* GET items listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  var token = getToken(req.headers);
  if (token) {
    console.log(req.body);
    var newItem = new Item({
        code: req.body.code,
        description: req.body.description,
        selled: req.body.selled,
        stock: req.body.stock,
        price: req.body.price
    });

    newItem.save(function (err) {
      if (err) {
        return res.json({
          success: false,
          msg: 'Save item failed.'
        });
      }
      res.json({
        success: true,
        msg: 'Successful created new item.'
      });
    });
  } else {
    return res.status(403).send({
      success: false,
      msg: 'Unauthorized.'
    });
  }
});

router.get('/', passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  var token = getToken(req.headers);
  if (token) {
    Item.find(function (err, items) {
      if (err) return next(err);
      res.json(items);
    });
  } else {
    return res.status(403).send({
      success: false,
      msg: 'Unauthorized.'
    });
  }
});

module.exports = router;
