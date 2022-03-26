import {Switch, Route} from 'react-router-dom'
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import MainNavigation from './components/MainNavigation'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <MainNavigation />
        <Switch>
            <Route path='/' exact>
                <AllMeetups />
            </Route>
            <Route path='/new-meetup'>
                <NewMeetup />
            </Route>
            <Route path='/favorites'>
                <Favorites />
            </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
 