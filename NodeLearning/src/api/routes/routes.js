const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const usersRoutes = require('./controller/users');
const codesRoutes = require('./controller/codes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/users',usersRoutes);
app.use('/codes',codesRoutes);
module.exports = app;