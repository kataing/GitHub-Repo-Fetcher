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
        console.log('this is gh data', data);
      })
      .catch((err) => {
        console.log('this is POST err', err);
      })
  }

  get() {
    axios
      .get('/repos')
      .then(({ data }) => {
        console.log('this is db data', data);
      })
      .catch((err) => {
        console.log('this is GET err', err);
      })
  }

  componentDidMount() {
    this.get();
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