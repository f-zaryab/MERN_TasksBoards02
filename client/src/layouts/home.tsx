import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import styles from './styles'

const HomeLayout = () => {
  return (
    <Container sx={styles.mainHomeLayout} id='home-layout'>
      {/* <nav>Home navbar</nav> */}
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default HomeLayout;
