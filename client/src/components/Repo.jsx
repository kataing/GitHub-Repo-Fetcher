import React from 'react';

const Repo = (props) => (
  <tr>
    <td>User: {props.repo.username} </td>
    <td>
      <a href={props.repo.html_url}>{props.repo.name}</a>
    </td>
  </tr>
)

export default Repo;