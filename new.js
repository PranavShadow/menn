// const http  = require("http")
// const server = http.createServer((req,res) => {
//     if(req.url == "/about"){
//         res.end("the about page")
//     }

//     if(req.url == "/profile"){
//         res.end("the profile page")
//     }
//     if (req.url == "/") {
//         res.end("the homepage")
//     }


// })

// server.listen(3000)

const express = require('express');
const neww = express();

neww.set("view engine", 'ejs')

neww.get('/', (req,res) => {
    res.render('index')
})

neww.get("/about", (req,res) => {
    res.send("the about page")
})


neww.get("/profile", (req,res) => {
    res.send("the profile page")
})

neww.listen(3000)