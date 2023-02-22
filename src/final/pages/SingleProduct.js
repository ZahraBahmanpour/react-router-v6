import { Link, useLoaderData } from "react-router-dom";

export const productLoader = async ({ params }) => {
  const res = await fetch(
    "https://6300a18859a8760a757d441c.mockapi.io/products/" + params.productId
  );
  if (!res.ok) {
    throw new Error("Product Not Found");
  }
  const data = await res.json();
  return data;
};

const SingleProduct = () => {
  const product = useLoaderData();
  const { name, description } = product;
  return (
    <section className="section product">
      <h5>{name}</h5>
      <p>{description}</p>
      <Link to="/products">back to products</Link>
    </section>
  );
};

export default SingleProduct;
