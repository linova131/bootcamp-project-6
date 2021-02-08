const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get('/', (req,res, next) => {
  console.log(data.project_name);
  next();
});

// router.get('/', (req, res) => {
//   res.render('index'), data;
// });

router.get('/', (req, res) => {
  console.log('hello world');
});

module.exports = router;