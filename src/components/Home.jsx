import React, { useState } from 'react'
import Logo from '../logo.svg'
import RepoList from './RepoList'

const Home = () => {
  const [repos, setRepos] = useState([])
  const [isViewSearch, setIsViewSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const getRepos = async () => {
    setIsViewSearch(false)

    try {
      const response = await fetch('https://api.github.com/repositories').then((res) => res.json())

      setRepos(response)
    } catch (error) {
      console.error(error)
    }
  }

  const onClickSearch = () => {
    setIsViewSearch(true)
    setRepos([])
  }

  const onChangeSearchValue = async (event) => {
    const { value } = event.target
    setSearchValue(value)

    fetch('https://api.github.com/search/repositories?' + new URLSearchParams({ q: value }))
      .then((res) => res.json())
      .then((response) => {
        setRepos(response.items)
      })
      .catch((error) => console.error(error))
  }

  return (
    <div>
      <img src={Logo} alt='logo' />
      <p>Github Repositories</p>
      <div>
        <button onClick={getRepos}>View Repos</button>
        <button onClick={onClickSearch}>Search for Repo</button>
      </div>
      {isViewSearch && (
        <input value={searchValue} onChange={onChangeSearchValue} placeholder='Enter the repo name for search' />
      )}
      <RepoList repoList={repos} />
    </div>
  )
}

export default Home
