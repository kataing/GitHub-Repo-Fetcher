const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: 'string',
  login: 'string',
  full_name: 'string',
  repos_url: 'string',
  stargazers_count: 'Number'
});

let Repo = mongoose.model('Repo', repoSchema);

let save = ((err, model) =) => {
  // TODO: Your code here
  // This function should save a repo or repos to the MongoDB

  // console.log('in the save function');
  // cb(null);
}

// small.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });

// // I added this in
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

module.exports.save = save;