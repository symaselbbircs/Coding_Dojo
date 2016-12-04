var mongoose = require('mongoose'),
    Animal = mongoose.model('Packs');
    animal = require('../controllers/animals'),


module.exports = function(app){
  app.get('/',function(req,res){
    animal.read_all(req,res);
  })

  app.get('/mongooses/new', function(req,res){
    animal.showForm(req,res)
  })

  app.get('/mongooses/:id', function(req,res){
    animal.read_by_id(req,res)
  })

  app.get('/mongooses/edit/:id', function(req,res){
    animal.showEdit(req,res);
  })

  app.post('/mongooses', function(req,res){
    animal.create(req,res)
  })

  app.post('/mongooses/:id', function(req,res){
    animal.update(req,res)
  })

  app.post('/mongooses/destroy/:id', function(req,res){
    animal._delete(req,res)
  });
}
