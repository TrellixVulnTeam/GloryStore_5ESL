import React ,{Component}from 'react';
import Glory from "./Glorygalerie.jsx";
import Add from "./Add.jsx";
import "../index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
  return (
    <Router>
      <div>
        <header>
        <nav>
          <ul>
            <li>
              <Link to="/add">Create Your Card oF Glory</Link>
            </li>
            <li>
              <Link to="/glory">Explore Our Gamers Glory</Link>
            </li>
          </ul>
        </nav>
        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/glory">
            <Glory />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}
