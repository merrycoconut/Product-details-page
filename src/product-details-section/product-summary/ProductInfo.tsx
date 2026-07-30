import "./ProductInfo.css";
import { useState } from "react";
import type { ProductData } from "../../utils/productSpecificationContents";

type ProductInfoProps = {
  productData: ProductData;
};

export default function ProductInfo({ productData }: ProductInfoProps) {
  return (
    <div className="product-info-container">
      {productData.info.map((i) => {
        return (
          <ProductInfoItem
            key={i.title as React.Key}
            title={i.title}
            description={i.description}
          />
        );
      })}
    </div>
  );
}

type ProductInfoItemProps = { title: string; description: [] };

function ProductInfoItem({ title, description }: ProductInfoItemProps) {
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
