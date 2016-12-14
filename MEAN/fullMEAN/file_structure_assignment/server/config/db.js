var mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path');

var db = "names_and_birthdays"

mongoose.Promise = global.Promise; //This is for a warning
mongoose.connect('mongodb://localhost/' + db)

var models_path = path.join(__dirname, './../models')

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0){
    require(models_path + '/' + file)
  }
})
