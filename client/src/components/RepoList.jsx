import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <section className='repo-list'>
    <h3> Search Results: </h3>
    <h4> There are {props.repos.length} repos. </h4>
    <table>
      <tbody>
        {props.repos.length > 0 &&
          <tr className='table-row'>
            <td className='table-column-header'>Username</td>
            <td className='table-column-header'>Repo</td>
          </tr>}
        {props.repos.map((repo, key) => {
          return (
            <Repo key={key} repo={repo} />
          )
        })
        }
      </tbody>
    </table>
  </section>
)

export default RepoList;