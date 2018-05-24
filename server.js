/**
 * Module dependencies.
 */

//require('dotenv').config();

const express = require('express'),
      sql = require('mssql'),
      db = require('./config/db'),
      user = require('./routes/user'),
      path = require('path'),
      favicon = require('serve-favicon'),
      methodOverride = require('method-override'),
      bodyParser = require('body-parser'),
      pug = require('pug');
//Initialize App
const app = express();
const port = process.env.PORT || 3000;

  app.set('views', __dirname + '/views');
  app.set('view engine', 'pug');
  app.use(favicon(__dirname + '/public/images/favicon.png'));

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(methodOverride('X-HTTP-Method-Override'))
  app.use(express.static(path.join(__dirname, 'public')));

  sql.connect(db).then(pool => {
    //Include ROUTER
    require('./routes')(app, pool, sql);

    //Start Server
    app.listen(3000, () => {
        console.log('app listening on port => '+ port);
    });
  }).catch(err => {
      console.log(err);
      //sql.close();
  });

  sql.on('error', err => {
  // ... error handler
      console.log(err);
  });
