import "./ProductInfo.css";
import { useState } from "react";

export default function ProductInfo({ productData }) {
  return (
    <div className="product-info-container">
      {productData.info.map((i) => {
        return (
          <ProductInfoItem
            key={i.title}
            title={i.title}
            description={i.description}
          />
        );
      })}
    </div>
  );
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

      <ul hidden={isHidden}>
        {description.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </div>
  );
}
