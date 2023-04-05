const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api/UserApi');
const { connect, seedDB } = require("./services/database");

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
connect("mongodb://localhost:27017");
app.use('', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
