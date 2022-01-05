import "./Login.css";
import Flex from "@react-css/flex";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import authenticationStore from "../../Shared/Store/authenticationStore";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [noLogin, setNoLogin] = useState(false);
  const setIsLoggedIn = authenticationStore((state) => state.setLoggedIn);
  const history = useHistory();

  const SubmitForm = (val) => {
    axios
      .post(process.env.REACT_APP_ENDPOINT + "/authenticate", val)
      .then((x) => {
        if (x.status === 200) {
          toast.success("Successfully Logged In!");
          setIsLoggedIn(true);
          history.push("/");
          localStorage.setItem("token", x.data.jwt);
        }
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  var formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (val) => {
      SubmitForm(val);
    },
  });

  return (
    <div className="w-100">
      <Flex row className="ms-auto" gap={5}>
        <img
          alt=""
          className="ms-auto p-3"
          style={{ width: "75vw", height: "auto" }}
          src="https://www.clinicaltrialsarena.com/wp-content/uploads/sites/33/2020/10/Feature-image-top-ten-pharma-companies-in-2020.jpg"
        />
        {!noLogin ? (
          <div className="me-auto">
            <div className="card m-3" style={{ width: "20vw" }}>
              <div className="card-body pt-5">
                <h4 className="card-title mx-auto text-center">Login</h4>
                <form onSubmit={formik.handleSubmit}>
                  <Flex column gap={10}>
                    <input
                      name="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      type="text"
                      placeholder="user name"
                      className="form-control"
                    />
                    <input
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      type="password"
                      placeholder="password"
                      className="form-control"
                    />
                    <button
                      type="submit"
                      className="btn btn-success m-1 mx-auto"
                    >
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
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      placeholder="email"
                      className="form-control"
                      name="email"
                    />
                    <input
                      name="password"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
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
                    <button
                      type="submit"
                      className="btn btn-warning m-1 mx-auto"
                    >
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
