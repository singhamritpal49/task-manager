const moongoose = require('mongoose')

moongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})

// const User = moongoose.model('User', {
//     name: { 
//         type: String
//     },
//     age: { 
//         type: Number
//     },
// })

// const me = new User({
//     name: "user",
//     age: 25
// })

// me.save().then((me) => {
//     console.log("Saved", me)
// }).catch((error) => {
//     console.log("Error", error)
    
// })

const Task = moongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: "AGAIN",
    completed: false
})

task.save().then(() => {
    console.log("Saved", task)
}).catch((error)=> {
    console.log("Failed To Save", error)
})