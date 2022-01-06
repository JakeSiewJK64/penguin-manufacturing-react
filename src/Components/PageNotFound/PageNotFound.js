import notfound from "../../img/404.png";
import Flex from "@react-css/flex";

export default function PageNotFound() {
  return (
    <div className="card my-4">
      <div className="card-body text-center">
        <Flex column gap={10} className="pt-5 pb-5">
          <h2 className="card-title">Oops!</h2>
          <span className="card-text">
            Looks like that page does not exist or is not currently available
            yet!
          </span>
          <img src={notfound} className="w-25 mx-auto" />
        </Flex>
      </div>
    </div>
  );
}
