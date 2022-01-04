import "./Home.css";
import Flex from "@react-css/flex";
import HomeComponent from "./HomeContents/HomeComponent";

export default function Home() {
  return (
    <div>
      <div className="mt-2 banner">
        <Flex column className="mx-auto w-50 banner-text">
          <span className="image-span">Saving Lives</span>
          <span className="image-span-minor">Manufacturing Life's Agents</span>
          <div className="rounded-pill my-5 banner-button w-25 mx-auto">
            <span>See Products</span>
          </div>
        </Flex>
        <img
          src="https://edu.ieee.org/pa-upanama/wp-content/uploads/sites/374/2015/02/minimalistic-simple-background-white-206534-1920x1200.jpg"
          alt="alt"
        />
      </div>
      <div className="after-banner">
        <HomeComponent />
      </div>
    </div>
  );
}
