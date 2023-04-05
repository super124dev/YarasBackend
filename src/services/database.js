const mongoose = require('mongoose');

const connect = (dbUrl) => {
  mongoose.connect(dbUrl, {
      serverSelectionTimeoutMS: 5000,
      dbName: "yaras"
  });
  mongoose.connection.on("connected", () => {
      console.log(`Database was connected successfully! ===>: ${dbUrl}`);
  });
}

module.exports = {
  connect,
};