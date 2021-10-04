import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import MyBar from "./components/MyBar";
import Favorites from "./components/Favorites";
import DarkMode from "./components/DarkMode";

function App() {
  const [theme, toggleTheme] = DarkMode();

  return (
    <Router>
      <div className="App">
        <Navbar theme={theme} toggleTheme={toggleTheme}/>

        <Switch>
          <Route exact path="/">
            <Home theme={theme} toggleTheme={toggleTheme}/>
          </Route>
          <Route path="/search">
            <Search theme={theme} toggleTheme={toggleTheme}/>
          </Route>
          <Route path="/mybar">
            <MyBar theme={theme} toggleTheme={toggleTheme}/>
          </Route>
          <Route path="/favorites">
            <Favorites theme={theme} toggleTheme={toggleTheme}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
