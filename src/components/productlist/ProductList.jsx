import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire</h1>
        <p className="pl-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          ipsa voluptatem, maxime nihil voluptas recusandae exercitationem illum
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
