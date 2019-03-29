var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  connect.query(`SELECT title, image, heading FROM things`, (err, result) => {
    if (err) {
      throw err;
      console.log(err);
    } else {
      console.log(result);
      res.render('index', { image: result });
    }
  });
});



// get information
router.get('/:things', function(req, res, next) {
  connect.query(`SELECT * FROM things WHERE title="${req.params.things}"`, (err, result) => {
    if (err) {
      throw err;
      console.log(err);
    } else {
      console.log(result);
      res.render('description', { data: result[0] });
    }
  });
});


module.exports = router;
