const http = require('http');

http.createServer( (rep, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida = {
        nombre: 'Fco Javier',
        apellido: 'Hernandez Fdz'
    }
    res.write(JSON.stringify( salida ));
    // res.write('Hola mundo');
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080');