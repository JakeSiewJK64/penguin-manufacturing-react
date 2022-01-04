import "./Login.css";
import Flex from "@react-css/flex";
import { useState } from "react";

export default function Login() {
  const [noLogin, setNoLogin] = useState(false);

  return (
    <div className="w-100">
      <Flex row className="ms-auto" gap={5}>
        <img
          className="ms-auto p-3"
          style={{ width: "75vw", height: "auto" }}
          src="https://www.clinicaltrialsarena.com/wp-content/uploads/sites/33/2020/10/Feature-image-top-ten-pharma-companies-in-2020.jpg"
        />
        {!noLogin ? (
          <div className="me-auto">
            <div className="card m-3" style={{ width: "20vw" }}>
              <div className="card-body pt-5">
                <h4 className="card-title mx-auto text-center">Login</h4>
                <form>
                  <Flex column gap={10}>
                    <input
                      type={"text"}
                      placeholder="email"
                      className="form-control"
                    />
                    <input
                      type={"text"}
                      placeholder="password"
                      className="form-control"
                    />
                    <button className="btn btn-success m-1 mx-auto">
                      Login
                    </button>
                    <span
                      className="m-1 mx-auto nav-log-button"
                      onClick={() => setNoLogin(true)}
                    >
                      Don't have an account? Register here.
                    </span>
                  </Flex>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="me-auto">
            <div className="card m-3" style={{ width: "20vw" }}>
              <div className="card-body pt-5">
                <h4 className="card-title mx-auto text-center">Register</h4>
                <form>
                  <Flex column gap={10}>
                    <input
                      type={"text"}
                      placeholder="email"
                      className="form-control"
                    />
                    <input
                      type={"text"}
                      placeholder="password"
                      className="form-control"
                    />
                    <Flex row gap={10}>
                      <input
                        type={"text"}
                        placeholder="first name"
                        className="form-control"
                      />
                      <input
                        type={"text"}
                        placeholder="last name"
                        className="form-control"
                      />
                    </Flex>
                    <button className="btn btn-warning m-1 mx-auto">
                      Register
                    </button>
                    <span
                      className="nav-log-button m-1 mx-auto "
                      onClick={() => setNoLogin(false)}
                    >
                      Already have an account? Login here.
                    </span>
                  </Flex>
                </form>
              </div>
            </div>
          </div>
        )}
      </Flex>
    </div>
  );
}
