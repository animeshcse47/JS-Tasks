const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://raghuveermustimalla_db_user:162026@cluster0.n2i25s2.mongodb.net/test?retryWrites=true&w=majority"
    );

    console.log("DB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
