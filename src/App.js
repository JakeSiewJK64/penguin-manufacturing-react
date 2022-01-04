import { Route, Switch } from "react-router-dom";
import Footer from "./Shared/Shared-Components/Footer/Footer";

import HeaderMenu from "./Shared/Shared-Components/Header/HeaderMenu";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <HeaderMenu />
      <Switch>
        <Route
          path="/authentication"
          render={() => {
            return <Login />;
          }}
        />
        <Route
          path="/"
          render={() => {
            return <Home />;
          }}
        />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
