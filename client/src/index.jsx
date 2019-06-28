import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  search(term) {
    // TODO
    console.log(`${term} was searched`);
    this.post(term);
  }

  post(term) {
    axios
      .post('/repos', { username: term })
      .then(({ data }) => {
        console.log('this is data', data);
      })
      .catch((err) => {
        console.log('this is err', err);
      })
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));