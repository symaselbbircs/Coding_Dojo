var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  var PersonSchema = new Schema({
    name: {type: String, required: true}
  }, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

  var Person = mongoose.model('Person', PersonSchema)
