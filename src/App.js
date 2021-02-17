import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? (
            <Home setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} />
          )}
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
