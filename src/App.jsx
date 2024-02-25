import { useEffect } from "react";
import { AppRoutes } from "../src/routes/Routes";
import { Header } from "../src/components/Header/Header";
import { fetchCars } from "../src/redux/carsOperations";
import { useDispatch } from "react-redux";

import "./App.css";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCars());
    }, 1000);
  }, [dispatch]);

  return (
    <div>
      <div className="Container">
        <Header />
      </div>
      <AppRoutes />
    </div>
  );
};
