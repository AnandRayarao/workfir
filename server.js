//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<name-of-app>'));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')) ) ;


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT);//Install express server
