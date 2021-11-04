import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

const App = (isHome) => {
  return (
    <Router>
      <>
        <Header />
      </>
      <Switch>
        <Route path="/work" exact>
          <Work/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
