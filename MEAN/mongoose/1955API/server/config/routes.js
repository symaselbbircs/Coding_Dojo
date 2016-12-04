var mongoose = require('mongoose'),
    person = require('../controllers/person')


module.exports = function(app){
  app.get('/', function(req,res){
    person.read(req,res)
  })

  app.get('/:name', function(req,res){
    person.read_person(req,res)
  })

  app.get('/new/:name', function(req,res){
    person.create(req,res)
  })

  app.get('/remove/:name', function(req,res){
    person.delete(req,res)
  })
}
