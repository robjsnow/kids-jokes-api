const express = require("express");
const app = express();
const numberOfJokes = 401;
const mongoose = require("mongoose");
const Joke = require("./models/Joke");
const userName = "joker";
const password = "B7w8tHEMNKL985BW";
const cors = require("cors");
app.use(cors());

app.use(express.static("front-end"));

//Database uri
const dbURI = `mongodb+srv://${userName}:${password}@cluster0.a8umj.mongodb.net/JokesDB?retryWrites=true&w=majority`;
//Server port
const port = process.env.PORT || 3000;


async function getRndInteger(min, max) {
  try {
    let id = (await Math.floor(Math.random() * (max - min + 1))) + min;
    return id;
  } catch (error) {
    Promise.reject(error);
  }
}

async function getRandomJoke() {
  const rndId = await getRndInteger(1, numberOfJokes);
  const joke = await Joke.findById(rndId);

  return joke;
}

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Database connected.");
    app.listen(port);
    console.log(`Server listening on port ${port}.....`);
  })
  .catch((err) => console.log(err));



app.get("/", function (req, res) {
  getRandomJoke().then((data) => {
  res.sendFile( __dirname + "/front-end/index.html");
  });
});

//get a random joke
app.get("/rjoke", function (req, res) {
  getRandomJoke().then((data) => {
    res.json(data);
  });
});

//get joke by ID
app.get("/rjoke/:id", async function (req, res) {
  jokeId = req.params.id;
  const joke = await Joke.findById(jokeId);
  res.json(joke);
});
