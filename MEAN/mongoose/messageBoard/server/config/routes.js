var mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    Comment = mongoose.model('Comment'),
    post = require('../controllers/posts'),
    comments = require('../controllers/comments');


module.exports = function(app){
  app.get('/', function(req,res){
    res.render('index')
  })

  app.get('/posts', function (req, res){
   post.show(req, res)
  });

  app.post('/posts', function(req,res){
    post.create(req,res)
  })

  app.post('/posts/:id', function (req, res){
    comments.create(req, res);
   });
}
