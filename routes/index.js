var express = require('express');
var router = express.Router();


// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'testPage' });
});
router.get('/passages', function(req, res, next) {
  res.render('passages', { title: 'passages' });
});
router.get('/project/eatSnake', function(req, res, next) {
  res.render('project/eatSnake', { title: 'eatSnake' });
});
router.get('/project/time', function(req, res, next) {
  res.render('project/time', { title: 'time' });
});
//train
router.get('/project/train', function(req, res, next) {
  res.render('project/train', { title: 'train' });
});

//magicSquare
router.get('/project/magicSquare', function(req, res, next) {
  res.render('project/magicSquare', { title: 'magicSquare' });
});


//flappybird
router.get('/project/flappybird', function(req, res, next) {
  res.render('project/flappybird', { title: 'flappybird' });
});



router.get('/changeUser', function(req, res, next) {
  res.render('changeUser', { title: 'changeUser' });
});

module.exports = router;
