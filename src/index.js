const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('../src/routers/user');
const taskRouter = require('../src/routers/task');



const app = express();
const port = process.env.PORT || 3000;

// app.use((req,res,next) => {
//     if(req.method === 'GET') {
//         res.send("GET Requests Are Disabled")
//     } else {
//         next()
//     }
// });

// app.use((req,res) => {
//         res.status(503).send("Under Maintenance ")
// });




app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


const jwt = require('jsonwebtoken');


app.listen(port, () => {
    console.log("Sever is up at " + port)
});