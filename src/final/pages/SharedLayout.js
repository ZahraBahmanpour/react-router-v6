import { Link, Outlet } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";
const Home = () => {
  return (
    <>
      <StyledNavbar />
      <BreadCrumbs />
      <Outlet />
    </>
  );
};
export default Home;
