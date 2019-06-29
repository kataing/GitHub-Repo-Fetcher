const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: 'String',
  html_url: 'String',
  name: 'String',
  stargazers_count: 'Number'
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (username, html_url, name, stargazers_count) => {
  // TODO: Your code here
  // This function should save a repo or repos to the MongoDB
  let result = new Repo({ username, html_url, name, stargazers_count });
  result.save((err) => {
    if (err) return console.error(err);
  });
};

module.exports.save = save;
module.exports.Repo = Repo;