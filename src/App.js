import HeaderMenu from "./Shared/Shared-Components/Header/HeaderMenu";
import Home from "./Components/Home/Home";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route>
        <HeaderMenu />
      </Route>
    </Switch>
  );
}

export default App;
