import "./History.component.css";
import { useDispatch } from "react-redux";
import { fetchExpenses } from "../../redux/slice/expenseSlice";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import SERVER_URL from "../../utils";
axios.defaults.withCredentials = true;

const History = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    axios
      .delete(`${SERVER_URL}/expense/${id}`, {
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .then(() => dispatch(fetchExpenses()))
      .catch((err) => console.log(err));
  };
  return (
    <div className="history">
      <div className="historyContainer">
        <p className="desc">{item.description}</p>
        <p className="amount">{item.amount}</p>
        <p className={`reason ${item.reason}`}>{item.reason}</p>
        <p className="date">{item.createdAt.split(".")[0]}</p>
        <FaTrash className="trashIcon" onClick={() => handleDelete(item._id)} />
      </div>
    </div>
  );
};

export default History;
