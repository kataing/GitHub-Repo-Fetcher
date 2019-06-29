import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h3> Searched Repos </h3>
    <h4> There are {props.repos.length} repos. </h4>
    <table>
      <tbody>
        {props.repos.map((repo, key) => {
          return(
            <Repo key={key} repo={repo}/>
          )
        })
      }
      </tbody>
    </table>
  </div>
)

export default RepoList;