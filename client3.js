const coap = require('coap');

coap
  .request({
    hostname: 'coap.me',
    pathname: '/.well-know/core',
    method: 'GET',
  })

  .on('response', (res) => {
    const values =  res.payload.toString();
    console.log({values});
  })
  .end();

coap
  .request({
    hostname: 'coap.me',
    pathname: '/.well-know/core/temperatura',
    method: 'GET',
  })

  .on('response', (res) => {
    const values = res.payload.toString();
    console.log({values});
  })
  .end();
