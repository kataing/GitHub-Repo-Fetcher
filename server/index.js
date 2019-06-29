const express = require('express');

const parse = require('body-parser');
const github = require('../helpers/github.js');
const db = require('../database/index.js');

let app = express();

app.use(parse.json());
app.use(parse.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

hasDuplicate = (username, cb) => {
  db.Repo.find({ username })
    .then((data) => cb(data))
    .catch((err) => console.error(err))
}

app.post('/repos', function (req, res) {
  let { username } = req.body;
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  github.getReposByUsername(username, (err, { body }) => {
    const repos = JSON.parse(body);
    for (let i = 0; i < repos.length; i++) {
      let repo = repos[i];
      let stargazers_count = repo.stargazers_count;
      let html_url = repo.html_url;
      let name = repo.name;
      // hasDuplicate(username, (check) => {
        // if (check.username !== username) {
          db.save(username, html_url, name, stargazers_count);
        // }
      // });
    }
  })
  res.status(201).send('Searched handle has been stored');
});

app.get('/repos/:username', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  let options = {};
  if (req.params.username) {
    options = {
      username: req.params.username
    }
  }

  db.Repo
    .find(options)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send('Not able to retreive records');
    })
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

