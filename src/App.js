import HeaderMenu from "./Shared/Shared-Components/Header/HeaderMenu";
import { Route, Switch } from "react-router-dom";
import Footer from "./Shared/Shared-Components/Footer/Footer";

function App() {
  return (
    <Switch>
      <Route>
        <HeaderMenu />
        <footer>
          <Footer />
        </footer>
      </Route>
    </Switch>
  );
}

export default App;
