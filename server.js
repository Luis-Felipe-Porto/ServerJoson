
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
const apiExterna = require('./apiExterna')
app.use(bodyParser.json())
 
app.use(express.static(path.join(__dirname, '/public')));
 
var locationData;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

server.listen(3333,'192.168.0.102',function(){
    console.log('listen on port 3333')
    
})
/*
io.on('connection',(socket)=>{
    console.log('new connection',socket.id)
    socket.on('msg',(msg)=>{
        console.log(msg)
    })
})*/
app.post('/location', function(req, res) {
    locationData = req.body;
    console.log(locationData);
    console.log("localização");
    io.emit('locationEvent', locationData);	
    res.send(req.body);
});
app.post('/user',(req,res)=>{
    apiExterna(req.body)
    .then(e=>e?res.send({"isValido":true}):res.send({"isValido":false}))
    .catch(e=> console.error(res.send(e)));
});