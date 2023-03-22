const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const {dbconnect}= require('./utils/dbconnect')
// dbconnect()
// console.log('db connect')

// connectToServer((err) => {
//   if (!err) {
//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//   } else {
//     console.log(err);
//   }
// });

// app.all("*", (req, res) => {
//   res.send("NO route found.");
// });

// app.use(errorHandler);

// process.on("unhandledRejection", (error) => {
//   console.log(error.name, error.message);
//   app.close(() => {
//     process.exit(1);
//   });
// });


app.get("/", (req, res) => {
    res.send("resale product is running");
  });
  
  app.listen(port, () => {
    console.log(`port is running ${port}`);
  });