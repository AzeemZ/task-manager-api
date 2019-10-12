const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   { name: "Azeem", age: 24 },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [{ name: "Ahmad", age: 27 }, { name: "Aslam", age: 35 }],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     { description: "Go to grocery store", completed: true },
    //     { description: "Buy machinery", completed: false },
    //     { description: "Go to garage", completed: true }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").findOne(
    //   { _id: ObjectID("5d985faff6c6f643749a3232") },
    //   (error, task) => {
    //     if (error) {
    //       return console.log("Unable to find task");
    //     }

    //     console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: true })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log("Unable to find tasks!");
    //     }

    //     console.log(tasks);
    //   });

    db.collection("tasks")
      .updateMany({ completed: false }, { $set: { completed: true } })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }
);
