const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('../src/routers/user');
const taskRouter = require('../src/routers/task');



const app = express();
const port = process.env.PORT || 3000;



app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


const jwt = require('jsonwebtoken');


app.listen(port, () => {
    console.log("Sever is up at " + port)
});


// const main = async () => {

//     const user = await User.findById('5e34a9aa91b6208c6915d0ac')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks);
    

// }
// main()