
import WeatherMode from './components/WeatherMode'
import Header from './components/Header'
import Home from './components/Home'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import TeamSection from './components/TeamSection';

//const apiKey = '25cd6c1f94edbabc663aec7fd32b3bf0'




function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            {/* landing page */}
            <Header currentPage='home' />
            <Home />
          </Route>
          <Route path='/App'>
            {/* actual app */}
            <Header currentPage='app' />
            <WeatherMode />
          </Route>
          <Route path='/About us'>
            {/* staff memeber page */}
            <Header currentPage='About us' />
            <TeamSection/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
