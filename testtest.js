/*const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('mywebsite')); 
const cors = require('cors');
app.use(cors({ origin: '*' }));

mongoose.connect("mongodb://127.0.0.1:27017/", {useNewUrlParser : true, useUnifiedTopology: true});


const schemacredentials = new mongoose.Schema({
  name: String,
  surname:String,
  email:String,
  day:Number,
  month:Number,
  year:Number, 

  male:Boolean,
  female:Boolean,
  password:Number})
const Credentialssa = mongoose.model("Key",schemacredentials);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });/*