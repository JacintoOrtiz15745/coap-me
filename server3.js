const coap = require('coap');
const server = coap.createServer();

server.on('request', (req, res) => {

  switch (req.url) {

    //Cuando un cliente hace una petición a ese link mostrara los servicios que hay
    case '/.well-know/core':

      //Si es una petición get obtiene los servicios disponibles
      if(req.method === 'GET'){
        res.setOption('Content-Format', 'application/json');
        res.end(JSON.stringify({
            sensores: ['/temperatura', '/humedad', '/distancia']
        }));
      }

    case '/.well-know/core/temperatura':

      if(req.method === 'GET'){
        res.end(JSON.stringify({
          'temperatura': '32'
        }));
      }

  }
});

server.listen(() => {
  console.log('Server is listening');
});
