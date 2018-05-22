
/**
 * Module dependencies.
 */

const express = require('express'),
      routes = require('./routes'),
      user = require('./routes/user'),
      path = require('path'),
      favicon = require('serve-favicon'),
      methodOverride = require('method-override'),
      bodyParser = require('body-parser'),
      pug = require('pug');

const app = express();
const port = process.env.PORT || 3000;


  app.set('views', __dirname + '/views');
  app.set('view engine', 'pug');
  app.use(favicon(__dirname + '/public/images/favicon.png'));

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(methodOverride('X-HTTP-Method-Override'))


  app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index);
app.get('/users', user.list);

app.listen(port, function () {
        console.log('Dev app listening on port '+ port);
});
