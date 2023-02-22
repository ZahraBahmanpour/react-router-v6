import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error } = useRouteError();
  return (
    <section className="section">
      <h2>404</h2>
      <p>{error}</p>
      <Link to="/">back home</Link>
    </section>
  );
};
export default Error;
