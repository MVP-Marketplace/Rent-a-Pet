const express = require("express");
const session = require("express-session");

const mongoose = require("mongoose");
const routes = require('./server/routes/api/index');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;

const app = express();
const PORT = process.env.PORT || 3001;

require("dotenv").config();

/**
 * cloudinary configuration 
 * for media uploads
 */

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/api", routes);

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/rent-a-pet", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB OPEN");
  })
  .catch((err) =>
    console.log(`Could not Connected to db ${process.env.DB_CONNECTION} `, err)
  );

//File uploadedr 
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images'
  })
);

// Start the API
app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
