const express = require('express');
const app = express();
const numberOfJokes = 147;
const mongoose = require("mongoose");
const Joke = require("./joke");
const userName = "joker";
const password = "B7w8tHEMNKL985BW";

//Database uri
const dbURI = `mongodb+srv://${userName}:${password}@cluster0.a8umj.mongodb.net/JokesDB?retryWrites=true&w=majority`;
//Server port
const port = 3000;

async function getRndInteger(min, max) {
    try {
    let id = await Math.floor(Math.random() * (max - min + 1) ) + min;
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


app.get('/rjoke', function (req, res) {
    
    getRandomJoke().then(
        (data) => {
        res.json(data);
        res.end;
    });
    
 });

