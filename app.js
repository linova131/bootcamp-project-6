const express = require('express');

const app = express();

app.set('view engine', 'pug');

const mainRoutes = require('./routes')
const projectRoutes = require('./routes/projects')

app.use(mainRoutes)
app.use('/projects', projectRoutes)

app.use('/static',express.static('public'));

app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  console.log('global error handler fired');
  res.locals.error = err;
  res.render('error');
})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000')
})