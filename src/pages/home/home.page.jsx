import "./home.page.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "../../redux/slice/expenseSlice";
import Form from "../../components/Form/Form.component";
import History from "../../components/History/History.component";
import Summary from "../../components/Summary/Summary.component";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.expense);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  return (
    <div className="home">
      {error ? (
        <h2>Not Authorized</h2>
      ) : (
        <>
          <h2>{`Welcome Back`}</h2>
          <br />
          {loading ? (
            <h2>Loading</h2>
          ) : (
            <div className="homeContainer">
              <div className="homeSummary">
                <Summary />
              </div>
              <Form />
              <div className="homeHistory">
                <h2>History</h2>
                {data.data.map((item) => {
                  return <History key={item._id} item={item} />;
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
