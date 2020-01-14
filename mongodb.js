// CRUD


//object destructure
const { MongoClient, ObjectID } = require('mongodb')

// This is to start connection 
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id) 
// console.log(id.getTimestamp())
// console.log(id.toHexString().length)




// Connect takes 
// first arg connection URL
// second arg useNewUrlParser;
// last callback function to connect to dB
MongoClient.connect(connectionURL, { useNewUrlParser: true,  useUnifiedTopology: true  }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to Database")
    }
    const db = client.db(databaseName)
    console.log('Connected correctly')
    // Creating USER DB
    // insert One 
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: "Vikram",
    //     age: 222
    // }, (error,result) => {
    //     if(error) {
    //         return console.log("Unable to insert User")
    //     }
    //     console.log(result.ops)

    // })
    
    //Inserting Many
    // db.collection('users').insertMany([

    //     {
    //         name: "Gunther",
    //         age: 29 
    //     },
    //     {
    //         name: "Jane",
    //         age: 78
    //     }

    // ], (error,result) => {

    //     if(error) {
    //         return console.log("Unable to insert")
    //     }

    //     console.log(result.ops)
    // })

    // challenge 
    // db.collection('tasks').insertMany([

    //  {
    //      description: "TEST1",
    //      completed: false

    //  },
    //  {
    //     description: "TEST2",
    //     completed: true

    //  },
    //  {
    //     description: "TEST3",
    //     completed: false

    //  }



    // ], (error,result) => {
    //     if(error) {
    //         return console.log("Unable to insert")
    //     }
    //     console.log(result.ops)
    // })


})