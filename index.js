const express = require('express')
const app = express()
const port = 8080
const HOST = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, HOST);
console.log(`Running on http://${HOST}:${port}`);


// const server = app.listen(port, () => {
// 	      console.log('listening on port %s.\n', server.address().port);
// });

module.exports = app;
