import { Link, useHistory } from "react-router-dom";
import Flex from "@react-css/flex";

import "./HeaderMenu.css";
import logo from "../../../img/pm_logo.png";
import authenticationStore from "../../Store/authenticationStore";
import { toast } from "react-toastify";

export default function HeaderMenu() {
  const history = useHistory();
  const isAuthenticated = authenticationStore((state) => state.isLoggedIn);
  const setLoggedIn = authenticationStore((state) => state.setLoggedIn);
  const headerRoutes = [
    {
      title: "Home",
      url: "/",
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
          <Link to="/">
            <div style={{ cursor: "pointer" }} className="w-25">
              <Flex row className="home-item">
                <img src={logo} className="m-1" alt="" draggable="false" />
                <span className="my-auto ms-2">Delta Pharmaceuticals</span>
              </Flex>
            </div>
          </Link>
          <Flex row gap={5} justifyEnd className="ms-auto my-auto">
            {headerRoutes.map((x) => {
              return (
                <Flex row key={x.title} className="header-button-div" gap={10}>
                  {x.condition ? (
                    <Link to={x.url}>
                      <p>{x.title}</p>
                    </Link>
                  ) : (
                    <div></div>
                  )}
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
              );
            })}
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
