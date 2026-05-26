import "./ProductInfo.css";
import { useState } from "react";

export default function ProductInfo({ productData }) {
  const productInfo = productData.info.map((i) => {
    const description = i.description.map((d) => <li key={d}>{d}</li>);
    return (
      <ProductInfoItem
        key={i.title}
        title={i.title}
        description={description}
      />
    );
  });

  return <div className="product-info-container"> {productInfo} </div>;
}

function ProductInfoItem({ title, description }) {
  const [isHidden, setHidden] = useState(false);

  return (
    <div className="product-info">
      <div className="product-info-head">
        <p>{title}</p>
        <button onClick={() => setHidden(!isHidden)}>
          {isHidden ? "+" : "─"}
        </button>
      </div>

      <ul hidden={isHidden}> {description} </ul>
    </div>
  );
}
