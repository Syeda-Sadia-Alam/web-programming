// This is the root of the whole node application
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const DB_URL  = 'mongodb+srv://testuser:OZQMEqmgjx06j3f8@cluster0.m0nad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = 8080;
const Path = require('path')

const setMiddlewares = require('./middlewares/index')
const setRoutes = require('./routes/index')


// Set template engine with express app
app.set('view engine','ejs')
app.set('views',Path.join(__dirname,'./views'))

// // Set middlewares 
setMiddlewares(app)
// // Set Routes
setRoutes(app)

// If a not available route with our server then it will show the 404 message
app.get('*',(req,res)=>{
   return res.send('<h1 style="text-align:center;margin-top:2rem">404 PAGE NOT FOUND!</h1>')
})

//  When connected with DB then start to serve the server
mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log('Database connection established')
    app.listen(PORT,()=>{
        console.log(`Server is running on PORT ${PORT}`)
    })
}).catch((err)=>{
    console.log(`Failed to connect DB - ${err}`)
})