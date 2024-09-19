import { Outlet } from "react-router-dom";
// import Button from "../components/button/button";

const HomePage = () => {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
};

export default HomePage;
