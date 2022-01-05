import { Route, Switch } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./Shared/Shared-Components/Footer/Footer";
import HeaderMenu from "./Shared/Shared-Components/Header/HeaderMenu";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

toast.configure();

function App() {
  return (
    <div>
      <ToastContainer />
      <HeaderMenu />
      <Switch>
        <Route
          exact
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
