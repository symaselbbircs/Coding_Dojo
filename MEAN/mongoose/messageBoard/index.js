var port = 8000,
    db = 'messageboard';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/bower_components/jquery/dist'));

app.set('views', __dirname +  '/views');
app.set('view engine', 'ejs');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/' + db)

var PostSchema = new Schema({
  name: {type: String, required: true, minlength: 4},
  message: {type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

var CommentSchema = new Schema({
  name: {type: String, required: true, minlength: 4},
  _post: {type: Schema.Types.ObjectId, ref: "Post"},
  comment: {type: String, required: true}
}, {timestamps: true});


mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);


var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.get('/', function(req,res){
  res.render('index')
})

app.get('/posts', function (req, res){
 Post.find({})
 .populate('comments')
 .exec(function(err, post) {
    console.log('Getting all messages!')
    res.render('postsComments', {post: post});
  });
});

app.post('/posts', function(req,res){
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
})

app.post('/posts/:id', function (req, res){
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
 });


 app.listen(port, function(){
   console.log(`Listening on port ${port}`)
 })
