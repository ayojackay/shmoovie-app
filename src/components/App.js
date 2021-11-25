import { Switch, Route } from "react-router-dom";

function App() {
  
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
