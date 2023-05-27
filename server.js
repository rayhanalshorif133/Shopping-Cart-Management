const express = require('express')
const app = express()
const cors = require('cors');
const dotEnv = require('dotenv');
const multer = require('multer');
const bodyParser = require("body-parser");
const path = require("path");


// Configurations for "body-parser"
// set static folder

// upload

dotEnv.config();
app.use(cors());
app.use(express.json());

// ejs


// configure
PORT = process.env.PORT || 3001

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// configure body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// configure body-parser
app.use(bodyParser.json());

app.use('/', (req, res) => {
 res.send('Hello World!');
});



app.listen(PORT, function () {
 console.log(`Server open listening on port ${PORT}!`);
});