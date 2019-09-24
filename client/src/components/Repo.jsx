import React from 'react';

const Repo = (props) => (
  <tr className='table-row'>
    <td className='table-column-user'>
      <a href={`https://github.com/${props.repo.username}`}>{props.repo.username}</a>
      </td>
    <td className='table-column-repo'>
      <a href={props.repo.html_url}>{props.repo.name}</a>
    </td>
  </tr>
)

export default Repo;