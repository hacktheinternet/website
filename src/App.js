import "./css/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "../src/components/Test";
import Home from "./components/Home";
import Name from "./components/Name";
import Level from "./components/Level";
import Login from "./components/Login";
import Resources from "./components/Resources";
import Type from "./components/Type";
import Industries from "./components/Industries";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" exact component={Test} />
          <Route path="/entername" exact component={Name} />
          <Route path="/login" exact component={Login} />
          <Route path="/setlevel/:value" exact component={Level} />
          <Route path="/guides" exact component={Resources} />
          <Route path="/type" exact component={Type} />
          <Route path="/industries" exact component={Industries} />
          <Route path="/dash" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}
