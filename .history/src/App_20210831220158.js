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
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Hero} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
