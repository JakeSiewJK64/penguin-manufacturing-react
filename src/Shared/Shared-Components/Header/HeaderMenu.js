import { Link } from "react-router-dom";
import Flex from "@react-css/flex";
import "./HeaderMenu.css";
import { useState } from "react";
import logo from "../../../img/pm_logo.png";
import Home from "../../../Components/Home/Home";

export default function HeaderMenu() {
  const [fragmentView, setfragmentView] = useState(null);
  const headerRoutes = [
    {
      title: "Home",
      url: "/main",
      component: <Home />,
    },
    {
      title: "Weapon Catalog",
      url: "/hub",
      component: null,
    },
    {
      title: "item A",
      url: "/hub",
      component: null,
    },
    {
      title: "item B",
      url: "/hub",
      component: null,
    },
    {
      title: "item C",
      url: "/hub",
      component: null,
    },
  ];

  return (
    <div>
      <div className="p-2 shadow">
        <Flex row>
          <Link to="/">
            <div style={{ cursor: "pointer" }} className="w-25">
              <Flex row className="home-item">
                <img src={logo} className="m-1" />
                <span className="my-auto ms-2">Delta Pharmaceuticals</span>
              </Flex>
            </div>
          </Link>
          <Flex row gap={5} justifyEnd className="ms-auto my-auto">
            {headerRoutes.map((x) => {
              return (
                <div key={x.title} className="header-button-div">
                  <Link to="/" onClick={() => setfragmentView(x.component)}>
                    <p>{x.title}</p>
                  </Link>
                </div>
              );
            })}
          </Flex>
        </Flex>
      </div>
      <div>{fragmentView}</div>
    </div>
  );
}
