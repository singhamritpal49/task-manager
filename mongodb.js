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

    // db.collection('users').deleteMany({
    //     age: 26
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(eoor)
    // })

    db.collection('tasks').deleteOne({
        description: "TEST1"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(eoor)
    })

})