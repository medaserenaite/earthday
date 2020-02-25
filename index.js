const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
// require('./models/Product')

const PORT = process.env.PORT || 5000;

const app = express();
// require('./routes/productRoutes')(app);

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

// var passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// // Use the GoogleStrategy within Passport.
// //   Strategies in Passport require a `verify` function, which accept
// //   credentials (in this case, an accessToken, refreshToken, and Google
// //   profile), and invoke a callback with a user object.
// passport.use(new GoogleStrategy(
//   {
//     clientID: "143478790886-4k8jem5fpv3q59uuftgcslhasephu52o.apps.googleusercontent.com",
//     clientSecret: "-WxynBRppXFiKCshVlfi6-6B",
//     callbackURL: "http://www.localhost:3000/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//        User.findOrCreate({ googleId: profile.id }, function (err, user) {
//          return done(err, user);
//        }
       
//        )
//        console.log("does this even work");
//   }
// ));

//listens to port (backend)
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});