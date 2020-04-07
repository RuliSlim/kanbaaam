const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const index = {}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const control = require('./'+file);
    index[file.slice(0,-3)] = control;
  });

module.exports = index;
