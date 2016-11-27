var http = require('http');
var fs = require('fs');

var port = 7707;
var page_views_directory = "./views/"
var image_directory = "./images/"
var css_directory = "./stylesheets/"

var server = http.createServer(function (request, response){
  var page_views;
  var image_file;
  var image_return;
  var style_file;
  var style_return;

  console.log('client request URL: ', request.url);

  if(request.url.startsWith("/images")){
    image_return = true;
    image_file = request.url.split('/images/')[1]
  }
  else if(request.url.startsWith("/stylesheets")){
    style_return = true;
    style_file = request.url.split('/stylesheets/')[1]
  }
  else{
    if(request.url === '/cars'){
      page_views = 'cars.html';
    }
    else if(request.url === '/cats'){
      page_views = 'cats.html';
    }
    else if(request.url === '/cars/new'){
      page_views = 'carform.html';
    }
  };
  if(image_return){
    fs.readFile(image_directory + image_file, function(errors,contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents); //this will send the response and render the page
      response.end(); // this likely sends a termination of the session to the console(browser, in this case)
    });
  }
  else if(style_return){
    fs.readFile(css_directory + style_file, 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
    })
  }
  else if(page_views != undefined){
    fs.readFile(page_views_directory + page_views, 'utf8', function(errors,contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents); //this will send the response and render the page
      response.end(); // this likely sends a termination of the session to the console(browser, in this case)
    });
  }
  else{
    response.writeHead(404);
    response.end('File not found!!!');
  };

});



server.listen(port);

console.log(`Running in localhost at port ${port}`)
