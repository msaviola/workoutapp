const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Workout = require("./Develop/models.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("Develop/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", { useNewUrlParser: true });

app.post("/submit", ({ body }, res) => {
  User.create(body)
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});




// const express = require("express");
// const mongojs = require("mongojs");
// const mongoose = require("mongoose");

// const app = express();

// const databaseUrl = "Workout";
// const collections = ["workouts"];

// const db = mongojs(databaseUrl, collections);

// const PORT = process.env.PORT || 3000;

// // const Exercise = require("models.js");

// app.use(express.static("public"));

// // mongoose.connect(process.env.MONGODB_URI || "Workout", { useNewUrlParser: true });
// // mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});


// // mongoose.connect(
// //   process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
// //   {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //     useCreateIndex: true,
// //     useFindAndModify: false
// //   }
// // );


// db.on("error", error => {
//   console.log("Database Error:", error);
// });

// // app.get("/", (req, res) => {

 

// //   res.sendFile(path.join(__dirname + "./public/index.html"));
// // });

// app.get("/", (req, res) => {
//   db.workouts.find({}, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(data);
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log("App running on port 3000!");
// });
