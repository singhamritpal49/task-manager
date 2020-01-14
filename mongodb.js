// C R U D ----> CREATE READ DELETE UPDATE DELETE <----


//object destructure
const { MongoClient, ObjectID } = require('mongodb')

// This is to start connection 
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



// Connect takes 
// first arg connection URL
// second arg useNewUrlParser;
// last callback function to connect to dB
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to Database")
    }
    const db = client.db(databaseName)


    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5e140bbb8b895b1a41b33eb2")
    // }, {
    //     // $set: {
    //     //     name: 'Mike'
    //     // }
    //     $inc: {
    //         age: 1
    //     }

    // })
    // updatePromise.then((result) =>{
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    const updatePromise = db.collection('tasks').updateMany({
       completed: true
    }, {
        $set: {
            completed: false
        }

    })
    updatePromise.then((result) =>{
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})