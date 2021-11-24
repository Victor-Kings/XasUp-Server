const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./src/Routes/index')(app);
app.use(cors());
app.use(express.json());
app.listen(3333);