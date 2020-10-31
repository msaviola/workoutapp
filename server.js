const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = "Workout";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

const PORT = process.env.PORT || 3000;

// const Exercise = require("models.js");

app.use(express.static("public"));

 mongoose.connect(process.env.MONGODB_URI || "Workout", { useNewUrlParser: true });
// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }
// );


db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {

  res.send("Hello world");

  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.get("/all", (req, res) => {
  db.Workout.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
