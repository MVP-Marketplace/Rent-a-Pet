const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./server/routes/api/index");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");

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
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Define middleware here
// app.use(express.urlencoded({ extended: true }));

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  cors({
    origin: "http://localhost:3000", // ASSUMING FOR DEV we're running front end locally.
    credentials: true,
  })
);
// app.use(express.json());

/**
 * replaced above since we don't want to use JSON parser on
 * webhook
 */
app.use((req, res, next) => {
  if (req.originalUrl === "/webhook") {
    next();
  } else {
    express.json()(req, res, next);
  }
});

/**
 * Added for Stripe server-side support
 */

app.use(
  session({
    secret: process.env.SECRET_STRING,
    resave: false,
    saveUninitialized: true,
  })
);
/** QUESTION:  How do we tell express to use JSON parser on non-webhook routes? */

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
    tempFileDir: "/tmp/images",
  })
);

// app.get("/api/images", async (req, res) => {
//   const { resources } = await cloudinary.search
//     .expression("folder:samples")
//     .sort_by("public_id", "desc")
//     .max_results(30)
//     .execute();

//   let demoIds = [];

//   resources.forEach((file) =>
//     demoIds.push({ id: file.public_id, media: file.resource_type })
//   );

//   res.send(demoIds);
// });

// app.post("/api/upload", async (req, res) => {
//   try {
//     const fileStr = req.body.data;
//     const uploadResponse = await cloudinary.uploader.upload(fileStr, {
//       upload_preset: "ml_default",
//     });
//     console.log(uploadResponse);
//     res.json({ msg: "yaya" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ err: "Something went wrong" });
//   }
// });

// Start the API
app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
