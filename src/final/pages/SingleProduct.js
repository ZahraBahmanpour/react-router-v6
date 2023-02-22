import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(
        "https://6300a18859a8760a757d441c.mockapi.io/products/" +
          params.productId
      );
      const data = await res.json();
      setProduct(data);
    };
    getProduct();
  }, []);

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
