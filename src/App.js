import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import RepoDetails from './components/RepoDetails';
import ImageGallery from './components/ImageGallery';
// import Logo from './logo.svg';

function App() {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/repo' component={RepoDetails} />
                    <Route exact path='/imagegallery' component={ImageGallery} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
