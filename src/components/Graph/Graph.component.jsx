import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function Graph({ amount }) {
  const data = {
    labels: ["saving", "expense"],
    datasets: [
      {
        label: "Summary",
        data: [amount.saving, amount.expense],
        backgroundColor: ["rgba(99, 255, 161, 0.2)", "rgba(235, 54, 111, 0.2)"],
        borderColor: ["rgba(99, 255, 180, 1)", "rgba(235, 54, 111, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
}

export default Graph;
