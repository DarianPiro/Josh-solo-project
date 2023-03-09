const mongoose = require("mongoose");
const URL = 'mongodb://localhost:27017/polyglot'
try {
  mongoose.connect(URL);
  console.log("connection to database was successful");
} catch (error) {
  console.log(error);
}
module.exports = mongoose;
