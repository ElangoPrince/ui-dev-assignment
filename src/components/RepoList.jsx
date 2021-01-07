import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

const RepoList = ({ repoList }) => {
  const history = useHistory()
  return (
    <Fragment>
      {repoList.length > 0 && <h2 aria-label='label - public repos list'>Public Repos list</h2>}

      {(repoList || []).map((repo) => (
        <div key={repo.id}>
          <p aria-label='repo name'>{repo.name}</p>
          <p aria-label='repo description'>{repo.description}</p>
          <button
            onClick={() => {
              history.push('/repo?' + new URLSearchParams({ fullname: repo.full_name }))
            }}
          >
            View Repo
          </button>
        </div>
      ))}
    </Fragment>
  )
}

export default RepoList
