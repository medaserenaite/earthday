const colors = require('colors')
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
var playerRoutes = require('./player.route');

//connects to database and checks if the connection was made
mongoose.connect('mongodb://localhost:27017/players', { useNewUrlParser: true, useUnifiedTopology: true } );
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'.underline.red));
db.once('open', function() {
  console.log("Connection Successful!".underline.yellow);
});

// redirects all the requests to our frontend application, unless we specify any route before this code
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// Player routes for server
app.use("/", playerRoutes);

//listens to port (backend)
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`.underline.magenta)
});