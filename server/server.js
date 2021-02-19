require('dotenv').config();
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const morgan = require('morgan');

const db = require('./models');
const routes = require('./routes');
const passport = require('./config/passport');
const corsOptions = require('./config/cors.js');
const seedEmp = require('./database/seedEmp.js');
const seedMenuItem = require('./database/seedMenuItem.js');
const seedOrder = require('./database/seedOrder.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// to be removed later ########
app.use(express.static('public'));
// ########

app.use(helmet({ contentSecurityPolicy: false }));
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));
app.use(morgan('dev'));

// for Reactjs ##################
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}
// #################################################

// Add routes, API
app.use(routes);

// for Reactjs #############################
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}
// #################################################

// Dynamically force schema refresh only for 'test'
const FORCE_SCHEMA = process.env.NODE_ENV === 'test' || 'development';

db.sequelize
  .authenticate()
  .then(() => {
    db.sequelize.sync({ force: FORCE_SCHEMA })
      .then(() => {
        if (FORCE_SCHEMA) {
          seedEmp();
          seedMenuItem();
          seedOrder();
        }
      })
      .then(() => {
        app.listen(PORT, (err) => {
          if (err) throw err;
          console.log(
            `🌎 Server is Ready and Listening on http://localhost:${PORT}`
          ); // eslint-disable-line no-console
        });
      });
  })
  .catch(console.error); // eslint-disable-line no-console

module.exports = app;
