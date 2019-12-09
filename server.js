const express = require('express');
const app = express();

const db = require('./db');
const router = require('./db/routes');

app.use('/api', router);

app.listen(3088, () =>{
  console.log('The API is connected to 3088');
});


module.exports.app = app;
// console.log('this is where we notice if the server is running correctly');