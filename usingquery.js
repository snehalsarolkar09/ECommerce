var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req,res){
      if(req.url == '/favicon.ico')
      {
	  fs.readFile('favicon.ico',function(err,data){
		if(!err)
		{
		     console.log("read icon");	
		     res.writeHead(200,{'content-Type':'image/x-icon'});
		     res.write(data);
		     res.end();
                     return;			
                } 
          });
      }	
      var url_parts = url.parse(req.url,true); 
      var color = url_parts.query.color;
      var msg = url_parts.query.msg;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write("<h1 style='color:"+color+"'> "+msg+"</h1>");
      res.end();
      	
});

server.listen(8100);

console.log("server started on port 8100");

