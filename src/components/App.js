import { Switch, Route } from "react-router-dom";
import { Header } from "./atoms";
import { Home, Movies } from "./pages";

function App() {
  
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/movies" render={({location}) => <Movies searchResults={location.state} />}/>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
