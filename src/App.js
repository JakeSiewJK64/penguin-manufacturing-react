import { Route, Switch } from "react-router-dom";
import Footer from "./Shared/Shared-Components/Footer/Footer";

import HeaderMenu from "./Shared/Shared-Components/Header/HeaderMenu";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

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
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="*"
          render={() => {
            return <PageNotFound />;
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
