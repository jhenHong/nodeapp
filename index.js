const express = require('express')
const app = express()
const port = 8080;

app.get('/*', (req, res) => {
  res.send('Hello wold!' + req.url)
})


app.listen(port );
console.log(`Running on http://localhost:${port}`);






// const server = app.listen(port, () => {
// 	      console.log('listening on port %s.\n', server.address().port);
// });

module.exports = app;
