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
import Hero from "./components/Hero/hero.js";
import Home from "./pages/home.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
