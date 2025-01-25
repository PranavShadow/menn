const express = require('express');
const neww = express();

neww.get('/', (req,res) => {
    res.send("hello world")
})

neww.listen(3000)