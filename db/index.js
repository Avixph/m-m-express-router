const mongoose = require("mongoose");

require("dotenv").config();

let MONGODB_URI =
  process.env.PROD_MONGODB ||
  process.env.MONGODB_URI ||
  `mongodb+srv://Avixph:${process.env.DB_Cluster_Password}@cluster0.6vj5i.mongodb.net/plantsDatabase?retryWrites=true&w=majority&ssl=true`;

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Sucessfull Connection to MongoDB!!");
  })
  .catch((e) => {
    console.error("Connection Error!", e.message);
  });

mongoose.set("debug", true);
const db = mongoose.connection;

module.exports = db;
