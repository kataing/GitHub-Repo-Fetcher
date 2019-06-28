const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: 'string',
  repos_url: 'string',
  stargazers_count: 'Number'
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (username) => {
  // TODO: Your code here
  // This function should save a repo or repos to the MongoDB
  let result = new Repo({ name: username });
}

module.exports.save = save;