const styles = {
  mainHomeLayout: {
    width: "100%",
    maxWidth: '100%',
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  authForm: {
    borderRadius: "0.50rem",
    width: "100%",
    minWidth: "30rem",
    height: "100%",
    backgroundColor: "#fff",
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',

    '& > h1': {
        fontSize: '2rem'
    }
  },

  dashboardLayout: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(45deg, hsla(312, 77%, 86%, 1) 26%, hsla(220, 61%, 79%, 1) 77%)'
   
  }
};

export default styles;
