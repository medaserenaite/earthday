const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
// require('./models/Product')
require('./routes/productRoutes')(app);
const PORT = process.env.PORT || 5000;

const app = express();

//connects to database - needs some tweaking
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/test`, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());

// redirects all the requests to our frontend application, unless we specify any route before this code
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));


  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

//listens to port (backend)
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});