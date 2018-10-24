var socket = io();

// Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');

});
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Juan Roberto',
    mensaje: 'Hola mundo'
}, function(resp) {
    //console.log('Se disparo el callback');
    console.log('respuesta server:', resp);

});
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);

});