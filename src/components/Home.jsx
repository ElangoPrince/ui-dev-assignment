import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';
import RepoList from './RepoList';

const Home = () => {
    const [repos, setRepos] = useState([])
    const [isViewSearch, setIsViewSearch] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const getRepos = async () => {
        setIsViewSearch(false)
        setIsLoading(true)
        try {
            const response = await fetch('https://api.github.com/repositories').then((res) => res.json())
            setRepos(response)
            if(response){
                setIsLoading(false)
            }
        } catch (error) {
            console.error(error);
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
            <header className="fixed">
                <nav>
                    <a className="logo pointer" href="#!">
                           {/* <img src={Logo} alt='logo' className=""/> */}
                            <i className="fa fa-soundcloud _logo" aria-hidden="true"></i>
                        <span> Console Cloud </span>
                    </a>
                    <div className="rightHeader">
                        <ul>
                            <li><a className="pointer" href="#!" onClick={onClickSearch} >Search Repositories</a></li>
                            <li><a onClick={getRepos} href="#!" className="pointer">View Repositories</a></li>
                            <li><Link to='/imagegallery'>Image Gallery</Link></li>
                            <li><Link to='/'>Home</Link></li>
                            {isViewSearch && ( <li>
                                <form action="" className="pointer">
                                    <input value={searchValue} onChange={onChangeSearchValue} type="search" placeholder='Enter the repo name for search' />
                                    <i className="fa fa-search"></i>
                                </form>
                            </li> )}
                        </ul>
                    </div>
                </nav>
                <div className="clearfix"></div>
            </header>
            <div className="container">
                { isLoading && (<div className="relativeView"><i className="fa fa-spinner fa-spin loadingSpinner"></i></div> )}
                <RepoList repoList={repos} />
            </div>
        </div>
    )
}

export default Home
