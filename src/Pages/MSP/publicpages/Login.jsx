import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../../store/actions";
import { fetchAssetsRequest } from "../../../store/actions";
import { ClimbingBoxLoader } from "react-spinners";
import { useFormik } from "formik";
import * as Yup from "yup";
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.customerreducer || {}
  );

    const validationSchema = Yup.object({
      username: Yup.string()
        .required("Email Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password Required"),
    });

    const formik = useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema,
      onSubmit: (values) => {
        dispatch(loginRequest(values));
      },
    });
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

 
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
      dispatch(fetchAssetsRequest());
    }
  }, [isAuthenticated, navigate]);
  const handleButtonClick = () => {
    setAnimateButton(true);
    setTimeout(() => {
      setAnimateButton(false);
    }, 600);
  };

  useEffect(() => {
    // Save the existing viewport meta tag
    const existingViewportMeta = document.querySelector("meta[name=viewport]");
    let originalViewportContent;
    if (existingViewportMeta) {
      originalViewportContent = existingViewportMeta.content;
    }

    // Create a new meta tag or update the existing one
    const viewportMeta = existingViewportMeta || document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=1000";
    if (!existingViewportMeta) {
      document.head.appendChild(viewportMeta);
    } else {
      existingViewportMeta.content = "width=1000";
    }

    document.body.style.backgroundImage =
      "linear-gradient(to right top, #ffffff, #ebeff7, #cfe1ef, #b0d4e1, #91c8cc, #7bbabd, #63adaf, #4b9fa0, #2c8d9c, #117a97, #0d668e, #1f5281)";
    document.body.style.display = "flex";
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.style.margin = "auto";
    }

    // Clean up: restore the original viewport meta tag and reset body styles
    return () => {
      if (originalViewportContent) {
        viewportMeta.content = originalViewportContent;
      } else {
        document.head.removeChild(viewportMeta);
      }
      document.body.style.backgroundImage = null;
      document.body.style.display = "block";
      if (rootElement) {
        rootElement.style.margin = "";
      }
    };
  }, []);
if(loading){
  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
        <ClimbingBoxLoader color="#1ea0a0" size={30} speedMultiplier={1} />
      </div>
    </>
  );
}
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
      <div
        className={`logincontroller ${isSignUp ? "active" : ""}`}
        id="logincontroller"
      >
        <div className="form-logincontroller sign-up">
          <form onSubmit={formik.handleSubmit}>
            <img
              src="/ashunyalogo.png"
              style={{ width: "6rem" }}
              className="mb-3"
              loading="lazy"
              alt="ashunya logo"
            />
            <h1 className="h4 h-md-3 h-lg-2 font-weight-bold">
              Ashunya Helpdesk
            </h1>
            <input
              type="text"
              name="username"
              placeholder="Email"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
            <button
              type="submit"
              className={animateButton ? "animate-button" : ""}
              onClick={handleButtonClick}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="form-logincontroller sign-in">
          <form onSubmit={formik.handleSubmit}>
            <img
              src="/ashunyalogo.png"
              style={{ width: "6rem" }}
              className="mb-3"
              alt="ashunya logo"
              loading="lazy"
            />
            <h1 className="h4 h-md-3 h-lg-2 font-weight-bolder">
              Sign In To Helpdesk Portal
            </h1>
            <input
              type="text"
              name="username"
              placeholder="Email"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            <button
              type="submit"
              className={animateButton ? "animate-button" : ""}
              onClick={handleButtonClick}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="toggle-logincontroller">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1
                className="h4 h-md-3 h-lg-2 font-weight-bold"
                style={{ color: "#344844" }}
              >
                Password Login!
              </h1>
              <p className="text-base md:text-lg lg:text-xl">
                Login with your personal details to use all of site features
              </p>
              <button className="hiddens" id="login" onClick={toggleForm}>
                Password Login
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1
                className="h4 h-md-3 h-lg-2 font-weight-bold"
                style={{ color: "#bcc1c0" }}
              >
                Password Less Login!
              </h1>
              <p className="text-base md:text-lg lg:text-xl">
                Login without a password using a link sent to your email.
              </p>
              <button className="hiddens" id="register" onClick={toggleForm}>
                Password Less Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
