import { Link } from "react-router-dom";
import Flex from "@react-css/flex";
import "./HeaderMenu.css";
import logo from "../../../img/pm_logo.png";

export default function HeaderMenu() {
  const headerRoutes = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Login",
      url: "/authentication",
    },
  ];

  return (
    <div>
      <div className="p-2 shadow">
        <Flex row>
          <Link to="/">
            <div style={{ cursor: "pointer" }} className="w-25">
              <Flex row className="home-item">
                <img src={logo} className="m-1" alt="alt" draggable="false" />
                <span className="my-auto ms-2">Delta Pharmaceuticals</span>
              </Flex>
            </div>
          </Link>
          <Flex row gap={5} justifyEnd className="ms-auto my-auto">
            {headerRoutes.map((x) => {
              return (
                <div key={x.title} className="header-button-div">
                  <Link to={x.url}>
                    <p>{x.title}</p>
                  </Link>
                </div>
              );
            })}
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
