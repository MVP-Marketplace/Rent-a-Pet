const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rent-a-pet");

const userSeed = [
  {
    first_name: "John",
    last_name: "Doe",
    email_address: "johnDoe@email.com",
    user_type: "Owner",
    status: "Active",
  },
];

const petSeed = [
  {
    name: "Jane",
    species: "Dog",
    age: 3,
    owner_id: "198",
    classification: "domestic",
    status: "active",
  },
  {
    name: "Fluffy",
    species: "Cat",
    age: 6,
    owner_id: "198",
    classification: "domestic",
    status: "active",
  },
  {
    name: "Jaws",
    species: "Lizard",
    age: 12,
    owner_id: "198",
    classification: "exotic",
    status: "active",
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Pet.remove({})
  .then(() => db.Pet.collection.insertMany(petSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
