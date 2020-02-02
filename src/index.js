const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('../src/routers/user');
const taskRouter = require('../src/routers/task');


const app = express();
const port = process.env.PORT || 3000;


const multer = require('multer')
const upload = multer({
    dest: 'images'
})

app.post('/upload',upload.single('upload'), (req,res)=> {
    res.send()
})



app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


const jwt = require('jsonwebtoken');


app.listen(port, () => {
    console.log("Sever is up at " + port)
});
