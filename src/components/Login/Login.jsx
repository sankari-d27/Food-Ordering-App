import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Login = ({ setShowLogin }) => {
  const navigate = useNavigate();

  const [mode, setMode] = useState("Login");

  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [passwordMsg, setPasswordMsg] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });

    if (name === "password") {
      if (value.length > 6) {
        setPasswordMsg(
          "Maximum 6 characters allowed"
        );
      }
      else if (value.length < 6) {
        setPasswordMsg(
          "Password must contain 6 characters"
        );
      }
      else {

        setPasswordMsg("");

      }
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (form.password.length !== 6) {
      setError(
        "Password must be exactly 6 characters"
      );
      return;
    }
    setError("");
    setShowLogin(false);
    navigate("/");
  };

  return (
    <div className="login">
      <form
        className="login-popup-container"
        onSubmit={submit}
      >
        <div className="login-popup-title">
          <h2>
            {mode}
          </h2>
          <img
            src={assets.cross_icon}
            alt="Close"
            onClick={() => setShowLogin(false)}
            className="close-icon"
          />
        </div>

        {error && (<p className="error-msg">{error}</p>)}

        <div className="login-popup-inputs">
          {
            mode === "Sign Up" &&
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
          }

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            maxLength={6}
            onBeforeInput={(e) => {
              if (form.password.length >= 6) {
                setPasswordMsg("Maximum 6 characters allowed");
              } else {
                setPasswordMsg("");
              }
            }}
          />

          {passwordMsg && (<p className="password-msg">{passwordMsg}</p>)}
        </div>

        <button type="submit">
          {
            mode === "Login"
              ? "Login"
              : "Create Account"
          }
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>

        <p>
          {
            mode === "Login"
              ?
              <>
                Create a new account?{" "}
                <span
                  className="Login-text"
                  onClick={() => setMode("Sign Up")}
                >
                  Click here
                </span>
              </>
              :
              <>
                Already have an account?{" "}
                <span
                  className="Login-text"
                  onClick={() => setMode("Login")}
                >
                  Login here
                </span>
              </>
          }
        </p>
      </form>
    </div>
  );
};
export default Login;