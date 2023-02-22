import { Link, useRouteError } from "react-router-dom";

const ProductError = () => {
  const error = useRouteError();
  return (
    <section className="section">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">back home</Link>
    </section>
  );
};
export default ProductError;
