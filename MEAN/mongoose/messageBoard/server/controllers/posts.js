var mongoose = require('mongoose'),
    Post = mongoose.model('Post');

  module.exports = {
    show: function(req,res){
      Post.find({})
      .populate('comments')
      .exec(function(err, post) {
         console.log('Getting all messages!')
         res.render('postsComments', {post: post});
       });
    },
    create: function(req,res){
      var post = new Post(req.body)
      post.save(function(err){
        if(err){
          res.status(400)
          res.render('error', {err:err})
        } else{
          console.log("yay we are going to post a message!")
          res.status(200);
          res.redirect('/posts')
        }
      })
    }
  }
