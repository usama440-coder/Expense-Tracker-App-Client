import "./login.page.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slice/userSlice";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
import SERVER_URL from "../../utils";
axios.defaults.withCredentials = true;
const cookies = new Cookies();

const Login = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = {
    email: inputs.email,
    password: inputs.password,
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${SERVER_URL}/users/login`, data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginImage"></div>
        <div className="loginContent">
          <h2>Get Started</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
            />
            <button type="submit" className="formBtn">
              Login
            </button>
          </form>
          <br />
          <p>
            Do not have an account? <Link to="/register">Register</Link> Instead
          </p>
        </div>
      </div>
      <ToastContainer
        transition={Flip}
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;
