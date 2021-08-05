import "./App.css";
import Home from "./client/Home";
import DaoContent from "./client/DaoContent";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/DAOggregate-React-Front-End-Skills-Test">
          <Home />
        </Route>
        <Route path="/DAOggregate-React-Front-End-Skills-Test/dao">
          <Home header />
          <DaoContent />
        </Route>
        <Route path="*">
          <Redirect to="/DAOggregate-React-Front-End-Skills-Test" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
