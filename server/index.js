const express = require('express');

const parse = require('body-parser');
const github = require('../helpers/github.js');
const db = require('../database/index.js');

let app = express();

app.use(parse.json());
app.use(parse.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  const { username } = req.body;
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  github.getReposByUsername(username, (err, { body }) => {
    const repos = JSON.parse(body);
    db.save({ username, repos });
    res.status(201).send('the client post reached the server!');
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.Repo
    .find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('Not able to get your data');
    })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

