var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const ArviointiRouter = require('./routes/Arviointi');
const OpintojaksoRouter = require('./routes/Opintojakso');
const OpiskelijaRouter = require('./routes/opiskelija');

var app = express();

app.use(basicAuth({users: { 'admin': '1234' }}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/Arviointi', ArviointiRouter);
app.use('/Opintojakso', OpintojaksoRouter);
app.use('/Opiskelija', OpiskelijaRouter);

module.exports = app;
