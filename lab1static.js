const static =require('node-static');
const http=require('http');
var events=require('events')
var path=require('path')

var here=path.basename(__filename);

var file= new(static.Server)(__dirname);
var hostname= '127.0.0.1';
var port=3000;

const server=http.createServer(function(req,res){
    file.serve(req,res);
})
server.listen(port,hostname,function(){
    console.log(`server running at http://${hostname}:${port}`)
});

if (here='lab1.html'){
    console.log('Hello from Roehampton')
};
