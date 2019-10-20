const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
//imports Routes
const postsRoute = require('./routes/posts');
app.use(bodyParser.json());
app.use('/posts', postsRoute);

//Routes
app.get('/', (req,res) => {
    res.send("We are in Home");
})
//Connect to DB
mongoose.connect('mongodb+srv://teshu:siva@cluster0-y8zh0.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true }, ()=> {
    console.log("Connected to DB!")
})
//How do we start listening
app.listen(3000);