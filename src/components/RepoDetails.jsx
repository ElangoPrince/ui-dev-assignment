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
    <div className="container">
      <div className="repHead">
        <h1>Repository Details</h1>
      </div>
      <div className="card">
        <div className="cardBody">
          <div className="cardTitle">
            <h5 aria-label='repo name'>{repo && repo.name}</h5>
          </div>
          <div className="cardBody">
            <p aria-label='repo description'>{repo && repo.description}</p>
          </div>
        </div>
      </div> 
      <div className="bodyWrapper">
        <div className="repHead">
          <h2>List of contributors</h2>
        </div>
        <div className="flex crow">
          {contributors && contributors.length > 0 && contributors.map((contributor, index)=>( 
            <div className="ccol" key={index}>
              <div className="card noneBorder" aria-label='contributor-details'>
                <div className="cardBody">
                  <div className="userLogo">
                    <img src={contributor.avatar_url} />
                  </div>
                  <div className="descriptionContainer">
                    <p aria-label='contributor' className="m-0">{contributor.login}</p>
                    <a href={contributor.html_url} target='_blank' rel='noreferrer' className="navigationLink">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            )
          )}
        </div>
        { contributors.length == 0 && (<div className="relativeView"><i className="fa fa-spinner fa-spin loadingSpinner"></i></div> )}
      </div>
      <div className="bodyWrapper">
        <div className="repHead">
          <h2>List of commits</h2>
        </div>
        {commits && commits.length > 0 && commits.map((commit, index)=>( 
          <div className="card" key={index}>
            <div className="cardBody">
              <div className="cardTitle">
                <h5 aria-label='repo name'>{commit.commit.author.name}</h5>
              </div>
              <div className="cardBody">
                <p aria-label='repo description'>{commit.commit.message}</p>
              </div>
              <div className="cardFooter">
                <a className="anchorButton" href={commit.html_url} target='_blank' rel='noreferrer'>View commit</a>                
              </div>
            </div>
          </div> 
          )
        )}
        { commits.length == 0 && (<div className="relativeView"><i className="fa fa-spinner fa-spin loadingSpinner"></i></div> )}
      </div>
    </div>
  )
}

export default RepoDetails
