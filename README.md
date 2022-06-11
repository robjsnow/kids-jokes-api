# Kids Jokes API

1. Type node server.js in the terminal to start the server.
2. Go to localhost:3000/rjoke to test it out.
### Live server: https://kids-jokes-api.herokuapp.com/

Get Requests:

/rjoke will get a random joke from the database in JSON format.<br>
/rjoke/id will get a joke with the same id as the one provided.<br>

Example:  /rjoke/5
```
{
"_id":5,
"type":"Q&A",
"question":"What did the elf learn in school?",
"answer":"The elf-abet!",
"__v":0
}
```
