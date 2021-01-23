import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

const RepoList = ({ repoList }) => {
  console.log('repoList', repoList);
  const history = useHistory()
  return (
    <Fragment>
      {repoList && repoList.length > 0 &&  <div className="repHead">
        <h1>Public Repos list</h1>
      </div> }

      {(repoList || []).map((repo) => (
        <div className="card" key={repo.id}>
          <div className="cardBody">
            <div className="cardTitle">
              <h5 aria-label='repo name'>{repo.name}</h5>
            </div>
            <div className="cardBody">
              <p aria-label='repo description'>{repo.description}</p>
            </div>
            <div className="cardFooter">
              <button className="pointer" onClick={() => {
                history.push('/repo?' + new URLSearchParams({ fullname: repo.full_name })) }}>View Repo &nbsp;
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div> 
      ))}
    </Fragment>
  )
}

export default RepoList
