import './App.css';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import MyBar from './components/MyBar';
import Favorites from'./components/Favorites';



function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/mybar">
            <MyBar />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
