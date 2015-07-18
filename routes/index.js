var express = require('express');
var router = express.Router();
var work = require('../models/work');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/works', function(req, res, next){
	work.queryList(function(err, rows){
		if(err)
			return res.json({error : err});
		return res.json(rows);
	});
});

module.exports = router;
