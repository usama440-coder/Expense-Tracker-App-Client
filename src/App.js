import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar/Navbar.component";
import Login from "./pages/login/login.page";
import Register from "./pages/register/register.page";
import Home from "./pages/home/home.page";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
