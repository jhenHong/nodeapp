const express = require('express')
const app = express()
const port = 8080;

app.get('/v1/*', (req, res) => {
  res.send('Hello wold!' + req.url + '\n')
})

app.get('/v2/*', (req, res) => {
  res.send('Hello wold 2! ' + req.url + '\n')
})


app.listen(port );
console.log(`Running on http://localhost:${port}`);






// const server = app.listen(port, () => {
// 	      console.log('listening on port %s.\n', server.address().port);
// });

module.exports = app;
