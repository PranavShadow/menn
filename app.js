const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'))

app.set("view engine", 'ejs')

app.use((req,res,next) => {
    console.log("this is a middleware")
    const a=2;
    const b=3;
    console.log(a+b)
    return next()
})

app.get('/', (req,res) => {
    res.render('index')
})

app.get("/about", (req,res) => {
    res.send("the about page")
})


app.get("/profile", (req,res) => {
    res.send("the profile page")
})

app.listen(3000)