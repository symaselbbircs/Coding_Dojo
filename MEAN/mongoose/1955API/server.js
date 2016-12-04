var express = require('express'),
    app = express();


var port = 8000;

require('./server/config/mongoose')

var route_set = require('./server/config/routes')

route_set(app)

app.listen(port,function(){
  console.log(`Listening on port ${port}`)
})
