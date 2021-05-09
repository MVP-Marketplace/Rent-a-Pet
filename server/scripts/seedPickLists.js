const mongoose = require("mongoose");
const db = require("../models");

const animalData = require("./data/animalData");
const characteristicData = require("./data/characteristicData");
const descriptionData = require("./data/descriptionData");
const organizationData = require("./data/organizationData");



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rent-a-pet",
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
)
.then(() => {
    console.log("DB OPEN");
  })
  .catch((err) =>
    console.log(`Could not Connected to db ${process.env.DB_CONNECTION} `, err)
  );

db.Animal.deleteMany({})
  .then(() => db.Animal.collection.insertMany(animalData))
  .then((data) => {
    console.log(data.result.n + " Animal records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// db.Characteristic.deleteMany({})
//   .then(() => db.Characteristic.collection.insertMany(characteristicData))
//   .then((data) => {
//     console.log(data.result.n + " Characteristic records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

//   db.Description.deleteMany({})
//   .then(() => db.Description.collection.insertMany(descriptionData))
//   .then((data) => {
//     console.log(data.result.n + " Description records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

//   db.Organization.deleteMany({})
//   .then(() => db.Organization.collection.insertMany(organizationData))
//   .then((data) => {
//     console.log(data.result.n + " Organization records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });