const express = require('express');

const app = express();

app.set('view engine', 'pug');

const routes = require('./routes')

app.use(routes)

app.use('/static',express.static('public'));

app.listen(3000, () => {
  console.log('The application is running on localhost:3000')
})