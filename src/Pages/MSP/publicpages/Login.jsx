import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit button pressed ");
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/dashboard");
  };

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

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
      <div
        className={`logincontroller ${isSignUp ? "active" : ""}`}
        id="logincontroller"
      >
        <div className="form-logincontroller sign-up">
          <form onSubmit={handleSubmit}>
            <img
              src="/ashunyalogo.png"
              style={{ width: "6rem" }}
              className="mb-3"
              alt="ashunya logo"
            />
            <h1 className="h4 h-md-3 h-lg-2 font-weight-bold">
              Ashunya Helpdesk
            </h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className={animateButton ? "animate-button" : ""}
              onClick={handleButtonClick}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="form-logincontroller sign-in">
          <form onSubmit={handleSubmit}>
            <img
              src="/ashunyalogo.png"
              style={{ width: "6rem" }}
              className="mb-3"
              alt="ashunya logo"
            />
            <h1 className="h4 h-md-3 h-lg-2 font-weight-bolder">
              Sign In To Helpdesk Portal
            </h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
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
              <h1 className="h4 h-md-3 h-lg-2 font-weight-bold">
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
              <h1 className="h4 h-md-3 h-lg-2 font-weight-bold">
                Password Less Login
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
