const express = require('express');
const app = express();

const db = require('./db');

app.listen(3088, () =>{
  console.log('The API should be connected to 3088');
});

// console.log('this is where we notice if the server is running correctly');