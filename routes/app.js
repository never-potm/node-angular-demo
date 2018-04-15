var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {

  User.findOne({}, function(error, doc) {
    if(error) {
      return doc.send('Error!');
    }
    res.render('node', {email: doc.email});
  });
});

router.post('/', function(req, res, nexy) {
  
  var email = req.body.email;
  var user = new User({
    firstName: 'suraj',
    lastName: 'gusain',
    password: 'demo123',
    email: email
  });

  user.save();
  res.redirect('/');
});

module.exports = router;
