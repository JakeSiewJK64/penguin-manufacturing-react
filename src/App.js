import { Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

import Footer from "./Shared/Shared-Components/Footer/Footer";
import HeaderMenu from "./Shared/Shared-Components/Header/HeaderMenu";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import authenticationStore from "./Shared/Store/authenticationStore";
import About from "./Components/About/About";
import Disclaimer from "./Components/DisclaimerDialog/Disclaimer";

toast.configure();

function App() {
  const isValidated = authenticationStore((state) => state.isLoggedIn);
  const setSessionUser = authenticationStore((state) => state.setCurrentUser);

  if (localStorage.getItem("token")) {
    axios
      .post(
        process.env.REACT_APP_ENDPOINT + "/verify",
        {
          jwt: localStorage.getItem("token"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((x) => {
        setSessionUser(x.data);
      });
  }

  return (
    <div>
      <ToastContainer />
      <HeaderMenu />
      <Disclaimer />
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
