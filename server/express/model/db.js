const mongoose = require("mongoose");
require('dotenv').config();

const URL = process.env.DB_URL;
try {
  mongoose.connect(URL);
  console.log("connection to database was successful");
} catch (error) {
  console.log(error);
}
module.exports = mongoose;
