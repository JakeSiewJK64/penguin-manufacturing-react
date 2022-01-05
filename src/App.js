import { Route, Switch } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./Shared/Shared-Components/Footer/Footer";
import HeaderMenu from "./Shared/Shared-Components/Header/HeaderMenu";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import authenticationStore from "./Shared/Store/authenticationStore";
import About from "./Components/About/About";

toast.configure();

function App() {
  const isValidated = authenticationStore((state) => state.isLoggedIn);
  return (
    <div>
      <ToastContainer />
      <HeaderMenu />
      <Switch>
        <Route
          exact
          path="/authentication"
          render={() => {
            if (isValidated) {
              return <Home />;
            } else {
              return <Login />;
            }
          }}
        />
        <Route
          exact
          path="/about"
          render={() => {
            return <About />;
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
