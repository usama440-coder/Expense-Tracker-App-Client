import "./Navbar.component.css";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../redux/slice/userSlice";
import SERVER_URL from "../../utils";
axios.defaults.withCredentials = true;

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    axios
      .get(`${SERVER_URL}/users/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        dispatch(clearUser());
      })
      .then(navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar">
      <h2>Expense Tracker App</h2>
      {user.name !== "" ? (
        <FaSignOutAlt onClick={() => handleClick()} className="signoutBtn" />
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Navbar;
