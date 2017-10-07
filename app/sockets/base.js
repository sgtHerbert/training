module.exports = function (io){
    io.on('connection', function (socket) {
        socket.emit('message', 'welcome');
        io.sockets.on('message', function(message){
            //utilisation de 'ent' pour eviter les injection javascript 
            console.log('message');
            socket.emit('message', 'lolo');
        })
    });
};