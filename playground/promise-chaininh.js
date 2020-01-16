require('../src/db/mongoose')
const User = require('../src/models/user')


// 

// User.findByIdAndUpdate('5e1e19596efb2c1919d78d02', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result)=> {
//     console.log(result)
// }).catch((error)=> {
//     console.log(error)
// })



const updateAgeandCount =  async (id,age) => {
    const user = await User.findByIdAndUpdate(id, {age: age })
    const count = await User.countDocuments({ age: age })
    return count
}

updateAgeandCount('5e1e19596efb2c1919d78d02', 2).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})
