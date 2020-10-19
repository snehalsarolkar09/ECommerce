var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req,res){
      var url_parts = url.parse(req.url,true); 
      var path = url_parts.pathname;
      var file = path.substring(1);
      //console.log(file);
      fs.readFile(file,function(err,data){
	   if(!err)
           {
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data.toString());
		res.end();	
           }	
      });
});

server.listen(8100);

console.log("server started on port 8100");

