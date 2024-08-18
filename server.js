const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://akmalkhasanov1989:Yusufbek011216@joseph0.aio4fkj.mongodb.net/";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true, //option
    useUnifiedTopology: true, //option
  },
  (err, client) => {
    if (err) {
      console.log("ERROR connecting to MongoDB: " + err);
    } else {
      console.log("MongoDB connection is successful!");
      module.exports = client;
      // Make the database accessible throughout the app
      const app = require("./app");
      const server = http.createServer(app);
      //server.listen(process.env.PORT || 3000);
      let PORT = process.env.PORT || 3000;
      server.listen(PORT, function () {
        console.log(
          `The  application is running on port ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(`Server is running on port ${PORT}, http://localhost:${PORT}`);
