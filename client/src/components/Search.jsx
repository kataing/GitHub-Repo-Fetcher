import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <section className='search'>
        <h3>Discover Repos</h3>
        <div>
          Enter a GitHub username:
        </div>
        <input value={this.state.terms} onChange={this.onChange}/>
        <button onClick={this.search}> Add Repos </button>
      </section>
    )
  }
}

export default Search;