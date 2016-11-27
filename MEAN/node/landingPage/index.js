var http = require('http');
var fs = require('fs');

var port = 6789

var server = http.createServer(function (request, response){
  console.log('client request URL: ', request.url);
  var page = undefined
  if(request.url === '/'){
    page = 'index.html';
  }
  else if(request.url === '/ninjas'){
    page = 'ninjas.html';
  }
  else if(request.url === '/dojos/new'){
    page = 'dojos.html';
  }
  else{
    response.writeHead(404);
    response.end('File not found!!!');
  }
  if(page != undefined){
    fs.readFile(page, 'utf8', function(errors,contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents); //this will send the response and render the page
      response.end(); // this likely sends a termination of the session to the console(browser, in this case)
    });
    page = undefined;
  }

});



server.listen(port);

console.log(`Running in localhost at port ${port}`)
