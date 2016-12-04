var mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path');

var db = 'assignments';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/' + db)

var models_path = path.join(__dirname, './../models')

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0){
    require(models_path + '/' + file)
  }
})
