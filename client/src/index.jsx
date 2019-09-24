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
      .then(() => {
        console.log('Your data has been posted');
        this.get(term);
      })
      .catch((err) => {
        console.log('this is POST err', err);
      })
  }

  get(term) {
    axios
      .get(`/repos/${term}`)
      .then(({ data }) => {
        this.setState({
          repos: data
        })
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
    return (
      <section>
        <h1>GitHub Fetcher</h1>
        <div className='app-container' >
          <Search onSearch={this.search.bind(this)} />
          <RepoList repos={this.state.repos} />
        </div>
      </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));