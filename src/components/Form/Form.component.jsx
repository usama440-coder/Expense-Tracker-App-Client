import "./Form.component.css";
import { useDispatch } from "react-redux";
import { fetchExpenses } from "../../redux/slice/expenseSlice";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SERVER_URL from "../../utils";
axios.defaults.withCredentials = true;

const Form = () => {
  const [data, setData] = useState({
    reason: "expense",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${SERVER_URL}/expense`, data, {
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .then(() => dispatch(fetchExpenses()))
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
    <div className="homeForm">
      <form onSubmit={handleSubmit}>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={data.description || ""}
        />
        <label>Reason:</label>
        <select name="reason" onChange={handleChange} value={data.reason || ""}>
          <option value="expense">Expense</option>
          <option value="saving">Saving</option>
        </select>
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          onChange={handleChange}
          value={data.amount || ""}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
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

export default Form;
