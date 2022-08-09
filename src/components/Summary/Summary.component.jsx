import "./Summary.component.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import Graph from "../Graph/Graph.component";

const Summary = () => {
  const expense = useSelector((state) => state.expense);

  let amount = {
    saving: 0,
    expense: 0,
  };

  for (let i = 0; i < 2; i++) {
    if (!expense.data.stats[i]) break;
    if (expense.data.stats[i]._id === "saving") {
      amount.saving = expense.data.stats[i].total;
    }
    if (expense.data.stats[i]._id === "expense") {
      amount.expense = expense.data.stats[i].total;
    }
  }

  return (
    <div className="summary">
      <div className="summaryContainer">
        <div className="summaryGrpah">
          <Graph amount={amount} />
        </div>
        <div className="summaryContentContainer">
          <div className="summaryContent">
            <div>
              <FaArrowUp style={{ color: "green" }} />
              <span> saving</span>
            </div>
            <h3 style={{ opacity: "0.7" }}>{amount.saving}</h3>
          </div>
          <div className="summaryContent">
            <div>
              <FaArrowDown style={{ color: "red" }} />
              <span> expense</span>
            </div>
            <h3 style={{ opacity: "0.7" }}>{amount.expense}</h3>
          </div>
        </div>
        <div style={{ fontSize: "20px" }}>{`Net: ${
          amount.saving - amount.expense
        }`}</div>
      </div>
    </div>
  );
};

export default Summary;
