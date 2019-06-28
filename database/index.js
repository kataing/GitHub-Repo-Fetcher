const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: 'String',
  repos: 'Array'
  // stargazers_count: 'Number'
});

let Repo = mongoose.model('Repo', repoSchema);

let save = ({ username, repos }) => {
  // TODO: Your code here
  // This function should save a repo or repos to the MongoDB
  console.log('username: ', username, 'repos: ', repos);
  let result = new Repo({ username, repos });
  result.save((err) => {
    if (err) return console.error(err);
  });
};

module.exports.save = save;
module.exports.Repo = Repo;