import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const isLoggedIn = true;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoggedIn ? (
    <div>
      <nav>SharedNavbar</nav>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>Sidebar</div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  ) : null;
};

export default DashboardLayout;
