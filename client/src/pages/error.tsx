import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oops, page not found</h1>
      <p>404</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ErrorPage;
