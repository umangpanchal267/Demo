import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NotFound from "./components/pages/notFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Dashboard from "./components/pages/dashboard";
import Update from "./components/pages/update";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/update" component={Update} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
