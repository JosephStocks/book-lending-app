const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "testdb";

MongoClient.connect(url, (err, client) => {
  if (err) {
    throw err;
    return;
  }

  console.log("Database connection successful");

  // This objects holds the refrence to the db
  const db = client.db(dbName);

  const collection = db.collection("userdb");

  // Insert one document
  collection.insertOne(
    {
      firstName: "john",
      lastName: "doe",
      age: 21,
      hobbies: ["Reading books", "Collecting stamps"],
    },
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(result.result);
    }
  );

  client.close();
});
