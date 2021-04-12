const express = require('express'); 
const logger = require('morgan'); 
const mongoose = require('mongoose');
require("dotenv").config();

const PORT = process.env.PORT || 5000; 

const app = express(); 

app.use(logger('dev')); 

app.use(express.urlencoded({ extended: true}));
app.use(express.json()); 

app.use(express.static('app/public')); 

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true});


app.listen(PORT, () =>{
	console.log(`Listening on port http://localhost:${PORT}`); 
});