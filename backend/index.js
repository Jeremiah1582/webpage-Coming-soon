const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8000
const cors = require('cors')
require('dotenv').config()
const bodyParser = require("body-parser");

// DB configuration
const DB_NAME = process.env.DB_NAME;
const DB_LINK = process.env.DB_LINK;
const mongoURI = DB_LINK + DB_NAME;

// Connect to MongoDB using mongoose.connect()
mongoose.connect(mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Check if the connection was successful
mongoose.connection.on('open', () => {
  console.log('Connection to MongoDB database was successful!');
});
// Log any errors that occur during the connection process
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB database:', err);
});

// middleware settings 
app.use(express.static(__dirname + "/Public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/newStakeholder', (req, res) => {

    console.log(req.body);
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
