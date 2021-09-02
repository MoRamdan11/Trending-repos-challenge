import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
  Router,
} from "react-router-dom";
import Test from "./components/test";
function App() {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route path="/" component={Test} exact={true} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
