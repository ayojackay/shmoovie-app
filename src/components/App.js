import { Switch, Route } from "react-router-dom";
import { Header } from "./atoms";
import { Home } from "./pages";

function App() {
  
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
