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
        <switch>
          <Route path="./test" component={Test} />
        </switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
