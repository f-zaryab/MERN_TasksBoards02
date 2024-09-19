import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>Home navbar</nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
