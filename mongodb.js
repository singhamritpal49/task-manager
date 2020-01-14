// CRUD CREATE READ DELETE UPDATE DELETE


//object destructure
const { MongoClient, ObjectID } = require('mongodb')

// This is to start connection 
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



// Connect takes 
// first arg connection URL
// second arg useNewUrlParser;
// last callback function to connect to dB
MongoClient.connect(connectionURL, { useNewUrlParser: true,  useUnifiedTopology: true  }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to Database")
    }
    const db = client.db(databaseName)
    

    // db.collection('users').findOne({ age: 78}, (error,user) => {
    //     if(error) {
    //         return console.log("unable to fetch")
    //     }
    //     // console.log(user)
    // })

    // db.collection('users').find({ age: 25 }).toArray((error,users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 25 }).toArray((error,count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error,tasks) => {
    //     console.log(tasks)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID("5e1d50310fbc020bf50a044e")}, (error,task) => {
        if(error) {
            return console.log("unable to fetch")
        }
        console.log(task)
    })
    

})