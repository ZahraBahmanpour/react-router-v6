import { Link, useLoaderData } from "react-router-dom";

export const productsLoader = async () => {
  const res = await fetch(
    "https://6300a18859a8760a757d441c.mockapi.io/products"
  );
  const data = await res.json();
  return data.products;
};
const Products = () => {
  const products = useLoaderData();
  return (
    <section className="section">
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
