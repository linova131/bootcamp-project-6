const express = require('express');
const { compileClientWithDependenciesTracked } = require('pug');
const router = express.Router();
const data = require('../data.json');
const projects = data.projects;


router.get('/:id', (req, res) => {
  const num = req.params.id
  res.render('project', projects[num])
});

module.exports = router;

