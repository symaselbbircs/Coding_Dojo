var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PackSchema = Schema({
  animal: String,
  in_pack: Number,
  pack_type: String
})

  var Animal = mongoose.model('Packs', PackSchema);
