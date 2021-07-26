import { Redirect, Route, Switch } from 'react-router-dom'
import ImdbMovies from './components/ImdbMovies';
import MacMovies from './components/MacMovies';
import NavbarUI from './components/NavbarUI';
import NotFound from './components/common/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarUI />
      <Switch>
        <div className="container">
          <Route path="/404" component={NotFound} />
          <Route path="/mac-movies" component={MacMovies} />
          <Route path="/imdb-movies" component={ImdbMovies} />
          <Route path="/" exact component={ImdbMovies} />
          <Redirect from="/" to="/imdb-movies" />
        </div>
      </Switch>
    </div>
  );
}

export default App;
