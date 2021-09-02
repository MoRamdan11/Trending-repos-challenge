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
import Navbar from "./components/Navbar/index";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Navbar} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
