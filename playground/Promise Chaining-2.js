require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete("5e1e28530319a01e791d1fc8").then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}


deleteTaskAndCount('5e1e28863ea6ae1eac794a40', 2).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})