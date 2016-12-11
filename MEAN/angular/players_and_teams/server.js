var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();

include_folders = ['client', 'bower_components', 'controllers', 'factory'];

for(_path in include_folders){
  app.use( express.static( path.join( root, include_folders[_path] )))
}

// app.use( express.static( path.join( root, 'client' )));
// app.use( express.static( path.join( root, 'bower_components' )));
// app.use( express.static( path.join( root, 'controllers' )));
// app.use( express.static( path.join( root, 'factory' )));

app.use(bp.json())



app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
