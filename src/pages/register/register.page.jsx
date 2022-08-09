import "./register.page.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SERVER_URL from "../../utils";

const Register = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const options = {
    method: "POST",
    url: `${SERVER_URL}/users/register`,
    data: { name: inputs.name, email: inputs.email, password: inputs.password },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.password === inputs.confirmPassword) {
      axios
        .request(options)
        .then((res) => {
          toast.success("User successfully registered!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {
          console.log(err);
          // toast.error(err.response.data.message, {
          //   position: "top-center",
          //   autoClose: 2000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
        });
    } else {
      toast.warn("Password do not match", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginImage"></div>
        <div className="loginContent">
          <h2>Get Started</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={inputs.confirmPassword || ""}
              onChange={handleChange}
            />
            <button type="submit" className="formBtn">
              Register
            </button>
          </form>
          <br />
          <p>
            Already have an account? <Link to="/">Login</Link> Instead
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

export default Register;
