import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const RepoDetails = () => {
  const [repo, setRepo] = useState(null)
  const [contributors, setContributors] = useState([])
  const [commits, setCommits] = useState([])

  const location = useLocation()

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const repo = query.get('fullname')

    fetch('https://api.github.com/repos/' + repo)
      .then((res) => res.json())
      .then((res) => setRepo(res))

    fetch('https://api.github.com/repos/' + repo + '/contributors')
      .then((res) => res.json())
      .then((res) => setContributors(res))

    fetch('https://api.github.com/repos/' + repo + '/commits')
      .then((res) => res.json())
      .then((res) => setCommits(res))
  }, [location])

  return (
    <div>
      <div aria-label='header'>
        <p aria-label='repo name'>{repo && repo.name}</p>
        <p aria-label='repo description'>{repo && repo.description}</p>
      </div>

      <p>List of contributors</p>
      {contributors.length > 0 &&
        contributors.map((contributor) => (
          <div aria-label='contributor-details'>
            <img src={contributor.avatar_url} alt='avatar url' />
            <p aria-label='contributor'>{contributor.login}</p>
            <a href={contributor.url} target='_blank' rel='noreferrer'>
              View user
            </a>
          </div>
        ))}

      <p>List of commits</p>
      {commits.length > 0 &&
        commits.map((commit) => (
          <div aria-label='commit-details'>
            <p aria-label='commit author'>{commit.commit.author.name}</p>
            <p aria-label='commit mesage'>{commit.commit.message}</p>
            <a href={commit.commit.url} target='_blank' rel='noreferrer'>
              View commit
            </a>
          </div>
        ))}
    </div>
  )
}

export default RepoDetails
