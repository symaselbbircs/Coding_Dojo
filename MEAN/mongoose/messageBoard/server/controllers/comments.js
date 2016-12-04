var mongoose = require('mongoose'),
    Comment = mongoose.model('Comment'),
    Post = mongoose.model('Post');

  module.exports = {
    create: function(req, res){
      Post.findOne({_id: req.params.id}, function(err, post){
             var comment = new Comment(req.body);
             comment._post = post._id;
             post.comments.push(comment);
             comment.save(function(err){
                     post.save(function(err){
                           if(err) { console.log("Error Saving comment"); res.render('error', {err:err}) }
                           else {
                             console.log("Successfully Saved Comment!");
                             res.redirect('/posts')
                           }
                     });
             });
       });
    }
  }
