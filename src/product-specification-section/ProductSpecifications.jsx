import "./ProductSpecifications.css";
import ProductTabs from "./ProductTabs";
import { useState } from "react";
import { productSpecificationContents } from "../utils/productSpecificationContents";

export default function ProductSpecifications() {
  const [activeId, setActiveId] = useState(0);

  return (
    <div className="product-specification">
      <div className="product-specification-title">
        <p> {productSpecificationContents.title} </p>
      </div>
      <div className="product-specification-description">
        <p> {productSpecificationContents.description} </p>
      </div>
      <ProductTabs
        activeId={activeId}
        onActiveIdChange={setActiveId}
        tabLists={productSpecificationContents.tabLists}
      />
    </div>
  );
}
