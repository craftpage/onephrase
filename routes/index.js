var express = require('express');
var router = express.Router();
var connection = require('../models/database'); // 追加

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = 'select name, date, onephrase from one_phrase  order by id';
  connection.query(query, function(err, rows) {
    res.render('index', {
      title: 'OnePhrase',
      onePhrase: rows
   });
  });
});

router.post('/', function(req, res, next) {
  var name = req.body.name;
  var onePhrase = req.body.onePhrase;
  var query = 'insert into one_phrase(name, onephrase) values("' + name + '"' + ',' + '"' + onePhrase + '"' + ');';
  connection.query(query, function(err, rows) {
    res.redirect('/');
  });
});


module.exports = router;
