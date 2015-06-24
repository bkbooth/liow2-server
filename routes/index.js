var express = require('express'),
    router = express.Router();

var Dummy = require('../models/Dummy');

/* GET home page. */
router.get('/', function __getHome(req, res, next) {
  Dummy.find(function __dummyFind(err, dummies) {
    if (err) { return next(err); }
    res.status(200).json(dummies);
  });
});

/* POST to home page. */
router.post('/', function __postHome(req, res, next) {
  Dummy.find(function __dummyFind(err, dummies) {
    if (err) { return next(err); }
    var dummy = new Dummy({ name: 'dummy' + (dummies.length + 1) });

    dummy.save(function __dummySave(err) {
      if (err) { return next(err); }
      res.status(201).json({});
    });
  });
});

module.exports = router;