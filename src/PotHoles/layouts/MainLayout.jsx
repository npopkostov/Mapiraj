import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
