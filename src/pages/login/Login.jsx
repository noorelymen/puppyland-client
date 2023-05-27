import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import request from "../../utils/request";
import upload from "../../utils/upload";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await request.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
      toast.success("Successfully logged in!"); // Display success toast message
    } catch (err) {
      setError(err.response.data);
      toast.error(err.response.data.message);
    }
  };

  //REGISTER

  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    img: "",
    city: "",
    isOwner: false,
    desc: "",
    rescuedPuppies: 0,
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleOwner = (e) => {
    setUser((prev) => {
      return { ...prev, isOwner: e.target.checked };
    });
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await request.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/");
      toast.success("Successfully regitered."); // Display success toast message
    } catch (err) {
      setError(err.response.data);
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="auth">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/">PUPPYLAND</Link> &gt;{" "}
          <Link to="/add-puppy">LOGIN & REGISTER</Link>
        </span>
        <div className="sections">
          <div className="column left">
            <div className="title">
              <h1>Login</h1>
            </div>
            <hr />
            <form action="" onSubmit={handleSubmitLogin}>
              <label htmlFor="">Username</label>
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="column right register">
            <div className="title">
              <h1>Register</h1>
            </div>
            <hr />
            <form action="" onSubmit={handleSubmitRegister}>
              <div className="two-fields">
                <div className="left-field">
                  <label htmlFor="">Username</label>
                  <input
                    name="username"
                    type="text"
                    placeholder="johndoe"
                    onChange={handleChange}
                  />
                </div>
                <div className="right-field">
                  <label htmlFor="">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="two-fields">
                <div className="left-field">
                  <label htmlFor="">First name</label>
                  <input
                    name="firstname"
                    type="text"
                    placeholder="John"
                    onChange={handleChange}
                  />
                </div>
                <div className="right-field">
                  <label htmlFor="">Last name</label>
                  <input
                    name="lastname"
                    type="text"
                    placeholder="Doe"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="two-fields">
                <div className="left-field">
                  <label htmlFor="">Phone Number</label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="0697 99 00 11"
                    onChange={handleChange}
                  />
                </div>
                <div className="left-field">
                  <label htmlFor="">City</label>
                  <input
                    name="city"
                    type="text"
                    placeholder="Usa"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="two-fields">
                <div className="left-field">
                  <label htmlFor="">Password</label>
                  <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="right-field">
                  <label htmlFor="">Confirm password</label>
                  <input
                    name="confirm-password"
                    type="password"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <label htmlFor="">Profile Picture</label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />

              <label htmlFor="">Description</label>
              <textarea
                placeholder="A short description of yourself"
                name="desc"
                id=""
                cols="30"
                rows="5"
                onChange={handleChange}
              ></textarea>
              <div className="toggle">
                <label htmlFor="">Activate the rescuer/owner account</label>
                <label className="switch">
                  <input type="checkbox" onChange={handleOwner} />
                  <span className="slider round"></span>
                </label>
              </div>
              <button type="submit">Create my account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
