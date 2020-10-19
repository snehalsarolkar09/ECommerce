var h = require('http');
var ev = require('events');
var fs = require('fs');

var ee = new ev.EventEmitter();
ee.addListener('logrequest',function(r){
   console.log("logrequest event handler");
   var str = "Request received at "+new Date().toString()+" for "+r.url+"\n";
   fs.appendFile('log.txt',str,function(err){
         if(!err)
	      console.log("request logged in file");			
    });
});

var server = h.createServer(function(req,res){
     if(req.url == '/favicon.ico')
	return;
     ee.emit('logrequest',req);
     res.writeHead(200,{'Content-Type':'text/html'});
     res.write("<p> This request has been logged </p>");
     res.end(); 
});

server.listen(8100);

console.log("server started");