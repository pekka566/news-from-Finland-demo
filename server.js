//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

const port = process.env.PORT || 8080;
console.log('Starting to listen port... ' + port);

// Start the app by listening on the default Heroku port
app.listen(port);
