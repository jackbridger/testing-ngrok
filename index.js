const app = require('http').createServer(
    function(req,res){res.writeHead(200);
    res.write('Hello');
    res.end();
  } );
  
var ngrok = require('@ngrok/ngrok');
  

ngrok.listen(app).then(()=> {
    console.log('Public URL: ', app.tunnel.getUrl())  
    // It does feel a bit odd to me that we are modifying the server object
    // Or maybe tunnel already exists on the server object?
    // It was not super intuitive to me
})

// Possible alternative style

// const tunnel = ngrok(server)
// tunnel.listen().then(({publicURL})=> {
//     console.log('Public URL: ', publicURL)  
// })


// Or maybe this is better
// ngrok.listen(server).then(({url}) => {
//     console.log("Online at : " + url);
//   });

// Or with app
// ngrok.listen(app).then(({url}) => {
//     console.log("Online at : " + url);
//   });

// I am also not sure 100% if listen makes sense as could be confused with listen on a server
// Maybe like tunnel or deploy or expose or something else


// Possible Minimal express example 

// const express = require('express')
// const app = express()
// const port = 3000
// const ngrok = require('@ngrok/ngrok');

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// ngrok.deploy(app).then(({url}) => {
//     console.log("Online at : " + url);
// });