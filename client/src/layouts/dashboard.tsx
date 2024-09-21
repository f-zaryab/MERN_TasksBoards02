import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from './styles';
import { Box } from "@chakra-ui/react";

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
    <Box sx={styles.dashboardLayout}>
      <nav>SharedNavbar</nav>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>Sidebar</div>
        <div>
          <Outlet />
        </div>
      </div>
    </Box>
  ) : null;
};

export default DashboardLayout;
