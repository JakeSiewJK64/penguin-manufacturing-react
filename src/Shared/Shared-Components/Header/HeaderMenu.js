import { Link, useHistory } from "react-router-dom";
import Flex from "@react-css/flex";

import "./HeaderMenu.css";
import logo from "../../../img/pm_logo.png";
import { toast } from "react-toastify";

import authenticationStore from "../../Store/authenticationStore";
import activeViewStore from "../../Store/activeViewStore";
import { Badge } from "react-bootstrap";

export default function HeaderMenu() {
  const history = useHistory();

  const setLoggedIn = authenticationStore((state) => state.setLoggedIn);
  const setActiveView = activeViewStore((state) => state.setActiveView);

  const isAuthenticated = authenticationStore((state) => state.isLoggedIn);
  const sessionUser = authenticationStore((state) => state.currentUserSession);
  const activeView = activeViewStore((state) => state.activeView);

  const setView = (val) => {
    setActiveView(val);
  };

  const headerRoutes = [
    {
      title: "Home",
      url: "/",
      condition: true,
    },
    {
      title: "About",
      url: "/about",
      condition: true,
    },
  ];

  const goToAuth = () => {
    history.push("/authentication");
  };

  return (
    <div>
      <div className="p-2 shadow">
        <Flex row>
          <Link
            to="/"
            onClick={() => {
              setActiveView("Home");
            }}
          >
            <div style={{ cursor: "pointer" }} className="w-25">
              <Flex row className="home-item">
                <img src={logo} className="m-1" alt="" draggable="false" />
                <span className="my-auto ms-2">Delta Pharmaceuticals</span>
              </Flex>
            </div>
          </Link>
          <Flex
            row
            gap={10}
            justifyEnd
            className="ms-auto my-auto header-button-div"
          >
            <sup>
              <Badge pill bg="primary text-center py-auto mt-auto mb-auto">
                {sessionUser !== null ? sessionUser.userrole : ""}
              </Badge>
            </sup>
            <strong>
              {sessionUser !== null
                ? "Welcome back, " + sessionUser.username
                : ""}
            </strong>
            {headerRoutes.map((x) => {
              return (
                <Flex
                  row
                  key={x.title}
                  gap={10}
                  className={
                    activeView === x.title ? "header-button-active" : ""
                  }
                  onClick={() => setView(x.title)}
                >
                  {x.condition ? (
                    <Link to={x.url}>
                      <p>{x.title}</p>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                </Flex>
              );
            })}
            {!isAuthenticated ? (
              <Link to="/authentication">
                <p>Login</p>
              </Link>
            ) : (
              <Link to="/authentication">
                <p
                  onClick={() => {
                    localStorage.removeItem("token");
                    goToAuth();
                    setLoggedIn(false);
                    toast.success("You are logged out!");
                  }}
                >
                  Logout
                </p>
              </Link>
            )}
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
